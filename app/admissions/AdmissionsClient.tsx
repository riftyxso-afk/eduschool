"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, ClipboardCheck, FileText, Users, Bell, CreditCard } from "lucide-react";
import { useLang } from "@/lib/lang";

const SPMB_URL = "https://smabali.spmb.id/";

const steps = [
  {
    id: 1,
    icon: ClipboardCheck,
    title: { id: "Daftar Online", en: "Online Registration" },
    desc: { id: "Daftar melalui portal SPMB resmi SMA/SMK Bali.", en: "Register via the official SPMB portal for Bali High Schools." },
  },
  {
    id: 2,
    icon: FileText,
    title: { id: "Lengkapi Dokumen", en: "Complete Documents" },
    desc: { id: "Unggah dokumen persyaratan yang dibutuhkan.", en: "Upload the required supporting documents." },
  },
  {
    id: 3,
    icon: Users,
    title: { id: "Seleksi & Verifikasi", en: "Selection & Verification" },
    desc: { id: "Tim kami akan melakukan seleksi dan verifikasi data.", en: "Our team will select and verify your data." },
  },
  {
    id: 4,
    icon: Bell,
    title: { id: "Pengumuman", en: "Announcement" },
    desc: { id: "Hasil seleksi diumumkan melalui portal SPMB.", en: "Selection results are announced via the SPMB portal." },
  },
  {
    id: 5,
    icon: CreditCard,
    title: { id: "Daftar Ulang", en: "Re-registration" },
    desc: { id: "Lakukan daftar ulang untuk mengonfirmasi tempat.", en: "Complete re-registration to confirm your spot." },
  },
];

export default function AdmissionsClient() {
  const { lang } = useLang();

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 gradient-hero-dark text-white">
        <div className="container-wide text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold"
          >
            {lang === "id" ? "Penerimaan Siswa Baru" : "Admissions"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-white/80 max-w-2xl mx-auto"
          >
            {lang === "id"
              ? "Pendaftaran dilakukan melalui portal SPMB resmi SMA/SMK Bali"
              : "Registration is done through the official SPMB portal for Bali High Schools"}
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide">
          <h2 className="text-3xl font-heading font-bold text-center text-neutral-900 dark:text-white mb-4">
            {lang === "id" ? "Alur Pendaftaran" : "Registration Flow"}
          </h2>
          <p className="text-center text-neutral-500 dark:text-neutral-400 mb-12 max-w-xl mx-auto">
            {lang === "id"
              ? "Ikuti langkah-langkah berikut untuk mendaftar"
              : "Follow these steps to register"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white mx-auto mb-4">
                    <Icon size={28} />
                  </div>
                  <h3 className="font-heading font-bold text-neutral-900 dark:text-white mb-2">
                    {lang === "id" ? step.title.id : step.title.en}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400">
                    {lang === "id" ? step.desc.id : step.desc.en}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50 dark:bg-neutral-800/50">
        <div className="container-wide max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[var(--radius-card)] border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-10"
          >
            <div className="w-16 h-16 rounded-full bg-primary-lighter dark:bg-primary/20 flex items-center justify-center text-primary mx-auto mb-5">
              <ExternalLink size={28} />
            </div>
            <h2 className="text-2xl font-heading font-bold text-neutral-900 dark:text-white mb-3">
              {lang === "id" ? "Daftar Sekarang" : "Register Now"}
            </h2>
            <p className="text-neutral-500 dark:text-neutral-400 mb-8 max-w-md mx-auto">
              {lang === "id"
                ? "Klik tombol di bawah untuk langsung menuju portal SPMB resmi SMA/SMK Bali dan mulai proses pendaftaran."
                : "Click the button below to go directly to the official SPMB portal for Bali High Schools and start the registration process."}
            </p>
            <a
              href={SPMB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[var(--radius-button)] bg-primary text-white font-semibold hover:bg-primary-dark transition-all active:scale-[0.98] shadow-lg shadow-primary/25"
            >
              {lang === "id" ? "Buka Portal SPMB" : "Open SPMB Portal"}
              <ExternalLink size={18} />
            </a>
            <p className="mt-4 text-xs text-neutral-400">
              {lang === "id"
                ? "Anda akan diarahkan ke https://smabali.spmb.id/"
                : "You will be redirected to https://smabali.spmb.id/"}
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
