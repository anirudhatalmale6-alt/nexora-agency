# Nexora — Digital Agency Platform

A production-ready website foundation for a modern digital agency, built with
**Next.js (App Router) · TypeScript · Tailwind CSS**. Fast, SEO-optimized,
fully responsive, dark/light themed, and architected to grow into a full
platform (auth, dashboards, payments, AI chatbot, CRM) without major refactoring.

**Live preview:** https://anirudhatalmale6-alt.github.io/nexora-agency/

---

## ✨ Features (Milestone 1)

- **Next.js 15 + App Router** with full static export (`output: 'export'`) — deployable to any static host.
- **TypeScript**, strict mode, path aliases (`@/*`).
- **Tailwind CSS** design system driven by CSS variables → one set of class names works in both themes.
- **Dark / light mode** (`next-themes`), dark by default, respects system preference, with a toggle.
- **6 pages:** Home, Services, Portfolio, About, Contact, FAQ.
- **Reusable components:** navbar, footer, buttons, cards, section blocks, accordion, forms, icons.
- **Content-driven / CMS-ready:** all copy lives in typed files under `src/content/` — edit content without touching components.
- **SEO:** per-page metadata, Open Graph + Twitter cards, canonical URLs, `sitemap.xml`, `robots.txt`, JSON-LD structured data.
- **Performance:** SSG, optimized fonts, lazy reveal animations, ~105 kB First Load JS.
- **Accessibility:** semantic HTML, keyboard-friendly nav & accordion, reduced-motion support.
- **CI/CD:** GitHub Actions workflow builds and deploys to GitHub Pages on every push to `main`.

---

## 🚀 Getting started

```bash
npm install        # install dependencies
npm run dev        # start dev server → http://localhost:3000
npm run build      # production build + static export to ./out
npm run typecheck  # TypeScript type-check
npm run lint       # ESLint
```

---

## 📁 Project structure

```
src/
├── app/                    # Routes (App Router) — one folder per page
│   ├── layout.tsx          # Root layout: fonts, theme provider, metadata, nav/footer
│   ├── page.tsx            # Home
│   ├── services/…          # /services
│   ├── portfolio/…         # /portfolio
│   ├── about/…             # /about
│   ├── contact/…           # /contact
│   ├── faq/…               # /faq
│   ├── sitemap.ts          # Generated sitemap.xml
│   ├── robots.ts           # Generated robots.txt
│   ├── icon.svg            # Favicon
│   └── globals.css         # Tailwind + theme tokens (light & dark)
├── components/
│   ├── layout/             # Navbar, Footer, ThemeToggle
│   ├── sections/           # Page section blocks (Hero, ServicesGrid, FAQ, ContactForm…)
│   ├── ui/                 # Primitives (Button, Section, Card, Icon, Reveal, Logo)
│   └── ThemeProvider.tsx
├── content/                # ← Edit site content here (CMS-ready data)
│   ├── site.ts             # Brand, navigation, contact, socials
│   ├── services.ts
│   ├── portfolio.ts
│   ├── about.ts
│   └── misc.ts             # Tech stack, process, testimonials, FAQs, stats
└── lib/                    # seo.ts (metadata helper), utils.ts
```

---

## ✏️ Editing content

Everything a non-developer would want to change lives in `src/content/`:

- **Brand name, nav links, email/phone/socials** → `site.ts`
- **Services** → `services.ts`
- **Portfolio / case studies** → `portfolio.ts`
- **Testimonials, FAQs, process steps, stats, tech logos** → `misc.ts`
- **About page copy & values** → `about.ts`

These typed files map 1:1 to CMS collections, so the headless CMS in Milestone 2
is a drop-in swap — components already read from this shape.

---

## 🎨 Theming

Colors are defined once as CSS variables in `globals.css` (`:root` = light,
`.dark` = dark) and exposed to Tailwind as semantic tokens (`bg`, `surface`,
`line`, `content`, `muted`, `brand`, `accent`…). Components never hard-code a
hex value, so re-skinning the whole site is a matter of editing those variables.

---

## 🧩 Built to extend (future milestones)

The architecture deliberately separates concerns so upcoming features slot in cleanly:

| Future milestone      | Where it plugs in                                                        |
| --------------------- | ------------------------------------------------------------------------ |
| Headless CMS / Admin  | Swap `src/content/*` reads for CMS fetches — component API unchanged.     |
| Authentication        | Add middleware + `(auth)` route group; nav already supports auth state.   |
| Client dashboard/portal | New `(dashboard)` route group behind auth.                             |
| Payments (Stripe)     | Add API routes + move host from static export to a Node/serverless target.|
| AI chatbot            | Drop-in widget component + API route.                                     |

When server features are added, remove `output: 'export'` in `next.config.mjs`
to enable API routes and server rendering.

---

## 🌐 Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the
static export and publishes it to GitHub Pages. For a custom domain, set
`NEXT_PUBLIC_BASE_PATH=""` and point DNS at the host.

---

© Nexora. Built by Anirudha.
