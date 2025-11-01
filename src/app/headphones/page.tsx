import HeroSection from "@/components/pages/headphones/HeroSection";
import SecondProduct from "@/components/pages/headphones/SecondProduct";
import ThirdProduct from "@/components/pages/headphones/ThirdProduct";
import TopProduct from "@/components/pages/headphones/TopProduct";
import { AudioProductsSection } from "@/components/pages/home/ProductShowCase";

export default function Page() {
  return (
    <>
      <HeroSection />
      <TopProduct />
      <SecondProduct />
      <ThirdProduct />
      <AudioProductsSection />
    </>
  );
}
