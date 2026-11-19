import { product } from '../config/product';

// Every user-visible string on the site. Other locales must supply the same shape (see `Dict`).
// Strings that need values are functions. Icons and other markup stay in the components.
export const en = {
  common: {
    skipToContent: 'Skip to content',
    downloadNow: 'Download now',
    playBadgeAlt: 'Get it on Google Play',
    logoLabel: 'Echo home',
    brandTagline: 'Offline speech to text for Android',
    ogImageAlt: 'Echo: say it once, Echo writes it down.',
    switchToDark: 'Switch to dark mode',
    switchToLight: 'Switch to light mode',
  },

  meta: {
    home: {
      title: 'Echo — offline speech to text for Android',
      description:
        'Meetings, lectures and voice notes become text, summaries and tasks on your phone. Nothing is uploaded, and it works offline.',
      appDescription: 'Offline speech to text for Android. Transcripts, summaries and tasks, made on your phone.',
    },
    privacy: {
      title: 'Privacy policy — Echo',
      description:
        'How Echo and this website handle personal data. Your recordings and notes stay on your phone; this site sets no cookies.',
    },
    terms: {
      title: 'Terms of use — Echo',
      description: 'The terms for using Echo and buying Echo Pro through Google Play.',
    },
    legalNotice: {
      title: 'Legal notice — Echo',
      description: 'Publisher details for Echo, the offline speech to text app for Android.',
    },
    licenses: {
      title: 'Open-source licenses — Echo',
      description: 'The open-source models and libraries Echo is built on, with their licences.',
    },
    notFound: {
      title: 'Page not found — Echo',
      description: "This page doesn't exist.",
    },
  },

  header: {
    navLabel: 'Main',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    nav: {
      features: 'Features',
      useCases: 'Use cases',
      privacy: 'Privacy',
      pricing: 'Pricing',
      faq: 'FAQ',
    },
  },

  footer: {
    copyright: (year: number) => `© ${year} Koman`,
    noCookies: 'No cookies on this site',
    groups: {
      product: 'Product',
      useCases: 'Use cases',
      compare: 'Compare',
      resources: 'Resources',
      legal: 'Legal',
    },
    links: {
      features: 'Features',
      pricing: 'Pricing',
      changelog: 'Changelog',
      phones: 'Supported phones',
      languages: 'Languages',
      meetings: 'Meetings',
      lectures: 'Lectures',
      interviews: 'Interviews',
      voiceNotes: 'Voice notes',
      subtitles: 'Subtitles',
      vsLoronote: 'Echo vs LoroNote',
      vsOtter: 'Echo vs Otter',
      vsGoogleRecorder: 'Echo vs Google Recorder',
      blog: 'Blog',
      help: 'Help center',
      contact: 'Contact',
      privacy: 'Privacy policy',
      terms: 'Terms of use',
      legalNotice: 'Legal notice',
      licenses: 'Open-source licenses',
    },
  },

  languageSwitcher: {
    label: 'Language',
  },

  textPage: {
    lastUpdated: 'Last updated',
    draftNotice: 'Draft. Every value in [brackets] must be filled in, and the text reviewed by someone qualified in EU law, before launch.', // launch-check: ignore
    translationNotice: 'This is a translation for your convenience. If it differs from the English version, the English version applies.',
    translationNoticeLink: 'Read the English version',
  },

  notFound: {
    heading: 'Nothing recorded here.',
    lead: "The page you're looking for doesn't exist or has moved.",
    home: 'Back to the home page',
  },

  hero: {
    pill: 'Offline speech to text for Android',
    headingLine1: 'Say it once.',
    headingLine2: 'Echo writes it down.',
    lead: 'Meetings, lectures and voice notes become text, summaries and tasks on your phone. Nothing is uploaded, and after a one-time model download it works without internet.',
    qrLabel: 'QR code linking to Echo on Google Play',
    qrNote: 'Or scan with your Android phone',
    note: 'Free to download · No account',
  },

  phone: {
    label: 'Echo showing a meeting transcript with a summary and a task',
    title: 'Project kickoff',
    meta: 'Today, 9:42 AM · 18 min',
    tag: 'Work',
    summaryLabel: 'Summary',
    summaryText: 'The team agreed on the launch scope and split the budget work. Alex reviews the draft before Friday.',
    tasksLabel: 'Tasks · 2',
    task1: 'Send the budget draft to Alex',
    task1Reminder: 'Tomorrow, 10:00 AM',
    task2: 'Book the room for Thursday',
    lines: [
      {
        name: 'Maja',
        time: '2:14 – 2:31',
        before: 'Okay, so ',
        mark: "tomorrow at ten I'll send the budget draft to Alex",
        after: ', and he can review it before Friday.',
      },
      {
        name: 'Alex',
        time: '2:32 – 2:40',
        before: 'Works for me. Someone should ',
        mark: 'book the room for Thursday',
        after: '.',
      },
    ],
  },

  features: {
    eyebrow: 'Features',
    title: 'Everything you said, ready to use',
    items: [
      {
        title: 'Accurate, on your phone',
        text: 'Whisper Large V3 Turbo on phones with 8 GB of RAM, a smaller Whisper model on others, or your phone’s own offline recognizer for instant results.',
      },
      {
        title: 'Knows who said what',
        text: 'Speakers are labelled automatically. Name someone once and the name carries through the note and your exports.',
      },
      {
        title: 'A summary for every note',
        text: 'A short summary follows right after the transcript. Needs a phone with about 4 GB of RAM.',
      },
      {
        title: 'Around 100 languages',
        text: 'Detected automatically, including English, German, Slovenian, Croatian and Italian.',
      },
      {
        title: 'Calendar and folders',
        text: 'Browse notes and tasks by day, and sort them into folders like Work, Personal or Ideas.',
      },
      {
        title: 'Import and share',
        text: 'Bring in recordings you already have. Share as text for free, or as Markdown, SRT subtitles and the original audio with Pro.',
      },
    ],
  },

  tasksCallout: {
    eyebrow: 'Only in Echo',
    title: 'Say it out loud. It becomes a task.',
    lead: 'Echo pulls what needs doing out of your transcript. If you mentioned a time, it reminds you then.',
    points: ["Today's tasks on the home screen, the rest in the calendar", 'Tap a task to jump to where it was said'],
    speaker: 'You',
    time: '0:04 – 0:11',
    saidBefore: 'I think ',
    saidMark: 'tomorrow at 10 a.m. I have to go to the dentist',
    saidAfter: ", and after that I'll pick up the parcel.",
    taskTitle: 'Dentist appointment',
    reminder: 'Tomorrow, 10:00 AM · reminder on',
    chip: 'New task',
  },

  howItWorks: {
    eyebrow: 'How it works',
    title: 'Three steps, nothing to set up',
    steps: [
      { title: 'Record or import', text: 'Tap the mic, or open an audio file you already have.' },
      { title: 'Echo does the work', text: 'The transcript fills in line by line. Speakers, a summary and tasks follow.' },
      { title: 'Read, listen, share', text: 'Tap any line to hear it. Your edits never overwrite the original.' },
    ],
  },

  useCases: {
    eyebrow: 'Use cases',
    title: 'Built for the way you record',
    learnMore: 'Learn more',
    items: {
      meetings: { title: 'Meetings', text: 'Minutes and owners, without typing during the meeting.' },
      lectures: { title: 'Lectures', text: 'Listen in class and search the whole lecture later.' },
      interviews: { title: 'Interviews', text: 'Labelled speakers, ready to quote. Sensitive talks stay with you.' },
      subtitles: { title: 'Subtitles', text: 'Timed SRT files for your videos, ready for any editor.' },
    },
  },

  privacySection: {
    eyebrow: 'Privacy',
    title: 'Private by design, not by promise',
    lead: "We can't leak, sell or train on your recordings, because we never receive them.",
    points: [
      { title: 'No servers for your notes', text: 'Audio, transcripts, summaries and tasks are stored only on your phone.' },
      { title: 'No account', text: 'No sign-up and no email. Pro is bought and managed in Google Play.' },
      {
        title: 'Internet only for downloads',
        text: 'You need a connection to download the models and to buy Pro. After that, airplane mode is fine.',
      },
    ],
    siteTitle: 'This website too',
    siteText: 'No cookies. Visits are counted with cookieless analytics hosted in the EU, without storing your IP address.',
    policyLink: 'Privacy policy',
  },

  compare: {
    eyebrow: 'Compare',
    title: 'Echo vs cloud note takers',
    featureColumn: 'Feature',
    otherColumn: 'Typical cloud services',
    rows: [
      { label: 'Where your audio is processed', echo: 'On your phone', other: 'On their servers' },
      { label: 'Works without internet', echo: 'Yes', other: 'No' },
      { label: 'Account needed', echo: 'No', other: 'Yes' },
      { label: 'Tasks and reminders from speech', echo: 'Yes', other: 'Varies' },
      { label: 'Joins Zoom or Teams calls for you', echo: 'No', other: 'Often' },
    ],
    fit: "Echo isn't the right fit if you need a bot that joins video calls, or notes your team edits together in real time.",
  },

  pricing: {
    eyebrow: 'Pricing',
    title: 'Start free. Go Pro when notes get long.',
    lead: 'Pro removes the 2-minute limit and adds Markdown, SRT and audio export.',
    bestValue: 'Best value',
    plans: {
      free: {
        name: 'Free',
        unit: '',
        sub: 'Forever',
        features: ['First 2 minutes of every note', 'Summary and tasks included', 'Unlimited notes'],
      },
      monthly: {
        name: 'Pro monthly',
        unit: '/ month',
        sub: 'Cancel anytime',
        features: [
          'No time limit',
          'Summary and tasks from the whole recording',
          'Full-length imports',
          'Markdown, SRT and audio export',
        ],
      },
      yearly: {
        name: 'Pro yearly',
        unit: '/ year',
        sub: (perMonth: string, savePercent: number) => `${perMonth} a month · save ${savePercent}% vs monthly`,
        features: ['Everything in Pro', 'Billed once a year'],
      },
      lifetime: {
        name: 'Pro lifetime',
        unit: 'once',
        sub: 'No renewals',
        features: ['Everything in Pro', 'Future updates included'],
      },
    },
    ctaText: 'Start free. Upgrade inside the app when you need to.',
    ctaButton: 'Download free',
    fine: 'Prices in euros, VAT included. Billed through Google Play, which may show your local currency. Subscriptions renew until you cancel them in Google Play.',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Questions, answered',
    items: [
      {
        q: 'What happens after the free 2 minutes?',
        a: 'Your whole recording is saved, and the transcript stops at 2:00. Upgrade to Pro and Echo transcribes the rest of the same note.',
      },
      {
        q: 'Which phones does Echo run on?',
        a: `Android ${product.minAndroid} or newer. Summaries and tasks need about ${product.notesAiRamGb} GB of RAM. Phones with ${product.largeModelRamGb} GB or more get Whisper Large V3 Turbo, the most accurate model Echo offers; others get a smaller, faster one.`,
      },
      {
        q: 'How accurate is it?',
        a: 'It depends on the audio: one clear voice close to the phone works best, crosstalk and background noise make it harder. Accuracy is highest in widely spoken languages.',
      },
      {
        q: 'Which languages get summaries and tasks?',
        a: `Transcription works in ${product.transcriptionLanguages} languages, and summaries and tasks are made for every one of them. The standard Notes AI writes them in English; the optional multilingual model writes them in the language of the note.`,
      },
      {
        q: 'Is Echo GDPR compliant?',
        a: 'Your recordings and notes are processed and stored on your device, so we never hold them. The privacy policy lists the little data that is involved, such as Google Play purchases.',
      },
      {
        q: 'Which files can I import?',
        a: `Audio files such as ${product.importFormats}. Echo files each one under the day it was recorded, or today if you prefer.`,
      },
      {
        q: 'How do I move my notes to a new phone?',
        a: 'In Settings, choose Back up notes. Echo saves everything to one file you keep. Open it on the new phone to restore.',
      },
      { q: 'Is there an iPhone version?', a: 'Not yet. Echo is made for Android first.' },
    ],
  },

  closingCta: {
    title: 'Your next meeting, written down.',
    sub: 'Tap record and put your phone down. Echo hands you the transcript, a short summary and the tasks you mentioned, without your words ever leaving the phone.',
    facts: ['Free to download', 'No account', 'Works offline'],
  },
};

export type Dict = typeof en;
