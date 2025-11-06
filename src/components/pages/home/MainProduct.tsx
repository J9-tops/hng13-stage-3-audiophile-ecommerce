import Image from "next/image";
import MainProductLink from "./links/MainProductLink";

export default function MainProduct() {
  return (
    <section className="relative mb-10 w-full overflow-hidden px-6">
      <div className="relative mx-auto max-w-277.5 rounded-lg bg-[#D87D4A] lg:h-[520px]">
        <div className="relative container mx-auto h-full px-6 py-15 md:px-12 lg:px-20 lg:pb-0">
          <div className="relative grid h-full grid-cols-1 items-center gap-8 lg:grid-cols-2">
            <div className="mb-6 flex items-center justify-center md:mb-10 lg:mb-0">
              <Image
                width={410}
                height={500}
                src="/images/home/speaker-show.png"
                alt="ZX9 SPEAKER"
                className="md: -bottom-1 z-2 max-h-60 object-contain lg:absolute lg:max-h-110"
              />
              <Image
                width={3776}
                height={3776}
                src="/images/spiral-desktop.png"
                alt=""
                className="bottom-0 z-1 hidden max-h-60 object-cover lg:absolute lg:block lg:max-h-130"
              />
              <Image
                width={3776}
                height={3776}
                src="/images/spiral-tablet.png"
                alt=""
                className="absolute bottom-3 z-1 hidden max-h-170 object-cover md:block lg:hidden"
              />
            </div>

            <div className="z-2 space-y-10 text-center text-white lg:mt-22 lg:ml-12 lg:space-y-6 lg:text-left">
              <h3 className="text-3xl font-bold tracking-tight md:text-6xl lg:text-5xl">
                ZX9
                <br />
                SPEAKER
              </h3>
              <p className="mx-auto max-w-sm text-center text-lg leading-relaxed font-normal text-white/90 lg:mx-0 lg:text-left">
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <MainProductLink />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
