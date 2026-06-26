"use client";

import { certifications } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function Certifications() {
  const { t, lang } = useLanguage();

  return (
    <section id="certificacoes" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="display-lg text-ink mb-10">
          {t.certifications.title}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications[lang].map((cert) => (
            <div
              key={cert.title}
              className="card-surface p-5"
            >
              <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center mb-3">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="text-white"
                >
                  <path d="M8 1l1.5 3.5L13 5l-2.5 2.5L11 12 8 9.5 5 12l.5-4.5L3 5l3.5-.5z" />
                </svg>
              </div>
              <h3 className="font-medium text-white text-sm">
                {cert.title}
              </h3>
              <p className="text-xs text-ink-muted mt-1">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
