import { pageMetadata } from '@/lib/seo';
import { PageHeader } from '@/components/sections/PageHeader';
import { PortfolioGrid } from '@/components/sections/PortfolioGrid';
import { Testimonials } from '@/components/sections/Testimonials';
import { FinalCta } from '@/components/sections/FinalCta';

export const metadata = pageMetadata({
  title: 'Portfolio',
  description: 'Selected case studies and sample projects across web, mobile, AI, SaaS, business software and e-commerce.',
  path: '/portfolio',
});

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Selected work"
        title="Case studies & sample projects."
        lead="A snapshot of the products we design and build. Every project ships on a clean, modular foundation that keeps scaling."
      />
      <div className="pt-4">
        <PortfolioGrid showHeading={false} />
      </div>
      <Testimonials />
      <FinalCta />
    </>
  );
}
