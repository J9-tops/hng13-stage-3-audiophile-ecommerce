import { productsData } from "../src/data/products";
import { internalMutation } from "./_generated/server";

export const runSeed = internalMutation({
  handler: async (ctx) => {
    for (const product of productsData) {
      const { ...productData } = product;

      await ctx.db.insert("products", productData);
    }

    return { success: true, count: productsData.length };
  },
});
