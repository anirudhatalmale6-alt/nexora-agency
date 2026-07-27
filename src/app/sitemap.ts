import type { MetadataRoute } from 'next';
import { site } from '@/content/site';

// Generated at build time into /sitemap.xml (works with static export).
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '/services', '/portfolio', '/about', '/faq', '/contact'];
  return routes.map((path) => ({
    url: `${site.url}${path}`,
    changeFrequency: 'monthly',
    priority: path === '' ? 1 : 0.8,
  }));
}
