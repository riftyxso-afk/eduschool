"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, Send } from "lucide-react";
import { useLang } from "@/lib/lang";
import school from "@/data/school.json";

const steps = [
  { id: 1, icon: "1", title: { id: "Daftar Online", en: "Online Registration" }, desc: { id: "Isi formulir pendaftaran secara online melalui website kami.", en: "Fill out the registration form online through our website." } },
  { id: 2, icon: "2", title: { id: "Verifikasi Data", en: "Data Verification" }, desc: { id: "Tim kami akan memverifikasi data dan dokumen yang Anda kirimkan.", en: "Our team will verify the data and documents you submit." } },
  { id: 3, icon: "3", title: { id: "Tes & Wawancara", en: "Test & Interview" }, desc: { id: "Jadwalkan tes masuk dan wawancara dengan tim akademik kami.", en: "Schedule an entrance test and interview with our academic team." } },
  { id: 4, icon: "4", title: { id: "Pengumuman", en: "Announcement" }, desc: { id: "Terima pengumuman hasil seleksi melalui email atau WhatsApp.", en: "Receive selection results via email or WhatsApp." } },
  { id: 5, icon: "5", title: { id: "Daftar Ulang", en: "Re-registration" }, desc: { id: "Lakukan daftar ulang dan pembayaran untuk memastikan tempat.", en: "Complete re-registration and payment to secure your spot." } },
];

export default function AdmissionsClient() {
  const { lang } = useLang();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const wa = `https://wa.me/${school.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
      `Halo, saya ${name}. Saya ingin mendaftarkan anak saya di EduSchool Bali. Mohon informasi lebih lanjut.`
    )}`;
    window.open(wa, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

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
              ? "Selamat datang di proses penerimaan siswa baru EduSchool"
              : "Welcome to the EduSchool admissions process"}
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide">
          <h2 className="text-3xl font-heading font-bold text-center text-neutral-900 mb-4">
            {lang === "id" ? "Alur Pendaftaran" : "Registration Flow"}
          </h2>
          <p className="text-center text-neutral-500 mb-12 max-w-xl mx-auto">
            {lang === "id"
              ? "Ikuti langkah-langkah berikut untuk mendaftarkan putra-putri Anda"
              : "Follow these steps to register your children"}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 rounded-full bg-primary text-white text-2xl font-heading font-bold flex items-center justify-center mx-auto mb-4">
                  {step.icon}
                </div>
                <h3 className="font-heading font-bold text-neutral-900 mb-2">
                  {lang === "id" ? step.title.id : step.title.en}
                </h3>
                <p className="text-sm text-neutral-500">
                  {lang === "id" ? step.desc.id : step.desc.en}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="container-wide max-w-2xl mx-auto">
          <h2 className="text-3xl font-heading font-bold text-center text-neutral-900 mb-4">
            {lang === "id" ? "Formulir Pendaftaran" : "Registration Form"}
          </h2>
          <p className="text-center text-neutral-500 mb-10">
            {lang === "id"
              ? "Isi formulir di bawah dan kami akan menghubungi Anda"
              : "Fill out the form below and we will contact you"}
          </p>

          <form onSubmit={handleSubmit} className="space-y-5 bg-white rounded-[var(--radius-card)] border border-neutral-200 p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                  {lang === "id" ? "Nama Orang Tua" : "Parent Name"}
                </label>
                <input name="name" required className="w-full px-4 py-3 rounded-[var(--radius-button)] border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-neutral-900" placeholder={lang === "id" ? "Nama lengkap" : "Full name"} />
              </div>
              <div>
                <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email</label>
                <input name="email" type="email" required className="w-full px-4 py-3 rounded-[var(--radius-button)] border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-neutral-900" placeholder="email@example.com" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                {lang === "id" ? "No. WhatsApp" : "WhatsApp Number"}
              </label>
              <input name="phone" type="tel" required className="w-full px-4 py-3 rounded-[var(--radius-button)] border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-neutral-900" placeholder="+62 xxx xxxx xxxx" />
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                {lang === "id" ? "Program yang Dipilih" : "Selected Program"}
              </label>
              <select name="program" className="w-full px-4 py-3 rounded-[var(--radius-button)] border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-neutral-900 bg-white">
                <option value="PG & TK">PG & TK</option>
                <option value="SD">SD</option>
                <option value="SMP">SMP</option>
                <option value="SMA">SMA</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                {lang === "id" ? "Pesan Tambahan" : "Additional Message"}
              </label>
              <textarea name="message" rows={3} className="w-full px-4 py-3 rounded-[var(--radius-button)] border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-neutral-900 resize-none" />
            </div>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-[var(--radius-button)] bg-primary text-white font-semibold hover:bg-primary-dark transition-all active:scale-[0.98]"
            >
              {sent ? (
                <><Check size={18} /> {lang === "id" ? "Terkirim!" : "Sent!"}</>
              ) : (
                <><Send size={18} /> {lang === "id" ? "Kirim Pendaftaran" : "Submit Registration"}</>
              )}
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
