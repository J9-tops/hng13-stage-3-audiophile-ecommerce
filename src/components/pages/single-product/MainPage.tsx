"use client";

import Features from "@/components/pages/single-product/Features";
import ImageGallery from "@/components/pages/single-product/ImageGallery";
import MainDetails from "@/components/pages/single-product/MainDetails";
import { useQuery } from "convex/react";
import { useMemo } from "react";
import { api } from "../../../../convex/_generated/api";
import ProductRecommendations from "./OtherProducts";

type Props = {
  slug: string;
};

const randomNum = Math.random();

export default function MainPage({ slug }: Props) {
  const product = useQuery(api.products.getBySlug, { slug });
  const allProducts = useQuery(api.products.getAll);

  const randomThree = useMemo(() => {
    if (!allProducts || !product) return [];
    return [...allProducts]
      .filter((p) => p._id !== product._id)
      .sort(() => randomNum - 0.5)
      .slice(0, 3);
  }, [allProducts, product]);

  if (!product) return null;

  return (
    <>
      <MainDetails product={product} />
      <Features product={product} />
      <ImageGallery product={product} />
      <ProductRecommendations products={randomThree} />
    </>
  );
}
