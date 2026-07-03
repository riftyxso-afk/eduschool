"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";
import type { Lang } from "./utils";

interface LangContextType {
  lang: Lang;
  toggleLang: () => void;
  t: (id: string, en: string) => string;
}

const LangContext = createContext<LangContextType | undefined>(undefined);

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("id");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "id" ? "en" : "id"));
  }, []);

  const t = useCallback(
    (id: string, en: string) => (lang === "id" ? id : en),
    [lang]
  );

  return (
    <LangContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export function useLang() {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used within LangProvider");
  return ctx;
}
