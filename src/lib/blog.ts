import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "content/blog");

export interface PostMeta {
  slug: string;
  title: string;
  description: string;
  lang: string;
  date: string;
  author: string;
  coverImage?: string;
  tags?: string[];
  published: boolean;
}

export interface Post extends PostMeta {
  content: string;
}

function getPostFiles(lang?: string): string[] {
  if (!fs.existsSync(postsDirectory)) return [];

  const files = fs.readdirSync(postsDirectory).filter((file) => {
    if (!file.endsWith(".mdx")) return false;
    if (lang) {
      const filePath = path.join(postsDirectory, file);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return data.lang === lang;
    }
    return true;
  });

  return files;
}

function parsePost(slug: string): Post | null {
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  if (!fs.existsSync(filePath)) return null;

  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || "",
    description: data.description || "",
    lang: data.lang || "pt",
    date: data.date || new Date().toISOString(),
    author: data.author || "Anthonny Baia",
    coverImage: data.coverImage || undefined,
    tags: data.tags || [],
    published: data.published !== false,
    content,
  };
}

export function getAllPosts(lang?: string): PostMeta[] {
  const files = getPostFiles(lang);

  const posts = files
    .map((file) => {
      const slug = file.replace(/\.mdx$/, "");
      return parsePost(slug);
    })
    .filter((post): post is Post => post !== null && post.published);

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getPostBySlug(slug: string): Post | null {
  return parsePost(slug);
}

export function getAllSlugs(): string[] {
  return getAllPosts().map((post) => post.slug);
}
