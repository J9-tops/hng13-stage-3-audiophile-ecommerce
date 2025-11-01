import Features from "@/components/pages/headphones/single-product/Features";
import ImageGallery from "@/components/pages/headphones/single-product/ImageGallery";
import MainDetails from "@/components/pages/headphones/single-product/MainDetails";
import { AudioProductsSection } from "@/components/pages/home/ProductShowCase";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return (
    <>
      <MainDetails slug={slug} />
      <Features />
      <ImageGallery />
      <AudioProductsSection />
    </>
  );
}
