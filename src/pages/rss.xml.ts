import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const projects = await getCollection('projects');
  return rss({
    title: 'Proyectos — Martin Ruiz',
    description: 'Actualizaciones y proyectos de Martin Ruiz',
    site: context.site,
    items: projects.map((p) => ({
      title: p.data.title,
      description: p.data.teaser ?? p.data.title,
      pubDate: new Date(p.data.year ?? new Date().getFullYear(), 0, 1),
      link: `/projects/${p.slug}`,
    })),
    stylesheet: true,
  });
}
