import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Product {
  id: string;
  title: string;
  image: string;
  link: string;
}

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative rounded-lg bg-transparent pt-27 transition-shadow duration-300">
      <div className="absolute top-7 flex w-full justify-center">
        <Image
          src={product.image}
          alt={product.title}
          width={130}
          height={160}
          className="object-cover"
        />
        <Image
          src="/images/home/blur.png"
          alt=""
          width={130}
          height={160}
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 object-cover opacity-60"
        />
      </div>

      <div className="rounded-lg bg-[#F1F1F1] p-6 pt-31 text-center shadow-sm">
        <h3 className="mb-3.5 text-base font-bold tracking-wide md:text-xl">
          {product.title}
        </h3>

        <Link
          href={product.link}
          className="inline-flex items-center gap-2 font-medium text-black/50 transition-colors duration-200 hover:text-[#D87D4A]"
        >
          <span>SHOP</span>
          <ChevronRight className="h-5 w-5 text-[#D87D4A] transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
