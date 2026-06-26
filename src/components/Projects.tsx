"use client";

import { projects } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

export default function Projects() {
  const { t, lang } = useLanguage();

  const sorted = [...projects[lang]].sort(
    (a, b) => Number(b.highlight) - Number(a.highlight)
  );

  return (
    <section id="projetos" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="display-lg text-ink mb-10">
          {t.projects.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((project) => {
            const Wrapper = project.url ? "a" : "div";
            const isHighlighted = project.highlight;
            return (
              <Wrapper
                key={project.title}
                href={project.url}
                target={project.url ? "_blank" : undefined}
                rel={project.url ? "noopener noreferrer" : undefined}
                className={`rounded-2xl p-6 relative transition-transform hover:scale-[1.02] ${
                  isHighlighted
                    ? "gradient-spotlight gradient-spotlight-violet text-white overflow-visible"
                    : "card-surface"
                } ${project.url ? "cursor-pointer" : ""}`}
              >
                {isHighlighted && (
                  <span className="absolute -top-3 left-6 text-xs font-semibold px-3 py-1 rounded-full bg-white text-black shadow-lg">
                    {t.projects.highlight}
                  </span>
                )}
                <h3 className="font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className={`text-sm leading-relaxed mb-4 ${isHighlighted ? "text-white/80" : "text-ink-muted"}`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2.5 py-1 rounded-full ${
                        isHighlighted
                          ? "bg-white/20 text-white"
                          : "bg-surface-2 text-ink-muted"
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Wrapper>
            );
          })}
        </div>
      </div>
    </section>
  );
}
