# Echo landing page

Marketing site for [Echo](https://play.google.com/store/apps/details?id=dev.andrej.echo), the offline speech to text app
for Android. Static Astro site, hosted on Vercel. The design source is the canvas in `../echo/docs/design/landing-page`.

## Commands

| Command             | What it does                                                                     |
| ------------------- | -------------------------------------------------------------------------------- |
| `pnpm dev`          | Dev server on http://localhost:4321 (no CSP in dev mode)                         |
| `pnpm build`        | Static build into `dist/`                                                        |
| `pnpm check`        | Type-check Astro and TypeScript files                                            |
| `pnpm test`         | Build, serve on port 4399 and run the Playwright tests                           |
| `pnpm assets`       | Regenerate favicons and `public/og-image.png` from the logo                      |
| `pnpm check:launch` | Fail while placeholders, the placeholder domain or unreviewed legal pages remain |

First run of the tests: `pnpm exec playwright install chromium`.

## Where things live

- `src/config/site.ts`: domain, company and legal details, emails, prices, navigation. Footer links with
  `live: false` stay hidden until their page exists.
- `src/config/product.ts`: app facts (Android version, RAM tiers, formats), checked against the echo repo.
- `src/config/faq.ts`: FAQ entries, used by the page and its FAQPage structured data.
- `src/layouts/BaseLayout.astro`: head, SEO tags, theme bootstrap, header, footer, analytics.
- `src/layouts/TextPageLayout.astro`: the text template for legal pages, and later help and blog posts.
- `src/content.config.ts`: the blog collection schema. Posts go in `src/content/blog/` (no routes yet).

## Privacy rules

The site sets no cookies and loads nothing from third parties, so it needs no cookie banner. Keep it that way:

- No external scripts, fonts, embeds or pixels. Fonts are self-hosted; images go through `astro:assets`.
- Analytics are PostHog EU in cookieless mode, proxied through `/ingest` (see `vercel.json`).
  They load only when `PUBLIC_POSTHOG_KEY` is set at build time.
- No inline `style="..."` attributes: the Content Security Policy blocks them.
- `tests/privacy.spec.ts` fails on any cookie, third-party request or CSP violation.

## Launch checklist

1. Fill every `[placeholder]` in `src/config/site.ts` and set the real domain in `site.url`.
2. Have the privacy policy, terms and legal notice reviewed, then set `site.legal.reviewed = true`.
3. PostHog (EU Cloud project): enable **cookieless server hash mode** (otherwise events are dropped) and
   **Discard client IP data** (the site promises not to store IPs). Set `PUBLIC_POSTHOG_KEY` in Vercel.
4. Vercel: connect the repo; Astro is detected automatically. Set `ENABLE_EXPERIMENTAL_COREPACK=1` so the pinned
   pnpm version is used. Add the domain.
5. `pnpm check:launch` passes.
