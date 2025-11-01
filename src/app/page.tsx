import AuxilliaryProduct from "@/components/pages/home/AuxilliaryProduct";
import HeroSection from "@/components/pages/home/HeroSection";
import MainProduct from "@/components/pages/home/MainProduct";
import { AudioProductsSection } from "@/components/pages/home/ProductShowCase";
import SecondaryProduct from "@/components/pages/home/SecondaryProduct";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <AudioProductsSection />
      <MainProduct />
      <SecondaryProduct />
      <AuxilliaryProduct />
    </div>
  );
}
