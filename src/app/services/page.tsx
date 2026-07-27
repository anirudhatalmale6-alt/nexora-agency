import { pageMetadata } from '@/lib/seo';
import { Section, Container } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { Icon } from '@/components/ui/Icon';
import { PageHeader } from '@/components/sections/PageHeader';
import { Process } from '@/components/sections/Process';
import { FinalCta } from '@/components/sections/FinalCta';
import { services } from '@/content/services';

export const metadata = pageMetadata({
  title: 'Services',
  description: 'Web development, mobile apps, AI automation, SaaS platforms, business software and consulting — end-to-end digital services from Nexora.',
  path: '/services',
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything you need to design, build and scale."
        lead="One senior team across the full stack — from a marketing site to a multi-tenant SaaS platform, with the architecture to keep growing."
      />
      <Section className="!pt-4">
        <Container>
          <div className="flex flex-col gap-5">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={(i % 2) * 60}>
                <div className="grid gap-6 rounded-xl2 border border-line bg-gradient-to-b from-surface to-bg-2 p-7 sm:p-9 md:grid-cols-[auto_1fr_1fr] md:items-center">
                  <div className="grid h-14 w-14 place-items-center rounded-[14px] border border-line-2 bg-gradient-to-br from-brand/[0.18] to-accent/[0.14]">
                    <Icon name={s.icon} className="h-7 w-7 text-brand-2" />
                  </div>
                  <div>
                    <h2 className="text-2xl">{s.title}</h2>
                    <p className="mt-2 text-muted">{s.summary}</p>
                    <span className="mt-3 inline-block text-xs font-semibold text-brand-2">{s.tag}</span>
                  </div>
                  <ul className="flex flex-col gap-2.5">
                    {s.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-[0.95rem] text-muted">
                        <span className="mt-0.5 grid h-5 w-5 flex-none place-items-center rounded-md border border-line-2 bg-brand/[0.12]">
                          <Icon name="check" className="h-3 w-3 text-accent" />
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>
      <Process />
      <FinalCta />
    </>
  );
}
