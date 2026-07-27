import { cn } from '@/lib/utils';
import type { CaseStudy } from '@/content/portfolio';

/** Reusable case-study card with a gradient placeholder thumbnail + result metrics. */
export function CaseCard({ item }: { item: CaseStudy }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl2 border border-line bg-surface transition-all duration-300 hover:-translate-y-1.5 hover:border-line-2 hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.5)]">
      <div className={cn('relative grid h-[170px] place-items-center bg-gradient-to-br', item.gradient)}>
        <div className="pointer-events-none absolute inset-4 rounded-xl border border-white/25 bg-black/20 backdrop-blur-[2px]">
          <span className="absolute left-3 right-3 top-2.5 h-2 rounded bg-white/25" />
          <span className="absolute left-3 top-7 h-1.5 w-[55%] rounded bg-white/15" />
        </div>
        <span className="relative z-10 rounded-full border border-white/25 bg-black/40 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur">
          {item.badge}
        </span>
      </div>
      <div className="p-6">
        <span className="text-[11.5px] font-semibold uppercase tracking-[0.1em] text-brand-2">{item.category}</span>
        <h3 className="my-2 text-lg">{item.title}</h3>
        <p className="text-[0.93rem] text-muted">{item.summary}</p>
        <div className="mt-4 flex gap-5 border-t border-line pt-4">
          {item.metrics.map((m) => (
            <div key={m.label}>
              <b className="block font-display text-lg text-accent">{m.value}</b>
              <small className="text-[11.5px] text-muted-2">{m.label}</small>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}
