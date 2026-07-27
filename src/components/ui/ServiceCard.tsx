import { Icon } from '@/components/ui/Icon';
import type { Service } from '@/content/services';

/** Reusable service card — used on both the home page and the Services page. */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="group relative overflow-hidden rounded-xl2 border border-line bg-gradient-to-b from-surface to-bg-2 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-line-2 hover:shadow-[0_24px_50px_-20px_rgba(0,0,0,0.5)]">
      <div className="mb-5 grid h-[52px] w-[52px] place-items-center rounded-[13px] border border-line-2 bg-gradient-to-br from-brand/[0.18] to-accent/[0.14]">
        <Icon name={service.icon} className="h-6 w-6 text-brand-2" />
      </div>
      <h3 className="mb-2.5 text-xl">{service.title}</h3>
      <p className="text-[0.96rem] text-muted">{service.summary}</p>
      <span className="mt-4 inline-block text-xs font-semibold text-brand-2">{service.tag}</span>
    </div>
  );
}
