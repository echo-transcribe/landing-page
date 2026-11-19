import { product } from '../../config/product';
import type { PagesDict, RelatedId } from './en';

// German (du-form, matching the app).
export const dePages: PagesDict = {
  common: {
    faqTitle: 'Fragen',
    faqEyebrow: 'FAQ',
    relatedTitle: 'Als Nächstes lesen',
    checkedOn: (date: string) => `Geprüft am ${date}`,
    sourcesTitle: 'Quellen',
    tryFree: 'Echo kostenlos testen',
  },

  help: {
    title: 'Echo-Hilfecenter: Antworten zu Aufnahme, Transkripten und Pro',
    heading: 'Hilfecenter',
    description:
      'Antworten zu Echo: unterstützte Handys, Aufnahme und Import, Transkripte, Zusammenfassungen und Aufgaben, Pro-Käufe und wo deine Daten liegen.',
    intro: 'Kurze Antworten dazu, wie Echo funktioniert. Fehlt deine Frage, schreib uns, dann ergänzen wir sie.',
    groups: [
      {
        id: 'getting-started',
        title: 'Erste Schritte',
        items: [
          {
            q: 'Auf welchen Handys läuft Echo?',
            a: `Auf Android ${product.minAndroid} oder neuer mit einem 64-Bit-ARM-Prozessor. Für Zusammenfassungen und Aufgaben brauchst du etwa ${product.notesAiRamGb} GB RAM, und Handys mit ${product.largeModelRamGb} GB oder mehr bekommen Whisper Large V3 Turbo. Details findest du auf der Seite mit den unterstützten Handys.`,
          },
          {
            q: 'Was lädt Echo herunter, und wie viel Speicherplatz braucht es?',
            a: 'Das Sprachmodell wird einmal heruntergeladen: Whisper Large V3 Turbo ist 574 MB groß, Whisper Small 190 MB. Die Sprechererkennung braucht etwa 42 MB zusätzlich, die Notizen-KI für Zusammenfassungen und Aufgaben rund 1 GB. Aufnahmen belegen etwa 14 MB pro Stunde.',
          },
          {
            q: 'Brauche ich eine Internetverbindung?',
            a: 'Nur zum Herunterladen der Modelle, zum Kauf von Pro und zur Prüfung, ob du Pro hast. Aufnahme, Transkription, Zusammenfassungen und Aufgaben laufen alle auf dem Handy, danach ist der Flugmodus also kein Problem.',
          },
          {
            q: 'Brauche ich ein Konto?',
            a: 'Nein, es gibt keine Registrierung. Pro kaufst und verwaltest du über dein Google-Play-Konto.',
          },
        ],
      },
      {
        id: 'recording',
        title: 'Aufnahme und Import',
        items: [
          {
            q: 'Läuft die Aufnahme weiter, wenn ich die App verlasse oder den Bildschirm ausschalte?',
            a: 'Ja. Echo nimmt im Hintergrund auf, mit einer Benachrichtigung, über die du pausieren oder stoppen kannst. Ein Anruf pausiert die Aufnahme, und sie läuft nach dem Gespräch weiter, außer du hast sie selbst pausiert.',
          },
          {
            q: 'Welche Dateien kann ich importieren?',
            a: `Audiodateien wie MP3, M4A, AAC, WAV, FLAC, OGG und Opus sowie die Tonspur von MP4- und WebM-Videos. Teile eine Datei mit Echo oder nutze den Import-Button unter Notizen. Du wählst den Titel und ob die Notiz zum Tag der Aufnahme oder zu heute gehört.`,
          },
          {
            q: 'Wie stelle ich die Sprache ein?',
            a: 'Echo erkennt die Sprache von selbst. Um eine festzulegen, wähle sie in den Einstellungen. Bei einer importierten Datei oder einer einzelnen Notiz kannst du eine andere Sprache wählen, ohne die Einstellungen zu ändern, und du kannst eine Notiz in einer anderen Sprache erneut transkribieren.',
          },
        ],
      },
      {
        id: 'transcripts',
        title: 'Transkripte',
        items: [
          {
            q: 'Wie genau ist die Erkennung?',
            a: 'Das hängt vom Audio ab: Eine klare Stimme nah am Handy funktioniert am besten, durcheinanderredende Leute und Hintergrundlärm machen es schwerer. Am genauesten ist sie in weit verbreiteten Sprachen. Trag Namen und Fachbegriffe unter Einstellungen, Wörterbuch ein, dann schreibt Whisper sie so, wie du sie geschrieben hast.',
          },
          {
            q: 'Wie lange dauert ein Transkript?',
            a: 'Hat dein Handy eine eigene Offline-Erkennung für die Sprache, ist der Text da, sobald du stoppst. Whisper läuft nach der Aufnahme: Large V3 Turbo braucht selbst auf einem aktuellen Flaggschiff so lange wie die Aufnahme oder länger, Whisper Small ist etwa dreimal schneller.',
          },
          {
            q: 'Warum sehe ich beim Aufnehmen Text, aber nicht immer?',
            a: 'Der Live-Text kommt von der eigenen Offline-Erkennung deines Handys. Dafür brauchst du Android 13 oder neuer und die auf dem Handy installierte Sprache, die du in den Einstellungen herunterladen kannst. Ohne sie erscheint der Text, nachdem du gestoppt hast.',
          },
          {
            q: 'Kann ich korrigieren, wer was gesagt hat?',
            a: 'Ja. Tippe auf einen Sprecher, um ihn zu benennen oder seine Zeilen einem anderen Sprecher zuzuordnen, oder wähle ein paar Zeilen aus und weise nur diese zu. Namen, die du schon benutzt hast, werden vorgeschlagen.',
          },
          {
            q: 'Kann ich in meinen Notizen suchen?',
            a: 'Die Suche durchsucht jedes Transkript, jeden Titel und jede Zusammenfassung. Groß- und Kleinschreibung sowie Akzente spielen keine Rolle, „cesnik“ findet also „česnik“.',
          },
        ],
      },
      {
        id: 'summaries-tasks',
        title: 'Zusammenfassungen und Aufgaben',
        items: [
          {
            q: 'Warum gibt es auf meinem Handy keine Zusammenfassungen oder Aufgaben?',
            a: `Dafür brauchst du etwa ${product.notesAiRamGb} GB RAM und den Download der Notizen-KI mit rund 1 GB. Auf Handys mit weniger Speicher transkribiert Echo trotzdem, mit Sprechern.`,
          },
          {
            q: 'In welcher Sprache werden Zusammenfassungen und Aufgaben geschrieben?',
            a: 'Die Standard-Notizen-KI schreibt sie bei Notizen in anderen Sprachen auf Englisch und behält die zitierten Worte in deiner Sprache. Das optionale mehrsprachige Modell Gemma 4 E2B (2,6 GB) schreibt sie in der Sprache der Notiz.',
          },
          {
            q: 'Meine Erinnerung kam zu spät. Warum?',
            a: 'Android liefert Erinnerungen nur dann pünktlich, wenn Echo exakte Wecker stellen darf. Unter Einstellungen, Aufgabenerinnerungen, öffnest du dafür und für Benachrichtigungen die Systemeinstellungen. Ohne diese Berechtigung kann Android Erinnerungen verzögern.',
          },
          {
            q: 'Echo hat eine Aufgabe übersehen oder sich eine ausgedacht. Was kann ich tun?',
            a: 'Zusammenfassungen und Aufgaben stammen von einem kleinen KI-Modell auf deinem Handy, und das kann falschliegen. Füge Aufgaben selbst hinzu, bearbeite oder lösche sie. Jede Aufgabe verweist auf die Zeile, aus der sie stammt, du prüfst sie also mit einem Tipp.',
          },
        ],
      },
      {
        id: 'pro',
        title: 'Pro und Käufe',
        items: [
          {
            q: 'Was passiert nach den kostenlosen 2 Minuten?',
            a: 'Deine ganze Aufnahme wird gespeichert, und das Transkript endet bei 2:00. Mit Pro transkribiert Echo den Rest derselben Notiz.',
          },
          {
            q: 'Was bringt Pro dazu?',
            a: 'Keine Zeitbegrenzung für Aufnahmen und Importe, Zusammenfassungen und Aufgaben aus der ganzen Aufnahme sowie Export als Markdown, SRT-Untertitel und Original-Audio. Der Export als reiner Text ist kostenlos.',
          },
          {
            q: 'Ich habe das Handy gewechselt. Wie bekomme ich Pro zurück?',
            a: 'Melde dich in Google Play mit demselben Konto an, öffne Echo und wähle in den Einstellungen „Käufe wiederherstellen“.',
          },
          {
            q: 'Wie kündige ich oder bekomme eine Erstattung?',
            a: 'Abos verwaltest du in Google Play unter „Zahlungen und Abos“. Für Erstattungen gelten die Erstattungsrichtlinien von Google Play.',
          },
        ],
      },
      {
        id: 'privacy',
        title: 'Datenschutz und deine Daten',
        items: [
          {
            q: 'Wo werden meine Aufnahmen gespeichert?',
            a: 'Nur auf deinem Handy. Wir betreiben keine Server für deine Notizen, du schickst uns also nie Audio, Transkripte, Zusammenfassungen oder Aufgaben.',
          },
          {
            q: 'Wie ziehe ich mit meinen Notizen aufs neue Handy um?',
            a: 'Wähle in den Einstellungen „Notizen sichern“. Echo speichert alles in einer Datei, die du aufbewahrst. Auf dem neuen Handy wählst du „Aus Backup wiederherstellen“.',
          },
          {
            q: 'Wie lösche ich alles?',
            a: 'In den Einstellungen findest du „Alle Daten löschen“. Auch beim Deinstallieren von Echo werden die Notizen vom Handy entfernt. Mach also vorher ein Backup, wenn du sie behalten willst.',
          },
        ],
      },
    ],
    contactTitle: 'Noch nicht weitergekommen?',
    contactText: (email: string) =>
      `Schreib an ${email}. Nenne uns dein Handymodell und was du versucht hast.`,
  },

  useCases: {
    meetings: {
      title: 'Meetings offline transkribieren auf Android — Echo',
      description:
        'Nimm ein Meeting auf deinem Android-Handy auf und erhalte Transkript, Sprecher, Zusammenfassung und Aufgaben mit Erinnerungen. Alles läuft auf dem Handy, ohne Bot und ohne Upload.',
      eyebrow: 'Meetings',
      heading: 'Meeting-Notizen, die sich von selbst schreiben, auf deinem Handy',
      lead: 'Leg das Handy auf den Tisch und sprich. Echo hält das Transkript fest, wer was gesagt hat, eine kurze Zusammenfassung und die vereinbarten Aufgaben.',
      problemTitle: 'Wer Protokoll tippt, verpasst das Meeting',
      problem:
        'Entweder du hörst zu oder du schreibst. Cloud-Notizdienste lösen das, indem sie deinem Call beitreten und alles auf ihre Server hochladen, womit viele Teams und Kunden nicht einverstanden sind. Echo erledigt die Arbeit auf dem Handy in deiner Tasche, das Gespräch verlässt den Raum also nie.',
      phone: {
        label: 'Echo zeigt eine Meeting-Notiz mit Zusammenfassung, zwei Aufgaben und dem Transkript',
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
      featuresTitle: 'Das hast du nach dem Meeting',
      features: [
        {
          title: 'Wer was gesagt hat',
          text: 'Sprecher werden automatisch erkannt. Benenne jemanden einmal, und der Name gilt in der ganzen Notiz und in deinen Exporten.',
        },
        {
          title: 'Aufgaben mit Zuständigen und Zeiten',
          text: 'Echo listet auf, was vereinbart wurde, verweist bei jeder Aufgabe auf die Zeile, aus der sie stammt, und erinnert dich, wenn eine Uhrzeit genannt wurde.',
        },
        {
          title: 'Protokoll zum Teilen',
          text: 'Teile das Transkript kostenlos als Text oder mit Pro als Markdown samt Zusammenfassung und Aufgaben.',
        },
      ],
      faq: [
        {
          q: 'Kann Echo Zoom-, Teams- oder Meet-Calls beitreten?',
          a: 'Nein. Echo nimmt über das Mikrofon des Handys auf. Bei einem Videocall legst du das Handy neben den Lautsprecher oder importierst die Aufzeichnung des Calls hinterher.',
        },
        {
          q: 'Wie lang darf ein Meeting sein?',
          a: 'Die Aufnahme hat kein Zeitlimit. Die kostenlose Version transkribiert die ersten 2 Minuten jeder Notiz, Pro das ganze Meeting.',
        },
        {
          q: 'Muss ich den Leuten sagen, dass ich aufnehme?',
          a: 'Ja. Frag vor der Aufnahme alle Beteiligten. Die Regeln unterscheiden sich von Land zu Land, und in vielen ist es illegal, Menschen ohne ihre Einwilligung aufzunehmen.',
        },
      ],
      related: ['lectures', 'interviews'] as RelatedId[],
    },
    lectures: {
      title: 'Vorlesungen offline transkribieren auf Android — Echo',
      description:
        'Nimm eine Vorlesung auf und durchsuche später jedes Wort. Echo transkribiert auf deinem Android-Handy, mit Zusammenfassungen und Aufgaben für Lektüre und Abgaben, ganz ohne Internet.',
      eyebrow: 'Vorlesungen',
      heading: 'Hör im Kurs zu. Durchsuche die ganze Vorlesung später.',
      lead: 'Nimm die Vorlesung auf und finde später die Minute, in der der Professor es erklärt hat. Echo transkribiert auf deinem Handy, auch ohne WLAN im Hörsaal.',
      problemTitle: 'Mitschriften erfassen nur die Hälfte',
      problem:
        'Während du einen Punkt aufschreibst, ist der nächste schon vorbei. Eine Aufnahme allein hilft auch nicht viel: Niemand spult durch 90 Minuten Audio, um eine Definition zu finden. Ein durchsuchbares Transkript löst beides.',
      phone: {
        label: 'Echo zeigt eine Vorlesungsnotiz mit Zusammenfassung, einer Lese-Aufgabe und dem Transkript',
        title: 'Mikroökonomie, Woche 6',
        meta: 'Di., 10:15 · 84 Min.',
        tag: 'Uni',
        summaryLabel: 'Zusammenfassung',
        summaryText:
          'Die Preiselastizität der Nachfrage und wie man sie berechnet, am Beispiel der Taxipreise. Die Prüfungsfragen folgen dem Übungsblatt.',
        tasksLabel: 'Aufgaben · 2',
        task1: 'Kapitel 5 vor dem Seminar lesen',
        task1Reminder: 'Montag, 9:00',
        task2: 'Übungsblatt 3 abgeben',
        lines: [
          {
            name: 'Dozent',
            time: '41:02 – 41:20',
            before: 'Die Elastizität ist also die prozentuale Mengenänderung geteilt durch die prozentuale Preisänderung. ',
            mark: 'Lest bis Montag Kapitel fünf',
            after: ', wir beginnen das Seminar damit.',
          },
          {
            name: 'Studentin',
            time: '41:21 – 41:27',
            before: 'Kommt das auch ',
            mark: 'im Übungsblatt',
            after: ' dran?',
          },
        ],
      },
      featuresTitle: 'Gemacht für lange Aufnahmen',
      features: [
        {
          title: 'Jedes Wort durchsuchen',
          text: 'Die Suche durchsucht alle deine Transkripte auf einmal und ignoriert Groß- und Kleinschreibung sowie Akzente. Tippe auf eine Zeile, um sie zu hören.',
        },
        {
          title: 'Lektüre und Abgaben als Aufgaben',
          text: 'Sagt der Dozent „Lest bis Montag Kapitel fünf“, macht Echo daraus eine Aufgabe mit Erinnerung.',
        },
        {
          title: 'Schreibt die Begriffe richtig',
          text: 'Trag Kursnamen und Fachbegriffe im Wörterbuch unter Einstellungen ein, und Whisper schreibt sie so wie du.',
        },
      ],
      faq: [
        {
          q: 'Kann ich eine 90-minütige Vorlesung aufnehmen?',
          a: 'Ja. Die Aufnahme hat kein Zeitlimit und läuft bei ausgeschaltetem Bildschirm weiter. Eine 90-minütige Vorlesung braucht etwa 21 MB Speicher. Die kostenlose Version transkribiert die ersten 2 Minuten jeder Notiz, Pro die ganze Vorlesung.',
        },
        {
          q: 'Funktioniert das in einem großen Hörsaal?',
          a: 'Am besten klappt es nah an der sprechenden Person. Aus der letzten Reihe eines großen Saals mit leisem Mikrofon musst du mit mehr Fehlern rechnen; setz dich weiter nach vorn oder leg das Handy auf den vorderen Tisch.',
        },
        {
          q: 'In welchen Sprachen können Vorlesungen sein?',
          a: `Whisper transkribiert rund 100 Sprachen und erkennt die Sprache von selbst. Die Sprachen-Seite listet sie auf.`,
        },
      ],
      related: ['meetings', 'interviews'] as RelatedId[],
    },
    interviews: {
      title: 'Interviews privat transkribieren auf Android — Echo',
      description:
        'Transkribiere Interviews auf deinem Android-Handy mit benannten Sprechern, zitierfertig. Nichts wird hochgeladen, vertrauliche Gespräche bleiben bei dir.',
      eyebrow: 'Interviews',
      heading: 'Interview-Transkripte mit Sprechern, ohne Upload',
      lead: 'Nimm das Interview auf oder importiere es und erhalte ein nach Sprechern getrenntes Transkript, zitierfertig. Audio und Text bleiben auf deinem Handy.',
      problemTitle: 'Vertrauliche Gespräche gehören nicht auf fremde Server',
      problem:
        'Quellen, Patienten, Studienteilnehmer und Bewerber sprechen mit dir, nicht mit einer Transkriptionsfirma. Die meisten Transkriptionsdienste laden das Audio zur Verarbeitung hoch. Echo schickt es nirgendwohin, das kannst du also zusichern und auch so meinen.',
      phone: {
        label: 'Echo zeigt eine Interview-Notiz mit zwei Sprecherinnen, einer Zusammenfassung und einer Folgeaufgabe',
        title: 'Interview mit der Stationsleiterin',
        meta: 'Mo., 14:30 · 47 Min.',
        tag: 'Recherche',
        summaryLabel: 'Zusammenfassung',
        summaryText:
          'Im März wurde der Nachtdienst von drei auf zwei Pflegekräfte gekürzt. Sie gibt den Dienstplan weiter, wenn ihr Name nicht genannt wird.',
        tasksLabel: 'Aufgaben · 2',
        task1: 'Ana die Zitate zur Prüfung mailen',
        task1Reminder: 'Freitag, 9:00',
        task2: 'Nach dem Dienstplan vom März fragen',
        lines: [
          {
            name: 'Ana',
            time: '12:40 – 12:58',
            before: 'Seit März sind wir im Nachtdienst zu zweit statt zu dritt. ',
            mark: 'Schick mir die Zitate bis Freitag',
            after: ', dann sehe ich sie durch.',
          },
          {
            name: 'Du',
            time: '12:59 – 13:04',
            before: 'Gern. Und ',
            mark: 'könnte ich den Dienstplan vom März sehen',
            after: '?',
          },
        ],
      },
      featuresTitle: 'Was es zitierfertig macht',
      features: [
        {
          title: 'Benannte Sprecher',
          text: 'Echo trennt die Stimmen. Benenne jeden Sprecher einmal und korrigiere jede Zeile, die der falschen Person zugeordnet wurde.',
        },
        {
          title: 'Jede Zeile mit Zeitmarke',
          text: 'Jede Zeile behält ihre Zeit in der Aufnahme. Tippe darauf, um die genauen Worte zu hören, bevor du zitierst.',
        },
        {
          title: 'Bleibt bei dir',
          text: 'Kein Konto und kein Upload. Sichere in eine Datei, die du aufbewahrst, und lösche die Notiz, wenn das Projekt endet.',
        },
      ],
      faq: [
        {
          q: 'Kann ich ein Interview importieren, das ich woanders aufgenommen habe?',
          a: `Ja. Echo importiert MP3, M4A, AAC, WAV, FLAC, OGG und Opus sowie die Tonspur von MP4- und WebM-Videos. Teile die Datei mit Echo oder nutze den Import-Button unter Notizen.`,
        },
        {
          q: 'Wie genau sind die Sprecherzuordnungen?',
          a: 'Gut bei einem klaren Interview zu zweit, weniger zuverlässig bei durcheinanderredenden oder vielen Stimmen. Zeilen nahe einem Sprecherwechsel sind am ehesten falsch; mit einem Tipp verschiebst du sie.',
        },
        {
          q: 'Kann ich das Transkript exportieren?',
          a: 'Der Export als reiner Text ist kostenlos. Mit Pro exportierst du als Markdown, als SRT-Untertitel mit Zeitangaben oder als Original-Audio.',
        },
      ],
      related: ['meetings', 'lectures'] as RelatedId[],
    },
  },


  languages: {
    title: 'Sprachen, die Echo transkribiert — Offline-Spracherkennung in 100 Sprachen',
    heading: 'Unterstützte Sprachen',
    description:
      'Echo transkribiert 100 Sprachen offline mit Whisper, von Deutsch und Englisch bis Slowenisch und Suaheli. Sieh, welche Sprachen Live-Text, Zusammenfassungen und Aufgaben bekommen.',
    intro:
      'Echo transkribiert mit Whisper, das 100 Sprachen kennt und erkennt, welche du sprichst. Wie gut das klappt, ist unterschiedlich: Weit verbreitete Sprachen funktionieren am besten, bei Sprachen mit wenig Trainingsdaten passieren mehr Fehler.',
    sections: {
      transcription: {
        title: 'Transkription',
        text: 'Jede Sprache unten kann offline transkribiert werden, aus Aufnahmen und aus importierten Dateien.',
      },
      live: {
        title: 'Live-Text und sofortige Transkripte',
        text: 'Text während der Aufnahme und ein Transkript im Moment des Stoppens kommen von der eigenen Offline-Erkennung deines Handys. Welche Sprachen sie kennt, hängt von deinem Handy ab; die Einstellungen zeigen, ob deine installiert ist, und können sie herunterladen. Andere Sprachen transkribiert Whisper, nachdem du gestoppt hast.',
      },
      notes: {
        title: 'Zusammenfassungen und Aufgaben',
        text: 'Gemacht für jede Sprache der Liste. Die Standard-Notizen-KI schreibt sie bei Notizen in anderen Sprachen auf Englisch und behält Zitate im Original. Das optionale mehrsprachige Modell schreibt sie in der Sprache der Notiz.',
      },
      app: {
        title: 'Die App selbst',
        text: (list: string) => `Die Menüs und Einstellungen von Echo gibt es in diesen Sprachen: ${list}.`,
      },
    },
    listTitle: (count: number) => `Alle ${count} Sprachen`,
  },

  phones: {
    title: 'Echo-Voraussetzungen — unterstützte Android-Handys und Modelle',
    heading: 'Unterstützte Handys',
    description: `Echo läuft auf Android ${product.minAndroid} oder neuer. Sieh, welches Sprachmodell dein Handy bekommt, wie viel RAM Zusammenfassungen und Aufgaben brauchen und wie viel Speicher die Modelle belegen.`,
    intro: `Echo braucht Android ${product.minAndroid} oder neuer und einen 64-Bit-ARM-Prozessor, den fast jedes in den letzten Jahren verkaufte Android-Handy hat. Der Arbeitsspeicher deines Handys entscheidet, welche Funktionen und Modelle du bekommst.`,
    tiersTitle: 'Was dein Handy bekommt',
    tiersHead: { ram: 'RAM des Handys', speech: 'Sprachmodell', notes: 'Zusammenfassungen und Aufgaben' },
    tiers: [
      { ram: 'Unter 4 GB', speech: 'Whisper Small oder Base', notes: 'Nicht verfügbar' },
      { ram: '4 bis 6 GB', speech: 'Whisper Small oder Base', notes: 'Ja' },
      { ram: '8 GB oder mehr', speech: 'Whisper Large V3 Turbo oder Medium, Small oder Base', notes: 'Ja' },
    ],
    tiersNote:
      'Echo wählt das erste genannte Modell; du kannst es unter Einstellungen, Sprachmodell, ändern. Handys melden etwas weniger Speicher, als auf der Packung steht, ein 8-GB-Handy zählt also als 8 GB.',
    recognizerTitle: 'Die eigene Erkennung deines Handys',
    recognizer:
      'Unter Android 13 und neuer haben viele Handys eine Offline-Spracherkennung eingebaut. Kennt sie deine Sprache, nutzt Echo sie für Live-Text und ein sofortiges Transkript, und Whisper für Importe oder wenn du es verlangst. Handys ohne sie nutzen Whisper für alles.',
    storageTitle: 'Speicher',
    storageHead: { item: 'Download', size: 'Größe' },
    storage: [
      { item: 'Whisper Large V3 Turbo', size: '574 MB' },
      { item: 'Whisper Medium', size: '539 MB' },
      { item: 'Whisper Small', size: '190 MB' },
      { item: 'Whisper Base', size: '60 MB' },
      { item: 'Sprechererkennung', size: '42 MB' },
      { item: 'Notizen-KI (Qwen3 1.7B)', size: '977 MB' },
      { item: 'Mehrsprachige Notizen-KI (Gemma 4 E2B), optional', size: '2,6 GB' },
      { item: 'Aufnahmen', size: 'Etwa 14 MB pro Stunde' },
    ],
    storageNote: 'Nur das verwendete Whisper-Modell bleibt auf dem Handy. Beim Wechsel wird das neue geladen und das alte entfernt.',
    speedTitle: 'Geschwindigkeit',
    speed:
      'Auf einem Samsung Galaxy S24 braucht Whisper Large V3 Turbo 33 bis 50 Sekunden für je 30 Sekunden Audio, ein Transkript dauert also etwa so lange wie die Aufnahme oder länger. Whisper Small braucht etwa 11 Sekunden. Handys werden langsamer, wenn sie warm werden, etwa auf einem kabellosen Ladegerät.',
    testedTitle: 'Getestete Handys',
    tested: (email: string) =>
      `Wir testen Echo auf einem Samsung Galaxy S24. Läuft es auf deinem Handy nicht gut, schreib an ${email} mit dem Modellnamen, dann sehen wir es uns an.`,
  },
};
