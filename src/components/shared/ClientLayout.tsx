"use client";

import ModalWrapper from "@/components/ModalWrapper";
import CompanyNote from "@/components/pages/home/CompanyNote";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { ProgressProvider } from "@bprogress/next/app";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { usePathname } from "next/navigation";
import React from "react";
import { Toaster } from "sonner";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isCheckoutPage = pathname === "/checkout";

  return (
    <ProgressProvider
      height="4px"
      color="#D87D4A"
      options={{ showSpinner: false }}
      shallowRouting
    >
      <ConvexProvider client={convex}>
        <div className="font-manrope">
          <ModalWrapper />
          <Toaster />
          <Navbar />
          {children}
          {!isCheckoutPage && <CompanyNote />}
          <Footer />
        </div>
      </ConvexProvider>
    </ProgressProvider>
  );
}
