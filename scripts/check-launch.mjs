// Fails while anything still blocks launch: [bracket] placeholders, the placeholder domain,
// or legal pages not yet reviewed. Run: pnpm check:launch
import { readFile } from 'node:fs/promises';

const files = ['src/config/site.ts', 'src/config/product.ts', 'src/i18n/en.ts'];
const problems = [];

for (const file of files) {
  const lines = (await readFile(new URL(`../${file}`, import.meta.url), 'utf8')).split('\n');
  lines.forEach((line, i) => {
    if (line.trim().startsWith('//') || line.includes('launch-check: ignore')) return;
    // Placeholders sit inside string literals: '[Company name]' or `...[number]...`.
    for (const m of line.matchAll(/['"`][^'"`]*?(\[[^\]]+\])[^'"`]*['"`]/g)) problems.push(`${file}:${i + 1}  placeholder ${m[1]}`);
    if (line.includes('.invalid')) problems.push(`${file}:${i + 1}  placeholder domain`);
    if (/reviewed:\s*false/.test(line)) problems.push(`${file}:${i + 1}  legal pages not reviewed (site.legal.reviewed)`);
  });
}

if (problems.length) {
  console.error(`Not ready to launch (${problems.length}):\n  ${problems.join('\n  ')}`);
  process.exit(1);
}
console.log('Launch check passed.');
