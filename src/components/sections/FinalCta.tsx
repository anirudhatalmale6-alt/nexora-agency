import { Section, Container, Eyebrow } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Reveal } from '@/components/ui/Reveal';

/** Bold gradient call-to-action band shown just before the footer. */
export function FinalCta() {
  return (
    <Section className="!pt-0">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-line-2 bg-gradient-to-br from-[#0c1a3d] to-bg-2 px-6 py-16 text-center sm:px-10 sm:py-20">
            <div aria-hidden className="pointer-events-none absolute inset-0">
              <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_40%,transparent_75%)]" />
              <div className="absolute -top-52 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgb(var(--brand)/0.4),transparent_65%)] blur-3xl" />
            </div>
            <div className="relative">
              <Eyebrow>Let’s build together</Eyebrow>
              <h2 className="mx-auto mt-5 max-w-2xl text-[clamp(2rem,4.2vw,3.2rem)] leading-[1.08]">
                Ready to build something exceptional?
              </h2>
              <p className="mx-auto mb-8 mt-4 max-w-xl text-lg text-muted">
                Tell us about your project and get a free consultation and a clear roadmap within 24 hours. No obligation, no pressure.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button href="/contact">
                  Start your project <Icon name="arrow" className="h-4 w-4" />
                </Button>
                <Button href="/services" variant="ghost">Explore services</Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}
