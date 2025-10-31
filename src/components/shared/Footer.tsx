import Link from "next/link";
import Icons from "../ui/icons";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-6 md:px-10 lg:px-20">
      <div className="container mx-auto flex flex-col items-center md:items-start lg:flex-row lg:justify-between">
        <div className="flex flex-col items-center md:items-start lg:flex-row lg:items-center lg:gap-8">
          <Link href="/" className="text-3xl font-bold mb-8 lg:mb-0">
            audiophile
          </Link>

          <nav className="flex flex-col items-center md:flex-row md:gap-8 lg:hidden mb-8 md:mb-0">
            <Link
              href="/"
              className="uppercase text-lg mb-4 md:mb-0 hover:text-gray-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/headphones"
              className="uppercase text-lg mb-4 md:mb-0 hover:text-gray-400 transition-colors"
            >
              Headphones
            </Link>
            <Link
              href="/speakers"
              className="uppercase text-lg mb-4 md:mb-0 hover:text-gray-400 transition-colors"
            >
              Speakers
            </Link>
            <Link
              href="/earphones"
              className="uppercase text-lg hover:text-gray-400 transition-colors"
            >
              Earphones
            </Link>
          </nav>

          <nav className="hidden lg:flex lg:gap-8">
            <Link
              href="/"
              className="uppercase text-lg hover:text-gray-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/headphones"
              className="uppercase text-lg hover:text-gray-400 transition-colors"
            >
              Headphones
            </Link>
            <Link
              href="/speakers"
              className="uppercase text-lg hover:text-gray-400 transition-colors"
            >
              Speakers
            </Link>
            <Link
              href="/earphones"
              className="uppercase text-lg hover:text-gray-400 transition-colors"
            >
              Earphones
            </Link>
          </nav>
        </div>

        <p className="text-gray-400 text-center text-base leading-relaxed max-w-lg mb-12 md:text-left lg:max-w-md lg:mb-0 lg:order-2">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>

        <div className="flex flex-col items-center md:items-start lg:items-end lg:order-3">
          <div className="flex space-x-4 mb-8 lg:mb-12">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors"
            >
              <Icons name="facebook" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors"
            >
              <Icons name="twitter" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-400 transition-colors"
            >
              <Icons name="instagram" />
            </a>
          </div>
          <p className="text-gray-400 text-base">
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}
