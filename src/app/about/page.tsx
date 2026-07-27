import { pageMetadata } from '@/lib/seo';
import { Section, Container } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { PageHeader } from '@/components/sections/PageHeader';
import { WhyUs } from '@/components/sections/WhyUs';
import { FinalCta } from '@/components/sections/FinalCta';
import { about } from '@/content/about';
import { stats } from '@/content/misc';

export const metadata = pageMetadata({
  title: 'About',
  description: 'Nexora is a senior team of engineers, designers and strategists building software that’s fast, secure and built to last.',
  path: '/about',
});

export default function AboutPage() {
  return (
    <>
      <PageHeader eyebrow="About us" title="A technology partner, not just a vendor." lead={about.intro} />

      <Section className="!pt-4">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <Reveal>
              <div className="flex flex-col gap-5 text-[1.02rem] leading-relaxed text-muted">
                {about.story.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </Reveal>
            <Reveal delay={80}>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((s) => (
                  <div key={s.label} className="rounded-xl2 border border-line bg-gradient-to-b from-surface-2 to-bg-2 px-6 py-7">
                    <div className="font-display text-[2.4rem] font-bold leading-none text-gradient">{s.value}</div>
                    <div className="mt-2 text-[0.9rem] text-muted">{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {about.values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 4) * 60}>
                <div className="h-full rounded-xl2 border border-line bg-surface p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-line-2 bg-brand/[0.12]">
                    <Icon name={v.icon} className="h-5 w-5 text-accent" />
                  </span>
                  <h3 className="mb-1.5 mt-4 text-[1.05rem]">{v.title}</h3>
                  <p className="text-[0.92rem] text-muted">{v.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <WhyUs />
      <FinalCta />
    </>
  );
}
