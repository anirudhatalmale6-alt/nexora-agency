import Link from 'next/link';
import { site } from '@/content/site';

/** Brand lockup: gradient mark + wordmark. Links home. */
export function Logo() {
  return (
    <Link href="/" aria-label={`${site.name} home`} className="flex items-center gap-2.5 font-display text-xl font-bold">
      <span className="grid h-9 w-9 place-items-center rounded-[10px] bg-gradient-to-br from-brand to-accent shadow-[0_6px_20px_-6px_rgb(var(--brand)/0.5)]">
        <span className="h-3.5 w-3.5 rotate-45 rounded-[4px] border-[2.5px] border-white" />
      </span>
      {site.name}
    </Link>
  );
}
