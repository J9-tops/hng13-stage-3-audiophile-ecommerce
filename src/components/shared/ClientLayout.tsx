"use client";

import ModalWrapper from "@/components/ModalWrapper";
import CompanyNote from "@/components/pages/home/CompanyNote";
import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import React from "react";

const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!, {
  unsavedChangesWarning: false,
});

export default function ClientLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ConvexProvider client={convex}>
      <div className="font-manrope">
        <ModalWrapper />
        <Navbar />
        {children}
        <CompanyNote />
        <Footer />
      </div>
    </ConvexProvider>
  );
}
