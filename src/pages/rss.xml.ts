import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import { getT } from '../i18n/index';

export async function GET(context: { site: URL | undefined; request: Request }) {
  let posts: CollectionEntry<'blog'>[] = [];
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
      link: `/blog/${p.id}`,
    }))
    .sort((a, b) => (a.pubDate > b.pubDate ? -1 : 1));

  const t = getT('es');
  const site = context.site ?? new URL(context.request.url).origin;
  return rss({
    title: t('meta.blogTitle'),
    description: t('meta.blogDescription'),
    site,
    items,
    stylesheet: true,
  });
}
