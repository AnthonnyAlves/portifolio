"use client";

import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { pt, en } from "@/lib/translations";

type Lang = "pt" | "en";
type Translations = typeof pt;

const LanguageContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}>({
  lang: "pt",
  setLang: () => {},
  t: pt,
});

function getSavedLang(): Lang {
  try {
    const saved = localStorage.getItem("lang");
    if (saved === "pt" || saved === "en") return saved;
  } catch {}
  return "pt";
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("pt");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setLang(getSavedLang());
    setReady(true);
  }, []);

  useEffect(() => {
    if (!ready) return;
    document.documentElement.setAttribute("lang", lang === "pt" ? "pt-BR" : "en");
    try { localStorage.setItem("lang", lang); } catch {}
  }, [lang, ready]);

  const t = lang === "pt" ? pt : en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => useContext(LanguageContext);
