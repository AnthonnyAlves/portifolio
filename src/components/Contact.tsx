"use client";

import { contact } from "@/lib/data";
import { useLanguage } from "@/context/LanguageContext";

const links = [
  {
    label: "LinkedIn",
    href: "",
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
      </svg>
    ),
  },
  {
    label: "GitHub",
    href: "",
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8" />
      </svg>
    ),
  },
  {
    label: "E-mail",
    href: "",
    icon: (
      <svg
        width="18"
        height="18"
        viewBox="0 0 16 16"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
      >
        <path d="M14 3H2a1 1 0 00-1 1v8a1 1 0 001 1h12a1 1 0 001-1V4a1 1 0 00-1-1zM2 3l6 5 6-5" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "",
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
        <path d="M8 0C3.58 0 0 3.58 0 8c0 1.58.46 3.05 1.26 4.27L0 16l3.82-1.24C5.12 15.46 6.55 16 8 16c4.42 0 8-3.58 8-8S12.42 0 8 0zm4.74 11.44c-.2.58-.8.94-1.38 1.05-.28.05-.58.07-.92.07-1.36 0-2.49-.49-3.44-1.31a10.4 10.4 0 01-2.44-2.87C3.9 7.27 3.54 6.14 3.54 5c0-.66.22-1.23.61-1.67.3-.34.69-.51 1.1-.51.14 0 .28.01.4.03.15.02.3.11.47.39.22.38.74 1.51.81 1.62.07.11.12.24.07.38s-.13.24-.27.37c-.13.11-.25.22-.36.34-.12.12-.25.25-.11.49.14.24.62 1.02 1.34 1.65.92.81 1.7 1.06 1.94 1.18.17.08.37.06.5-.1.14-.17.6-.71.77-.94.17-.23.34-.2.57-.12.23.08 1.48.7 1.73.83.25.13.42.19.48.3.07.11.07.39-.12.76z" />
      </svg>
    ),
  },
];

const labelMap: Record<string, "linkedin" | "github" | "email" | "whatsapp"> = {
  LinkedIn: "linkedin",
  GitHub: "github",
  "E-mail": "email",
  WhatsApp: "whatsapp",
};

export default function Contact() {
  const { t } = useLanguage();

  const contactLinks = links.map((link) => ({
    ...link,
    label: t.contact[labelMap[link.label] ?? "linkedin"],
    href:
      link.label === "LinkedIn"
        ? contact.linkedin
        : link.label === "GitHub"
          ? contact.github
          : link.label === "E-mail"
            ? `mailto:${contact.email}`
            : contact.whatsapp,
  }));

  return (
    <section id="contato" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-2">
          {t.contact.title}
        </h2>
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-12 h-1 bg-primary rounded-full" />
          <div className="w-2 h-2 bg-primary-light rounded-full" />
        </div>

        <p className="text-muted max-w-md mx-auto mb-10">
          {t.contact.description}
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-xl border border-surface-light bg-surface hover:bg-surface-hover hover:border-primary/30 text-foreground transition-colors"
            >
              {link.icon}
              <span className="text-sm font-medium">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
