import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

// WCAG 2.2 AA checks with axe on every page type, in both themes and at phone width.
const pages = [
  '/',
  '/privacy',
  '/terms',
  '/legal-notice',
  '/licenses',
  '/de',
  '/sl/privacy',
  '/help',
  '/use-cases/meetings',
  '/features/voice-to-tasks',
  '/compare/loronote',
  '/languages',
  '/phones',
  '/fr/use-cases/lectures',
  '/sl/compare/loronote',
];

for (const path of pages) {
  for (const theme of ['light', 'dark'] as const) {
    test(`${path} (${theme}): no axe violations`, async ({ page }) => {
      await page.emulateMedia({ colorScheme: theme });
      await page.goto(path);
      const { violations } = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa']).analyze();
      expect(violations.map((v) => `${v.id}: ${v.nodes.length}× ${v.nodes[0]?.target.join(' ')} (${v.help})`)).toEqual([]);
    });
  }
}

test('/ at phone width with the menu open: no axe violations', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await page.locator('[data-menu-toggle]').click();
  const { violations } = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
  expect(violations.map((v) => `${v.id}: ${v.nodes.length}× ${v.nodes[0]?.target.join(' ')} (${v.help})`)).toEqual([]);
});
