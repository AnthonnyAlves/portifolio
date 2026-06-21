"use client";

import { skills } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

const categoryMeta: Record<
  string,
  { labelKey: string; icon: string; color: string }
> = {
  direito: { labelKey: "direito", icon: "⚖️", color: "border-blue-500/30" },
  tecnologia: { labelKey: "tecnologia", icon: "🖥️", color: "border-cyan-500/30" },
  inteligenciaArtificial: { labelKey: "inteligenciaArtificial", icon: "🤖", color: "border-purple-500/30" },
  ferramentas: { labelKey: "ferramentas", icon: "🛠️", color: "border-amber-500/30" },
  idiomas: { labelKey: "idiomas", icon: "🌐", color: "border-green-500/30" },
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
    <section id="competencias" className="py-24 px-6 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          {t.skills.title}
        </h2>
        <div className="flex items-center gap-2 mb-10">
          <div className="w-12 h-1 bg-primary rounded-full" />
          <div className="w-2 h-2 bg-primary-light rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills[lang]).map(([key, items]) => {
            const meta = categoryMeta[key] ?? {
              labelKey: key,
              icon: "📌",
              color: "border-surface-light",
            };

            if (!Array.isArray(items)) return null;

            const label = (categoryLabels[lang] ?? categoryLabels.pt)[meta.labelKey] ?? key;

            return (
              <div
                key={key}
                className={`card-lift rounded-xl border ${meta.color} bg-surface p-6 hover:bg-surface-hover`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-xl">{meta.icon}</span>
                  <h3 className="font-semibold text-foreground">{label}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map((item) => {
                    if (typeof item === "string") {
                      return (
                        <li
                          key={item}
                          className="text-sm text-muted flex items-center gap-2"
                        >
                          <span className="w-1 h-1 rounded-full bg-muted-dark" />
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
                          className="text-sm text-muted flex items-center justify-between"
                        >
                          <span className="flex items-center gap-2">
                            <span className="w-1 h-1 rounded-full bg-muted-dark" />
                            {item.language}
                          </span>
                          <span className="text-xs text-muted-dark">
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
