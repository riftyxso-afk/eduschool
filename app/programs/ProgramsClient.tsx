"use client";

import { motion } from "framer-motion";
import { Sprout, BookOpen, Library, GraduationCap, Music, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/lang";
import programs from "@/data/programs.json";

const iconMap: Record<string, React.ElementType> = {
  Sprout, BookOpen, Library, GraduationCap, Music,
};

export default function ProgramsClient() {
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
            {lang === "id" ? "Program Akademik" : "Academic Programs"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-white/80 max-w-2xl mx-auto"
          >
            {lang === "id"
              ? "Program pendidikan lengkap dari usia dini hingga SMA"
              : "Complete education programs from early childhood to high school"}
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map((prog, i) => {
              const Icon = iconMap[prog.icon] || BookOpen;
              return (
                <motion.div
                  key={prog.id}
                  id={prog.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="rounded-[var(--radius-card)] border border-neutral-200 p-8 card-hover"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary-lighter flex items-center justify-center text-primary mb-5">
                    <Icon size={28} />
                  </div>
                  <h2 className="font-heading font-bold text-xl text-neutral-900 mb-1">
                    {t(prog.name, prog.nameEn)}
                  </h2>
                  <p className="text-sm text-neutral-400 mb-4">
                    {t(prog.age, prog.ageEn)} &middot; {t(prog.duration, prog.durationEn)}
                  </p>
                  <p className="text-neutral-600 leading-relaxed mb-6">
                    {t(prog.description, prog.descriptionEn)}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {prog.highlights.map((h, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-[var(--radius-element)] bg-neutral-100 text-neutral-600 text-sm"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
