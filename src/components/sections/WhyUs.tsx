import { Section, Container, Eyebrow } from '@/components/ui/Section';
import { Icon } from '@/components/ui/Icon';
import { Reveal } from '@/components/ui/Reveal';
import { whyPoints, stats } from '@/content/misc';

/** "Why choose us" — stat grid alongside a list of differentiators. */
export function WhyUs() {
  return (
    <Section id="why" className="!pt-0">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <Reveal>
            <Eyebrow>Why choose Nexora</Eyebrow>
            <h2 className="mt-4 text-[clamp(1.9rem,3.6vw,2.7rem)] leading-[1.12]">
              A partner obsessed with quality and outcomes
            </h2>
            <p className="mb-7 mt-3.5 text-muted">
              We don’t just ship code — we build products that are fast, secure, and easy to grow. Here’s what working with us looks like.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s) => (
                <div key={s.label} className="rounded-xl2 border border-line bg-gradient-to-b from-surface-2 to-bg-2 px-6 py-7">
                  <div className="font-display text-[2.7rem] font-bold leading-none text-gradient">{s.value}</div>
                  <div className="mt-2 text-[0.92rem] text-muted">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <div className="flex flex-col gap-4">
            {whyPoints.map((p, i) => (
              <Reveal key={p.title} delay={i * 60}>
                <div className="flex gap-4 rounded-xl2 border border-line bg-surface p-6 transition-all duration-300 hover:translate-x-1 hover:border-line-2">
                  <span className="grid h-[46px] w-[46px] flex-none place-items-center rounded-xl border border-line-2 bg-brand/[0.12]">
                    <Icon name={p.icon} className="h-5 w-5 text-accent" />
                  </span>
                  <div>
                    <h3 className="mb-1 text-[1.08rem]">{p.title}</h3>
                    <p className="text-[0.93rem] text-muted">{p.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
