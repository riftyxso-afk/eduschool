"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/lang";
import school from "@/data/school.json";
import team from "@/data/team.json";

export default function AboutClient() {
  const { lang, t } = useLang();

  return (
    <>
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 gradient-hero-dark text-white">
        <div className="container-wide text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-heading font-bold"
          >
            {lang === "id" ? "Tentang Kami" : "About Us"}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-white/80 max-w-2xl mx-auto"
          >
            {school.tagline}
          </motion.p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-6">
                {lang === "id" ? "Visi & Misi" : "Vision & Mission"}
              </h2>
              <div className="space-y-6">
                <div className="rounded-[var(--radius-card)] border border-neutral-200 p-6">
                  <h3 className="font-heading font-bold text-lg text-primary mb-2">
                    {lang === "id" ? "Visi" : "Vision"}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {lang === "id"
                      ? "Menjadi lembaga pendidikan unggulan di Asia Tenggara yang menghasilkan generasi berkarakter, berwawasan global, dan berakar pada budaya Bali."
                      : "To become a leading educational institution in Southeast Asia that produces character-driven, globally-minded generations rooted in Balinese culture."}
                  </p>
                </div>
                <div className="rounded-[var(--radius-card)] border border-neutral-200 p-6">
                  <h3 className="font-heading font-bold text-lg text-primary mb-2">
                    {lang === "id" ? "Misi" : "Mission"}
                  </h3>
                  <ul className="space-y-3 text-neutral-600">
                    {[
                      { id: "Menyelenggarakan pendidikan holistik berbasis STEAM", en: "Organize holistic STEAM-based education" },
                      { id: "Mengembangkan potensi akademik dan non-akademik siswa", en: "Develop students' academic and non-academic potential" },
                      { id: "Menanamkan nilai-nilai karakter dan kearifan lokal Bali", en: "Instill character values and local Balinese wisdom" },
                      { id: "Mempersiapkan siswa menjadi pemimpin global", en: "Prepare students to become global leaders" },
                    ].map((m, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-6 h-6 rounded-full bg-primary-lighter text-primary flex items-center justify-center shrink-0 mt-0.5 text-xs font-bold">
                          {i + 1}
                        </span>
                        <span>{t(m.id, m.en)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-[var(--radius-card)] bg-neutral-50 p-8"
            >
              <h2 className="text-3xl font-heading font-bold text-neutral-900 mb-6">
                {lang === "id" ? "Sejarah Singkat" : "Brief History"}
              </h2>
              <div className="space-y-4 text-neutral-600 leading-relaxed">
                {[
                  { id: `EduSchool Bali didirikan pada tahun ${school.founded} oleh sekelompok pendidik dan profesional yang peduli akan masa depan pendidikan di Bali.`, en: `EduSchool Bali was founded in ${school.founded} by a group of educators and professionals who care about the future of education in Bali.` },
                  { id: "Berawal dari sebuah sekolah kecil dengan 50 siswa, kami terus berkembang menjadi salah satu sekolah terkemuka di Bali dengan lebih dari 1.200 siswa.", en: "Starting as a small school with 50 students, we have grown into one of Bali's leading schools with over 1,200 students." },
                  { id: "Kami percaya bahwa setiap anak memiliki potensi unik yang perlu dikembangkan melalui pendekatan pendidikan yang tepat.", en: "We believe that every child has unique potential that needs to be developed through the right educational approach." },
                ].map((p, i) => (
                  <p key={i}>{t(p.id, p.en)}</p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-neutral-50">
        <div className="container-wide">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-heading font-bold text-center text-neutral-900 mb-12"
          >
            {lang === "id" ? "Tim Kami" : "Our Team"}
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, i) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="text-center"
              >
                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center text-white text-2xl font-heading font-bold">
                  {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                </div>
                <h3 className="font-heading font-bold text-neutral-900">{member.name}</h3>
                <p className="text-sm text-primary font-medium">{t(member.role, member.roleEn)}</p>
                <p className="text-sm text-neutral-500 mt-1">{t(member.bio, member.bioEn)}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
