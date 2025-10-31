import Link from "next/link";
import Icons from "../ui/icons";

export default function Footer() {
  return (
    <footer className="bg-black px-6 py-12 text-white md:px-10 lg:px-20">
      <div className="container mx-auto flex max-w-277.5 flex-col items-center md:items-start lg:justify-between">
        <div className="mb-10 flex w-full flex-col items-center md:items-start lg:mb-9 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <Link href="/" className="mb-8 text-3xl font-bold lg:mb-0">
            <Icons name="logo" />
          </Link>

          <nav className="flex flex-col gap-4 text-center md:flex-row md:gap-8">
            <Link
              href="/"
              className="text-sm uppercase transition-colors hover:text-[#D87D4A]"
            >
              Home
            </Link>
            <Link
              href="/headphones"
              className="text-sm uppercase transition-colors hover:text-[#D87D4A]"
            >
              Headphones
            </Link>
            <Link
              href="/speakers"
              className="text-sm uppercase transition-colors hover:text-[#D87D4A]"
            >
              Speakers
            </Link>
            <Link
              href="/earphones"
              className="text-sm uppercase transition-colors hover:text-[#D87D4A]"
            >
              Earphones
            </Link>
          </nav>
        </div>

        <div className="mb-10 flex w-full lg:mb-14 lg:flex-row lg:justify-between">
          <p className="max-w-lg text-center text-base leading-relaxed text-gray-400 md:text-left">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7 days a week.
          </p>
          <div className="hidden space-x-4 lg:flex lg:self-end lg:justify-self-end">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-gray-400"
            >
              <Icons name="facebook" />
            </Link>
            <Link
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-gray-400"
            >
              <Icons name="twitter" />
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-gray-400"
            >
              <Icons name="instagram" />
            </Link>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-12 md:flex-row md:justify-between">
          <p className="text-base text-gray-400 md:mb-0">
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>
          <div className="flex space-x-4 lg:hidden">
            <Link
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-gray-400"
            >
              <Icons name="facebook" />
            </Link>
            <Link
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-gray-400"
            >
              <Icons name="twitter" />
            </Link>
            <Link
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white transition-colors hover:text-gray-400"
            >
              <Icons name="instagram" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
