import { AudioProductsSection } from "@/components/pages/home/ProductShowCase";
import Features from "@/components/pages/speakers/single-product/Features";
import ImageGallery from "@/components/pages/speakers/single-product/ImageGallery";
import MainDetails from "@/components/pages/speakers/single-product/MainDetails";

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
