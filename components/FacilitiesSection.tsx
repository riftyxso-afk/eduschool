"use client";

import { motion } from "framer-motion";
import { Monitor, FlaskConical, BookOpen, Trophy, Palette, UtensilsCrossed } from "lucide-react";
import { useLang } from "@/lib/lang";
import facilities from "@/data/facilities.json";
import SectionHeader from "./SectionHeader";

const iconMap: Record<string, React.ElementType> = {
  Monitor, FlaskConical, BookOpen, Trophy, Palette, UtensilsCrossed,
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
};

export default function FacilitiesSection() {
  const { t } = useLang();

  return (
    <section id="facilities" className="py-20 md:py-28">
      <div className="container-wide">
        <SectionHeader
          title={{ id: "Fasilitas Unggulan", en: "Premium Facilities" }}
          subtitle={{ id: "Lingkungan belajar modern yang mendukung perkembangan optimal siswa", en: "Modern learning environment supporting optimal student development" }}
        />

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {facilities.map((fac) => {
            const Icon = iconMap[fac.icon] || Monitor;
            return (
              <motion.div
                key={fac.id}
                variants={item}
                className="group rounded-[var(--radius-card)] border border-neutral-200 p-6 card-hover"
              >
                <div className="w-12 h-12 rounded-xl bg-primary text-white flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon size={24} />
                </div>
                <h3 className="font-heading font-bold text-lg text-neutral-900 mb-2">
                  {t(fac.name, fac.nameEn)}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {t(fac.description, fac.descriptionEn)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
