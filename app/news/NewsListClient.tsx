"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Calendar, Search } from "lucide-react";
import { useLang } from "@/lib/lang";
import { formatDate } from "@/lib/utils";
import news from "@/data/news.json";

const allCategories = [...new Set(news.map((n) => n.category))];

export default function NewsListClient() {
  const { lang, t } = useLang();
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("");

  const filtered = useMemo(() => {
    let items = news;
    if (catFilter) items = items.filter((n) => n.category === catFilter);
    if (search.trim()) {
      const q = search.toLowerCase();
      items = items.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          n.titleEn.toLowerCase().includes(q) ||
          n.excerpt.toLowerCase().includes(q) ||
          n.excerptEn.toLowerCase().includes(q)
      );
    }
    return items;
  }, [search, catFilter]);

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 gradient-hero-dark text-white">
        <div className="container-wide text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold"
          >
            {lang === "id" ? "Berita & Acara" : "News & Events"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-white/80 max-w-2xl mx-auto"
          >
            {lang === "id"
              ? "Informasi terbaru seputar kegiatan dan prestasi EduSchool"
              : "Latest information about EduSchool activities and achievements"}
          </motion.p>
        </div>
      </section>

      <section className="py-12 bg-neutral-50 dark:bg-neutral-800/50 border-b dark:border-neutral-700">
        <div className="container-wide">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="relative w-full sm:w-72">
              <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400" />
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={lang === "id" ? "Cari berita..." : "Search news..."}
                className="w-full pl-9 pr-4 py-2.5 rounded-[var(--radius-button)] border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setCatFilter("")}
                className={`px-3 py-1.5 rounded-[var(--radius-button)] text-sm font-medium transition-colors ${
                  !catFilter
                    ? "bg-primary text-white"
                    : "bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-700"
                }`}
              >
                {lang === "id" ? "Semua" : "All"}
              </button>
              {allCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setCatFilter(cat === catFilter ? "" : cat)}
                  className={`px-3 py-1.5 rounded-[var(--radius-button)] text-sm font-medium transition-colors ${
                    catFilter === cat
                      ? "bg-primary text-white"
                      : "bg-white dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-700"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide">
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-neutral-400">
              <p className="text-lg">{lang === "id" ? "Tidak ada berita ditemukan" : "No news found"}</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`/news/${item.slug}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                  className="group rounded-[var(--radius-card)] border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 overflow-hidden card-hover"
                >
                  <div className="aspect-[16/10] bg-gradient-to-br from-primary-lighter to-primary/20 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-xl bg-white/80 dark:bg-neutral-800/80 backdrop-blur flex items-center justify-center text-primary text-3xl font-heading font-bold">
                      {item.id}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-sm text-neutral-400 mb-3">
                      <Calendar size={14} />
                      <span>{formatDate(item.date, lang)}</span>
                      <span className="px-2.5 py-0.5 rounded-[var(--radius-element)] bg-primary-lighter dark:bg-primary/20 text-primary text-xs font-medium">
                        {t(item.category, item.categoryEn)}
                      </span>
                    </div>
                    <h2 className="font-heading font-bold text-lg text-neutral-900 dark:text-white group-hover:text-primary transition-colors mb-2">
                      {t(item.title, item.titleEn)}
                    </h2>
                    <p className="text-neutral-500 dark:text-neutral-400 text-sm leading-relaxed">
                      {t(item.excerpt, item.excerptEn)}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
