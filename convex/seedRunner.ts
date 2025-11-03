import data from "../public/products.json";
import { internalMutation } from "./_generated/server";

export const runSeed = internalMutation({
  handler: async (ctx) => {
    for (const product of data.data) {
      const { ...productData } = product;

      await ctx.db.insert("products", productData);
    }

    return { success: true, count: data.data.length };
  },
});
