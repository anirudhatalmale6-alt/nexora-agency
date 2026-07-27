import type { Metadata } from 'next';
import { site } from '@/content/site';

/**
 * Builds page-level metadata (title, description, canonical, Open Graph, Twitter)
 * from a small set of inputs, so every page has consistent, complete SEO tags.
 */
export function pageMetadata({
  title,
  description,
  path = '/',
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const desc = description ?? site.description;
  const url = `${site.url}${path}`;
  const fullTitle = path === '/' ? `${site.name} — ${site.tagline}` : `${title} · ${site.name}`;

  return {
    title: fullTitle,
    description: desc,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: site.name,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description: desc,
    },
  };
}
