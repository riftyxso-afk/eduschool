"use client";

import { motion } from "framer-motion";
import { Monitor, FlaskConical, BookOpen, Trophy, Palette, UtensilsCrossed } from "lucide-react";
import { useLang } from "@/lib/lang";
import facilities from "@/data/facilities.json";

const iconMap: Record<string, React.ElementType> = {
  Monitor, FlaskConical, BookOpen, Trophy, Palette, UtensilsCrossed,
};

export default function FacilitiesClient() {
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
            {lang === "id" ? "Fasilitas" : "Facilities"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-white/80 max-w-2xl mx-auto"
          >
            {lang === "id"
              ? "Lingkungan belajar modern yang mendukung perkembangan optimal siswa"
              : "Modern learning environment supporting optimal student development"}
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((fac, i) => {
              const Icon = iconMap[fac.icon] || Monitor;
              return (
                <motion.div
                  key={fac.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-[var(--radius-card)] border border-neutral-200 p-8 card-hover"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary text-white flex items-center justify-center mb-5">
                    <Icon size={28} />
                  </div>
                  <h2 className="font-heading font-bold text-xl text-neutral-900 mb-3">
                    {t(fac.name, fac.nameEn)}
                  </h2>
                  <p className="text-neutral-600 leading-relaxed">
                    {t(fac.description, fac.descriptionEn)}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
