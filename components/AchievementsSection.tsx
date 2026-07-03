"use client";

import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { useLang } from "@/lib/lang";
import achievements from "@/data/achievements.json";
import SectionHeader from "./SectionHeader";

export default function AchievementsSection() {
  const { t } = useLang();

  return (
    <section className="py-20 md:py-28 bg-neutral-50">
      <div className="container-wide">
        <SectionHeader
          title={{ id: "Prestasi & Penghargaan", en: "Achievements & Awards" }}
          subtitle={{ id: "Kebanggaan yang terus kami raih dalam perjalanan pendidikan", en: "Pride we continue to achieve in our educational journey" }}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((ach, i) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-[var(--radius-card)] bg-white border border-neutral-200 p-6 flex gap-4 card-hover"
            >
              <div className="shrink-0 w-12 h-12 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                <Award size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-semibold text-accent bg-accent/10 px-2 py-0.5 rounded-[var(--radius-element)]">
                    {ach.year}
                  </span>
                  <span className="text-xs text-neutral-400">
                    {t(ach.category, ach.categoryEn)}
                  </span>
                </div>
                <h3 className="font-heading font-semibold text-neutral-900 mb-1">
                  {t(ach.title, ach.titleEn)}
                </h3>
                <p className="text-sm text-neutral-500 leading-relaxed">
                  {t(ach.description, ach.descriptionEn)}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
