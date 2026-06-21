"use client";

import { certifications } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function Certifications() {
  const { t, lang } = useLanguage();

  return (
    <section id="certificacoes" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          {t.certifications.title}
        </h2>
        <div className="flex items-center gap-2 mb-10">
          <div className="w-12 h-1 bg-primary rounded-full" />
          <div className="w-2 h-2 bg-primary-light rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications[lang].map((cert) => (
            <div
              key={cert.title}
              className="card-lift rounded-xl border border-surface-light bg-surface p-5"
            >
              <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-primary-light"
                >
                  <path d="M8 1l1.5 3.5L13 5l-2.5 2.5L11 12 8 9.5 5 12l.5-4.5L3 5l3.5-.5z" />
                </svg>
              </div>
              <h3 className="font-medium text-foreground text-sm">
                {cert.title}
              </h3>
              <p className="text-xs text-muted-dark mt-1">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
