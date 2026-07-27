import { Section, Container, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { processSteps } from '@/content/misc';

export function Process() {
  return (
    <Section id="process" className="!pt-0">
      <Container>
        <Reveal className="mb-14">
          <SectionHeading
            eyebrow="How it works"
            title="A clear, milestone-driven process"
            lead="Full transparency at every stage — you always know what’s shipping next and why."
          />
        </Reveal>
        <div className="grid gap-0 sm:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((s, i) => (
            <Reveal
              key={s.n}
              delay={i * 60}
              className="border-line px-0 py-7 sm:px-7 sm:[&:not(:nth-child(2n))]:border-r sm:first:pl-0 lg:[&:not(:last-child)]:border-r lg:first:pl-0"
            >
              <div className="mb-4 grid h-10 w-10 place-items-center rounded-[11px] border border-line-2 bg-brand/[0.06] font-display text-[15px] font-bold text-brand-2">
                {s.n}
              </div>
              <h3 className="mb-2 text-[1.12rem]">{s.title}</h3>
              <p className="text-[0.93rem] text-muted">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
