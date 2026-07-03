"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useLang } from "@/lib/lang";
import testimonials from "@/data/testimonials.json";
import SectionHeader from "./SectionHeader";

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);
  const { lang, t } = useLang();
  const total = testimonials.length;

  const next = () => setActive((prev) => (prev + 1) % total);
  const prev = () => setActive((prev) => (prev - 1 + total) % total);

  const current = testimonials[active];

  return (
    <section className="py-20 md:py-28 bg-neutral-900 text-white">
      <div className="container-wide">
        <SectionHeader
          title={{ id: "Apa Kata Mereka", en: "What They Say" }}
          subtitle={{ id: "Testimoni dari orang tua, alumni, dan siswa", en: "Testimonials from parents, alumni, and students" }}
        />
        <div className="max-w-3xl mx-auto text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Quote size={48} className="mx-auto text-primary-light/50 mb-6" />
              <blockquote className="text-lg md:text-xl text-neutral-200 leading-relaxed mb-8 italic">
                &ldquo;{t(current.quote, current.quoteEn)}&rdquo;
              </blockquote>
              <div className="w-14 h-14 rounded-full bg-primary/30 mx-auto mb-3 flex items-center justify-center text-lg font-heading font-bold text-white">
                {current.name.charAt(0)}
              </div>
              <div className="font-heading font-bold text-white">
                {current.name}
              </div>
              <div className="text-sm text-neutral-400">
                {t(current.role, current.roleEn)}
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="p-3 rounded-[var(--radius-button)] bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft size={20} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-all ${
                    i === active ? "bg-primary w-6" : "bg-white/30"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="p-3 rounded-[var(--radius-button)] bg-white/10 hover:bg-white/20 transition-colors"
              aria-label="Next"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
