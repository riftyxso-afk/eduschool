"use client";

import { motion } from "framer-motion";
import { Calendar, ArrowLeft, User } from "lucide-react";
import { useLang } from "@/lib/lang";
import { formatDate } from "@/lib/utils";
import news from "@/data/news.json";

export default function NewsDetailClient({ slug }: { slug: string }) {
  const { lang, t } = useLang();
  const item = news.find((n) => n.slug === slug);

  if (!item) {
    return (
      <div className="pt-40 text-center">
        <p className="text-neutral-500">{lang === "id" ? "Berita tidak ditemukan" : "News not found"}</p>
      </div>
    );
  }

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 gradient-hero-dark text-white">
        <div className="container-wide">
          <motion.a
            href="/news"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={16} />
            {lang === "id" ? "Kembali" : "Back"}
          </motion.a>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3 text-sm text-white/70 mb-4">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} />
                {formatDate(item.date, lang)}
              </span>
              <span className="flex items-center gap-1.5">
                <User size={14} />
                {item.author}
              </span>
              <span className="px-3 py-0.5 rounded-[var(--radius-element)] bg-white/20 text-white text-xs font-medium">
                {t(item.category, item.categoryEn)}
              </span>
            </div>
            <h1 className="text-3xl md:text-5xl font-heading font-bold">
              {t(item.title, item.titleEn)}
            </h1>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="aspect-video rounded-2xl bg-gradient-to-br from-primary-lighter to-primary/20 flex items-center justify-center mb-10"
          >
            <div className="text-primary/30 text-8xl font-heading font-bold">
              {item.id}
            </div>
          </motion.div>

          <div className="prose prose-neutral max-w-none">
            <p className="text-lg text-neutral-600 leading-relaxed mb-6">
              {t(item.excerpt, item.excerptEn)}
            </p>
            <p className="text-neutral-600 leading-relaxed mb-4">
              {lang === "id"
                ? "EduSchool Bali terus berkomitmen untuk memberikan pendidikan terbaik bagi generasi muda Indonesia. Dengan dukungan tenaga pengajar profesional dan fasilitas modern, kami siap mencetak pemimpin masa depan yang berkarakter dan berwawasan global."
                : "EduSchool Bali continues to be committed to providing the best education for Indonesia's young generation. With the support of professional teaching staff and modern facilities, we are ready to produce future leaders with character and global insight."}
            </p>
            <p className="text-neutral-600 leading-relaxed">
              {lang === "id"
                ? "Untuk informasi lebih lanjut, silakan hubungi tim penerimaan siswa baru kami melalui telepon, email, atau datang langsung ke kampus EduSchool Bali."
                : "For more information, please contact our admissions team via phone, email, or visit the EduSchool Bali campus directly."}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
