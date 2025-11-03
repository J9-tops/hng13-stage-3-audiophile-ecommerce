"use client";

import { useQuery } from "convex/react";
import Image from "next/image";
import Link from "next/link";
import { api } from "../../../../convex/_generated/api";

export default function SecondProduct() {
  const speakers = useQuery(api.products.getByCategory, {
    category: "speakers",
  });

  if (!speakers) {
    return (
      <section className="mb-20 px-6 py-16 md:px-12 lg:px-0">
        <div className="mx-auto max-w-277.5 lg:min-h-100">
          <div className="flex transform grid-cols-1 flex-col-reverse items-center gap-8 text-center lg:grid lg:grid-cols-2 lg:text-left">
            <div className="flex flex-col justify-center space-y-4">
              <h1 className="text-4xl leading-tight font-bold text-black">
                ZX7
                <br />
                SPEAKER
              </h1>

              <p className="mx-auto max-w-sm text-sm leading-relaxed text-gray-500 md:max-w-lg lg:mx-0 lg:max-w-sm">
                Stream high quality sound wirelessly with minimal loss. The ZX7
                bookshelf speaker uses high-end audiophile components that
                represents the top of the line powered speakers for home or
                studio use.
              </p>

              <div className="pt-4">
                <button className="bg-[#D87D4A] px-8 py-4 text-sm font-bold tracking-wider text-white transition-colors duration-300 hover:bg-[#FBAF85]">
                  SEE PRODUCT
                </button>
              </div>
            </div>

            <div className="flex h-full w-full justify-center rounded-lg bg-[#F1F1F1] p-10 lg:h-100 lg:w-9/10">
              <Image
                src="/images/speakers/sample-2.png"
                alt="ZX7 SPEAKER"
                width={250}
                height={250}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  const products = speakers.filter((p) => !p.new);
  const secondProduct = products[0];
  return (
    <section className="mb-20 px-6 py-16 md:px-12 lg:px-0">
      <div className="mx-auto max-w-277.5 lg:min-h-100">
        <div className="flex transform grid-cols-1 flex-col-reverse items-center gap-8 text-center lg:grid lg:grid-cols-2 lg:text-left">
          <div className="flex flex-col justify-center space-y-4">
            <h2 className="text-4xl leading-tight font-bold text-black">
              {secondProduct?.name}
            </h2>

            <p className="mx-auto max-w-sm text-sm leading-relaxed text-gray-500 md:max-w-lg lg:mx-0 lg:max-w-sm">
              {secondProduct?.features.split(".").slice(0, 2).join(".") + "."}
            </p>

            <div className="pt-4">
              <Link
                href={`/speakers/${secondProduct?.slug}`}
                className="bg-[#D87D4A] px-8 py-4 text-sm font-bold tracking-wider text-white transition-colors duration-300 hover:bg-[#FBAF85]"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>

          <div className="flex h-full w-full justify-center rounded-lg bg-[#F1F1F1] p-10 lg:h-100 lg:w-9/10">
            <Image
              src={
                secondProduct?.image?.desktop || "/images/speakers/sample-2.png"
              }
              alt={secondProduct?.name || "ZX7 SPEAKER"}
              width={250}
              height={250}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
