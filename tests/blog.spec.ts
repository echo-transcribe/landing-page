import { expect, test } from '@playwright/test';

// The blog exists only once a post is published. Both states are checked, so the test keeps
// passing when the first draft goes live.
test('blog is either fully hidden or fully wired up', async ({ page, request }) => {
  const index = await request.get('/blog');

  if (index.status() === 404) {
    expect((await request.get('/rss.xml')).status()).toBe(404);
    await page.goto('/');
    await expect(page.locator('footer a[href="/blog"]')).toHaveCount(0);
    expect(await (await request.get('/sitemap-0.xml')).text()).not.toContain('/blog');
    return;
  }

  expect(index.status()).toBe(200);
  await page.goto('/');
  await expect(page.locator('footer a[href="/blog"]')).toHaveCount(1);
  await page.goto('/de');
  await expect(page.locator('footer a[href="/blog"]')).toHaveCount(1);

  await page.goto('/blog');
  await expect(page.locator('html')).toHaveAttribute('lang', 'en');
  const posts = await page.locator('main ol a').evaluateAll((els) => els.map((e) => e.getAttribute('href')!));
  expect(posts.length).toBeGreaterThan(0);

  // The feed lists the same posts, with absolute links and no trailing slash.
  const feed = await (await request.get('/rss.xml')).text();
  const feedLinks = [...feed.matchAll(/<item>[\s\S]*?<link>([^<]+)<\/link>/g)].map((m) => new URL(m[1]).pathname);
  expect(feedLinks.sort()).toEqual([...posts].sort());

  const post = posts[0];
  await page.goto(post);
  await expect(page.locator('h1')).toHaveCount(1);
  await expect(page.locator('meta[property="og:type"]')).toHaveAttribute('content', 'article');
  const ld = await page.locator('script[type="application/ld+json"]').evaluateAll((els) => els.map((e) => JSON.parse(e.textContent!)));
  const article = ld.find((d) => d['@type'] === 'BlogPosting');
  expect(article?.headline).toBe((await page.locator('h1').innerText()).trim());
  expect(new URL(article.url).pathname).toBe(post);

  // English only: hreflang names English alone, and the switcher sends other languages home.
  const alternates = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((els) => els.map((e) => e.getAttribute('hreflang')));
  expect(alternates).toEqual(['en', 'x-default']);
  await expect(page.locator('footer details.switcher a[hreflang="de"]')).toHaveAttribute('href', '/de');
});
