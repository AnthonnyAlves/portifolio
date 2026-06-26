"use client";

import { experience, education } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

function gradeColor(grade: number | null): string {
  if (grade === null) return "bg-white/10 text-ink-muted";
  if (grade >= 9) return "bg-green-500/15 text-green-400";
  if (grade >= 7) return "bg-accent-blue/15 text-accent-blue";
  return "bg-amber-500/15 text-amber-400";
}

export default function Experience() {
  const { t, lang } = useLanguage();

  return (
    <section id="experiencia" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="display-lg text-ink mb-10">
          {t.experience.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              {t.experience.professional}
            </h3>
            <div className="space-y-8">
              {experience[lang].map((exp, i) =>
                exp.role ? (
                  <div key={exp.role} className="relative pl-6 border-l border-hairline">
                    <div className="absolute left-0 top-1 w-3 h-3 -translate-x-1.5 rounded-full bg-white timeline-dot" />
                    <h4 className="font-semibold text-white">{exp.role}</h4>
                    <p className="text-sm text-ink-muted mb-1">
                      {exp.company} · {exp.period}
                    </p>
                    <p className="text-sm text-ink-muted leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ) : (
                  <div
                    key={`empty-${i}`}
                    className="relative pl-6 border-l border-dashed border-white/10"
                  >
                    <div className="absolute left-0 top-1 w-3 h-3 -translate-x-1.5 rounded-full bg-white/10" />
                    <p className="text-sm text-ink-muted/60 italic">
                      {t.experience.add}
                    </p>
                  </div>
                )
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-6">
              {t.experience.education}
            </h3>
            <div className="space-y-8">
              {education[lang].map((edu) => (
                <div key={edu.degree} className="relative pl-6 border-l border-hairline">
                  <div className="absolute left-0 top-1 w-3 h-3 -translate-x-1.5 rounded-full bg-accent-blue timeline-dot" />

                  <div className="flex items-center gap-3 flex-wrap mb-1">
                    <h4 className="font-semibold text-white">
                      {edu.degree}
                    </h4>
                    {"scholarship" in edu && edu.scholarship && (
                      <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-accent-blue/15 text-accent-blue border border-accent-blue/20">
                        {t.scholarship}
                      </span>
                    )}
                  </div>

                  <p className="text-sm text-ink-muted mb-1">
                    {edu.institution} · {edu.period}
                  </p>
                  <p className="text-sm text-ink-muted leading-relaxed mb-4">
                    {edu.description}
                  </p>

                  {"subjects" in edu && edu.subjects && edu.subjects.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {edu.subjects.map((subj) => (
                        <div
                          key={subj.name}
                          className="flex items-center justify-between gap-1 rounded-lg bg-surface-1 border border-hairline px-3 py-1.5"
                        >
                          <span className="text-xs text-ink-muted truncate">
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
