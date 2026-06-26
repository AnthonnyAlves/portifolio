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

        <div className="gradient-spotlight gradient-spotlight-violet rounded-2xl p-8 md:p-10 text-white">
          <span className="text-4xl mb-4 block">⚡</span>
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
