import type { APIRoute } from 'astro';
import { rutas } from '../data/site';

export const prerender = true;

export const GET: APIRoute = ({ site }) => {
  const urls = rutas
    .map((ruta) => `  <url><loc>${new URL(ruta, site)}</loc></url>`)
    .join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
