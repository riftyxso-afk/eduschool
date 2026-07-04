"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "@/lib/theme";
import { LangProvider } from "@/lib/lang";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollProgress from "./ScrollProgress";

export default function RootClient({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <LangProvider>
        <ScrollProgress />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </LangProvider>
    </ThemeProvider>
  );
}
