import { Section, Container, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { ServiceCard } from '@/components/ui/ServiceCard';
import { services } from '@/content/services';

/** Grid of all services. `showHeading` lets pages reuse the grid without the title. */
export function ServicesGrid({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <Section id="services">
      <Container>
        {showHeading && (
          <Reveal className="mb-14">
            <SectionHeading
              center
              eyebrow="What we do"
              title="End-to-end digital solutions under one roof"
              lead="From first line of code to launch and beyond — one senior team covering the full technology stack your business needs."
            />
          </Reveal>
        )}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 60}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
