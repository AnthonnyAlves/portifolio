import Link from "next/link";
import { getAllPosts, PostMeta } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div>
      <h1 className="text-3xl sm:text-4xl font-bold mb-2">Blog</h1>
      <p className="text-muted mb-8">
        Artigos sobre Direito, Tecnologia e Inovação.
      </p>

      {posts.length === 0 ? (
        <p className="text-muted">Nenhum post publicado ainda.</p>
      ) : (
        <div className="grid gap-6">
          {posts.map((post) => (
            <PostCard key={post.slug} post={post} />
          ))}
        </div>
      )}
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
      className="block p-6 rounded-xl border border-surface-light bg-surface/50 hover:bg-surface transition-colors group"
    >
      <article>
        <time className="text-sm text-muted">{date}</time>
        <h2 className="text-xl font-semibold mt-1 group-hover:text-primary-light transition-colors">
          {post.title}
        </h2>
        <p className="text-muted mt-2 line-clamp-2">{post.description}</p>
        {post.tags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary-light"
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
