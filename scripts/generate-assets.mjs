// Generates favicons and the Open Graph image into public/. Run: pnpm assets
// The OG image is rendered by headless Chromium so it uses the real DM Sans font.
import { readFile, writeFile } from 'node:fs/promises';
import { createRequire } from 'node:module';
import { chromium } from '@playwright/test';

const require = createRequire(import.meta.url);
const sharp = require(require.resolve('sharp', { paths: [require.resolve('astro')] }));

const root = new URL('../', import.meta.url);
const mark = new URL('src/assets/echo-mark.png', root);
const out = (name) => new URL(`public/${name}`, root);

// The mark is not square (1056x1024); pad it onto a square transparent canvas.
async function squareMark(size, { background = { r: 0, g: 0, b: 0, alpha: 0 }, padding = 0 } = {}) {
  const inner = size - padding * 2;
  const icon = await sharp(mark.pathname).resize(inner, inner, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png().toBuffer();
  return sharp({ create: { width: size, height: size, channels: 4, background } })
    .composite([{ input: icon, left: padding, top: padding }])
    .png()
    .toBuffer();
}

const cream = { r: 254, g: 250, b: 224, alpha: 1 };
await writeFile(out('favicon-32.png'), await squareMark(32));
await writeFile(out('favicon-192.png'), await squareMark(192));
await writeFile(out('favicon-512.png'), await squareMark(512));
// iOS fills transparency with black, so the touch icon gets the page colour and some breathing room.
await writeFile(out('apple-touch-icon.png'), await squareMark(180, { background: cream, padding: 18 }));

// Load the site's own dictionaries (TypeScript) through Vite, so the OG images use the page text.
const { pathToFileURL } = await import('node:url');
const { createServer } = await import(pathToFileURL(require.resolve('vite', { paths: [require.resolve('astro')] })).href);
const vite = await createServer({ configFile: false, root: root.pathname, server: { middlewareMode: true }, appType: 'custom', logLevel: 'error' });
const { locales, useDict, defaultLocale } = await vite.ssrLoadModule('/src/i18n/index.ts');
await vite.close();

const fontFile = (subset) => readFile(require.resolve(`@fontsource-variable/dm-sans/files/dm-sans-${subset}-opsz-normal.woff2`));
const [latin, latinExt] = await Promise.all([fontFile('latin'), fontFile('latin-ext')]);
const markData = (await squareMark(220)).toString('base64');
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

const ogHtml = (t, lang) => `<!doctype html><html lang="${lang}"><head><style>
@font-face { font-family: 'DM Sans'; src: url(data:font/woff2;base64,${latin.toString('base64')}) format('woff2'); font-weight: 100 1000;
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD; }
@font-face { font-family: 'DM Sans'; src: url(data:font/woff2;base64,${latinExt.toString('base64')}) format('woff2'); font-weight: 100 1000;
  unicode-range: U+0100-02BA, U+02BD-02C5, U+02C7-02CC, U+02CE-02D7, U+02DD-02FF, U+0304, U+0308, U+0329, U+1D00-1DBF, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF; }
html, body { margin: 0; }
body { width: 1200px; height: 630px; background: #fefae0; font-family: 'DM Sans'; color: #2a2318;
  display: flex; align-items: center; gap: 64px; padding: 0 96px; box-sizing: border-box; position: relative; overflow: hidden; }
.aura { position: absolute; right: -200px; top: -260px; width: 900px; height: 900px; border-radius: 50%;
  background: radial-gradient(closest-side, #faedcd, rgba(250, 237, 205, 0)); }
img { width: 220px; height: 220px; position: relative; flex: none; }
.copy { position: relative; display: flex; flex-direction: column; gap: 22px; min-width: 0; }
.pill { align-self: flex-start; padding: 8px 18px; border-radius: 999px; background: #eef2e0; color: #55613b; font-size: 24px; font-weight: 600; }
h1 { margin: 0; font-size: 76px; line-height: 1.02; font-weight: 700; letter-spacing: -0.03em; }
p { margin: 0; font-size: 28px; color: #635747; }
</style></head><body>
<div class="aura"></div>
<img src="data:image/png;base64,${markData}" alt="">
<div class="copy">
  <span class="pill">${esc(t.hero.pill)}</span>
  <h1>${esc(t.hero.headingLine1)}<br>${esc(t.hero.headingLine2)}</h1>
  <p>${esc(t.common.ogTagline)}</p>
</div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
for (const l of locales) {
  await page.setContent(ogHtml(useDict(l.code), l.htmlLang));
  await page.evaluate(() => document.fonts.ready);
  // Longer languages: shrink the heading until the copy fits the card.
  await page.evaluate(() => {
    const h1 = document.querySelector('h1');
    const copy = document.querySelector('.copy');
    let size = 76;
    while (size > 44 && (copy.scrollHeight > 560 || h1.scrollWidth > h1.clientWidth)) h1.style.fontSize = `${(size -= 2)}px`;
  });
  const name = l.code === defaultLocale ? 'og-image.png' : `og-image-${l.code}.png`;
  await page.screenshot({ path: out(name).pathname });
}
await browser.close();

console.log('Wrote favicons and one OG image per locale to public/');
