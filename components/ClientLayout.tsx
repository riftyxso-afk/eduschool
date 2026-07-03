"use client";

import type { ReactNode } from "react";
import { LangProvider } from "@/lib/lang";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <LangProvider>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </LangProvider>
  );
}
