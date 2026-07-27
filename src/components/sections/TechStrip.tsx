import { Container } from '@/components/ui/Section';
import { Icon } from '@/components/ui/Icon';
import { Reveal } from '@/components/ui/Reveal';
import { techStack } from '@/content/misc';

/** Credibility strip of technology logos. */
export function TechStrip() {
  return (
    <section className="border-y border-line bg-content/[0.012] py-9">
      <Container>
        <Reveal>
          <p className="mb-6 text-center text-xs font-semibold uppercase tracking-[0.14em] text-muted-2">
            Built with a modern, battle-tested technology stack
          </p>
        </Reveal>
        <Reveal delay={60}>
          <ul className="flex flex-wrap items-center justify-center gap-x-11 gap-y-6">
            {techStack.map((t) => (
              <li key={t.name} className="flex items-center gap-2.5 font-display text-[15.5px] font-semibold text-muted opacity-75 transition-opacity hover:opacity-100">
                <Icon name={t.icon} className="h-6 w-6" />
                {t.name}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
