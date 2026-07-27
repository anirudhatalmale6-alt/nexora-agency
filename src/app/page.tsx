import { Hero } from '@/components/sections/Hero';
import { TechStrip } from '@/components/sections/TechStrip';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { WhyUs } from '@/components/sections/WhyUs';
import { PortfolioGrid } from '@/components/sections/PortfolioGrid';
import { Process } from '@/components/sections/Process';
import { Testimonials } from '@/components/sections/Testimonials';
import { FaqAccordion } from '@/components/sections/FaqAccordion';
import { FinalCta } from '@/components/sections/FinalCta';

// Home composes the reusable section blocks. Each block is self-contained and
// pulls its own content, so reordering the page is a matter of moving lines here.
export default function HomePage() {
  return (
    <>
      <Hero />
      <TechStrip />
      <ServicesGrid />
      <WhyUs />
      <PortfolioGrid />
      <Process />
      <Testimonials />
      <FaqAccordion />
      <FinalCta />
    </>
  );
}
