"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-hairline py-8 px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-ink-muted">
        <p>© {new Date().getFullYear()} Anthonny Baia. {t.footer}</p>
        <p>{t.made}</p>
      </div>
    </footer>
  );
}
