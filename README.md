# Echo landing page

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
- The LoroNote comparison (`/compare/loronote`) cites the App Store listing with a checked-on date
  (`loronote.checked`). Recheck the listing and update the date before relying on it.
- `src/config/product.ts`: app facts (Android version, RAM tiers, formats), checked against the echo repo.
- `src/i18n/`: every piece of UI text per language, including the FAQ (also used for the FAQPage structured data).
- `src/views/`: page bodies shared by the English and translated routes in `src/pages/` and `src/pages/[lang]/`.
- `src/i18n/pages/<code>.ts`: text of the help, use-case, voice-to-tasks, comparison, languages and phones pages.
  A language gets these routes (and links to them) only once its file is registered in `src/i18n/pages/index.ts`;
  until then its pages link to the English versions.
- `src/config/languages.ts`: Whisper's 100 language codes for `/languages`.
- `src/layouts/BaseLayout.astro`: head, SEO tags, theme bootstrap, header, footer, analytics.
- `src/layouts/TextPageLayout.astro`: the text template for legal pages, and later help and blog posts.
- `src/content.config.ts`: the blog collection schema. Posts go in `src/content/blog/` (no routes yet).

## Languages

The site is published in the app's UI languages: English at `/`, and German, Spanish, French, Italian, Portuguese
(Brazil) and Slovenian under `/de`, `/es`, `/fr`, `/it`, `/pt-br` and `/sl`.

- `src/i18n/locales.ts` lists the locales; `src/i18n/<code>.ts` holds each language's UI text. The `Dict` type makes a
  missing or misshaped key a type error.
- Legal text lives in one component per language: `src/views/legal/<page>/<code>.astro`. Translated legal pages say
  the English version prevails. When you change an English legal page, change the six translations too. Some of them
  spell out `site.legal` values in their own language (marked `keep in sync with site.legal.X`).
- Wording follows the app's own translations in `../echo/app/src/main/res/values-*/`.
- `tests/i18n.spec.ts` checks `lang`, canonical URLs, hreflang links, the language switcher, untranslated pages and
  sideways scrolling on a 320 px phone, for every page in every language.

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
