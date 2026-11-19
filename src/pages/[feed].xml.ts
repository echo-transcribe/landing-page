import rss from '@astrojs/rss';
import type { APIRoute, GetStaticPaths } from 'astro';
import { site } from '../config/site';
import { getPosts, postPath } from '../lib/blog';

// Served at /rss.xml. A dynamic route only so the feed is skipped while every post is a draft.
export const getStaticPaths = (async () => {
  const posts = await getPosts();
  return posts.length > 0 ? [{ params: { feed: 'rss' } }] : [];
}) satisfies GetStaticPaths;

export const GET: APIRoute = async (context) => {
  const posts = await getPosts();
  return rss({
    title: `${site.name} blog`,
    description: 'Offline transcription, private notes and getting more out of what you record, from the makers of Echo.',
    site: context.site ?? site.url,
    customData: '<language>en</language>',
    trailingSlash: false,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: postPath(post),
      categories: post.data.tags,
    })),
  });
};
