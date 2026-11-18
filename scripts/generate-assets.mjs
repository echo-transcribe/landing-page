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

const font = await readFile(
  require.resolve('@fontsource-variable/dm-sans/files/dm-sans-latin-opsz-normal.woff2'),
);
const markData = (await squareMark(220)).toString('base64');

const html = `<!doctype html><html><head><style>
@font-face { font-family: 'DM Sans'; src: url(data:font/woff2;base64,${font.toString('base64')}) format('woff2'); font-weight: 100 1000; }
html, body { margin: 0; }
body { width: 1200px; height: 630px; background: #fefae0; font-family: 'DM Sans'; color: #2a2318;
  display: flex; align-items: center; gap: 64px; padding: 0 96px; box-sizing: border-box; position: relative; overflow: hidden; }
.aura { position: absolute; right: -200px; top: -260px; width: 900px; height: 900px; border-radius: 50%;
  background: radial-gradient(closest-side, #faedcd, rgba(250, 237, 205, 0)); }
img { width: 220px; height: 220px; position: relative; flex: none; }
.copy { position: relative; display: flex; flex-direction: column; gap: 22px; }
.pill { align-self: flex-start; padding: 8px 18px; border-radius: 999px; background: #eef2e0; color: #55613b; font-size: 24px; font-weight: 600; }
h1 { margin: 0; font-size: 76px; line-height: 1.02; font-weight: 700; letter-spacing: -0.03em; }
p { margin: 0; font-size: 28px; color: #635747; }
</style></head><body>
<div class="aura"></div>
<img src="data:image/png;base64,${markData}" alt="">
<div class="copy">
  <span class="pill">Offline speech to text for Android</span>
  <h1>Say it once.<br>Echo writes it down.</h1>
  <p>Private, on-device notes, summaries and tasks.</p>
</div>
</body></html>`;

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1200, height: 630 } });
await page.setContent(html);
await page.evaluate(() => document.fonts.ready);
await page.screenshot({ path: out('og-image.png').pathname });
await browser.close();

console.log('Wrote favicons and og-image.png to public/');
