import { Product } from "@/types";

export default function Features({ product }: { product: Product }) {
  return (
    <section className="px-6 py-20 text-white md:px-10 lg:px-0">
      <div className="mx-auto max-w-277.5">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          <div>
            <h2 className="mb-8 text-3xl leading-tight font-bold text-black md:text-4xl">
              FEATURES
            </h2>

            <div className="space-y-6 leading-relaxed text-gray-600">
              <p>{product.features}</p>
            </div>
          </div>

          <div className="flex flex-col gap-6 md:flex-row md:gap-30 lg:flex-col lg:gap-0">
            <h2 className="mb-8 text-4xl leading-tight font-bold text-black">
              IN THE BOX
            </h2>

            <div className="space-y-4">
              {product.includes.map((include, index) => (
                <div key={index} className="flex items-start gap-6">
                  <span className="min-w-12 text-lg font-bold text-[#D87D4A]">
                    {include.quantity}x
                  </span>
                  <span className="text-lg text-gray-600">{include.item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
