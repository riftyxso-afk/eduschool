import type { Metadata } from "next";
import { notFound } from "next/navigation";
import NewsDetailClient from "./NewsDetailClient";
import news from "@/data/news.json";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return news.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) return { title: "Not Found" };
  return { title: item.title };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = news.find((n) => n.slug === slug);
  if (!item) notFound();

  return <NewsDetailClient slug={slug} />;
}
