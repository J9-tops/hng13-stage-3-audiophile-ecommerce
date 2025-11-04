"use client";

import { useQuery } from "convex/react";
import Link from "next/link";
import { api } from "../../../../../convex/_generated/api";

export default function MainProductLink() {
  const allProducts = useQuery(api.products.getByCategory, {
    category: "speakers",
  });

  if (!allProducts) return null;

  const mainProduct = allProducts?.find((p) => p.new === true);

  return (
    <Link
      href={`/speakers/${mainProduct?.slug}`}
      className="transform cursor-pointer bg-black px-8 py-4 font-semibold tracking-wider text-white transition-all duration-300 hover:scale-105 hover:bg-[#4C4C4C]"
    >
      SEE PRODUCT
    </Link>
  );
}
