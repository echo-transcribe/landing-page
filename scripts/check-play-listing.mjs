// Checks the Google Play listing texts in docs/play-listing/*.md against Play's length limits.
// Usage: pnpm check:play
import { readdirSync, readFileSync } from 'node:fs';

const dir = new URL('../docs/play-listing/', import.meta.url);
const limits = { Title: 30, 'Short description': 80, 'Full description': 4000 };
let failed = false;

for (const file of readdirSync(dir).filter((f) => f.endsWith('.md') && f !== 'README.md').sort()) {
  const text = readFileSync(new URL(file, dir), 'utf8');
  const sections = Object.fromEntries(
    text
      .split(/^## /m)
      .slice(1)
      .map((s) => {
        const [head, ...body] = s.split('\n');
        return [head.trim(), body.join('\n').trim()];
      }),
  );
  const row = [];
  for (const [name, max] of Object.entries(limits)) {
    const value = sections[name];
    // Play counts characters as the user sees them.
    const length = value === undefined ? -1 : [...value].length;
    const ok = length > 0 && length <= max;
    if (!ok) failed = true;
    row.push(`${name} ${length === -1 ? 'missing' : length}/${max}${ok ? '' : ' ✗'}`);
  }
  console.log(`${file.padEnd(10)} ${row.join(' · ')}`);
}

process.exit(failed ? 1 : 0);
