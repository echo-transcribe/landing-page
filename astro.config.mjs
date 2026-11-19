// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { site } from './src/config/site.ts';
import { defaultLocale, enabledLocales, locales } from './src/i18n/locales.ts';

export default defineConfig({
  site: site.url,
  output: 'static',
  trailingSlash: 'never',
  build: { format: 'file' },
  i18n: {
    // Astro's types want literal tuples here, but the list is built from src/i18n/locales.ts.
    defaultLocale: /** @type {never} */ (defaultLocale),
    // Only enabled locales get routes. pt-br is served at /pt-br but is the language pt-BR.
    locales: /** @type {never} */ (
      enabledLocales.map((l) => (l.path === '' || l.path === l.htmlLang ? l.code : { path: l.path, codes: [l.htmlLang] }))
    ),
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: {
        defaultLocale,
        locales: Object.fromEntries(locales.filter((l) => l.enabled).map((l) => [l.code, l.htmlLang])),
      },
    }),
  ],
  markdown: { syntaxHighlight: 'prism' },
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "img-src 'self' data:",
        "font-src 'self'",
        "connect-src 'self'",
      ],
    },
  },
});
