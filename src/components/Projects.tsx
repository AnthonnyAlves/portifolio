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
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          {t.projects.title}
        </h2>
        <div className="flex items-center gap-2 mb-10">
          <div className="w-12 h-1 bg-primary rounded-full" />
          <div className="w-2 h-2 bg-primary-light rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((project) => {
            const Wrapper = project.url ? "a" : "div";
            return (
              <Wrapper
                key={project.title}
                href={project.url}
                target={project.url ? "_blank" : undefined}
                rel={project.url ? "noopener noreferrer" : undefined}
                className={`card-lift rounded-xl border ${
                  project.highlight
                    ? "border-primary/40 bg-primary/5"
                    : "border-surface-light bg-surface"
                } p-6 relative ${project.url ? "cursor-pointer hover:border-primary/60 transition-colors" : ""}`}
              >
                {project.highlight && (
                  <span className="absolute -top-2.5 right-4 text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary text-white">
                    {t.projects.highlight}
                  </span>
                )}
                <h3 className="font-semibold text-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-surface-light text-muted"
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
