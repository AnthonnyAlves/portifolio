import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";
import type { Metadata } from "next";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-pearl-ten.vercel.app";

  return {
    title: `${post.title} | Anthonny Baia`,
    description: post.description,
    alternates: {
      canonical: `${baseUrl}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.coverImage ? [post.coverImage] : [`${baseUrl}/og-default.png`],
      locale: post.lang === "pt" ? "pt_BR" : "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
      images: post.coverImage ? [post.coverImage] : [`${baseUrl}/og-default.png`],
    },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post || !post.published) {
    notFound();
  }

  const date = new Date(post.date).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-pearl-ten.vercel.app";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    author: {
      "@type": "Person",
      name: post.author,
      url: baseUrl,
    },
    datePublished: post.date,
    image: post.coverImage || `${baseUrl}/og-default.png`,
    publisher: {
      "@type": "Person",
      name: post.author,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/blog/${post.slug}`,
    },
    keywords: post.tags?.join(", "),
    inLanguage: post.lang === "pt" ? "pt-BR" : "en",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="prose prose-invert max-w-none">
        <Link
          href="/blog"
          className="text-sm text-muted hover:text-foreground transition-colors inline-flex items-center gap-1 mb-6 not-prose"
        >
          ← Voltar ao Blog
        </Link>

        <header className="mb-8">
          <time className="text-sm text-muted">{date}</time>
          <h1 className="text-3xl sm:text-4xl font-bold mt-1">{post.title}</h1>
          <p className="text-lg text-muted mt-2">{post.description}</p>

          <div className="flex items-center gap-3 mt-4">
            <span className="text-sm text-muted">Por {post.author}</span>
            {post.tags && post.tags.length > 0 && (
              <>
                <span className="text-muted">·</span>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary-light"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </>
            )}
          </div>
        </header>

        {post.coverImage && (
          <div className="relative w-full h-64 sm:h-96 mb-8 rounded-xl overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        )}

        <div className="prose prose-invert max-w-none">
          <MDXRemote source={post.content} />
        </div>
      </article>
    </>
  );
}
