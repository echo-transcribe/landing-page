// Every value in [brackets] must be filled in before launch.
// `pnpm check:launch` (added later) fails while any remain.

const packageId = 'dev.andrej.echo';

export const site = {
  name: 'Echo',
  tagline: 'Offline speech to text for Android',
  // Placeholder until the domain is decided. `.invalid` can never resolve.
  url: 'https://echo-domain.invalid',
  locale: 'en',

  playUrl: `https://play.google.com/store/apps/details?id=${packageId}`,
  downloadPath: '/download',

  email: {
    hello: '[hello@yourdomain]',
    privacy: '[privacy@yourdomain]',
  },

  company: {
    name: '[Company name, legal form]',
    address: '[Registered address]',
    regNo: '[number]',
    vatId: '[number]',
    country: 'Slovenia, EU',
  },

  legal: {
    /** Flip to true once a qualified person has reviewed the legal pages; hides the draft notice. */
    reviewed: false,
    updated: '2026-11-18',
    register: '[Business register, e.g. AJPES Slovenian Business Register]',
    minAge: '[minimum age, matching the Google Play content rating]',
    emailRetention: '[period]',
    emailProvider: '[email provider]',
    // Slovenian ZIsRPS: say whether an out-of-court dispute resolution provider is recognised.
    adr: '[We do not recognise any out-of-court consumer dispute resolution provider. / Name the provider.]',
  },

  prices: {
    currency: 'EUR',
    monthly: 5,
    yearly: 20,
    lifetime: 40,
  },
} as const;

export type NavLink = { label: string; href: string; live: boolean };
export type NavGroup = { label: string; links: NavLink[] };

export const headerNav: NavLink[] = [
  { label: 'Features', href: '/#features', live: true },
  { label: 'Use cases', href: '/#use-cases', live: true },
  { label: 'Privacy', href: '/#privacy', live: true },
  { label: 'Pricing', href: '/#pricing', live: true },
  { label: 'FAQ', href: '/#faq', live: true },
];

// `live: false` links point at phase-2 pages; the footer hides them until they exist.
export const footerNav: NavGroup[] = [
  {
    label: 'Product',
    links: [
      { label: 'Features', href: '/#features', live: true },
      { label: 'Pricing', href: '/#pricing', live: true },
      { label: 'Changelog', href: '/changelog', live: false },
      { label: 'Supported phones', href: '/phones', live: false },
      { label: 'Languages', href: '/languages', live: false },
    ],
  },
  {
    label: 'Use cases',
    links: [
      { label: 'Meetings', href: '/use-cases/meetings', live: false },
      { label: 'Lectures', href: '/use-cases/lectures', live: false },
      { label: 'Interviews', href: '/use-cases/interviews', live: false },
      { label: 'Voice notes', href: '/use-cases/voice-notes', live: false },
      { label: 'Subtitles', href: '/use-cases/subtitles', live: false },
    ],
  },
  {
    label: 'Compare',
    links: [
      { label: 'Echo vs LoroNote', href: '/compare/loronote', live: false },
      { label: 'Echo vs Otter', href: '/compare/otter', live: false },
      { label: 'Echo vs Google Recorder', href: '/compare/google-recorder', live: false },
    ],
  },
  {
    label: 'Resources',
    links: [
      { label: 'Blog', href: '/blog', live: false },
      { label: 'Help center', href: '/help', live: false },
      { label: 'Contact', href: `mailto:${site.email.hello}`, live: true },
    ],
  },
  {
    label: 'Legal',
    links: [
      { label: 'Privacy policy', href: '/privacy', live: true },
      { label: 'Terms of use', href: '/terms', live: true },
      { label: 'Legal notice', href: '/legal-notice', live: true },
      { label: 'Open-source licenses', href: '/licenses', live: true },
    ],
  },
];
