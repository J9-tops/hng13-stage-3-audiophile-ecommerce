import Image from "next/image";
import AuxiliaryProductLink from "./links/AuxiliaryProductLink";

export default function AuxilliaryProduct() {
  return (
    <section>
      <div className="mx-auto grid max-w-277.5 grid-cols-1 gap-4 px-6 md:grid-cols-2 lg:gap-7 lg:px-0">
        <Image
          src="/images/home/earphones-2.png"
          alt="yx1 earphones"
          width={400}
          height={400}
          className="h-full w-full"
        />
        <div className="flex flex-col justify-center rounded-lg bg-[#F1F1F1] py-10 pl-6 align-middle md:pl-10 lg:pl-20">
          <h3 className="mb-8 text-2xl font-bold tracking-tight text-black md:text-4xl">
            YX1 EARPHONES
          </h3>
          <AuxiliaryProductLink />
        </div>
      </div>
    </section>
  );
}
