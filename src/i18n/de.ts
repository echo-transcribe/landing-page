import type { Dict } from './en';
import { product } from '../config/product';

// German (du-form, matching the app).
export const de: Dict = {
  common: {
    skipToContent: 'Zum Inhalt springen',
    downloadNow: 'Jetzt laden',
    playBadgeAlt: 'Jetzt bei Google Play',
    logoLabel: 'Echo Startseite',
    brandTagline: 'Offline-Spracherkennung für Android',
    ogImageAlt: 'Echo: Einmal gesagt, schreibt Echo es auf.',
    ogTagline: 'Private Notizen, Zusammenfassungen und Aufgaben, direkt auf dem Handy.',
    switchToDark: 'Zum dunklen Modus wechseln',
    switchToLight: 'Zum hellen Modus wechseln',
  },

  meta: {
    home: {
      title: 'Echo — Offline-Spracherkennung für Android',
      description:
        'Meetings, Vorlesungen und Sprachnotizen werden auf deinem Handy zu Text, Zusammenfassungen und Aufgaben. Nichts wird hochgeladen, und es funktioniert offline.',
      appDescription:
        'Offline-Spracherkennung für Android. Transkripte, Zusammenfassungen und Aufgaben, direkt auf deinem Handy erstellt.',
    },
    privacy: {
      title: 'Datenschutzerklärung — Echo',
      description:
        'Wie Echo und diese Website mit personenbezogenen Daten umgehen. Deine Aufnahmen und Notizen bleiben auf deinem Handy; diese Seite setzt keine Cookies.',
    },
    terms: {
      title: 'Nutzungsbedingungen — Echo',
      description: 'Die Bedingungen für die Nutzung von Echo und den Kauf von Echo Pro über Google Play.',
    },
    legalNotice: {
      title: 'Impressum — Echo',
      description: 'Anbieterangaben zu Echo, der Offline-Spracherkennungs-App für Android.',
    },
    licenses: {
      title: 'Open-Source-Lizenzen — Echo',
      description: 'Die Open-Source-Modelle und Bibliotheken, auf denen Echo aufbaut, mit ihren Lizenzen.',
    },
    notFound: {
      title: 'Seite nicht gefunden — Echo',
      description: 'Diese Seite gibt es nicht.',
    },
  },

  header: {
    navLabel: 'Hauptmenü',
    openMenu: 'Menü öffnen',
    closeMenu: 'Menü schließen',
    nav: {
      features: 'Funktionen',
      useCases: 'Einsatzbereiche',
      privacy: 'Datenschutz',
      pricing: 'Preise',
      faq: 'FAQ',
    },
  },

  footer: {
    copyright: (year: number) => `© ${year} Koman`,
    noCookies: 'Keine Cookies auf dieser Seite',
    groups: {
      product: 'Produkt',
      useCases: 'Einsatzbereiche',
      compare: 'Vergleich',
      resources: 'Ressourcen',
      legal: 'Rechtliches',
    },
    links: {
      features: 'Funktionen',
      pricing: 'Preise',
      changelog: 'Änderungsprotokoll',
      phones: 'Unterstützte Handys',
      languages: 'Sprachen',
      meetings: 'Meetings',
      lectures: 'Vorlesungen',
      interviews: 'Interviews',
      voiceNotes: 'Sprachnotizen',
      subtitles: 'Untertitel',
      vsLoronote: 'Echo vs LoroNote',
      vsOtter: 'Echo vs Otter',
      vsGoogleRecorder: 'Echo vs Google Recorder',
      blog: 'Blog',
      help: 'Hilfecenter',
      contact: 'Kontakt',
      privacy: 'Datenschutzerklärung',
      terms: 'Nutzungsbedingungen',
      legalNotice: 'Impressum',
      licenses: 'Open-Source-Lizenzen',
    },
  },

  languageSwitcher: {
    label: 'Sprache',
  },

  textPage: {
    lastUpdated: 'Zuletzt aktualisiert',
    contents: 'Auf dieser Seite',
    draftNotice:
      'Entwurf. Jeder Wert in [Klammern] muss ausgefüllt und der Text vor dem Start von jemandem mit Fachkenntnis im EU-Recht geprüft werden.', // launch-check: ignore
    translationNotice: 'Diese Übersetzung soll dir das Lesen erleichtern. Weicht sie von der englischen Fassung ab, gilt die englische Fassung.',
    translationNoticeLink: 'Englische Fassung lesen',
  },

  notFound: {
    heading: 'Hier wurde nichts aufgenommen.',
    lead: 'Die gesuchte Seite gibt es nicht oder sie ist umgezogen.',
    home: 'Zurück zur Startseite',
  },

  hero: {

    rating: (value: string, count: string) => `${value} bei Google Play · ${count} Bewertungen`,
    pill: 'Offline-Spracherkennung für Android',
    headingLine1: 'Einmal gesagt.',
    headingLine2: 'Echo schreibt es auf.',
    lead: 'Meetings, Vorlesungen und Sprachnotizen werden auf deinem Handy zu Text, Zusammenfassungen und Aufgaben. Nichts wird hochgeladen, und nach dem einmaligen Modell-Download funktioniert alles ohne Internet.',
    qrLabel: 'QR-Code zu Echo bei Google Play',
    qrNote: 'Oder mit deinem Android-Handy scannen',
    note: 'Kostenlos laden · Ohne Konto',
  },

  phone: {
    label: 'Echo zeigt ein Meeting-Transkript mit Zusammenfassung und einer Aufgabe',
    title: 'Projektstart',
    meta: 'Heute, 9:42 · 18 Min.',
    tag: 'Arbeit',
    summaryLabel: 'Zusammenfassung',
    summaryText:
      'Das Team hat sich auf den Umfang des Launches geeinigt und die Budgetarbeit aufgeteilt. Alex prüft den Entwurf bis Freitag.',
    tasksLabel: 'Aufgaben · 2',
    task1: 'Budgetentwurf an Alex schicken',
    task1Reminder: 'Morgen, 10:00',
    task2: 'Raum für Donnerstag buchen',
    lines: [
      {
        name: 'Maja',
        time: '2:14 – 2:31',
        before: 'Okay, also ',
        mark: 'morgen um zehn schicke ich Alex den Budgetentwurf',
        after: ', und er kann ihn bis Freitag prüfen.',
      },
      {
        name: 'Alex',
        time: '2:32 – 2:40',
        before: 'Passt für mich. Jemand sollte ',
        mark: 'den Raum für Donnerstag buchen',
        after: '.',
      },
    ],
  },

  features: {
    eyebrow: 'Funktionen',
    title: 'Alles, was du gesagt hast, sofort nutzbar',
    items: [
      {
        title: 'Genau, direkt auf dem Handy',
        text: 'Whisper Large V3 Turbo auf Handys mit 8 GB RAM, ein kleineres Whisper-Modell auf anderen oder die eigene Offline-Erkennung deines Handys für sofortige Ergebnisse.',
      },
      {
        title: 'Weiß, wer was gesagt hat',
        text: 'Sprecher werden automatisch erkannt. Benenne jemanden einmal, und der Name gilt in der ganzen Notiz und in deinen Exporten.',
      },
      {
        title: 'Eine Zusammenfassung für jede Notiz',
        text: 'Direkt nach dem Transkript folgt eine kurze Zusammenfassung. Dafür brauchst du ein Handy mit etwa 4 GB RAM.',
      },
      {
        title: 'Rund 100 Sprachen',
        text: 'Automatisch erkannt, darunter Deutsch, Englisch, Slowenisch, Kroatisch und Italienisch.',
      },
      {
        title: 'Kalender und Ordner',
        text: 'Durchstöbere Notizen und Aufgaben nach Tag und sortiere sie in Ordner wie Arbeit, Privat oder Ideen.',
      },
      {
        title: 'Importieren und teilen',
        text: 'Hol Aufnahmen herein, die du schon hast. Teile als Text kostenlos, oder mit Pro als Markdown, SRT-Untertitel und Original-Audio.',
      },
    ],
  },

  tasksCallout: {
    eyebrow: 'Nur in Echo',
    title: 'Sag es laut. Es wird zur Aufgabe.',
    lead: 'Echo holt aus deinem Transkript heraus, was zu tun ist. Hast du eine Uhrzeit genannt, erinnert es dich dann.',
    points: ['Heutige Aufgaben auf dem Startbildschirm, der Rest im Kalender', 'Tippe auf eine Aufgabe, um zur Stelle zu springen, an der du sie gesagt hast'],
    speaker: 'Du',
    time: '0:04 – 0:11',
    saidBefore: 'Ich glaube, ',
    saidMark: 'morgen um 10 Uhr muss ich zum Zahnarzt',
    saidAfter: ', und danach hole ich das Paket ab.',
    taskTitle: 'Zahnarzttermin',
    reminder: 'Morgen, 10:00 · Erinnerung an',
    chip: 'Neue Aufgabe',
  },

  howItWorks: {

    videoLabel: 'Bildschirmaufnahme von Echo: ein Meeting aufnehmen, das Transkript entsteht, dann Zusammenfassung und Aufgaben.',
    eyebrow: 'So funktioniert’s',
    title: 'Drei Schritte, nichts einzurichten',
    steps: [
      { title: 'Aufnehmen oder importieren', text: 'Tippe auf das Mikrofon oder öffne eine vorhandene Audiodatei.' },
      { title: 'Echo erledigt den Rest', text: 'Das Transkript füllt sich Zeile für Zeile. Sprecher, Zusammenfassung und Aufgaben folgen.' },
      { title: 'Lesen, anhören, teilen', text: 'Tippe auf eine Zeile, um sie zu hören. Deine Änderungen überschreiben nie das Original.' },
    ],
  },

  useCases: {
    eyebrow: 'Einsatzbereiche',
    title: 'Gemacht für deine Art aufzunehmen',
    learnMore: 'Mehr erfahren',
    items: {
      meetings: { title: 'Meetings', text: 'Protokoll und Zuständigkeiten, ohne im Meeting zu tippen.' },
      lectures: { title: 'Vorlesungen', text: 'Hör im Kurs zu und durchsuche die ganze Vorlesung später.' },
      interviews: { title: 'Interviews', text: 'Benannte Sprecher, zitierfertig. Vertrauliche Gespräche bleiben bei dir.' },
      subtitles: { title: 'Untertitel', text: 'SRT-Dateien mit Zeitmarken für deine Videos, für jeden Editor geeignet.' },
    },
  },

  privacySection: {
    eyebrow: 'Datenschutz',
    title: 'Privat durch Technik, nicht durch Versprechen',
    lead: 'Wir können deine Aufnahmen weder weitergeben noch verkaufen oder zum Training nutzen, denn wir erhalten sie nie.',
    points: [
      { title: 'Keine Server für deine Notizen', text: 'Audio, Transkripte, Zusammenfassungen und Aufgaben liegen nur auf deinem Handy.' },
      { title: 'Kein Konto', text: 'Keine Registrierung, keine E-Mail. Pro kaufst und verwaltest du in Google Play.' },
      {
        title: 'Internet nur für Downloads',
        text: 'Eine Verbindung brauchst du, um die Modelle zu laden und Pro zu kaufen. Danach ist der Flugmodus kein Problem.',
      },
    ],
    siteTitle: 'Auch diese Website',
    siteText: 'Keine Cookies. Besuche werden mit cookiefreier Analyse in der EU gezählt, ohne deine IP-Adresse zu speichern.',
    policyLink: 'Datenschutzerklärung',
  },

  compare: {
    eyebrow: 'Vergleich',
    title: 'Echo vs Cloud-Notizdienste',
    featureColumn: 'Merkmal',
    otherColumn: 'Typische Cloud-Dienste',
    rows: [
      { label: 'Wo dein Audio verarbeitet wird', echo: 'Auf deinem Handy', other: 'Auf deren Servern' },
      { label: 'Funktioniert ohne Internet', echo: 'Ja', other: 'Nein' },
      { label: 'Konto nötig', echo: 'Nein', other: 'Ja' },
      { label: 'Aufgaben und Erinnerungen aus Sprache', echo: 'Ja', other: 'Unterschiedlich' },
      { label: 'Tritt Zoom- oder Teams-Calls für dich bei', echo: 'Nein', other: 'Oft' },
    ],
    fit: 'Echo passt nicht, wenn du einen Bot brauchst, der Videocalls beitritt, oder Notizen, die dein Team gemeinsam in Echtzeit bearbeitet.',
  },

  pricing: {
    eyebrow: 'Preise',
    title: 'Kostenlos starten. Pro, wenn Notizen länger werden.',
    lead: 'Pro hebt das 2-Minuten-Limit auf und bringt Markdown-, SRT- und Audio-Export dazu.',
    bestValue: 'Bester Preis',
    plans: {
      free: {
        name: 'Kostenlos',
        unit: '',
        sub: 'Für immer',
        features: ['Die ersten 2 Minuten jeder Notiz', 'Zusammenfassung und Aufgaben inklusive', 'Unbegrenzt viele Notizen'],
      },
      monthly: {
        name: 'Pro monatlich',
        unit: '/ Monat',
        sub: 'Jederzeit kündbar',
        features: [
          'Keine Zeitbegrenzung',
          'Zusammenfassung und Aufgaben aus der ganzen Aufnahme',
          'Importe in voller Länge',
          'Export als Markdown, SRT und Audio',
        ],
      },
      yearly: {
        name: 'Pro jährlich',
        unit: '/ Jahr',
        sub: (perMonth: string, savePercent: number) => `${perMonth} pro Monat · ${savePercent} % sparen gegenüber monatlich`,
        features: ['Alles aus Pro', 'Einmal jährlich abgerechnet'],
      },
      lifetime: {
        name: 'Pro lebenslang',
        unit: 'einmalig',
        sub: 'Keine Verlängerung',
        features: ['Alles aus Pro', 'Künftige Updates inklusive'],
      },
    },
    ctaText: 'Kostenlos starten. Upgrade in der App, wenn du es brauchst.',
    ctaButton: 'Kostenlos laden',
    fine: 'Preise in Euro, inklusive Mehrwertsteuer. Abrechnung über Google Play, das eventuell deine Landeswährung anzeigt. Abos verlängern sich, bis du sie in Google Play kündigst.',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Fragen und Antworten',
    items: [
      {
        q: 'Was passiert nach den kostenlosen 2 Minuten?',
        a: 'Deine ganze Aufnahme wird gespeichert, und das Transkript endet bei 2:00. Mit Pro transkribiert Echo den Rest derselben Notiz.',
      },
      {
        q: 'Auf welchen Handys läuft Echo?',
        a: `Ab Android ${product.minAndroid}. Für Zusammenfassungen und Aufgaben brauchst du etwa ${product.notesAiRamGb} GB RAM. Handys mit ${product.largeModelRamGb} GB oder mehr nutzen Whisper Large V3 Turbo, das genaueste Modell von Echo; andere ein kleineres, schnelleres.`,
      },
      {
        q: 'Wie genau ist die Erkennung?',
        a: 'Das hängt vom Audio ab: Eine klare Stimme nah am Handy funktioniert am besten, durcheinanderredende Leute und Hintergrundlärm machen es schwerer. Am genauesten ist sie in weit verbreiteten Sprachen.',
      },
      {
        q: 'Für welche Sprachen gibt es Zusammenfassungen und Aufgaben?',
        a: 'Die Transkription funktioniert in rund 100 Sprachen, und Zusammenfassungen und Aufgaben entstehen für jede davon. Die Standard-Notizen-KI schreibt sie auf Englisch; das optionale mehrsprachige Modell schreibt sie in der Sprache der Notiz.',
      },
      {
        q: 'Ist Echo DSGVO-konform?',
        a: 'Deine Aufnahmen und Notizen werden auf deinem Gerät verarbeitet und gespeichert, wir haben sie also nie. Die Datenschutzerklärung nennt die wenigen Daten, die anfallen, etwa Käufe über Google Play.',
      },
      {
        q: 'Welche Dateien kann ich importieren?',
        a: 'Audiodateien wie MP3, M4A, AAC, WAV, FLAC, OGG und Opus sowie die Tonspur von MP4- und WebM-Videos. Echo ordnet jede Datei dem Tag der Aufnahme zu, oder auf Wunsch dem heutigen Tag.',
      },
      {
        q: 'Wie ziehe ich mit meinen Notizen aufs neue Handy um?',
        a: 'Wähle in den Einstellungen „Notizen sichern“. Echo speichert alles in einer Datei, die du aufbewahrst. Öffne sie auf dem neuen Handy, um alles wiederherzustellen.',
      },
      { q: 'Gibt es eine iPhone-Version?', a: 'Noch nicht. Echo entsteht zuerst für Android.' },
    ],
  },

  closingCta: {
    title: 'Dein nächstes Meeting, aufgeschrieben.',
    sub: 'Tippe auf Aufnahme und leg das Handy weg. Echo liefert dir das Transkript, eine kurze Zusammenfassung und die genannten Aufgaben, ohne dass deine Worte das Handy je verlassen.',
    facts: ['Kostenlos laden', 'Ohne Konto', 'Funktioniert offline'],
  },
};
