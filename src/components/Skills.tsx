"use client";

import { skills } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

const categoryMeta: Record<
  string,
  { labelKey: string; icon: string }
> = {
  direito: { labelKey: "direito", icon: "⚖️" },
  tecnologia: { labelKey: "tecnologia", icon: "🖥️" },
  inteligenciaArtificial: { labelKey: "inteligenciaArtificial", icon: "🤖" },
  ferramentas: { labelKey: "ferramentas", icon: "🛠️" },
  idiomas: { labelKey: "idiomas", icon: "🌐" },
};

const categoryLabels: Record<string, Record<string, string>> = {
  pt: {
    direito: "Direito",
    tecnologia: "Tecnologia",
    inteligenciaArtificial: "Inteligência Artificial",
    ferramentas: "Ferramentas",
    idiomas: "Idiomas",
  },
  en: {
    direito: "Law",
    tecnologia: "Technology",
    inteligenciaArtificial: "Artificial Intelligence",
    ferramentas: "Tools",
    idiomas: "Languages",
  },
};

export default function Skills() {
  const { t, lang } = useLanguage();

  return (
    <section id="competencias" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="display-lg text-ink mb-10">
          {t.skills.title}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills[lang]).map(([key, items]) => {
            const meta = categoryMeta[key] ?? {
              labelKey: key,
              icon: "📌",
            };

            if (!Array.isArray(items)) return null;

            const label = (categoryLabels[lang] ?? categoryLabels.pt)[meta.labelKey] ?? key;

            return (
              <div
                key={key}
                className="card-surface p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">{meta.icon}</span>
                  <h3 className="font-semibold text-white">{label}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map((item) => {
                    if (typeof item === "string") {
                      return (
                        <li
                          key={item}
                          className="text-sm text-ink-muted flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-white/20" />
                          {item}
                        </li>
                      );
                    }
                    if (
                      typeof item === "object" &&
                      item !== null &&
                      "language" in item
                    ) {
                      return (
                        <li
                          key={item.language}
                          className="text-sm text-ink-muted flex items-center justify-between"
                        >
                          <span className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-white/20" />
                            {item.language}
                          </span>
                          <span className="text-xs text-ink-muted">
                            {item.level}
                          </span>
                        </li>
                      );
                    }
                    return null;
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
