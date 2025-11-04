import { ProductCard } from "@/components/shared/ProductShowcaseCard";
interface Product {
  id: string;
  title: string;
  image: string;
  link: string;
}
const products: Product[] = [
  {
    id: "1",
    title: "HEADPHONES",
    image: "/images/home/headphones.png",
    link: "/headphones",
  },
  {
    id: "2",
    title: "SPEAKERS",
    image: "/images/home/speaker.png",
    link: "/speakers",
  },
  {
    id: "3",
    title: "EARPHONES",
    image: "/images/home/earphones.png",
    link: "/earphones",
  },
];

export const AudioProductsSection: React.FC = () => {
  return (
    <section className="px-6 py-16 md:px-10">
      <div className="mx-auto max-w-277.5">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};
