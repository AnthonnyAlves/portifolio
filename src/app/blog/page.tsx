import Link from "next/link";
import { getAllPosts, PostMeta } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-surface-1">
      <div className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="display-lg text-white mb-4">Blog</h1>
        <p className="text-ink-muted mb-10 body-lg">
          Artigos sobre Direito, Tecnologia e Inovação.
        </p>

        {posts.length === 0 ? (
          <p className="text-ink-muted">Nenhum post publicado ainda.</p>
        ) : (
          <div className="grid gap-6">
            {posts.map((post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function PostCard({ post }: { post: PostMeta }) {
  const date = new Date(post.date).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="block p-6 rounded-2xl bg-canvas border border-hairline hover:border-accent-blue/30 transition-all group"
    >
      <article>
        <time className="text-sm text-ink-muted">{date}</time>
        <h2 className="text-xl font-semibold mt-1 text-white group-hover:text-accent-blue transition-colors">
          {post.title}
        </h2>
        <p className="text-ink-muted mt-2 line-clamp-2 leading-relaxed">{post.description}</p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-surface-2 text-ink-muted border border-hairline"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </article>
    </Link>
  );
}
