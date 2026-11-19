// Every value in [brackets] must be filled in before launch.
// `pnpm check:launch` (added later) fails while any remain.

const packageId = 'dev.andrej.echo';

export const site = {
  name: 'Echo',
  tagline: 'Offline speech to text for Android',
  url: 'https://echoscribe.net',
  locale: 'en',

  playUrl: `https://play.google.com/store/apps/details?id=${packageId}`,
  downloadPath: '/download',

  email: {
    hello: 'support@echoscribe.net',
    privacy: 'support@echoscribe.net',
  },

  /** The publisher and GDPR controller. A private individual for now; registration lines appear once set. */
  company: {
    name: 'Andrej Koman',
    address: 'Počehova 65, 2000 Maribor',
    country: 'Slovenia',
    /** ISO 3166 code; translated pages show the country name in their own language. */
    countryCode: 'SI',
    register: null as string | null,
    regNo: null as string | null,
    vatId: null as string | null,
  },

  legal: {
    /** Flip to true once a qualified person has reviewed the legal pages; hides the draft notice. */
    reviewed: true,
    updated: '2026-11-19',
    minAge: '16',
    emailRetention: '12 months',
    /** Must match the PostHog project's data retention setting. */
    analyticsRetention: '12 months',
    emailProvider: 'Proton AG (Switzerland)',
    // Slovenian ZIsRPS: say whether an out-of-court dispute resolution provider is recognised.
    adr: 'We are not obliged to take part in out-of-court consumer dispute resolution and do not do so. If something goes wrong, write to us and we will sort it out with you directly.',
  },

  /** Google Play rating, copied by hand from the Play Console. null hides it (hero and structured data). */
  rating: null as { value: number; count: number } | null,

  /**
   * Demo screen recording for the How it works section, files in public/demo/. null hides it.
   * Example: { mp4: '/demo/echo-demo.mp4', webm: '/demo/echo-demo.webm', poster: '/demo/echo-demo.jpg', width: 1080, height: 2340 }
   */
  demoVideo: null as { mp4: string; webm?: string; poster: string; width: number; height: number } | null,

  prices: {
    currency: 'EUR',
    monthly: 5,
    yearly: 20,
    lifetime: 40,
  },
} as const;

/** `id` keys the label in the dictionary (`header.nav`, `footer.links`). */
export type NavLink = { id: string; href: string; live: boolean };
export type NavGroup = { id: string; links: NavLink[] };

export const headerNav: NavLink[] = [
  { id: 'features', href: '/#features', live: true },
  { id: 'useCases', href: '/#use-cases', live: true },
  { id: 'privacy', href: '/#privacy', live: true },
  { id: 'pricing', href: '/#pricing', live: true },
  { id: 'faq', href: '/#faq', live: true },
];

// `live: false` links point at phase-2 pages; the footer hides them until they exist.
export const footerNav: NavGroup[] = [
  {
    id: 'product',
    links: [
      { id: 'features', href: '/#features', live: true },
      { id: 'pricing', href: '/#pricing', live: true },
      { id: 'changelog', href: '/changelog', live: false },
      { id: 'phones', href: '/phones', live: true },
      { id: 'languages', href: '/languages', live: true },
    ],
  },
  {
    id: 'useCases',
    links: [
      { id: 'meetings', href: '/use-cases/meetings', live: true },
      { id: 'lectures', href: '/use-cases/lectures', live: true },
      { id: 'interviews', href: '/use-cases/interviews', live: true },
      { id: 'voiceNotes', href: '/use-cases/voice-notes', live: false },
      { id: 'subtitles', href: '/use-cases/subtitles', live: false },
    ],
  },
  {
    id: 'compare',
    links: [
      { id: 'vsOtter', href: '/compare/otter', live: false },
      { id: 'vsGoogleRecorder', href: '/compare/google-recorder', live: false },
    ],
  },
  {
    id: 'resources',
    links: [
      { id: 'blog', href: '/blog', live: true },
      { id: 'help', href: '/help', live: true },
      { id: 'contact', href: `mailto:${site.email.hello}`, live: true },
    ],
  },
  {
    id: 'legal',
    links: [
      { id: 'privacy', href: '/privacy', live: true },
      { id: 'terms', href: '/terms', live: true },
      { id: 'legalNotice', href: '/legal-notice', live: true },
      { id: 'licenses', href: '/licenses', live: true },
    ],
  },
];
