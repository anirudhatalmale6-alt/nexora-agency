import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'ghost';

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold text-[15px] px-6 py-3.5 transition-all duration-200 whitespace-nowrap';

const variants: Record<Variant, string> = {
  primary:
    'bg-gradient-to-br from-brand to-brand-2 text-white shadow-[0_10px_30px_-8px_rgb(var(--brand)/0.5)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-8px_rgb(var(--brand)/0.55)]',
  ghost:
    'border border-line-2 bg-content/[0.03] text-content hover:bg-content/[0.07] hover:-translate-y-0.5',
};

interface CommonProps {
  variant?: Variant;
  children: ReactNode;
  className?: string;
}

/** Renders a Next.js <Link> when `href` is set, otherwise a native <button>. */
export function Button({
  href,
  variant = 'primary',
  className,
  children,
  ...props
}: CommonProps &
  ({ href: string } & AnchorHTMLAttributes<HTMLAnchorElement>) ) {
  return (
    <Link href={href} className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}

export function ButtonAction({
  variant = 'primary',
  className,
  children,
  ...props
}: CommonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
