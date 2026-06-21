"use client";

import { experience, education } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

function gradeColor(grade: number | null): string {
  if (grade === null) return "bg-muted-dark/40 text-muted-dark";
  if (grade >= 9) return "bg-green-500/15 text-green-400";
  if (grade >= 7) return "bg-blue-500/15 text-blue-400";
  return "bg-amber-500/15 text-amber-400";
}

export default function Experience() {
  const { t, lang } = useLanguage();

  return (
    <section id="experiencia" className="py-24 px-6 bg-surface/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          {t.experience.title}
        </h2>
        <div className="flex items-center gap-2 mb-10">
          <div className="w-12 h-1 bg-primary rounded-full" />
          <div className="w-2 h-2 bg-primary-light rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-semibold text-primary-light mb-6">
              {t.experience.professional}
            </h3>
            <div className="space-y-8">
              {experience[lang].map((exp, i) =>
                exp.role ? (
                  <div key={exp.role} className="relative pl-6 border-l border-surface-light">
                    <div className="absolute left-0 top-1 w-3 h-3 -translate-x-1.5 rounded-full bg-primary timeline-dot" />
                    <h4 className="font-semibold text-foreground">{exp.role}</h4>
                    <p className="text-sm text-muted-dark mb-1">
                      {exp.company} · {exp.period}
                    </p>
                    <p className="text-sm text-muted leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ) : (
                  <div
                    key={`empty-${i}`}
                    className="relative pl-6 border-l border-dashed border-muted-dark/40"
                  >
                    <div className="absolute left-0 top-1 w-3 h-3 -translate-x-1.5 rounded-full bg-muted-dark/40" />
                    <p className="text-sm text-muted-dark/60 italic">
                      {t.experience.add}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-primary-light mb-6">
              {t.experience.education}
            </h3>
            <div className="space-y-8">
              {education[lang].map((edu) => (
                <div key={edu.degree} className="relative pl-6 border-l border-surface-light">
                  <div className="absolute left-0 top-1 w-3 h-3 -translate-x-1.5 rounded-full bg-accent timeline-dot" />

                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <h4 className="font-semibold text-foreground">
                      {edu.degree}
                    </h4>
                    {"scholarship" in edu && edu.scholarship && (
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary/15 text-primary-light border border-primary/20">
                        {t.scholarship}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-muted-dark mb-1">
                    {edu.institution} · {edu.period}
                  </p>
                  <p className="text-sm text-muted leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  {"subjects" in edu && edu.subjects && edu.subjects.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {edu.subjects.map((subj) => (
                        <div
                          key={subj.name}
                          className="flex items-center justify-between gap-1 rounded-lg bg-surface/80 border border-surface-light px-3 py-1.5"
                        >
                          <span className="text-xs text-muted truncate">
                            {subj.name}
                          </span>
                          <span
                            className={`text-xs font-semibold px-1.5 py-0.5 rounded ${gradeColor(subj.grade)}`}
                          >
                            {subj.grade ?? "—"}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
