/**
 * Portfolio / case-study content. `gradient` is a Tailwind gradient class used
 * for the placeholder thumbnail — replace with real project imagery by adding an
 * `image` field and rendering next/image in the CaseCard component.
 */
export interface CaseStudy {
  slug: string;
  title: string;
  category: string;
  badge: string;
  summary: string;
  gradient: string;
  metrics: { value: string; label: string }[];
}

export const portfolio: CaseStudy[] = [
  {
    slug: 'multi-tenant-analytics',
    title: 'Multi-tenant analytics suite',
    category: 'Web · SaaS',
    badge: 'SaaS Platform',
    summary:
      'A B2B dashboard platform with role-based access, subscriptions and real-time reporting.',
    gradient: 'from-blue-700 to-cyan-400',
    metrics: [
      { value: '3×', label: 'faster load' },
      { value: '+64%', label: 'sign-ups' },
    ],
  },
  {
    slug: 'on-demand-services-app',
    title: 'On-demand services app',
    category: 'iOS · Android',
    badge: 'Mobile App',
    summary:
      'Cross-platform booking app with live tracking, in-app chat and secure payments.',
    gradient: 'from-sky-900 to-teal-500',
    metrics: [
      { value: '4.8★', label: 'store rating' },
      { value: '50k+', label: 'downloads' },
    ],
  },
  {
    slug: 'ai-support-assistant',
    title: 'AI support assistant',
    category: 'AI · Agents',
    badge: 'AI Automation',
    summary:
      'An LLM-powered assistant that resolves customer queries 24/7 and hands off complex cases.',
    gradient: 'from-indigo-800 to-blue-500',
    metrics: [
      { value: '−72%', label: 'ticket load' },
      { value: '24/7', label: 'coverage' },
    ],
  },
  {
    slug: 'corporate-marketing-site',
    title: 'Corporate marketing site',
    category: 'Corporate site',
    badge: 'Web Development',
    summary:
      'A high-converting, SEO-optimized site with a headless CMS for effortless content updates.',
    gradient: 'from-emerald-800 to-cyan-400',
    metrics: [
      { value: '98', label: 'Lighthouse' },
      { value: '+120%', label: 'organic traffic' },
    ],
  },
  {
    slug: 'bespoke-crm',
    title: 'Bespoke CRM & workflow tool',
    category: 'Custom CRM',
    badge: 'Business Software',
    summary:
      'An internal platform automating quotes, scheduling and invoicing for a services company.',
    gradient: 'from-purple-800 to-blue-400',
    metrics: [
      { value: '−30h', label: 'saved / week' },
      { value: '100%', label: 'adoption' },
    ],
  },
  {
    slug: 'headless-commerce',
    title: 'Headless commerce storefront',
    category: 'Storefront',
    badge: 'E-commerce',
    summary:
      'A blazing-fast online store with a modular checkout ready for new payment methods.',
    gradient: 'from-orange-700 to-amber-400',
    metrics: [
      { value: '+41%', label: 'conversion' },
      { value: '1.2s', label: 'load time' },
    ],
  },
];
