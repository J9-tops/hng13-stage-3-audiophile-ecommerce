import Image from "next/image";

export default function MainProduct() {
  return (
    <section className="relative mb-10 w-full overflow-hidden px-6">
      <div className="mx-auto max-w-277.5 rounded-lg bg-[#D87D4A] lg:h-[600px]">
        <div className="relative container mx-auto h-full px-6 py-10 md:px-12 lg:px-20 lg:pb-0">
          <div className="relative grid h-full grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div className="mb-6 flex items-center justify-center md:mb-10 lg:mb-0">
              <Image
                width={410}
                height={500}
                src="/images/home/speaker-show.png"
                alt="ZX9 SPEAKER"
                className="-bottom-1 z-2 max-h-60 object-contain lg:absolute lg:max-h-110"
              />
            </div>

            <div className="space-y-6 text-center text-white lg:mt-22 lg:ml-12 lg:text-left">
              <h2 className="text-3xl font-bold tracking-tight md:text-6xl lg:text-5xl">
                ZX9
                <br />
                SPEAKER
              </h2>
              <p className="mx-auto max-w-sm text-center text-lg leading-relaxed font-normal text-white/90 lg:mx-0 lg:text-left">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <button className="transform cursor-pointer bg-black px-8 py-4 font-semibold tracking-wider text-white transition-all duration-300 hover:scale-105 hover:bg-[#4C4C4C]">
                SEE PRODUCT
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
