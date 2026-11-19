import { expect, test } from '@playwright/test';

// Every locale the site is published in: URL prefix and <html lang>.
const locales = [
  { prefix: '', lang: 'en' },
  { prefix: '/de', lang: 'de' },
  { prefix: '/es', lang: 'es' },
  { prefix: '/fr', lang: 'fr' },
  { prefix: '/it', lang: 'it' },
  { prefix: '/pt-br', lang: 'pt-BR' },
  { prefix: '/sl', lang: 'sl' },
];
const routes = ['/', '/privacy', '/terms', '/legal-notice', '/licenses'];
const url = (prefix: string, route: string) => (route === '/' ? prefix || '/' : `${prefix}${route}`);

for (const route of routes) {
  test(`${route}: every language version has its lang, canonical, hreflang set and switcher`, async ({ page }) => {
    const english = { h1: '', text: '' };
    for (const { prefix, lang } of locales) {
      await page.goto(url(prefix, route));
      await expect(page.locator('html')).toHaveAttribute('lang', lang);

      const canonical = await page.locator('link[rel="canonical"]').getAttribute('href');
      expect(new URL(canonical!).pathname).toBe(url(prefix, route));

      // One alternate per locale plus x-default, all pointing at this route.
      const alternates = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((els) =>
        els.map((e) => [e.getAttribute('hreflang'), new URL(e.getAttribute('href')!).pathname]),
      );
      expect(alternates).toEqual([
        ...locales.map((l) => [l.lang, url(l.prefix, route)]),
        ['x-default', url('', route)],
      ]);

      // The switcher links to this same page in every language.
      const switcher = await page.locator('footer details.switcher a').evaluateAll((els) => els.map((e) => e.getAttribute('href')));
      expect(switcher).toEqual(locales.map((l) => url(l.prefix, route)));

      // Translated pages must not fall back to English text.
      const h1 = (await page.locator('h1').innerText()).trim();
      const body = (await page.locator('main').innerText()).slice(0, 400);
      if (!prefix) Object.assign(english, { h1, text: body });
      else if (route !== '/licenses' && route !== '/legal-notice') {
        expect(h1, `${lang} heading`).not.toBe(english.h1);
        expect(body, `${lang} body`).not.toBe(english.text);
      }

      // Translated legal pages say the English version prevails and link to it. The licences page is a list, not a contract.
      const notice = page.locator('main a[hreflang="en"]');
      if (prefix && route !== '/' && route !== '/licenses') await expect(notice).toHaveAttribute('href', url('', route));
      else await expect(notice).toHaveCount(0);
    }
  });
}

test('no page scrolls sideways on a small phone', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 800 });
  for (const { prefix } of locales) {
    for (const route of routes) {
      await page.goto(url(prefix, route));
      const width = await page.evaluate(() => document.documentElement.scrollWidth);
      expect(width, url(prefix, route)).toBeLessThanOrEqual(320);
    }
  }
});
