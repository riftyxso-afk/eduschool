import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "Tentang Kami",
};

export default function AboutPage() {
  return <AboutClient />;
}
