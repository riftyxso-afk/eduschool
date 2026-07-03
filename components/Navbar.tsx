"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap, Globe } from "lucide-react";
import { useLang } from "@/lib/lang";
import { cn } from "@/lib/utils";
import settings from "@/data/settings.json";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggleLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = settings.navLinks;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <nav className="container-wide flex items-center justify-between h-16 md:h-20">
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white group-hover:scale-105 transition-transform">
            <GraduationCap size={20} />
          </div>
          <span
            className={cn(
              "font-heading font-bold text-lg transition-colors",
              scrolled ? "text-neutral-900" : "text-white"
            )}
          >
            {settings.siteNameShort}
          </span>
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "px-4 py-2 rounded-[var(--radius-button)] text-sm font-medium transition-colors",
                scrolled
                  ? "text-neutral-600 hover:text-primary hover:bg-primary-lighter"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              )}
            >
              {t(link.label, link.labelEn)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLang}
            className={cn(
              "p-2 rounded-[var(--radius-button)] transition-colors flex items-center gap-1.5 text-sm font-medium",
              scrolled
                ? "text-neutral-600 hover:bg-neutral-100"
                : "text-white/90 hover:bg-white/10"
            )}
            aria-label="Toggle language"
          >
            <Globe size={16} />
            <span className="hidden sm:inline">{lang === "id" ? "EN" : "ID"}</span>
          </button>

          <button
            onClick={() => setMobileOpen(true)}
            className={cn(
              "p-2 rounded-[var(--radius-button)] md:hidden transition-colors",
              scrolled ? "text-neutral-700" : "text-white"
            )}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-white z-50 md:hidden"
          >
            <div className="flex items-center justify-between h-16 px-4 border-b">
              <span className="font-heading font-bold text-lg text-neutral-900">
                {settings.siteNameShort}
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-neutral-700"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>
            <div className="flex flex-col p-4 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-[var(--radius-button)] text-neutral-700 hover:bg-primary-lighter hover:text-primary font-medium transition-colors"
                >
                  {t(link.label, link.labelEn)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
