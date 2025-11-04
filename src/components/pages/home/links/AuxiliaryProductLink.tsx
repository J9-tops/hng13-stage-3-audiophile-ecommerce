"use client";
import { useQuery } from "convex/react";
import Link from "next/link";
import { api } from "../../../../../convex/_generated/api";

export default function AuxiliaryProductLink() {
  const earphones = useQuery(api.products.getByCategory, {
    category: "earphones",
  });

  if (!earphones) return null;

  const topProduct = earphones.find((p) => p.new === true);

  return (
    <Link
      href={`/speakers/${topProduct?.slug}`}
      className="w-fit transform cursor-pointer border-2 border-black bg-transparent px-8 py-4 font-semibold tracking-wider text-black transition-all duration-300 hover:bg-black hover:text-white"
    >
      SEE PRODUCT
    </Link>
  );
}
