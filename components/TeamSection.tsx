"use client";

import { motion } from "framer-motion";
import { useLang } from "@/lib/lang";
import team from "@/data/team.json";
import SectionHeader from "./SectionHeader";

export default function TeamSection() {
  const { t } = useLang();

  return (
    <section className="py-20 md:py-28 bg-neutral-50">
      <div className="container-wide">
        <SectionHeader
          title={{ id: "Tim Pengajar", en: "Teaching Team" }}
          subtitle={{ id: "Tenaga pendidik profesional dan berpengalaman", en: "Professional and experienced educators" }}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-primary to-secondary mx-auto mb-4 flex items-center justify-center text-white text-3xl font-heading font-bold group-hover:scale-105 transition-transform">
                {member.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
              </div>
              <h3 className="font-heading font-bold text-neutral-900 mb-0.5">
                {member.name}
              </h3>
              <p className="text-sm text-primary font-medium mb-2">
                {t(member.role, member.roleEn)}
              </p>
              <p className="text-sm text-neutral-500 leading-relaxed max-w-xs mx-auto">
                {t(member.bio, member.bioEn)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
