/** About-page content: company story, values and leadership placeholders. */
import type { IconName } from '@/components/ui/Icon';

export const about = {
  intro:
    'We’re a senior team of engineers, designers and strategists who partner with growing businesses to build software that’s fast, secure and built to last.',
  story: [
    'Nexora started with a simple belief: great software should be a growth engine, not a maintenance burden. Too many businesses inherit bloated, fragile builds that break every time they try to grow.',
    'So we do it differently. Every product we ship is engineered on a clean, modular foundation — documented, tested and architected so new capabilities like payments, dashboards or AI can be added without a rewrite.',
    'From a first landing page to a full multi-tenant SaaS platform, we work in transparent milestones, communicate constantly, and treat your product like our own.',
  ],
  values: [
    { icon: 'bolt', title: 'Craft over shortcuts', body: 'We sweat the details — performance, accessibility and clean code are non-negotiable.' },
    { icon: 'shield', title: 'Security as standard', body: 'Every build ships with secure defaults, not bolted-on afterthoughts.' },
    { icon: 'chat', title: 'Radical transparency', body: 'Frequent updates, live previews and honest timelines. No black boxes.' },
    { icon: 'grid', title: 'Built to scale', body: 'Modular architecture so your product grows without hitting a wall.' },
  ] as { icon: IconName; title: string; body: string }[],
};
