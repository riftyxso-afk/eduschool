import type { Metadata } from "next";
import { Inter, Quicksand } from "next/font/google";
import "./globals.css";
import RootClient from "@/components/RootClient";
import settings from "@/data/settings.json";
import school from "@/data/school.json";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const quicksand = Quicksand({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-quicksand",
});

export const metadata: Metadata = {
  title: {
    default: settings.siteName,
    template: `%s | ${settings.siteName}`,
  },
  description: school.description,
  other: {
    "theme-color": settings.primaryColor,
  },
  openGraph: {
    title: settings.siteName,
    description: school.description,
    locale: settings.locale,
    type: "website",
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={settings.language} suppressHydrationWarning className={`${inter.variable} ${quicksand.variable}`}>
      <body className="min-h-screen flex flex-col font-sans antialiased">
        <RootClient>{children}</RootClient>
      </body>
    </html>
  );
}
