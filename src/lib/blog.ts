import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

/** Posts per page on /blog. */
export const postsPerPage = 12;

/** Published posts, newest first. `astro dev` also shows drafts, so they can be previewed. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', (p) => import.meta.env.DEV || !p.data.draft);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export function postPath(post: Post): string {
  return `/blog/${post.id}`;
}

/** ISO date (YYYY-MM-DD) for <time datetime> and formatDate. */
export function isoDate(d: Date): string {
  return d.toISOString().slice(0, 10);
}
