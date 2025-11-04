import { z } from "zod";

// ProductImageSet
const productImageSetSchema = z.object({
  mobile: z.string(),
  tablet: z.string(),
  desktop: z.string(),
});

// ProductInclude
const productIncludeSchema = z.object({
  quantity: z.number(),
  item: z.string(),
});

// ProductGallery
const productGallerySchema = z.object({
  first: productImageSetSchema,
  second: productImageSetSchema,
  third: productImageSetSchema,
});

// ProductOther
const productOtherSchema = z.object({
  slug: z.string(),
  name: z.string(),
  image: productImageSetSchema,
});

// ✅ CartItemSchema (extends Product + quantity)
export const cartItemSchema = z.object({
  _id: z.union([z.string(), z.number()]),
  slug: z.string(),
  name: z.string(),
  image: productImageSetSchema,
  category: z.string(),
  categoryImage: productImageSetSchema,
  new: z.boolean(),
  price: z.number(),
  description: z.string(),
  features: z.string(),
  includes: z.array(productIncludeSchema),
  gallery: productGallerySchema,
  others: z.array(productOtherSchema),
  quantity: z.number().min(1),
});
