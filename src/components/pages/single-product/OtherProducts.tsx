import { Product } from "@/types";
import { ProductCard } from "./ProductCard";

type Props = {
  products: Product[];
};

export default function ProductRecommendations({ products }: Props) {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 py-16 md:py-20">
      <h2 className="mb-12 text-center text-2xl font-bold tracking-wide md:mb-16 md:text-3xl">
        YOU MAY ALSO LIKE
      </h2>

      <div className="mx-auto grid max-w-277.5 grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 lg:gap-12">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}
