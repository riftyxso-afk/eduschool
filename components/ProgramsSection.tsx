"use client";

import { motion } from "framer-motion";
import { Sprout, BookOpen, Library, GraduationCap, Music, ArrowRight } from "lucide-react";
import { useLang } from "@/lib/lang";
import { cn } from "@/lib/utils";
import programs from "@/data/programs.json";
import SectionHeader from "./SectionHeader";

const iconMap: Record<string, React.ElementType> = {
  Sprout, BookOpen, Library, GraduationCap, Music,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function ProgramsSection() {
  const { t } = useLang();

  return (
    <section id="programs" className="py-20 md:py-28 bg-neutral-50">
      <div className="container-wide">
        <SectionHeader
          title={{ id: "Program Akademik", en: "Academic Programs" }}
          subtitle={{ id: "Program pendidikan lengkap dari usia dini hingga SMA", en: "Complete education programs from early childhood to high school" }}
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
        >
          {programs.map((prog) => {
            const Icon = iconMap[prog.icon] || BookOpen;
            return (
              <motion.div
                key={prog.id}
                variants={item}
                className={cn(
                  "group rounded-[var(--radius-card)] bg-white border border-neutral-200 p-6",
                  "card-hover flex flex-col"
                )}
              >
                <div className="w-12 h-12 rounded-xl bg-primary-lighter flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <h3 className="font-heading font-bold text-lg text-neutral-900 mb-1">
                  {t(prog.name, prog.nameEn)}
                </h3>
                <p className="text-xs text-neutral-400 mb-3">
                  {t(prog.age, prog.ageEn)} &middot; {t(prog.duration, prog.durationEn)}
                </p>
                <p className="text-sm text-neutral-500 leading-relaxed mb-4 flex-1">
                  {t(prog.description, prog.descriptionEn)}
                </p>
                <div className="flex flex-wrap gap-2">
                  {prog.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-[var(--radius-element)] bg-neutral-100 text-neutral-600 text-xs font-medium"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
