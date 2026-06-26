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
      <div className="w-full max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-6 sm:mb-8 flex justify-center">
          <div className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-2 ring-white/10">
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

        <h1 className="display-xxl mb-4 sm:mb-6">
          {personalInfo.name}
        </h1>

        <p className="text-ink-muted body-lg mb-6 sm:mb-8 max-w-2xl mx-auto min-h-[2rem]">
          {displayed}
        </p>

        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4">
          <a
            href="/curriculo.pdf"
            download
            className="pill pill-primary"
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
            className="pill pill-secondary"
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="currentColor" className="sm:w-4 sm:h-4">
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
            LinkedIn
          </a>
          <a
            href="#contato"
            className="pill pill-outline"
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
