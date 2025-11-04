"use client";
import { useQuery } from "convex/react";
import Link from "next/link";
import { api } from "../../../../../convex/_generated/api";

export default function SecondaryProductLink() {
  const speakers = useQuery(api.products.getByCategory, {
    category: "speakers",
  });

  if (!speakers) return null;

  const products = speakers.filter((p) => !p.new);
  const secondaryProduct = products[0];

  return (
    <Link
      href={`/speakers/${secondaryProduct?.slug}`}
      className="transform cursor-pointer border-2 border-black bg-transparent px-8 py-4 font-semibold tracking-wider text-black transition-all duration-300 hover:bg-black hover:text-white"
    >
      SEE PRODUCT
    </Link>
  );
}
