import { Container, Eyebrow } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';

/** Consistent inner-page header with the same glow/grid treatment as the hero. */
export function PageHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead: string }) {
  return (
    <section className="relative overflow-hidden pt-[130px] pb-14 sm:pb-16">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 right-0 h-[440px] w-[440px] rounded-full bg-[radial-gradient(circle,rgb(var(--brand)/0.35),transparent_65%)] blur-3xl" />
        <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,#000_40%,transparent_78%)]" />
      </div>
      <Container className="relative">
        <Reveal><Eyebrow>{eyebrow}</Eyebrow></Reveal>
        <Reveal delay={60}>
          <h1 className="mt-5 max-w-3xl text-[clamp(2.2rem,4.6vw,3.4rem)] font-bold leading-[1.06]">{title}</h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="mt-5 max-w-2xl text-lg text-muted">{lead}</p>
        </Reveal>
      </Container>
    </section>
  );
}
