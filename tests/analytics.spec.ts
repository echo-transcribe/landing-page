import { expect, test } from '@playwright/test';

// Only meaningful when the build had a PostHog key, e.g. PUBLIC_POSTHOG_KEY=phc_test pnpm test.
test.skip(!process.env.PUBLIC_POSTHOG_KEY, 'analytics disabled in this build');

test('analytics go through /ingest, cookieless, with CTA events', async ({ page, context, baseURL }) => {
  const ingest: { url: string; body: string }[] = [];
  await page.route('**/ingest/**', async (route) => {
    ingest.push({ url: route.request().url(), body: route.request().postData() ?? '' });
    await route.fulfill({ status: 200, body: '{}' });
  });

  await page.goto('/');
  await page.waitForLoadState('networkidle');
  await page.evaluate(() => {
    document.addEventListener('click', (e) => e.preventDefault(), { capture: true, once: true });
  });
  await page.locator('[data-event="pricing_click"]').first().click();
  await page.waitForTimeout(1500);

  expect(ingest.length).toBeGreaterThan(0);
  expect(ingest.every((r) => r.url.startsWith(`${new URL(baseURL!).origin}/ingest/`))).toBe(true);
  expect(await context.cookies()).toEqual([]);
  expect(await page.evaluate(() => Object.keys(localStorage).length + Object.keys(sessionStorage).length)).toBe(0);
});
