import { AudioProductsSection } from "@/components/pages/home/ProductShowCase";
import MainPage from "@/components/pages/single-product/MainPage";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;

  const title = slug
    .split("-")
    .map((word) => word.toUpperCase())
    .join(" ");

  return {
    title: `${title} | Audiophile Stores`,
    description: `Shop ${title} at Audiophile Stores`,
  };
}

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
