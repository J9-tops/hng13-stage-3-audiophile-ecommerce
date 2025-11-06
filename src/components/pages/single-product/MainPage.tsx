"use client";

import Features from "@/components/pages/single-product/Features";
import ImageGallery from "@/components/pages/single-product/ImageGallery";
import MainDetails from "@/components/pages/single-product/MainDetails";
import { useQuery } from "convex/react";
import { useMemo } from "react";
import { api } from "../../../../convex/_generated/api";
import GoBack from "./GoBack";
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

  if (!product)
    return (
      <section className="mb-20 px-6 py-16 md:px-10 lg:px-0">
        <div className="mx-auto max-w-277.5 lg:min-h-100">
          <GoBack />
          <div className="mt-10 grid grid-cols-1 items-center gap-8 text-left md:grid-cols-2">
            <div className="flex h-full items-center justify-center rounded-lg bg-[#F1F1F1] p-10 lg:h-120 lg:w-9/10">
              <div className="h-65 w-65 animate-pulse rounded-lg bg-gray-300" />
            </div>

            <div className="flex flex-col justify-center space-y-4 md:text-left">
              <div className="h-4 w-32 animate-pulse rounded bg-gray-200" />

              <div className="space-y-2">
                <div className="h-9 w-full animate-pulse rounded bg-gray-200 lg:max-w-sm" />
              </div>

              <div className="mx-0 max-w-sm space-y-2 md:max-w-lg lg:mx-0 lg:max-w-lg">
                <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-full animate-pulse rounded bg-gray-200" />
                <div className="h-4 w-2/3 animate-pulse rounded bg-gray-200" />
              </div>

              <div className="h-6 w-24 animate-pulse rounded bg-gray-200" />

              <div className="flex items-center gap-4">
                <div className="h-12 w-32 animate-pulse rounded bg-gray-200" />
                <div className="h-12 w-40 animate-pulse rounded bg-gray-200" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );

  return (
    <>
      <MainDetails product={product} />
      <Features product={product} />
      <ImageGallery product={product} />
      <ProductRecommendations products={randomThree} />
    </>
  );
}
