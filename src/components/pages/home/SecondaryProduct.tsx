import Image from "next/image";

export default function SecondaryProduct() {
  return (
    <section className="mb-10 w-full overflow-hidden px-6">
      <div className="relative mx-auto flex h-100 max-w-277.5 items-center overflow-hidden rounded-lg bg-[#DEDEDE] lg:max-h-80">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          <div className="absolute top-1/2 left-8 z-2 max-w-xl -translate-y-1/2 lg:left-20">
            <h2 className="mb-8 text-2xl font-bold tracking-tight text-black md:text-4xl">
              ZX7 SPEAKER
            </h2>
            <button className="transform cursor-pointer border-2 border-black bg-transparent px-8 py-4 font-semibold tracking-wider text-black transition-all duration-300 hover:bg-black hover:text-white">
              SEE PRODUCT
            </button>
          </div>
        </div>

        <Image
          width={1110}
          height={500}
          src="/images/home/bitmap.png"
          alt="ZX7 SPEAKER"
          className="z-1 h-full w-full object-cover lg:absolute"
        />
      </div>
    </section>
  );
}
