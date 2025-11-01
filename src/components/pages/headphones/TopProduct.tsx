import Image from "next/image";

export default function TopProduct() {
  return (
    <section className="mb-20 px-6 py-16 md:px-12 lg:px-0">
      <div className="mx-auto max-w-277.5 lg:min-h-100">
        <div className="grid grid-cols-1 items-center gap-8 text-center lg:grid-cols-2 lg:text-left">
          <div className="flex h-full justify-center rounded-lg bg-[#F1F1F1] p-10 lg:h-100 lg:w-9/10">
            <Image
              src="/images/headphones/sample.png"
              alt="XX99 Mark II Headphones"
              width={250}
              height={250}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <p className="text-sm font-normal tracking-[0.5em] text-[#D87D4A]">
              NEW PRODUCT
            </p>

            <h1 className="text-4xl leading-tight font-bold text-black">
              XX99 MARK II
              <br />
              HEADPHONES
            </h1>

            <p className="mx-auto max-w-sm text-sm leading-relaxed text-gray-500 md:max-w-lg lg:mx-0 lg:max-w-sm">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>

            <div className="pt-4">
              <button className="bg-[#D87D4A] px-8 py-4 text-sm font-bold tracking-wider text-white transition-colors duration-300 hover:bg-[#FBAF85]">
                SEE PRODUCT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
