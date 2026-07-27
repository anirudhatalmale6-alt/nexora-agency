import { pageMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/sections/PageHeader';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { FinalCta } from '@/components/sections/FinalCta';

export const metadata = pageMetadata({
  title: 'FAQ',
  description: 'Answers to common questions about our technology, pricing, timelines, scalability and post-launch support.',
  path: '/faq',
});

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions, answered."
        lead="Everything you need to know about how we work, price, and support what we build. Still curious? Just reach out."
      />
      <div className="pt-4">
        <FaqAccordion showHeading={false} />
      </div>
      <FinalCta />
    </>
  );
}
