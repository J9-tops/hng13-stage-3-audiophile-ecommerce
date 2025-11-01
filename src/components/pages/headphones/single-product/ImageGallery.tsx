import Image from "next/image";

export default function ImageGallery() {
  return (
    <section className="px-6 py-20 text-white md:px-10 lg:px-0">
      <div className="mx-auto max-w-277.5">
        <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <div className="group relative h-80 overflow-hidden rounded-lg bg-gray-900">
              <Image
                src="/images/headphones/tt.png"
                width={440}
                height={250}
                alt="Person listening with headphones"
                className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="group relative h-80 overflow-hidden rounded-lg bg-gray-900">
              <Image
                src="/images/headphones/bt.png"
                width={440}
                height={250}
                alt="Headphones and smartphone setup"
                className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="group relative h-full min-h-[42rem] overflow-hidden rounded-lg bg-gray-900">
            <Image
              src="/images/headphones/left.png"
              width={635}
              height={592}
              alt="Headphones close-up"
              className="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
