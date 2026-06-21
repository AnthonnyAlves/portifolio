"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import foto from "../../public/foto.jpeg";
import { personalInfo, contact } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const { t, lang } = useLanguage();
  const [displayed, setDisplayed] = useState(t.hero.subtitle);

  useEffect(() => {
    setDisplayed("");
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(t.hero.subtitle.slice(0, i));
      if (i >= t.hero.subtitle.length) clearInterval(interval);
    }, 25);
    return () => clearInterval(interval);
  }, [t.hero.subtitle]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 pt-16 overflow-hidden"
    >
      <div className="hero-gradient" />
      <div className="w-full max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-2 ring-primary/20 shadow-xl shadow-primary/10">
            <Image
                  src={foto}
                  alt={personalInfo.name}
                  fill
                  sizes="192px"
                  loading="eager"
                  className="object-cover"
                />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-1 sm:mb-2">
          {personalInfo.name}
        </h1>

        <p className="font-signature text-xl sm:text-2xl md:text-3xl text-primary-light/70 mb-3 sm:mb-4">
          {personalInfo.name}
        </p>

        <p className="text-base sm:text-lg md:text-xl text-primary-light font-medium mb-2 sm:mb-3">
          {personalInfo.title[lang]}
        </p>

        <p className="text-sm sm:text-base md:text-lg text-muted max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed min-h-[3rem] sm:min-h-[3.5rem]">
          {displayed}
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href="/curriculo.pdf"
            download
            className="btn-scale inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg bg-primary hover:bg-primary-dark text-white text-sm sm:text-base font-medium transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" className="sm:w-4 sm:h-4">
              <path d="M8 1v10M4 7l4 4 4-4M2 13h12" />
            </svg>
            {t.hero.resume}
          </a>
          <a
            href={contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-scale inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-surface-light hover:border-primary-light text-foreground hover:text-primary-light text-sm sm:text-base font-medium transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className="sm:w-4 sm:h-4">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="#contato"
            className="btn-scale inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg border border-surface-light hover:border-accent text-foreground hover:text-accent text-sm sm:text-base font-medium transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="sm:w-4 sm:h-4">
              <path d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 3l6 5 6-5" />
            </svg>
            {t.hero.contact}
          </a>
        </div>
      </div>
    </section>
  );
}
