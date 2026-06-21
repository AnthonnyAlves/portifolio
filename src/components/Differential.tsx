"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function Differential() {
  const { t } = useLanguage();

  return (
    <section className="py-24 px-6 bg-surface/50">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          {t.differential.title}
        </h2>
        <div className="flex items-center justify-center gap-2 mb-8">
          <div className="w-12 h-1 bg-primary rounded-full" />
          <div className="w-2 h-2 bg-primary-light rounded-full" />
        </div>

        <div className="card-lift rounded-xl border border-primary/20 bg-primary/5 p-8 md:p-10">
          <span className="text-4xl mb-4 block">⚡</span>
          <h3 className="text-xl font-semibold text-primary-light mb-4">
            {t.differential.titleShort}
          </h3>
          <p className="text-muted leading-relaxed max-w-2xl mx-auto">
            {t.differential.description}
          </p>
        </div>
      </div>
    </section>
  );
}
