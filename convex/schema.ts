import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  products: defineTable({
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
  })
    .index("by_slug", ["slug"])
    .index("by_category", ["category"]),

  orders: defineTable({
    orderNumber: v.string(),
    orderDate: v.string(),

    customerName: v.string(),
    customerEmail: v.string(),
    customerPhone: v.string(),

    shippingAddress: v.object({
      address: v.string(),
      city: v.string(),
      zipCode: v.string(),
      country: v.string(),
    }),

    paymentMethod: v.union(v.literal("e-money"), v.literal("cash-on-delivery")),
    eMoneyNumber: v.optional(v.string()),
    eMoneyPIN: v.optional(v.string()),

    items: v.array(
      v.object({
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        image: v.optional(v.string()),
      }),
    ),

    subtotal: v.number(),
    shipping: v.number(),
    vat: v.number(),
    total: v.number(),

    status: v.union(
      v.literal("pending"),
      v.literal("processing"),
      v.literal("shipped"),
      v.literal("delivered"),
      v.literal("cancelled"),
    ),

    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_order_number", ["orderNumber"])
    .index("by_customer_email", ["customerEmail"])
    .index("by_status", ["status"])
    .index("by_created_at", ["createdAt"]),
});
