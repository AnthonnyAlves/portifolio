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
    <div className="min-h-screen bg-canvas text-ink">
      <header className="border-b border-hairline bg-canvas/80 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
          <Link
            href="/"
            className="text-base sm:text-lg font-semibold tracking-tight text-ink hover:text-white transition-colors"
          >
            AB
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
