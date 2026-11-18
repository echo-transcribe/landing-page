import { expect, test, type Page } from '@playwright/test';

const pages = ['/', '/privacy', '/terms', '/legal-notice', '/licenses'];

/** Records every request and every CSP violation from the moment the page starts loading. */
async function watch(page: Page) {
  const requests: string[] = [];
  page.on('request', (r) => requests.push(r.url()));
  await page.addInitScript(() => {
    (window as unknown as { __csp: string[] }).__csp = [];
    document.addEventListener('securitypolicyviolation', (e) => {
      (window as unknown as { __csp: string[] }).__csp.push(`${e.violatedDirective} ${e.blockedURI}`);
    });
  });
  return {
    requests,
    violations: () => page.evaluate(() => (window as unknown as { __csp: string[] }).__csp),
  };
}

for (const path of pages) {
  test(`${path}: no cookies, no third-party requests, no CSP violations`, async ({ page, context, baseURL }) => {
    const { requests, violations } = await watch(page);
    await page.goto(path);
    await page.waitForLoadState('networkidle');

    // Interact the way a visitor would: theme switch, and a CTA click that stays on the page.
    await page.locator('[data-theme-toggle]').first().click();
    await page.evaluate(() => {
      document.addEventListener('click', (e) => e.preventDefault(), { capture: true, once: true });
    });
    const cta = page.locator('[data-event]').first();
    if (await cta.count()) await cta.click();
    await page.waitForLoadState('networkidle');

    expect(await context.cookies()).toEqual([]);
    const origin = new URL(baseURL!).origin;
    expect(requests.filter((url) => !url.startsWith(origin) && !url.startsWith('data:'))).toEqual([]);
    expect(await violations()).toEqual([]);
  });
}

test('theme choice is the only thing stored, and only after the visitor picks one', async ({ page }) => {
  await page.emulateMedia({ colorScheme: 'light' });
  await page.goto('/');
  expect(await page.evaluate(() => Object.keys(localStorage))).toEqual([]);
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');

  await page.locator('[data-theme-toggle]').first().click();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  expect(await page.evaluate(() => ({ ...localStorage }))).toEqual({ 'echo-theme': 'dark' });

  await page.reload();
  await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
});

test('mobile menu opens, follows a link and closes', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const toggle = page.locator('[data-menu-toggle]');
  const menu = page.locator('#mobile-menu');

  await expect(menu).toBeHidden();
  await toggle.click();
  await expect(menu).toBeVisible();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');

  await page.keyboard.press('Escape');
  await expect(menu).toBeHidden();
  await expect(toggle).toBeFocused();

  await toggle.click();
  await menu.getByRole('link', { name: 'Pricing' }).click();
  await expect(menu).toBeHidden();
  await expect(page).toHaveURL(/#pricing$/);
});

test('FAQ answers open without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto('/#faq');
  const item = page.locator('#faq details').nth(1);
  await item.locator('summary').click();
  await expect(item).toHaveAttribute('open', '');
  await context.close();
});
