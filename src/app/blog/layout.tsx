import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog | Anthonny Baia",
  description:
    "Artigos sobre Direito, Tecnologia e Inteligência Artificial por Anthonny Baia.",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-surface-1 text-ink">
      <header className="border-b border-hairline bg-surface-2/90 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-white hover:text-accent-blue transition-colors"
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" fill="currentColor" className="text-white"/>
              <path d="M8 24V8h3.5l4.5 10L20.5 8H24v16h-2.5V13l-4 9h-1l-4-9v11H8z" fill="#000"/>
            </svg>
          </Link>
          <Link
            href="/"
            className="text-sm text-ink-muted hover:text-white transition-colors"
          >
            ← Voltar ao Portfolio
          </Link>
        </div>
      </header>
      <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {children}
      </main>
    </div>
  );
}
