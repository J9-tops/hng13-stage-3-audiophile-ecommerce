import Link from "next/link";
import Icons from "../ui/icons";
import MobileNav from "./MobileNav";

const navLinks = [
  { href: "/", label: "HOME" },
  { href: "/headphones", label: "HEADPHONES" },
  { href: "/speakers", label: "SPEAKERS" },
  { href: "/earphones", label: "EARPHONES" },
];

export default function Navbar() {
  return (
    <nav className="relative bg-[#141414] text-white">
      <div className="mx-auto flex max-w-277.5 items-center justify-between border-b border-white/20 px-4 py-8.75 xl:px-0">
        <div className="flex items-center gap-5">
          <MobileNav links={navLinks} />
          <Link href="/" className="hidden text-3xl font-bold md:block lg:mb-0">
            <Icons name="logo" />
          </Link>
        </div>
        <Link href="/" className="text-3xl font-bold md:hidden lg:mb-0">
          <Icons name="logo" />
        </Link>

        <ul className="hidden items-center gap-6.5 text-sm lg:flex">
          {navLinks.map((link) => {
            return (
              <li key={link.label}>
                <Link href={link.href} className="hover:text-[#D87D4A]">
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        <button className="flex justify-end p-3 lg:min-w-32">
          <Icons name="cart" />
        </button>
      </div>
    </nav>
  );
}
