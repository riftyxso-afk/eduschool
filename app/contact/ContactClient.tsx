"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Send, Check } from "lucide-react";
import { useLang } from "@/lib/lang";
import school from "@/data/school.json";

export default function ContactClient() {
  const { lang } = useLang();
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);
    const name = data.get("name") as string;
    const email = data.get("email") as string;
    const message = data.get("message") as string;
    const wa = `https://wa.me/${school.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
      `Halo, saya ${name} (${email}). ${message}`
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
            {lang === "id" ? "Hubungi Kami" : "Contact Us"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-white/80 max-w-2xl mx-auto"
          >
            {lang === "id"
              ? "Silakan hubungi kami untuk informasi lebih lanjut"
              : "Please contact us for more information"}
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-heading font-bold text-neutral-900 mb-8">
                {lang === "id" ? "Informasi Kontak" : "Contact Information"}
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-lighter flex items-center justify-center text-primary shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-neutral-900 mb-1">
                      {lang === "id" ? "Alamat" : "Address"}
                    </h3>
                    <p className="text-neutral-500">{school.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-lighter flex items-center justify-center text-primary shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-neutral-900 mb-1">Telepon</h3>
                    <a href={`tel:${school.phone}`} className="text-neutral-500 hover:text-primary transition-colors">
                      {school.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-lighter flex items-center justify-center text-primary shrink-0">
                    <Mail size={22} />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-neutral-900 mb-1">Email</h3>
                    <a href={`mailto:${school.email}`} className="text-neutral-500 hover:text-primary transition-colors">
                      {school.email}
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    {lang === "id" ? "Nama Lengkap" : "Full Name"}
                  </label>
                  <input
                    name="name"
                    required
                    className="w-full px-4 py-3 rounded-[var(--radius-button)] border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-neutral-900"
                    placeholder={lang === "id" ? "Masukkan nama Anda" : "Enter your name"}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full px-4 py-3 rounded-[var(--radius-button)] border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-neutral-900"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-neutral-700 mb-1.5">
                    {lang === "id" ? "Pesan" : "Message"}
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-[var(--radius-button)] border border-neutral-300 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-neutral-900 resize-none"
                    placeholder={lang === "id" ? "Tulis pesan Anda..." : "Write your message..."}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-[var(--radius-button)] bg-primary text-white font-semibold hover:bg-primary-dark transition-all active:scale-[0.98]"
                >
                  {sent ? (
                    <><Check size={18} /> {lang === "id" ? "Terkirim!" : "Sent!"}</>
                  ) : (
                    <><Send size={18} /> {lang === "id" ? "Kirim Pesan" : "Send Message"}</>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
