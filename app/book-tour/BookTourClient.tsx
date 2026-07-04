"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CalendarDays, Check, Send } from "lucide-react";
import { useLang } from "@/lib/lang";
import { saveBooking, type TourBooking } from "@/lib/store";

export default function BookTourClient() {
  const { lang } = useLang();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    const booking: TourBooking = {
      id: `tour-${Date.now()}`,
      name: data.get("name") as string,
      email: data.get("email") as string,
      phone: data.get("phone") as string,
      date: data.get("date") as string,
      guests: parseInt(data.get("guests") as string) || 1,
      program: data.get("program") as string,
      message: data.get("message") as string || "",
      createdAt: new Date().toISOString(),
      status: "pending",
    };

    saveBooking(booking);
    setSent(true);
    setTimeout(() => {
      setSent(false);
      form.reset();
    }, 3000);
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
            {lang === "id" ? "Jadwalkan Tur Sekolah" : "Schedule a School Tour"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-white/80 max-w-2xl mx-auto"
          >
            {lang === "id"
              ? "Kunjungi kampus kami dan lihat langsung lingkungan belajar EduSchool"
              : "Visit our campus and see the EduSchool learning environment firsthand"}
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-[var(--radius-card)] border border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary-lighter dark:bg-primary/20 flex items-center justify-center text-primary">
                <CalendarDays size={20} />
              </div>
              <div>
                <h2 className="font-heading font-bold text-lg text-neutral-900 dark:text-white">
                  {lang === "id" ? "Formulir Tur" : "Tour Form"}
                </h2>
                <p className="text-sm text-neutral-500 dark:text-neutral-400">
                  {lang === "id" ? "Isi detail di bawah untuk menjadwalkan kunjungan" : "Fill in details below to schedule a visit"}
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                    {lang === "id" ? "Nama Lengkap" : "Full Name"}
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-[var(--radius-button)] border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-[var(--radius-button)] border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                    {lang === "id" ? "No. WhatsApp" : "WhatsApp"}
                  </label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    className="w-full px-4 py-3 rounded-[var(--radius-button)] border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                    {lang === "id" ? "Tanggal Kunjungan" : "Visit Date"}
                  </label>
                  <input
                    name="date"
                    type="date"
                    required
                    className="w-full px-4 py-3 rounded-[var(--radius-button)] border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                    {lang === "id" ? "Jumlah Pengunjung" : "Number of Guests"}
                  </label>
                  <input
                    name="guests"
                    type="number"
                    min={1}
                    max={10}
                    defaultValue={1}
                    required
                    className="w-full px-4 py-3 rounded-[var(--radius-button)] border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                    {lang === "id" ? "Program" : "Program"}
                  </label>
                  <select
                    name="program"
                    className="w-full px-4 py-3 rounded-[var(--radius-button)] border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                  >
                    <option value="PG & TK">PG & TK</option>
                    <option value="SD">SD</option>
                    <option value="SMP">SMP</option>
                    <option value="SMA">SMA</option>
                    <option value="Semua">All</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1.5">
                  {lang === "id" ? "Pesan Tambahan" : "Additional Message"}
                </label>
                <textarea
                  name="message"
                  rows={3}
                  className="w-full px-4 py-3 rounded-[var(--radius-button)] border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-[var(--radius-button)] bg-primary text-white font-semibold hover:bg-primary-dark transition-all active:scale-[0.98]"
              >
                {sent ? (
                  <><Check size={18} /> {lang === "id" ? "Permintaan Terkirim!" : "Request Sent!"}</>
                ) : (
                  <><Send size={18} /> {lang === "id" ? "Kirim Permintaan Tur" : "Submit Tour Request"}</>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
}
