'use client';

import { useState } from 'react';
import { cn } from '@/lib/utils';
import { Section, Container, SectionHeading } from '@/components/ui/Section';
import { Reveal } from '@/components/ui/Reveal';
import { faqs } from '@/content/misc';

/** Accessible FAQ accordion. First item open by default. */
export function FaqAccordion({ showHeading = true }: { showHeading?: boolean }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Section id="faq" className="!pt-0">
      <Container>
        {showHeading && (
          <Reveal className="mb-14">
            <SectionHeading center eyebrow="FAQ" title="Frequently asked questions" />
          </Reveal>
        )}
        <div className="mx-auto max-w-3xl">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 40}>
                <div className={cn('mb-3.5 overflow-hidden rounded-2xl border bg-surface transition-colors', isOpen ? 'border-line-2' : 'border-line')}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-[1.04rem] font-semibold"
                  >
                    {f.q}
                    <span className={cn('grid h-7 w-7 flex-none place-items-center rounded-lg border border-line-2 transition-colors', isOpen && 'bg-brand/[0.14]')}>
                      <span className="relative block h-3 w-3">
                        <span className="absolute left-0 top-1/2 h-0.5 w-3 -translate-y-1/2 rounded bg-brand-2" />
                        <span className={cn('absolute left-1/2 top-0 h-3 w-0.5 -translate-x-1/2 rounded bg-brand-2 transition-transform duration-300', isOpen && 'scale-y-0')} />
                      </span>
                    </span>
                  </button>
                  <div className={cn('grid transition-all duration-300', isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]')}>
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 text-[0.97rem] text-muted">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
