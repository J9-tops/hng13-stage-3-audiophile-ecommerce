import { v } from "convex/values";
import { productsData } from "./../src/data/products";
import { mutation, query } from "./_generated/server";

// Query to get all products
export const getAll = query({
  handler: async (ctx) => {
    return await ctx.db.query("products").collect();
  },
});

// Query to get product by slug
export const getBySlug = query({
  args: { slug: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("products")
      .withIndex("by_slug", (q) => q.eq("slug", args.slug))
      .first();
  },
});

// Query to get products by category
export const getByCategory = query({
  args: { category: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("products")
      .withIndex("by_category", (q) => q.eq("category", args.category))
      .collect();
  },
});

export const create = mutation({
  args: {
    slug: v.string(),
    name: v.string(),
    image: v.object({
      mobile: v.string(),
      tablet: v.string(),
      desktop: v.string(),
    }),
    category: v.string(),
    categoryImage: v.object({
      mobile: v.string(),
      tablet: v.string(),
      desktop: v.string(),
    }),
    new: v.boolean(),
    price: v.number(),
    description: v.string(),
    features: v.string(),
    includes: v.array(
      v.object({
        quantity: v.number(),
        item: v.string(),
      }),
    ),
    gallery: v.object({
      first: v.object({
        mobile: v.string(),
        tablet: v.string(),
        desktop: v.string(),
      }),
      second: v.object({
        mobile: v.string(),
        tablet: v.string(),
        desktop: v.string(),
      }),
      third: v.object({
        mobile: v.string(),
        tablet: v.string(),
        desktop: v.string(),
      }),
    }),
    others: v.array(
      v.object({
        slug: v.string(),
        name: v.string(),
        image: v.object({
          mobile: v.string(),
          tablet: v.string(),
          desktop: v.string(),
        }),
      }),
    ),
  },
  handler: async (ctx, args) => {
    const productId = await ctx.db.insert("products", args);
    return productId;
  },
});

export const seedProducts = mutation({
  handler: async (ctx) => {
    // Delete all existing products first
    const existingProducts = await ctx.db.query("products").collect();
    for (const product of existingProducts) {
      await ctx.db.delete(product._id);
    }

    // Insert cleaned products (remove "id" field)
    for (const product of productsData) {
      const { ...productWithoutId } = product; // ✅ FIXED
      await ctx.db.insert("products", productWithoutId);
    }

    return { success: true, count: productsData.length };
  },
});
