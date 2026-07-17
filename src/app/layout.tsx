import type { Metadata, Viewport } from "next";
import { Inter, Mona_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const monaSans = Mona_Sans({
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "https://anthonny-baia.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: "Anthonny Baia | Estudante de Direito & Técnico em Informática",
    template: "%s | Anthonny Baia",
  },
  description:
    "Portfólio profissional de Anthonny Baia — unindo Direito, Tecnologia e Inteligência Artificial para criar soluções práticas e eficientes.",
  openGraph: {
    title: "Anthonny Baia | Direito & Tecnologia",
    description:
      "Explorando a interseção entre Direito, Tecnologia e Inteligência Artificial.",
    type: "website",
    locale: "pt_BR",
    url: baseUrl,
    siteName: "Anthonny Baia | Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anthonny Baia | Direito & Tecnologia",
    description:
      "Explorando a interseção entre Direito, Tecnologia e Inteligência Artificial.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Anthonny Baia | Portfolio",
    url: baseUrl,
    author: {
      "@type": "Person",
      name: "Anthonny Baia",
      jobTitle: "Estudante de Direito & Técnico em Informática",
      url: baseUrl,
    },
  };

  const personJsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Anthonny Baia",
    jobTitle: "Estudante de Direito & Técnico em Informática",
    url: baseUrl,
    sameAs: [
      "https://www.linkedin.com/in/anthonny-baia",
      "https://github.com/anthonny-baia",
    ],
  };

  return (
    <html lang="pt-BR" className={`${inter.variable} ${monaSans.variable} h-full antialiased`} data-theme="dark" suppressHydrationWarning>
      <head>
        <meta name="msvalidate.01" content="9B368E314BD278644408C9CFB54E9D30" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className="min-h-full">
        <ThemeProvider>
          <LanguageProvider>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
