"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t, lang } = useLanguage();

  return (
    <section id="sobre" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          {t.about.title}
        </h2>
        <div className="flex items-center gap-2 mb-10">
          <div className="w-12 h-1 bg-primary rounded-full" />
          <div className="w-2 h-2 bg-primary-light rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <div>
              <h3 className="text-primary-light font-semibold mb-2">
                {t.about.formation}
              </h3>
              <p className="text-muted leading-relaxed">
                {t.about.formationText}
              </p>
            </div>
            <div>
              <h3 className="text-primary-light font-semibold mb-2">
                {t.about.interests}
              </h3>
              <p className="text-muted leading-relaxed">
                {t.about.interestsText}
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-primary-light font-semibold mb-2">
                {t.about.experience}
              </h3>
              <p className="text-muted leading-relaxed">
                {t.about.backgroundText}
              </p>
            </div>
            <div>
              <h3 className="text-primary-light font-semibold mb-2">{t.about.goals}</h3>
              <p className="text-muted leading-relaxed">
                {t.about.goalsText}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
