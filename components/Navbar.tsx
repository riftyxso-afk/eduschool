"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, GraduationCap, Globe, Moon, Sun } from "lucide-react";
import { useLang } from "@/lib/lang";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";
import settings from "@/data/settings.json";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggleLang, t } = useLang();
  const { dark, toggle: toggleTheme } = useTheme();

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
          ? "bg-white/95 backdrop-blur-md shadow-sm dark:bg-neutral-900/95"
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
              scrolled ? "text-neutral-900 dark:text-white" : "text-white"
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
                  ? "text-neutral-600 dark:text-neutral-300 hover:text-primary dark:hover:text-primary hover:bg-primary-lighter dark:hover:bg-primary/10"
                  : "text-white/90 hover:text-white hover:bg-white/10"
              )}
            >
              {t(link.label, link.labelEn)}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={toggleTheme}
            className={cn(
              "p-2 rounded-[var(--radius-button)] transition-colors",
              scrolled
                ? "text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                : "text-white/90 hover:bg-white/10"
            )}
            aria-label="Toggle dark mode"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          <button
            onClick={toggleLang}
            className={cn(
              "p-2 rounded-[var(--radius-button)] transition-colors flex items-center gap-1.5 text-sm font-medium",
              scrolled
                ? "text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
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
              scrolled ? "text-neutral-700 dark:text-neutral-300" : "text-white"
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
            className="fixed inset-0 bg-white dark:bg-neutral-900 z-50 md:hidden"
          >
            <div className="flex items-center justify-between h-16 px-4 border-b dark:border-neutral-700">
              <span className="font-heading font-bold text-lg text-neutral-900 dark:text-white">
                {settings.siteNameShort}
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-neutral-700 dark:text-neutral-300"
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
                  className="px-4 py-3 rounded-[var(--radius-button)] text-neutral-700 dark:text-neutral-300 hover:bg-primary-lighter dark:hover:bg-primary/10 hover:text-primary font-medium transition-colors"
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
