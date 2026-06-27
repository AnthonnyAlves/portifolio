"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";

const sectionIds = ["hero", "sobre", "competencias", "projetos", "experiencia", "contato"];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, setLang, t } = useLanguage();
  const pathname = usePathname();
  const isBlog = pathname.startsWith("/blog");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    for (const id of sectionIds) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isBlog ? "hidden" : ""
      } ${
        scrolled
          ? "bg-canvas/80 backdrop-blur-lg border-b border-hairline"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="flex items-center gap-2 text-ink hover:text-white transition-colors"
        >
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
            <rect width="32" height="32" rx="8" fill="currentColor" className="text-white"/>
            <g fill="none" stroke="#000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="16" y1="6" x2="16" y2="8"/>
              <line x1="10" y1="10" x2="22" y2="10"/>
              <path d="M10 10L8 16c0 1.1.9 2 2 2s2-.9 2-2L10 10z"/>
              <path d="M22 10l-2 6c0 1.1.9 2 2 2s2-.9 2-2L22 10z"/>
              <line x1="16" y1="8" x2="16" y2="22"/>
              <path d="M13 22h6"/>
              <text x="11" y="20" fontSize="4" fill="#000" stroke="none" fontFamily="monospace" fontWeight="bold">&lt;/&gt;</text>
            </g>
          </svg>
        </button>

        <div className="hidden md:flex items-center gap-6">
          {t.nav.map((label, i) => (
            <button
              key={sectionIds[i]}
              onClick={() => scrollTo(sectionIds[i])}
              className={`text-sm transition-colors ${
                active === sectionIds[i]
                  ? "text-white"
                  : "text-ink-muted hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
          <Link
            href="/blog"
            className="text-sm text-ink-muted hover:text-white transition-colors"
          >
            {t.blog.title}
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            className="text-xs font-semibold uppercase tracking-wider px-3 py-1.5 rounded-full bg-surface-1 text-ink-muted hover:text-white transition-colors active:scale-95"
            aria-label="Toggle language"
            style={{ touchAction: "manipulation" }}
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-ink p-2 active:scale-95"
            aria-label="Menu"
            style={{ touchAction: "manipulation" }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <path d="M5 5l10 10M15 5L5 15" />
              ) : (
                <path d="M3 5h14M3 10h14M3 15h14" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-surface-1/95 backdrop-blur-lg border-b border-hairline">
          <div className="px-6 py-4 flex flex-col gap-2">
            {t.nav.map((label, i) => (
              <button
                key={sectionIds[i]}
                onClick={() => scrollTo(sectionIds[i])}
                className={`text-left text-sm py-1.5 transition-colors ${
                  active === sectionIds[i]
                    ? "text-white"
                    : "text-ink-muted hover:text-white"
                }`}
              >
                {label}
              </button>
            ))}
            <Link
              href="/blog"
              className="text-left text-sm py-1.5 text-ink-muted hover:text-white transition-colors"
              onClick={() => setOpen(false)}
            >
              {t.blog.title}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
