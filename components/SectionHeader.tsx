"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/lang";

interface SectionHeaderProps {
  title: { id: string; en: string };
  subtitle?: { id: string; en: string };
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  const { t } = useLang();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className="text-center max-w-2xl mx-auto mb-12 md:mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-heading font-bold text-neutral-900">
        {t(title.id, title.en)}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-neutral-500">
          {t(subtitle.id, subtitle.en)}
        </p>
      )}
    </motion.div>
  );
}
