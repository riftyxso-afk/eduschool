"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/lang";
import { formatDate } from "@/lib/utils";
import news from "@/data/news.json";

export default function NewsListClient() {
  const { lang, t } = useLang();

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

      <section className="py-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((item, i) => (
              <motion.a
                key={item.id}
                href={`/news/${item.slug}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group rounded-[var(--radius-card)] border border-neutral-200 overflow-hidden card-hover"
              >
                <div className="aspect-[16/10] bg-gradient-to-br from-primary-lighter to-primary/20 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-xl bg-white/80 backdrop-blur flex items-center justify-center text-primary text-3xl font-heading font-bold">
                    {item.id}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-neutral-400 mb-3">
                    <Calendar size={14} />
                    <span>{formatDate(item.date, lang)}</span>
                    <span className="px-2.5 py-0.5 rounded-[var(--radius-element)] bg-primary-lighter text-primary text-xs font-medium">
                      {t(item.category, item.categoryEn)}
                    </span>
                  </div>
                  <h2 className="font-heading font-bold text-lg text-neutral-900 group-hover:text-primary transition-colors mb-2">
                    {t(item.title, item.titleEn)}
                  </h2>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {t(item.excerpt, item.excerptEn)}
                  </p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
