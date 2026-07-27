/**
 * Services content. Each entry renders a service card on the home page and a
 * detailed block on the Services page. `icon` maps to a key in the Icon component.
 */
import type { IconName } from '@/components/ui/Icon';

export interface Service {
  slug: string;
  title: string;
  summary: string;
  icon: IconName;
  tag: string;
  /** Longer bullet list shown on the Services page. */
  features: string[];
}

export const services: Service[] = [
  {
    slug: 'web-development',
    title: 'Web Development',
    summary:
      'Fast, SEO-ready, responsive websites and web apps on Next.js and React — pixel-perfect and conversion-focused.',
    icon: 'code',
    tag: 'Next.js · React · Tailwind',
    features: [
      'Server-side rendering for speed & SEO',
      'Headless CMS integration',
      'Accessible, responsive UI systems',
      'Analytics & conversion tracking',
    ],
  },
  {
    slug: 'mobile-apps',
    title: 'Mobile Apps',
    summary:
      'Cross-platform iOS and Android apps with native performance, clean UX and a shared codebase for faster delivery.',
    icon: 'mobile',
    tag: 'React Native · Flutter',
    features: [
      'Single codebase, both platforms',
      'Offline-first & push notifications',
      'App Store & Play Store deployment',
      'Native module integration',
    ],
  },
  {
    slug: 'ai-automation',
    title: 'AI Automation',
    summary:
      'Custom AI agents, chatbots and workflow automation that cut manual work and unlock round-the-clock productivity.',
    icon: 'spark',
    tag: 'LLMs · Agents · RPA',
    features: [
      'AI assistants & support bots',
      'Document & data extraction',
      'Workflow & process automation',
      'Private, secure model hosting',
    ],
  },
  {
    slug: 'saas-platforms',
    title: 'SaaS Platforms',
    summary:
      'Multi-tenant SaaS products with secure auth, subscriptions and dashboards — architected to scale from day one.',
    icon: 'box',
    tag: 'Cloud · Multi-tenant',
    features: [
      'Multi-tenant architecture',
      'Subscription billing (Stripe)',
      'Role-based access control',
      'Usage analytics dashboards',
    ],
  },
  {
    slug: 'business-software',
    title: 'Business Software',
    summary:
      'Tailored CRMs, ERPs and internal tools that fit how your team actually works — no bloated off-the-shelf compromises.',
    icon: 'grid',
    tag: 'CRM · ERP · Internal tools',
    features: [
      'Custom CRM & ERP builds',
      'Internal admin & ops tools',
      'Third-party API integrations',
      'Reporting & automation',
    ],
  },
  {
    slug: 'consulting-bpo',
    title: 'Consulting & BPO',
    summary:
      'Dedicated teams and process outsourcing that extend your capacity — reliable delivery, transparent communication.',
    icon: 'globe',
    tag: 'Dedicated teams',
    features: [
      'Dedicated development teams',
      'Technical & architecture consulting',
      'Process outsourcing',
      'Ongoing maintenance & support',
    ],
  },
];
