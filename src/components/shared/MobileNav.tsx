"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Icons from "../ui/icons";

type TLink = {
  href: string;
  label: string;
};

type Props = {
  links: TLink[];
};

export default function MobileNav({ links }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        className="z-50 p-3 focus:outline-none lg:hidden"
        onClick={() => setOpen(true)}
      >
        <Icons name="hamburger" />
      </button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 z-40 bg-black/70 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.nav
              className="fixed top-0 right-0 z-50 flex h-full w-3/4 max-w-xs flex-col bg-[#1a1a1a] p-8 text-white shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 15 }}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>

              <ul className="mt-20 space-y-6 text-lg font-semibold tracking-wide">
                {links.map((link: TLink, index: number) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="block transition-colors duration-300 hover:text-[#D87D4A]"
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <div className="mt-auto border-t border-gray-700 pt-8 text-sm text-gray-500">
                <p>© {new Date().getFullYear()} Audiophile</p>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
