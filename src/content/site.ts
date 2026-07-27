/**
 * Global site configuration & branding.
 *
 * This is the single source of truth for brand name, navigation, contact details
 * and social links. Editing this file updates the header, footer and metadata
 * across the whole site — no component changes required. When a headless CMS is
 * added in Milestone 2, this shape maps 1:1 to a "Site Settings" collection.
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  /** Absolute production URL, used for canonical/OG metadata & sitemap. */
  url: string;
  email: string;
  phone: string;
  location: string;
  nav: NavLink[];
  social: { label: string; href: string }[];
}

export const site: SiteConfig = {
  name: 'Nexora',
  tagline: 'Digital solutions & automation agency',
  description:
    'Nexora is a premium digital agency building high-performance websites, mobile apps, AI automation and SaaS platforms — secure, scalable and beautifully engineered.',
  url: 'https://nexora.agency',
  email: 'hello@nexora.agency',
  phone: '+1 (555) 012-3456',
  location: 'Remote-first · across 14 time zones',
  nav: [
    { label: 'Services', href: '/services' },
    { label: 'Portfolio', href: '/portfolio' },
    { label: 'About', href: '/about' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ],
  social: [
    { label: 'X', href: 'https://x.com' },
    { label: 'LinkedIn', href: 'https://linkedin.com' },
    { label: 'GitHub', href: 'https://github.com' },
  ],
};
