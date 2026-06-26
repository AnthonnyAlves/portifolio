"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Differential() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="display-lg text-ink mb-10">
          {t.differential.title}
        </h2>

        <div className="gradient-spotlight gradient-spotlight-teal rounded-2xl p-8 md:p-10 text-white differential-card">
          <div className="w-14 h-14 mx-auto mb-5 rounded-2xl bg-white/15 flex items-center justify-center differential-icon">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold mb-4">
            {t.differential.titleShort}
          </h3>
          <p className="text-white/80 leading-relaxed max-w-2xl mx-auto">
            {t.differential.description}
          </p>
        </div>
      </div>
    </section>
  );
}
