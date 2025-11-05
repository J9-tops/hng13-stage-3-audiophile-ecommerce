import { Product } from "@/types";
import Image from "next/image";

export default function ImageGallery({ product }: { product: Product }) {
  return (
    <section className="px-6 py-20 text-white md:px-10 lg:px-0">
      <div className="mx-auto max-w-277.5">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <div className="group relative h-80 overflow-hidden rounded-lg bg-gray-900">
              <Image
                src={
                  product?.gallery?.first?.desktop ||
                  "/images/headphones/tt.png"
                }
                width={440}
                height={250}
                alt={product?.name || "Person listening with headphones"}
                className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="group relative h-80 overflow-hidden rounded-lg bg-gray-900">
              <Image
                src={
                  product?.gallery?.second?.desktop ||
                  "/images/headphones/bt.png"
                }
                width={440}
                height={250}
                alt={product?.name || "Person listening with headphones"}
                className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="group relative h-full min-h-168 overflow-hidden rounded-lg bg-gray-900">
            <Image
              src={
                product?.gallery?.third?.desktop ||
                "/images/headphones/left.png"
              }
              width={635}
              height={592}
              alt={product?.name || "Person listening with headphones"}
              className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
