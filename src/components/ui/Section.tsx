import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

/** Constrains content to the site's max width with consistent horizontal padding. */
export function Container({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn('mx-auto w-full max-w-container px-6', className)}>{children}</div>;
}

/** Vertical rhythm wrapper — one place to control section spacing site-wide. */
export function Section({
  id,
  children,
  className,
  compact,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  compact?: boolean;
}) {
  return (
    <section id={id} className={cn(compact ? 'py-16 sm:py-20' : 'py-20 sm:py-28 lg:py-32', className)}>
      {children}
    </section>
  );
}

/** Small uppercase label above section headings. */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line-2 bg-brand/[0.06] px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-brand-2">
      <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgb(var(--accent))]" />
      {children}
    </span>
  );
}

/** Standard section heading block (eyebrow + title + optional lead). */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  center,
}: {
  eyebrow: string;
  title: ReactNode;
  lead?: string;
  center?: boolean;
}) {
  return (
    <div className={cn('max-w-2xl', center && 'mx-auto text-center')}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-[clamp(2rem,3.8vw,3rem)] leading-[1.1]">{title}</h2>
      {lead && <p className="mt-4 text-lg text-muted">{lead}</p>}
    </div>
  );
}
