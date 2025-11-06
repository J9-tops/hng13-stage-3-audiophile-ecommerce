"use client";
import { useQuery } from "convex/react";
import Image from "next/image";
import Link from "next/link";
import { api } from "../../../../convex/_generated/api";

export default function TopProduct() {
  const earphones = useQuery(api.products.getByCategory, {
    category: "earphones",
  });

  if (!earphones) {
    return (
      <section className="mt-10 px-6 py-16 md:px-12 lg:px-0">
        <div className="mx-auto max-w-277.5 lg:min-h-100">
          <div className="grid grid-cols-1 items-center gap-8 text-center lg:grid-cols-2 lg:text-left">
            <div className="flex h-full justify-center rounded-lg bg-[#F1F1F1] p-10 lg:h-100 lg:w-9/10">
              <Image
                src="/images/earphones/sample.png"
                alt="YX1 WIRELESS EARPHONES"
                width={250}
                height={250}
                className="object-contain"
              />
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <p className="text-sm font-normal tracking-[0.5em] text-[#D87D4A]">
                NEW PRODUCT
              </p>

              <h1 className="text-4xl leading-tight font-bold text-black">
                YX1 WIRELESS
                <br />
                EARPHONES
              </h1>

              <p className="mx-auto max-w-sm text-sm leading-relaxed text-gray-500 md:max-w-lg lg:mx-0 lg:max-w-sm">
                Tailor your listening experience with bespoke dynamic drivers
                from the new YX1 Wireless Earphones. Enjoy incredible
                high-fidelity sound even in noisy environments with its active
                noise cancellation feature.
              </p>

              <div className="pt-4">
                <button className="bg-[#D87D4A] px-8 py-4 text-sm font-bold tracking-wider text-white transition-colors duration-300 hover:bg-[#FBAF85]">
                  SEE PRODUCT
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  const topProduct = earphones.find((p) => p.new === true);

  return (
    <section className="mt-10 px-6 py-16 md:px-12 lg:px-0">
      <div className="mx-auto max-w-277.5 lg:min-h-100">
        <div className="grid grid-cols-1 items-center gap-8 text-center lg:grid-cols-2 lg:text-left">
          <div className="flex h-full justify-center rounded-lg bg-[#F1F1F1] p-10 lg:h-100 lg:w-9/10">
            <Image
              src={topProduct?.image?.desktop || "/images/earphones/sample.png"}
              alt={topProduct?.name || "YX1 WIRELESS EARPHONES"}
              width={250}
              height={250}
              className="scale-105 object-cover"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <p className="text-sm font-normal tracking-[0.5em] text-[#D87D4A]">
              NEW PRODUCT
            </p>

            <h2 className="text-4xl leading-tight font-bold text-black">
              {topProduct?.name}
            </h2>

            <p className="mx-auto max-w-sm text-sm leading-relaxed text-gray-500 md:max-w-lg lg:mx-0 lg:max-w-md">
              {topProduct?.features.split(".").slice(0, 2).join(".") + "."}
            </p>

            <div className="pt-4">
              <Link
                href={`/headphones/${topProduct?.slug}`}
                className="cursor-pointer bg-[#D87D4A] px-8 py-4 text-sm font-bold tracking-wider text-white transition-colors duration-300 hover:bg-[#FBAF85]"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
