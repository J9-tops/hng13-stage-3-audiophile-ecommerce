import Image from "next/image";

export default function CompanyNote() {
  return (
    <section className="relative my-16 mb-10 min-h-[500px] w-full overflow-hidden md:min-h-[600px] lg:mb-20">
      <div className="container mx-auto max-w-277.5 px-6 md:px-12 md:py-20 lg:px-0">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="my-auto max-w-xl space-y-6">
            <h2 className="text-4xl font-bold tracking-tight md:text-5xl">
              BRINGING YOU THE <span className="text-orange-500">BEST</span>{" "}
              AUDIO GEAR
            </h2>
            <p className="text-base leading-relaxed text-black/50 md:text-lg">
              Located at the heart of New York City, Audiophile is the premier
              store for high end headphones, earphones, speakers, and audio
              accessories. We have a large showroom and luxury demonstration
              rooms available for you to browse and experience a wide range of
              our products. Stop by our store to meet some of the fantastic
              people who make Audiophile the best place to buy your portable
              audio equipment.
            </p>
          </div>

          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="/images/home/man.png"
              width={540}
              height={588}
              alt="man listening to music with xyz headphones"
              className="h-full w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
