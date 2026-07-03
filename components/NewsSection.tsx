"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/lang";
import { formatDate } from "@/lib/utils";
import news from "@/data/news.json";
import SectionHeader from "./SectionHeader";

export default function NewsSection() {
  const { lang, t } = useLang();

  return (
    <section className="py-20 md:py-28">
      <div className="container-wide">
        <SectionHeader
          title={{ id: "Berita & Acara", en: "News & Events" }}
          subtitle={{ id: "Informasi terbaru seputar kegiatan dan prestasi EduSchool", en: "Latest information about EduSchool activities and achievements" }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {news.map((item, i) => (
            <motion.a
              key={item.id}
              href={`/news/${item.slug}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-[var(--radius-card)] border border-neutral-200 overflow-hidden card-hover"
            >
              <div className="aspect-[16/9] bg-gradient-to-br from-primary-lighter to-primary/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-xl bg-white/80 backdrop-blur flex items-center justify-center text-primary text-2xl font-heading font-bold">
                  {item.id}
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 text-xs text-neutral-400 mb-2">
                  <Calendar size={12} />
                  <span>{formatDate(item.date, lang)}</span>
                  <span className="px-2 py-0.5 rounded-[var(--radius-element)] bg-primary-lighter text-primary font-medium">
                    {t(item.category, item.categoryEn)}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-neutral-900 group-hover:text-primary transition-colors mb-2 line-clamp-2">
                  {t(item.title, item.titleEn)}
                </h3>
                <p className="text-sm text-neutral-500 line-clamp-2">
                  {t(item.excerpt, item.excerptEn)}
                </p>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <a
            href="/news"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-[var(--radius-button)] border border-neutral-300 text-neutral-700 font-medium hover:bg-neutral-50 transition-colors"
          >
            {lang === "id" ? "Lihat Semua Berita" : "View All News"}
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
