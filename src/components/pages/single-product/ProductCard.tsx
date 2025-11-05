import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className="flex flex-col items-center">
      <div className="mb-8 flex aspect-square w-full items-center justify-center overflow-hidden rounded-lg bg-[#F1F1F1]">
        <div className="flex items-center justify-center">
          <Image
            src={
              typeof product.image === "string"
                ? product.image
                : product.image.desktop || "/images/headphones/sample-2.png"
            }
            alt={product.name}
            width={150}
            height={200}
            className="size-full"
          />
        </div>
      </div>
      <h3 className="mb-8 text-center text-2xl font-bold tracking-wider">
        {product.name}
      </h3>
      <Link
        href={`/${product.category}/${product.slug}`}
        className="bg-[#D87D4A] px-8 py-4 font-bold tracking-wider text-white transition-colors duration-200 hover:bg-[#FBAF85]"
      >
        SEE PRODUCT
      </Link>
    </div>
  );
};
