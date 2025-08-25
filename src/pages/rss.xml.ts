import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  let posts = [];
  try {
    posts = await getCollection('blog');
  } catch {
    posts = [];
  }

  const items = posts
    .map((p) => ({
      title: p.data.title,
      description: p.data.description ?? p.data.title,
      pubDate: p.data.pubDate ?? new Date(),
      link: `/blog/${p.slug}`,
    }))
    .sort((a, b) => (a.pubDate > b.pubDate ? -1 : 1));

  return rss({
    title: 'Blog — Martin Ruiz',
    description: 'Actualizaciones del blog',
    site: context.site,
    items,
    stylesheet: true,
  });
}
