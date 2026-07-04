"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { useLang } from "@/lib/lang";
import CountUp from "./CountUp";
import school from "@/data/school.json";

export default function Hero() {
  const { lang, t } = useLang();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 gradient-hero-dark">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-light/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 container-wide text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white/90 text-sm font-medium mb-8"
        >
          <Sparkles size={14} />
          <span>
            {lang === "id"
              ? `${school.stats[3].value}+ ${school.stats[3].label}`
              : `${school.stats[3].value}+ ${school.stats[3].labelEn}`}
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight max-w-4xl mx-auto"
        >
          {lang === "id" ? (
            <>
              Membentuk{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
                Generasi Unggul
              </span>
              <br />
              untuk Masa Depan Gemilang
            </>
          ) : (
            <>
              Shaping{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-light">
                Excellent Generations
              </span>
              <br />
              for a Brilliant Future
            </>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-lg sm:text-xl text-white/80 max-w-2xl mx-auto"
        >
          {t(school.tagline, school.taglineEn)}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://smabali.spmb.id/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[var(--radius-button)] bg-accent text-white font-semibold text-base hover:bg-accent/90 transition-all hover:shadow-lg hover:shadow-accent/25 active:scale-[0.98]"
          >
            {lang === "id" ? "Daftar Sekarang" : "Enroll Now"}
            <ArrowRight size={18} />
          </a>
          <a
            href="/about"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[var(--radius-button)] bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold text-base hover:bg-white/20 transition-all active:scale-[0.98]"
          >
            <Play size={18} />
            {lang === "id" ? "Jelajahi Sekolah" : "Explore School"}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {school.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[var(--radius-card)] bg-white/10 backdrop-blur-sm border border-white/20 p-6 text-center"
            >
              <div className="text-3xl md:text-4xl font-heading font-bold text-white">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <div className="mt-1 text-sm text-white/70">
                {t(stat.label, stat.labelEn)}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
