'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { site } from '@/content/site';
import { cn } from '@/lib/utils';
import { Icon } from '@/components/ui/Icon';
import { Logo } from '@/components/ui/Logo';
import { Button } from '@/components/ui/Button';
import { ThemeToggle } from './ThemeToggle';

/** Sticky navigation: transparent at top, blurred surface once scrolled. */
export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu whenever the route changes.
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300',
        scrolled ? 'border-line bg-bg/70 backdrop-blur-xl' : 'border-transparent',
      )}
    >
      <nav className="mx-auto flex h-[74px] max-w-container items-center justify-between px-6">
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {site.nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-content',
                isActive(l.href) ? 'text-content' : 'text-muted',
              )}
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />
          <Button href="/contact" className="hidden sm:inline-flex">Get started</Button>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-line-2 text-content md:hidden"
          >
            <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-bg/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-container flex-col gap-1 px-6 py-4">
            {site.nav.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  'rounded-lg px-3 py-3 text-base font-medium transition-colors',
                  isActive(l.href) ? 'bg-content/[0.05] text-content' : 'text-muted hover:text-content',
                )}
              >
                {l.label}
              </Link>
            ))}
            <Button href="/contact" className="mt-2 w-full">Get started</Button>
          </div>
        </div>
      )}
    </header>
  );
}
