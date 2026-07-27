import { Container } from '@/components/ui/Section';
import { Eyebrow } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { Icon } from '@/components/ui/Icon';
import { Reveal } from '@/components/ui/Reveal';

/** Home hero: headline + CTAs on the left, animated product visual on the right. */
export function Hero() {
  return (
    <section className="relative overflow-hidden pt-[150px] pb-20 sm:pb-28 lg:pb-32">
      {/* Decorative background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -right-20 -top-40 h-[560px] w-[560px] rounded-full bg-[radial-gradient(circle,rgb(var(--brand)/0.5),transparent_65%)] blur-3xl" />
        <div className="absolute -bottom-56 -left-40 h-[460px] w-[460px] rounded-full bg-[radial-gradient(circle,rgb(30_62_168/0.4),transparent_65%)] blur-3xl" />
        <div className="bg-grid absolute inset-0 opacity-50 [mask-image:radial-gradient(ellipse_85%_65%_at_40%_0%,#000_40%,transparent_78%)]" />
      </div>

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <Reveal><Eyebrow>Digital solutions &amp; automation agency</Eyebrow></Reveal>
            <Reveal delay={60}>
              <h1 className="mt-6 text-[clamp(2.6rem,5.4vw,4.3rem)] font-bold leading-[1.03]">
                Engineering the <span className="text-gradient">software, apps &amp; AI</span> that move your business forward.
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-6 max-w-xl text-[clamp(1.05rem,1.5vw,1.24rem)] text-muted">
                Nexora designs and builds premium web platforms, mobile apps, AI automation and SaaS products — secure, lightning-fast, and architected to scale with you.
              </p>
            </Reveal>
            <Reveal delay={180}>
              <div className="mt-9 flex flex-wrap gap-4">
                <Button href="/contact">
                  Book a free consultation <Icon name="arrow" className="h-4 w-4" />
                </Button>
                <Button href="/portfolio" variant="ghost">View our work</Button>
              </div>
            </Reveal>
            <Reveal delay={240}>
              <div className="mt-12 flex items-center gap-3.5 text-sm text-muted-2">
                <div className="flex">
                  {[0, 1, 2, 3].map((i) => (
                    <span key={i} className="-ml-2.5 h-8 w-8 rounded-full border-2 border-bg bg-gradient-to-br from-blue-900 to-accent first:ml-0" />
                  ))}
                </div>
                <span><span className="tracking-[2px] text-amber-400">★★★★★</span>&nbsp; Rated 4.9/5 by 120+ businesses worldwide</span>
              </div>
            </Reveal>
          </div>

          <Reveal delay={140} className="relative min-h-[420px]">
            <HeroVisual />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

/** Floating "live deployment" dashboard card with two orbiting status badges. */
function HeroVisual() {
  return (
    <div className="relative">
      <div className="relative z-10 animate-float rounded-2xl border border-line-2 bg-gradient-to-br from-surface/90 to-bg-2/90 p-5 shadow-[0_40px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex gap-1.5">
            {[0, 1, 2].map((i) => <span key={i} className="h-2.5 w-2.5 rounded-full bg-line-2" />)}
          </div>
          <span className="flex items-center gap-1.5 text-[11px] font-semibold text-accent">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_10px_rgb(var(--accent))]" />
            Live deployment
          </span>
        </div>
        <MockRow title="Web platform" sub="Vercel edge · SSR" pill="99.98%" />
        <MockRow title="AI automation" sub="Agents · 24/7" pill="Active" />
        <div className="mt-1.5 flex h-24 items-end gap-2 rounded-xl border border-line p-3.5">
          {[40, 58, 46, 72, 62, 88, 78, 97].map((h, i) => (
            <span key={i} className="flex-1 rounded-t bg-gradient-to-b from-brand-2 to-brand/25" style={{ height: `${h}%` }} />
          ))}
        </div>
      </div>

      <Badge className="-left-6 -top-6 animate-float" icon="shield" title="Secure by default" sub="JWT · encrypted APIs" />
      <Badge className="-bottom-6 -right-6 animate-float [animation-delay:600ms]" icon="bolt" title="Blazing fast" sub="98+ Lighthouse" />
    </div>
  );
}

function MockRow({ title, sub, pill }: { title: string; sub: string; pill: string }) {
  return (
    <div className="mb-2.5 flex items-center justify-between rounded-xl border border-line bg-content/[0.02] px-3.5 py-3">
      <div className="flex items-center gap-3">
        <span className="h-8 w-8 rounded-[9px] bg-gradient-to-br from-brand to-accent" />
        <span>
          <b className="block text-[12.5px]">{title}</b>
          <small className="text-[11px] text-muted-2">{sub}</small>
        </span>
      </div>
      <span className="rounded-full bg-accent/15 px-2.5 py-1.5 text-[10.5px] font-semibold text-accent">{pill}</span>
    </div>
  );
}

function Badge({ className, icon, title, sub }: { className?: string; icon: 'shield' | 'bolt'; title: string; sub: string }) {
  return (
    <div className={`absolute z-20 flex items-center gap-3 rounded-2xl border border-line-2 bg-surface/95 px-4 py-3 shadow-[0_20px_50px_-20px_rgba(0,0,0,0.8)] ${className}`}>
      <span className="grid h-9 w-9 place-items-center rounded-[9px] border border-line-2 bg-brand/15">
        <Icon name={icon} className="h-4 w-4 text-brand-2" />
      </span>
      <span>
        <b className="block text-[13px]">{title}</b>
        <small className="text-[11px] text-muted-2">{sub}</small>
      </span>
    </div>
  );
}
