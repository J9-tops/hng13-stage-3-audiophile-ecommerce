import Image from "next/image";

export default function ThirdProduct() {
  return (
    <section className="mb-20 px-6 py-16 md:px-12 lg:px-0">
      <div className="mx-auto max-w-277.5 lg:min-h-100">
        <div className="grid grid-cols-1 items-center gap-8 text-center lg:grid-cols-2 lg:text-left">
          <div className="flex h-full justify-center rounded-lg bg-[#F1F1F1] p-10 lg:h-100 lg:w-9/10">
            <Image
              src="/images/headphones/sample-3.png"
              alt="XX99 Mark II Headphones"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>

          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-4xl leading-tight font-bold text-black">
              XX59
              <br />
              HEADPHONES
            </h1>

            <p className="mx-auto max-w-sm text-sm leading-relaxed text-gray-500 md:max-w-lg lg:mx-0 lg:max-w-sm">
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
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
