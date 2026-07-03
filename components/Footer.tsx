"use client";

import { GraduationCap, MapPin, Phone, Mail, Instagram, Facebook, Youtube } from "lucide-react";
import { useLang } from "@/lib/lang";
import school from "@/data/school.json";
import settings from "@/data/settings.json";

export default function Footer() {
  const { lang, t } = useLang();

  const footerLinkGroups = [
    {
      title: { id: "Navigasi", en: "Navigation" },
      links: settings.footerLinks,
    },
    {
      title: { id: "Program", en: "Programs" },
      links: [
        { label: "PG & TK", labelEn: "Pre-K & KG", href: "/programs#pg-tk" },
        { label: "Sekolah Dasar", labelEn: "Elementary", href: "/programs#sd" },
        { label: "SMP", labelEn: "Middle School", href: "/programs#smp" },
        { label: "SMA", labelEn: "High School", href: "/programs#sma" },
        { label: "Ekstrakurikuler", labelEn: "Extracurricular", href: "/programs#ekstrakurikuler" },
      ],
    },
  ];

  return (
    <footer className="bg-neutral-900 text-neutral-300">
      <div className="container-wide py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white">
                <GraduationCap size={20} />
              </div>
              <span className="font-heading font-bold text-lg text-white">
                {settings.siteNameShort}
              </span>
            </a>
            <p className="text-sm text-neutral-400 leading-relaxed mb-6">
              {t(school.description, school.descriptionEn).substring(0, 120)}...
            </p>
            <div className="flex gap-3">
              <a href={school.social.instagram} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={16} />
              </a>
              <a href={school.social.facebook} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={16} />
              </a>
              <a href={school.social.youtube} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-neutral-800 flex items-center justify-center text-neutral-400 hover:bg-primary hover:text-white transition-colors" aria-label="Youtube">
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {footerLinkGroups.map((group) => (
            <div key={group.title.en}>
              <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
                {t(group.title.id, group.title.en)}
              </h3>
              <ul className="space-y-3">
                {group.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-sm text-neutral-400 hover:text-primary transition-colors"
                    >
                      {t(link.label, link.labelEn)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-heading font-bold text-white text-sm uppercase tracking-wider mb-4">
              {lang === "id" ? "Kontak" : "Contact"}
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-primary" />
                <span className="text-neutral-400">{school.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-primary" />
                <a href={`tel:${school.phone}`} className="text-neutral-400 hover:text-primary transition-colors">
                  {school.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-primary" />
                <a href={`mailto:${school.email}`} className="text-neutral-400 hover:text-primary transition-colors">
                  {school.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-neutral-800">
        <div className="container-wide flex flex-col sm:flex-row items-center justify-between py-6 text-sm text-neutral-500">
          <p>&copy; {new Date().getFullYear()} {settings.siteNameShort}. {lang === "id" ? "Hak Cipta Dilindungi." : "All rights reserved."}</p>
          <p className="mt-2 sm:mt-0">
            {lang === "id" ? "Dibangun dengan" : "Built with"} ❤️ {lang === "id" ? "untuk pendidikan Bali" : "for Bali education"}
          </p>
        </div>
      </div>
    </footer>
  );
}
