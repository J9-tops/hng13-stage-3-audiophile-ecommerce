import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#141414] px-6 py-16 md:py-20 lg:py-0">
      <div className="relative mx-auto flex w-full max-w-277.5 items-center justify-center lg:justify-between">
        <div className="absolute inset-0 flex items-center justify-center lg:relative lg:order-2 lg:w-1/2">
          <div className="relative aspect-square w-full max-w-md lg:max-w-lg">
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <Image
                width={500}
                height={500}
                src="/assets/headphones.png"
                alt="XX99 Mark II Headphones"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </div>

        <div className="relative z-10 text-center lg:order-1 lg:w-1/2 lg:pr-12 lg:text-left">
          <p className="mb-6 text-xs tracking-[0.5em] text-[#898989] uppercase md:text-sm">
            New Product
          </p>

          <h1 className="mb-6 text-4xl leading-tight font-bold text-white md:text-5xl lg:text-6xl">
            XX99 MARK II
            <br />
            HEADPHONES
          </h1>

          <p className="mx-auto mb-8 max-w-md text-base leading-relaxed text-[#C4C4C4] md:text-lg lg:mx-0">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>

          <Link
            href="/headphones/xx99-mark-two-headphones"
            className="cursor-pointer bg-[#D87D4A] px-8 py-4 text-sm font-semibold tracking-wider text-white uppercase transition-colors duration-300 hover:bg-orange-600"
          >
            See Product
          </Link>
        </div>
      </div>
    </section>
  );
}
