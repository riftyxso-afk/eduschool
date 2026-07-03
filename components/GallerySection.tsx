"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { useLang } from "@/lib/lang";
import gallery from "@/data/gallery.json";
import SectionHeader from "./SectionHeader";

const categories = ["all", "Akademik", "Fasilitas", "Olahraga", "Seni Budaya", "Teknologi", "Kegiatan", "Acara"];
const categoriesEn = ["all", "Academic", "Facility", "Sports", "Arts & Culture", "Technology", "Activity", "Event"];

export default function GallerySection() {
  const { lang } = useLang();
  const [filter, setFilter] = useState("all");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = filter === "all"
    ? gallery
    : gallery.filter((item) => item.category === filter);

  const catLabels = lang === "id" ? categories : categoriesEn;

  return (
    <section className="py-20 md:py-28">
      <div className="container-wide">
        <SectionHeader
          title={{ id: "Galeri Sekolah", en: "School Gallery" }}
          subtitle={{ id: "Momen-momen berharga dalam perjalanan pendidikan kami", en: "Precious moments in our educational journey" }}
        />

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {catLabels.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setFilter(i === 0 ? "all" : gallery[i - 1]?.category || "all")}
              className={`px-4 py-2 rounded-[var(--radius-button)] text-sm font-medium transition-colors ${
                (i === 0 && filter === "all") || (i > 0 && filter === gallery[i - 1]?.category)
                  ? "bg-primary text-white"
                  : "bg-neutral-100 text-neutral-600 hover:bg-neutral-200"
              }`}
            >
              {cat === "all" ? (lang === "id" ? "Semua" : "All") : cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {filtered.map((item, i) => (
            <motion.button
              key={item.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
              onClick={() => setLightbox(item.id)}
              className="relative aspect-square rounded-[var(--radius-card)] overflow-hidden group bg-gradient-to-br from-primary-lighter to-primary/20"
            >
              <div className="absolute inset-0 flex items-center justify-center text-primary/40 text-6xl font-heading font-bold">
                {item.id}
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <p className="text-white text-sm font-medium">
                  {lang === "id" ? item.alt : item.altEn}
                </p>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Close"
            >
              <X size={24} />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                const idx = filtered.findIndex((g) => g.id === lightbox);
                if (idx > 0) setLightbox(filtered[idx - 1].id);
              }}
              className="absolute left-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={24} />
            </button>
            <div className="w-full max-w-3xl aspect-video rounded-2xl bg-gradient-to-br from-primary-lighter to-primary/20 flex items-center justify-center">
              <span className="text-white/40 text-8xl font-heading font-bold">
                {lightbox}
              </span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                const idx = filtered.findIndex((g) => g.id === lightbox);
                if (idx < filtered.length - 1) setLightbox(filtered[idx + 1].id);
              }}
              className="absolute right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={24} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
