import Link from 'next/link';
import { site } from '@/content/site';
import { services } from '@/content/services';
import { Container } from '@/components/ui/Section';
import { Logo } from '@/components/ui/Logo';

const socialPaths: Record<string, string> = {
  X: 'M18.9 2H22l-7.4 8.5L23 22h-6.8l-5.3-6.9L4.8 22H1.6l7.9-9L1 2h7l4.8 6.3L18.9 2zm-2.4 18h1.9L7.6 4H5.6l10.9 16z',
  LinkedIn: 'M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM10 9h3.8v1.6h.1c.5-1 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z',
  GitHub: 'M12 2A10 10 0 0 0 8.8 21.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.4 9.4 0 0 1 5 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.7 0 3.8-2.4 4.6-4.6 4.9.3.3.6.9.6 1.8v2.7c0 .3.2.6.7.5A10 10 0 0 0 12 2z',
};

export function Footer() {
  return (
    <footer className="border-t border-line pt-16 pb-8">
      <Container>
        <div className="mb-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-[290px] text-sm text-muted">{site.description}</p>
          </div>
          <FooterCol title="Services" links={services.slice(0, 4).map((s) => ({ label: s.title, href: '/services' }))} />
          <FooterCol
            title="Company"
            links={[
              { label: 'About', href: '/about' },
              { label: 'Portfolio', href: '/portfolio' },
              { label: 'FAQ', href: '/faq' },
              { label: 'Contact', href: '/contact' },
            ]}
          />
          <FooterCol
            title="Get started"
            links={[
              { label: 'Contact', href: '/contact' },
              { label: 'Book a consultation', href: '/contact' },
              { label: 'View our work', href: '/portfolio' },
            ]}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 border-t border-line pt-7 text-sm text-muted-2">
          <span>© {new Date().getFullYear()} {site.name} Agency. All rights reserved.</span>
          <div className="flex gap-3">
            {site.social.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                target="_blank"
                rel="noopener noreferrer"
                className="grid h-9 w-9 place-items-center rounded-lg border border-line text-muted transition-colors hover:border-line-2 hover:text-content"
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
                  <path d={socialPaths[s.label]} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.1em] text-muted-2">{title}</h4>
      {links.map((l, i) => (
        <Link key={`${l.href}-${i}`} href={l.href} className="mb-2.5 block text-sm text-muted transition-colors hover:text-content">
          {l.label}
        </Link>
      ))}
    </div>
  );
}
