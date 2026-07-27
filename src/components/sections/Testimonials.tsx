import { Section, Container, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { testimonials } from '@/content/misc';

export function Testimonials() {
  return (
    <Section id="testimonials" className="!pt-0">
      <Container>
        <Reveal className="mb-14">
          <SectionHeading center eyebrow="Client stories" title="Teams that trust Nexora to deliver" />
        </Reveal>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 60}>
              <figure className="h-full rounded-xl2 border border-line bg-surface p-8">
                <div className="mb-3.5 text-sm tracking-[2px] text-amber-400">★★★★★</div>
                <blockquote className="text-[0.98rem] text-content/90">{t.quote}</blockquote>
                <figcaption className="mt-5 flex items-center gap-3">
                  <span className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-900 to-accent" />
                  <span>
                    <b className="block text-sm">{t.name}</b>
                    <small className="text-[12.5px] text-muted-2">{t.role}</small>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </Container>
    </Section>
  );
}
