import { writeFileSync } from 'node:fs';
import { getAllTopicsFlat } from '../src/content/sections';

/**
 * Emits dist/sitemap.xml from the same section/topic registry that drives routing, so new
 * content is picked up automatically with no separate list to maintain. SITE_URL isn't known
 * yet (see public/robots.txt) — set it as a build-time env var once the production hostname is
 * decided; until then URLs are emitted relative to a placeholder root.
 */
function generateSitemap(): void {
  const siteUrl = (process.env.SITE_URL ?? 'https://kidsense.example').replace(/\/$/, '');
  const routes = [
    '/',
    ...getAllTopicsFlat().flatMap(({ section, topic }) => [
      `/section/${section.id}`,
      `/section/${section.id}/${topic.id}`,
    ]),
  ];
  const uniqueRoutes = Array.from(new Set(routes));
  const urlEntries = uniqueRoutes
    .map((route) => `  <url><loc>${siteUrl}${route}</loc></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlEntries}\n</urlset>\n`;
  writeFileSync('dist/sitemap.xml', xml);
}

generateSitemap();
