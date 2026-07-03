import type { Metadata } from "next";
import NewsListClient from "./NewsListClient";

export const metadata: Metadata = {
  title: "Berita & Acara",
};

export default function NewsPage() {
  return <NewsListClient />;
}
