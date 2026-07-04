"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useLang } from "@/lib/lang";

export default function CTASection() {
  const { lang } = useLang();

  return (
    <section className="py-20 md:py-28">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl gradient-hero overflow-hidden p-10 md:p-16 text-center"
        >
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-50" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
              {lang === "id" ? "Siap Bergabung dengan EduSchool?" : "Ready to Join EduSchool?"}
            </h2>
            <p className="text-lg text-white/80 max-w-xl mx-auto mb-8">
              {lang === "id"
                ? "Daftarkan putra-putri Anda sekarang dan berikan mereka pendidikan terbaik untuk masa depan gemilang."
                : "Register your children now and give them the best education for a brilliant future."}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://smabali.spmb.id/" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[var(--radius-button)] bg-white text-primary font-semibold hover:bg-white/90 transition-all active:scale-[0.98]"
              >
                {lang === "id" ? "Daftar Sekarang" : "Enroll Now"}
                <ArrowRight size={18} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[var(--radius-button)] bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold hover:bg-white/20 transition-all"
              >
                {lang === "id" ? "Hubungi Kami" : "Contact Us"}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
