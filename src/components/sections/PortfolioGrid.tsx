import { Section, Container, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { CaseCard } from '@/components/ui/CaseCard';
import { portfolio } from '@/content/portfolio';

export function PortfolioGrid({ showHeading = true }: { showHeading?: boolean }) {
  return (
    <Section id="work" className="!pt-0">
      <Container>
        {showHeading && (
          <Reveal className="mb-14">
            <SectionHeading
              center
              eyebrow="Selected work"
              title="Case studies &amp; sample projects"
              lead="A snapshot of the kind of products we design and build across web, mobile, AI and SaaS."
            />
          </Reveal>
        )}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 60}>
              <CaseCard item={c} />
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
