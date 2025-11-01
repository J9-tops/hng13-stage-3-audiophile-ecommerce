import { AudioProductsSection } from "@/components/pages/home/ProductShowCase";
import HeroSection from "@/components/pages/speakers/HeroSection";
import SecondProduct from "@/components/pages/speakers/SecondProduct";
import TopProduct from "@/components/pages/speakers/TopProduct";

export default function Page() {
  return (
    <>
      <HeroSection />
      <TopProduct />
      <SecondProduct />
      <AudioProductsSection />
    </>
  );
}
