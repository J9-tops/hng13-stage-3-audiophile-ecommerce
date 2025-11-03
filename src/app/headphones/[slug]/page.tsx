import { AudioProductsSection } from "@/components/pages/home/ProductShowCase";
import MainPage from "@/components/pages/single-product/MainPage";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <>
      <MainPage slug={slug} />
      <AudioProductsSection />
    </>
  );
}
