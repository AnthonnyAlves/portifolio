"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";

const sectionIds = ["hero", "sobre", "competencias", "projetos", "experiencia", "contato"];

export default function Navbar() {
  const [active, setActive] = useState("");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggle: toggleTheme } = useTheme();
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
          ? "bg-background/80 backdrop-blur-lg border-b border-surface-light"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("hero")}
          className="text-base sm:text-lg font-semibold tracking-tight hover:text-primary-light transition-colors"
        >
          AB
        </button>

        <div className="hidden md:flex items-center gap-6">
          {t.nav.map((label, i) => (
            <button
              key={sectionIds[i]}
              onClick={() => scrollTo(sectionIds[i])}
              className={`text-sm transition-colors ${
                active === sectionIds[i]
                  ? "text-primary-light"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {label}
            </button>
          ))}
          <Link
            href="/blog"
            className="text-sm text-muted hover:text-foreground transition-colors"
          >
            {t.blog.title}
          </Link>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setLang(lang === "pt" ? "en" : "pt")}
            className="text-xs font-semibold uppercase tracking-wider px-2.5 py-1.5 rounded-md border border-surface-light text-muted hover:text-foreground transition-colors active:scale-95"
            aria-label="Toggle language"
            style={{ touchAction: "manipulation" }}
          >
            {lang === "pt" ? "EN" : "PT"}
          </button>

          <button
            onClick={toggleTheme}
            className="text-muted hover:text-foreground transition-colors p-2 active:scale-95"
            aria-label="Toggle theme"
            style={{ touchAction: "manipulation" }}
          >
            {theme === "dark" ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
              </svg>
            )}
          </button>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-foreground p-2 active:scale-95"
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
        <div className="md:hidden bg-surface/95 backdrop-blur-lg border-b border-surface-light">
          <div className="px-6 py-4 flex flex-col gap-2">
            {t.nav.map((label, i) => (
              <button
                key={sectionIds[i]}
                onClick={() => scrollTo(sectionIds[i])}
                className={`text-left text-sm py-1.5 transition-colors ${
                  active === sectionIds[i]
                    ? "text-primary-light"
                    : "text-muted hover:text-foreground"
                }`}
              >
                {label}
              </button>
            ))}
            <Link
              href="/blog"
              className="text-left text-sm py-1.5 text-muted hover:text-foreground transition-colors"
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
