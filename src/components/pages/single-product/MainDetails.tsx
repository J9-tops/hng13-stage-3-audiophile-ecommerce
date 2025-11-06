import { Product } from "@/types";
import Image from "next/image";
import CartButtons from "./CartButtons";
import GoBack from "./GoBack";

export default function MainDetails({ product }: { product: Product }) {
  return (
    <section className="mb-20 px-6 py-16 md:px-10 lg:px-0">
      <div className="mx-auto max-w-277.5 lg:min-h-100">
        <GoBack />
        <div className="mt-10 grid grid-cols-1 items-center gap-8 text-left md:grid-cols-2">
          <div className="flex h-full justify-center rounded-lg bg-[#F1F1F1] p-10 lg:h-120 lg:w-9/10">
            <Image
              src={product?.image?.desktop || "/images/headphones/sample.png"}
              alt={product?.name || "XX99 Mark II Headphones"}
              width={250}
              height={250}
              className="scale-105 object-cover"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4 md:text-left">
            {product?.new && (
              <p className="text-sm font-normal tracking-[0.5em] text-[#D87D4A]">
                NEW PRODUCT
              </p>
            )}

            <h1 className="text-4xl leading-tight font-bold text-black uppercase lg:max-w-sm">
              {product.name}
            </h1>

            <p className="mx-0 max-w-sm text-sm leading-relaxed text-gray-500 sm:mx-auto md:max-w-lg lg:mx-0 lg:max-w-lg lg:text-lg">
              {product?.features.split(".").slice(0, 2).join(".") + "."}
            </p>

            <p className="text-base font-bold">
              $ {product?.price.toLocaleString()}
            </p>

            <CartButtons product={product} />
          </div>
        </div>
      </div>
    </section>
  );
}
