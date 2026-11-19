import type { Dict } from './en';
import { product } from '../config/product';

export const sl: Dict = {
  common: {
    skipToContent: 'Preskoči na vsebino',
    downloadNow: 'Prenesi zdaj',
    playBadgeAlt: 'Na voljo v Googlu Play',
    logoLabel: 'Domača stran Echo',
    brandTagline: 'Govor v besedilo brez povezave za Android',
    ogImageAlt: 'Echo: reci enkrat, Echo zapiše.',
    ogTagline: 'Zasebni zapiski, povzetki in opravila na tvojem telefonu.',
    switchToDark: 'Preklopi na temni način',
    switchToLight: 'Preklopi na svetli način',
  },

  meta: {
    home: {
      title: 'Echo — govor v besedilo brez povezave za Android',
      description:
        'Sestanki, predavanja in glasovni zapiski postanejo besedilo, povzetki in opravila na tvojem telefonu. Nič se ne naloži v splet, deluje pa tudi brez povezave.',
      appDescription: 'Govor v besedilo brez povezave za Android. Prepisi, povzetki in opravila, nastali na tvojem telefonu.',
    },
    privacy: {
      title: 'Politika zasebnosti — Echo',
      description:
        'Kako Echo in to spletno mesto ravnata z osebnimi podatki. Tvoji posnetki in zapiski ostanejo na telefonu; to spletno mesto ne uporablja piškotkov.',
    },
    terms: {
      title: 'Pogoji uporabe — Echo',
      description: 'Pogoji za uporabo aplikacije Echo in nakup Echo Pro prek Google Play.',
    },
    legalNotice: {
      title: 'Pravno obvestilo — Echo',
      description: 'Podatki o izdajatelju aplikacije Echo, ki pretvarja govor v besedilo brez povezave na Androidu.',
    },
    licenses: {
      title: 'Odprtokodne licence — Echo',
      description: 'Odprtokodni modeli in knjižnice, na katerih temelji Echo, z njihovimi licencami.',
    },
    notFound: {
      title: 'Strani ni mogoče najti — Echo',
      description: 'Ta stran ne obstaja.',
    },
  },

  header: {
    navLabel: 'Glavni meni',
    openMenu: 'Odpri meni',
    closeMenu: 'Zapri meni',
    nav: {
      features: 'Funkcije',
      useCases: 'Primeri uporabe',
      privacy: 'Zasebnost',
      pricing: 'Cenik',
      faq: 'Vprašanja',
    },
  },

  footer: {
    copyright: (year: number) => `© ${year} Koman`,
    noCookies: 'Brez piškotkov na tem spletnem mestu',
    groups: {
      product: 'Izdelek',
      useCases: 'Primeri uporabe',
      compare: 'Primerjava',
      resources: 'Viri',
      legal: 'Pravno',
    },
    links: {
      features: 'Funkcije',
      pricing: 'Cenik',
      changelog: 'Dnevnik sprememb',
      phones: 'Podprti telefoni',
      languages: 'Jeziki',
      meetings: 'Sestanki',
      lectures: 'Predavanja',
      interviews: 'Intervjuji',
      voiceNotes: 'Glasovni zapiski',
      subtitles: 'Podnapisi',
      vsOtter: 'Echo proti Otter',
      vsGoogleRecorder: 'Echo proti Google Recorder',
      blog: 'Blog',
      help: 'Center za pomoč',
      contact: 'Stik',
      privacy: 'Politika zasebnosti',
      terms: 'Pogoji uporabe',
      legalNotice: 'Pravno obvestilo',
      licenses: 'Licence',
    },
  },

  languageSwitcher: {
    label: 'Jezik',
  },

  textPage: {
    lastUpdated: 'Nazadnje posodobljeno',
    contents: 'Na tej strani',
    draftNotice:
      'Osnutek. Vse vrednosti v [oglatih oklepajih] je treba izpolniti, besedilo pa mora pred objavo pregledati strokovnjak za pravo EU.', // launch-check: ignore
    translationNotice: 'Ta prevod je zgolj v pomoč. Če se razlikuje od angleške različice, velja angleška različica.',
    translationNoticeLink: 'Preberi angleško različico',
  },

  notFound: {
    heading: 'Tukaj ni nič posnetega.',
    lead: 'Strani, ki jo iščeš, ni ali pa se je preselila.',
    home: 'Nazaj na začetno stran',
  },

  hero: {

    rating: (value: string, count: string) => `${value} v Googlu Play · ${count} ${({ one: 'ocena', two: 'oceni', few: 'ocene' } as Record<string, string>)[new Intl.PluralRules('sl').select(Number(count.replace(/\D/g, '')))] ?? 'ocen'}`,
    pill: 'Govor v besedilo brez povezave za Android',
    headingLine1: 'Reci enkrat.',
    headingLine2: 'Echo zapiše.',
    lead: 'Sestanki, predavanja in glasovni zapiski postanejo besedilo, povzetki in opravila na tvojem telefonu. Nič se ne naloži v splet, po enkratnem prenosu modela pa vse deluje brez interneta.',
    qrLabel: 'Koda QR za Echo v Google Play',
    qrNote: 'Ali jo skeniraj s telefonom Android',
    note: 'Brezplačen prenos · Brez računa',
  },

  phone: {
    label: 'Echo prikazuje prepis sestanka s povzetkom in opravilom',
    title: 'Začetek projekta',
    meta: 'Danes, 9.42 · 18 min',
    tag: 'Služba',
    summaryLabel: 'Povzetek',
    summaryText: 'Ekipa se je dogovorila o obsegu lansiranja in razdelila delo na proračunu. Alex osnutek pregleda do petka.',
    tasksLabel: 'Opravila · 2',
    task1: 'Pošlji osnutek proračuna Alexu',
    task1Reminder: 'Jutri, 10.00',
    task2: 'Rezerviraj sobo za četrtek',
    lines: [
      {
        name: 'Maja',
        time: '2:14 – 2:31',
        before: 'V redu, torej ',
        mark: 'jutri ob desetih pošljem osnutek proračuna Alexu',
        after: ', on pa ga lahko pregleda do petka.',
      },
      {
        name: 'Alex',
        time: '2:32 – 2:40',
        before: 'Zame je v redu. Nekdo mora ',
        mark: 'rezervirati sobo za četrtek',
        after: '.',
      },
    ],
  },

  features: {
    eyebrow: 'Funkcije',
    title: 'Vse povedano, pripravljeno za uporabo',
    items: [
      {
        title: 'Natančno, na tvojem telefonu',
        text: 'Whisper Large V3 Turbo na telefonih z 8 GB RAM-a, manjši model Whisper na drugih ali telefonu lasten prepoznavalnik brez povezave za takojšnje rezultate.',
      },
      {
        title: 'Ve, kdo je kaj rekel',
        text: 'Govorci so označeni samodejno. Osebo poimenuješ enkrat in ime se prenese v zapisek ter izvoze.',
      },
      {
        title: 'Povzetek za vsak zapisek',
        text: 'Kratek povzetek se pojavi takoj za prepisom. Potrebuje telefon s približno 4 GB RAM-a.',
      },
      {
        title: 'Okoli 100 jezikov',
        text: 'Zaznani samodejno, med njimi slovenščina, angleščina, nemščina, hrvaščina in italijanščina.',
      },
      {
        title: 'Koledar in mape',
        text: 'Zapiske in opravila prebrskaj po dnevih ter jih razvrsti v mape, kot so Služba, Osebno ali Ideje.',
      },
      {
        title: 'Uvoz in deljenje',
        text: 'Uvozi posnetke, ki jih že imaš. Deli kot besedilo brezplačno ali s Pro kot Markdown, podnapise SRT in izvirni zvok.',
      },
    ],
  },

  tasksCallout: {
    eyebrow: 'Samo v Echu',
    title: 'Povej na glas. Postane opravilo.',
    lead: 'Echo iz prepisa izlušči, kaj je treba narediti. Če si omenil uro, te opomni ob pravem času.',
    points: ['Današnja opravila na začetnem zaslonu, ostala v koledarju', 'Tapni opravilo in skoči na mesto, kjer je bilo izrečeno'],
    speaker: 'Ti',
    time: '0:04 – 0:11',
    saidBefore: 'Mislim, da ',
    saidMark: 'moram jutri ob 10. uri k zobozdravniku',
    saidAfter: ', potem pa grem še po paket.',
    taskTitle: 'Pregled pri zobozdravniku',
    reminder: 'Jutri, 10.00 · opomnik vklopljen',
    chip: 'Novo opravilo',
  },

  howItWorks: {

    videoLabel: 'Posnetek zaslona Echa: snemanje sestanka, nastajanje prepisa, nato povzetek in opravila.',
    eyebrow: 'Kako deluje',
    title: 'Trije koraki, nič nastavljanja',
    steps: [
      { title: 'Posnemi ali uvozi', text: 'Tapni mikrofon ali odpri zvočno datoteko, ki jo že imaš.' },
      { title: 'Echo opravi delo', text: 'Prepis se polni vrstico za vrstico. Sledijo govorci, povzetek in opravila.' },
      { title: 'Beri, poslušaj, deli', text: 'Tapni katero koli vrstico in jo poslušaj. Tvoji popravki nikoli ne prepišejo izvirnika.' },
    ],
  },

  useCases: {
    eyebrow: 'Primeri uporabe',
    title: 'Narejeno za tvoj način snemanja',
    learnMore: 'Več',
    items: {
      meetings: { title: 'Sestanki', text: 'Zapisnik in odgovorne osebe, brez tipkanja med sestankom.' },
      lectures: { title: 'Predavanja', text: 'Poslušaj na predavanju, kasneje pa išči po celotnem predavanju.' },
      interviews: { title: 'Intervjuji', text: 'Označeni govorci, pripravljeni za citiranje. Občutljivi pogovori ostanejo pri tebi.' },
      subtitles: { title: 'Podnapisi', text: 'Časovno označene datoteke SRT za tvoje videe, primerne za vsak urejevalnik.' },
    },
  },

  privacySection: {
    eyebrow: 'Zasebnost',
    title: 'Zasebno po zasnovi, ne po obljubi',
    lead: 'Tvojih posnetkov ne moremo izdati, prodati ali z njimi učiti modelov, ker jih nikoli ne prejmemo.',
    points: [
      { title: 'Brez strežnikov za tvoje zapiske', text: 'Zvok, prepisi, povzetki in opravila so shranjeni samo na tvojem telefonu.' },
      { title: 'Brez računa', text: 'Brez registracije in brez e-pošte. Pro kupiš in upravljaš v Google Play.' },
      {
        title: 'Internet samo za prenose',
        text: 'Povezava je potrebna za prenos modelov in nakup Pro. Potem je letalski način čisto v redu.',
      },
    ],
    siteTitle: 'Tudi to spletno mesto',
    siteText: 'Brez piškotkov. Obiske štejemo z analitiko brez piškotkov, ki je gostovana v EU, tvojega naslova IP pa ne shranjujemo.',
    policyLink: 'Politika zasebnosti',
  },

  compare: {
    eyebrow: 'Primerjava',
    title: 'Echo proti oblačnim zapisovalcem',
    featureColumn: 'Funkcija',
    otherColumn: 'Običajne storitve v oblaku',
    rows: [
      { label: 'Kje se obdeluje tvoj zvok', echo: 'Na tvojem telefonu', other: 'Na njihovih strežnikih' },
      { label: 'Deluje brez interneta', echo: 'Da', other: 'Ne' },
      { label: 'Potreben račun', echo: 'Ne', other: 'Da' },
      { label: 'Opravila in opomniki iz govora', echo: 'Da', other: 'Različno' },
      { label: 'Namesto tebe se pridruži klicem v Zoomu ali Teamsu', echo: 'Ne', other: 'Pogosto' },
    ],
    fit: 'Echo ni prava izbira, če potrebuješ bota, ki se pridruži videoklicem, ali zapiske, ki jih ekipa ureja skupaj v realnem času.',
  },

  pricing: {
    eyebrow: 'Cenik',
    title: 'Začni brezplačno. Preklopi na Pro, ko zapiski postanejo dolgi.',
    lead: 'Pro odstrani omejitev 2 minut in doda izvoz v Markdown, SRT in zvok.',
    bestValue: 'Najboljša ponudba',
    plans: {
      free: {
        name: 'Brezplačno',
        unit: '',
        sub: 'Za vedno',
        features: ['Prvi dve minuti vsakega zapiska', 'Povzetek in opravila vključeni', 'Neomejeno zapiskov'],
      },
      monthly: {
        name: 'Pro mesečno',
        unit: '/ mesec',
        sub: 'Odpoved kadar koli',
        features: [
          'Brez časovne omejitve',
          'Povzetek in opravila iz celotnega posnetka',
          'Uvoz v polni dolžini',
          'Izvoz v Markdown, SRT in zvok',
        ],
      },
      yearly: {
        name: 'Pro letno',
        unit: '/ leto',
        sub: (perMonth: string, savePercent: number) => `${perMonth} na mesec · prihraniš ${savePercent} % v primerjavi z mesečnim`,
        features: ['Vse iz Pro', 'Obračun enkrat na leto'],
      },
      lifetime: {
        name: 'Pro doživljenjsko',
        unit: 'enkrat',
        sub: 'Brez podaljševanja',
        features: ['Vse iz Pro', 'Prihodnje posodobitve vključene'],
      },
    },
    ctaText: 'Začni brezplačno. Nadgradi v aplikaciji, ko boš potreboval.',
    ctaButton: 'Prenesi brezplačno',
    fine: 'Cene so v evrih, z DDV. Obračun poteka prek Google Play, ki lahko prikaže tvojo lokalno valuto. Naročnine se obnavljajo, dokler jih ne odpoveš v Google Play.',
  },

  faq: {
    eyebrow: 'Pogosta vprašanja',
    title: 'Vprašanja in odgovori',
    items: [
      {
        q: 'Kaj se zgodi po brezplačnih 2 minutah?',
        a: 'Celoten posnetek je shranjen, prepis pa se ustavi pri 2:00. Nadgradi na Pro in Echo prepiše preostanek istega zapiska.',
      },
      {
        q: 'Na katerih telefonih deluje Echo?',
        a: `Android ${product.minAndroid} ali novejši. Povzetki in opravila potrebujejo približno ${product.notesAiRamGb} GB RAM-a. Telefoni z ${product.largeModelRamGb} GB ali več dobijo Whisper Large V3 Turbo, najnatančnejši model, ki ga ponuja Echo; drugi dobijo manjšega in hitrejšega.`,
      },
      {
        q: 'Kako natančen je?',
        a: 'Odvisno od zvoka: najbolje deluje en jasen glas blizu telefona, govorjenje čez drugega in hrup v ozadju pa ga otežita. Natančnost je največja pri splošno razširjenih jezikih.',
      },
      {
        q: 'Za katere jezike so na voljo povzetki in opravila?',
        a: 'Prepisovanje deluje v približno 100 jezikih, povzetki in opravila pa nastanejo za vse. Standardni UI za zapiske jih piše v angleščini; neobvezni večjezični model jih piše v jeziku zapiska.',
      },
      {
        q: 'Ali je Echo skladen z GDPR?',
        a: 'Tvoji posnetki in zapiski se obdelujejo in shranjujejo na tvoji napravi, zato jih nikoli ne hranimo mi. Politika zasebnosti našteva maloštevilne podatke, ki so vključeni, na primer nakupe v Google Play.',
      },
      {
        q: 'Katere datoteke lahko uvozim?',
        a: 'Zvočne datoteke, kot so MP3, M4A, AAC, WAV, FLAC, OGG in Opus, ter zvok videov MP4 in WebM. Echo vsako uvrsti pod dan, ko je bila posneta, ali pa pod danes, če tako želiš.',
      },
      {
        q: 'Kako prenesem zapiske na nov telefon?',
        a: 'V Nastavitvah izberi Varnostno kopiraj zapiske. Echo vse shrani v eno datoteko, ki jo obdržiš. Odpri jo na novem telefonu in zapiski se obnovijo.',
      },
      { q: 'Ali obstaja različica za iPhone?', a: 'Še ne. Echo je narejen najprej za Android.' },
    ],
  },

  closingCta: {
    title: 'Tvoj naslednji sestanek, zapisan.',
    sub: 'Tapni snemanje in odloži telefon. Echo ti izroči prepis, kratek povzetek in opravila, ki si jih omenil, tvoje besede pa telefona nikoli ne zapustijo.',
    facts: ['Brezplačen prenos', 'Brez računa', 'Deluje brez povezave'],
  },
};
