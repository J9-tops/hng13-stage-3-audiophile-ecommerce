"use client";

import Features from "@/components/pages/single-product/Features";
import ImageGallery from "@/components/pages/single-product/ImageGallery";
import MainDetails from "@/components/pages/single-product/MainDetails";
import { useQuery } from "convex/react";
import { api } from "../../../../convex/_generated/api";
type Props = {
  slug: string;
};
export default function MainPage({ slug }: Props) {
  const product = useQuery(api.products.getBySlug, {
    slug,
  });

  if (!product) return null;

  return (
    <>
      <MainDetails product={product} />
      <Features product={product} />
      <ImageGallery product={product} />
    </>
  );
}
