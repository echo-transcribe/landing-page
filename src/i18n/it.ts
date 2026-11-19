import type { Dict } from './en';
import { product } from '../config/product';

export const it: Dict = {
  common: {
    skipToContent: 'Vai al contenuto',
    downloadNow: 'Scarica ora',
    playBadgeAlt: 'Disponibile su Google Play',
    logoLabel: 'Home di Echo',
    brandTagline: 'Da voce a testo offline per Android',
    ogImageAlt: 'Echo: dillo una volta, Echo lo scrive.',
    switchToDark: 'Passa alla modalità scura',
    switchToLight: 'Passa alla modalità chiara',
  },

  meta: {
    home: {
      title: 'Echo — da voce a testo offline per Android',
      description:
        'Riunioni, lezioni e note vocali diventano testo, riepiloghi e attività sul tuo telefono. Non viene caricato nulla e funziona offline.',
      appDescription: 'Da voce a testo offline per Android. Trascrizioni, riepiloghi e attività, creati sul tuo telefono.',
    },
    privacy: {
      title: 'Informativa sulla privacy — Echo',
      description:
        'Come Echo e questo sito trattano i dati personali. Le tue registrazioni e note restano sul telefono; questo sito non usa cookie.',
    },
    terms: {
      title: 'Condizioni d’uso — Echo',
      description: 'Le condizioni per usare Echo e acquistare Echo Pro tramite Google Play.',
    },
    legalNotice: {
      title: 'Note legali — Echo',
      description: 'I dati dell’editore di Echo, l’app da voce a testo offline per Android.',
    },
    licenses: {
      title: 'Licenze open source — Echo',
      description: 'I modelli e le librerie open source su cui si basa Echo, con le relative licenze.',
    },
    notFound: {
      title: 'Pagina non trovata — Echo',
      description: 'Questa pagina non esiste.',
    },
  },

  header: {
    navLabel: 'Principale',
    openMenu: 'Apri il menu',
    closeMenu: 'Chiudi il menu',
    nav: {
      features: 'Funzioni',
      useCases: 'Usi',
      privacy: 'Privacy',
      pricing: 'Prezzi',
      faq: 'FAQ',
    },
  },

  footer: {
    copyright: (year: number) => `© ${year} Koman`,
    noCookies: 'Nessun cookie su questo sito',
    groups: {
      product: 'Prodotto',
      useCases: 'Usi',
      compare: 'Confronti',
      resources: 'Risorse',
      legal: 'Legale',
    },
    links: {
      features: 'Funzioni',
      pricing: 'Prezzi',
      changelog: 'Novità',
      phones: 'Telefoni supportati',
      languages: 'Lingue',
      meetings: 'Riunioni',
      lectures: 'Lezioni',
      interviews: 'Interviste',
      voiceNotes: 'Note vocali',
      subtitles: 'Sottotitoli',
      vsLoronote: 'Echo vs LoroNote',
      vsOtter: 'Echo vs Otter',
      vsGoogleRecorder: 'Echo vs Google Recorder',
      blog: 'Blog',
      help: 'Centro assistenza',
      contact: 'Contatti',
      privacy: 'Informativa sulla privacy',
      terms: 'Condizioni d’uso',
      legalNotice: 'Note legali',
      licenses: 'Licenze open source',
    },
  },

  languageSwitcher: {
    label: 'Lingua',
  },

  textPage: {
    lastUpdated: 'Ultimo aggiornamento',
    draftNotice: 'Bozza. Ogni valore tra [parentesi quadre] va compilato e il testo rivisto da un esperto di diritto UE prima del lancio.', // launch-check: ignore
    translationNotice: 'Questa traduzione è solo per tua comodità. In caso di differenze, prevale la versione inglese.',
    translationNoticeLink: 'Leggi la versione inglese',
  },

  notFound: {
    heading: 'Qui non c’è niente di registrato.',
    lead: 'La pagina che cerchi non esiste o è stata spostata.',
    home: 'Torna alla home',
  },

  hero: {
    pill: 'Da voce a testo offline per Android',
    headingLine1: 'Dillo una volta.',
    headingLine2: 'Echo lo scrive.',
    lead: 'Riunioni, lezioni e note vocali diventano testo, riepiloghi e attività sul tuo telefono. Non viene caricato nulla e, dopo il download una tantum del modello, funziona senza internet.',
    qrLabel: 'Codice QR che porta a Echo su Google Play',
    qrNote: 'Oppure inquadralo con il tuo telefono Android',
    note: 'Download gratuito · Nessun account',
  },

  phone: {
    label: 'Echo mostra la trascrizione di una riunione con un riepilogo e un’attività',
    title: 'Avvio del progetto',
    meta: 'Oggi, 9:42 · 18 min',
    tag: 'Lavoro',
    summaryLabel: 'Riepilogo',
    summaryText: 'Il team ha concordato l’ambito del lancio e si è diviso il lavoro sul budget. Alex rivede la bozza entro venerdì.',
    tasksLabel: 'Attività · 2',
    task1: 'Inviare ad Alex la bozza del budget',
    task1Reminder: 'Domani, 10:00',
    task2: 'Prenotare la sala per giovedì',
    lines: [
      {
        name: 'Maja',
        time: '2:14 – 2:31',
        before: 'Allora, ',
        mark: 'domani alle dieci mando ad Alex la bozza del budget',
        after: ', così può rivederla prima di venerdì.',
      },
      {
        name: 'Alex',
        time: '2:32 – 2:40',
        before: 'Per me va bene. Qualcuno dovrebbe ',
        mark: 'prenotare la sala per giovedì',
        after: '.',
      },
    ],
  },

  features: {
    eyebrow: 'Funzioni',
    title: 'Tutto ciò che hai detto, pronto all’uso',
    items: [
      {
        title: 'Preciso, sul tuo telefono',
        text: 'Whisper Large V3 Turbo sui telefoni con 8 GB di RAM, un modello Whisper più piccolo sugli altri, oppure il riconoscitore offline del telefono per risultati immediati.',
      },
      {
        title: 'Sa chi ha parlato',
        text: 'Gli interlocutori vengono etichettati in automatico. Dai un nome a qualcuno una volta e il nome resta nella nota e nelle esportazioni.',
      },
      {
        title: 'Un riepilogo per ogni nota',
        text: 'Subito dopo la trascrizione arriva un breve riepilogo. Serve un telefono con circa 4 GB di RAM.',
      },
      {
        title: 'Circa 100 lingue',
        text: 'Rilevate in automatico, tra cui inglese, tedesco, sloveno, croato e italiano.',
      },
      {
        title: 'Calendario e cartelle',
        text: 'Sfoglia note e attività per giorno e ordinale in cartelle come Lavoro, Personale o Idee.',
      },
      {
        title: 'Importa e condividi',
        text: 'Porta dentro le registrazioni che hai già. Condividi come testo gratis, oppure come Markdown, sottotitoli SRT e audio originale con Pro.',
      },
    ],
  },

  tasksCallout: {
    eyebrow: 'Solo in Echo',
    title: 'Dillo a voce. Diventa un’attività.',
    lead: 'Echo estrae dalla trascrizione ciò che c’è da fare. Se hai indicato un orario, ti avvisa in quel momento.',
    points: ['Le attività di oggi nella schermata iniziale, le altre nel calendario', 'Tocca un’attività per andare al punto in cui è stata detta'],
    speaker: 'Tu',
    time: '0:04 – 0:11',
    saidBefore: 'Penso che ',
    saidMark: 'domani alle 10 devo andare dal dentista',
    saidAfter: ', e dopo ritiro il pacco.',
    taskTitle: 'Appuntamento dal dentista',
    reminder: 'Domani, 10:00 · promemoria attivo',
    chip: 'Nuova attività',
  },

  howItWorks: {
    eyebrow: 'Come funziona',
    title: 'Tre passaggi, niente da configurare',
    steps: [
      { title: 'Registra o importa', text: 'Tocca il microfono, oppure apri un file audio che hai già.' },
      { title: 'Echo fa il lavoro', text: 'La trascrizione si compone riga per riga. Poi arrivano interlocutori, riepilogo e attività.' },
      { title: 'Leggi, ascolta, condividi', text: 'Tocca una riga qualsiasi per riascoltarla. Le tue modifiche non sovrascrivono mai l’originale.' },
    ],
  },

  useCases: {
    eyebrow: 'Usi',
    title: 'Pensato per come registri',
    learnMore: 'Scopri di più',
    items: {
      meetings: { title: 'Riunioni', text: 'Verbali e responsabili, senza scrivere durante la riunione.' },
      lectures: { title: 'Lezioni', text: 'Ascolta in aula e cerca nell’intera lezione più tardi.' },
      interviews: { title: 'Interviste', text: 'Interlocutori etichettati, pronti da citare. Le conversazioni riservate restano con te.' },
      subtitles: { title: 'Sottotitoli', text: 'File SRT con i tempi per i tuoi video, pronti per qualsiasi editor.' },
    },
  },

  privacySection: {
    eyebrow: 'Privacy',
    title: 'Privato per progetto, non per promessa',
    lead: 'Non possiamo diffondere, vendere né usare per l’addestramento le tue registrazioni, perché non le riceviamo mai.',
    points: [
      { title: 'Nessun server per le tue note', text: 'Audio, trascrizioni, riepiloghi e attività sono salvati solo sul tuo telefono.' },
      { title: 'Nessun account', text: 'Nessuna registrazione e nessuna email. Pro si acquista e si gestisce da Google Play.' },
      {
        title: 'Internet solo per i download',
        text: 'Serve la connessione per scaricare i modelli e acquistare Pro. Dopo, puoi stare in modalità aereo.',
      },
    ],
    siteTitle: 'Anche questo sito',
    siteText: 'Nessun cookie. Le visite sono conteggiate con un’analisi senza cookie ospitata nell’UE, senza memorizzare il tuo indirizzo IP.',
    policyLink: 'Informativa sulla privacy',
  },

  compare: {
    eyebrow: 'Confronto',
    title: 'Echo contro gli assistenti cloud',
    featureColumn: 'Caratteristica',
    otherColumn: 'Tipici servizi cloud',
    rows: [
      { label: 'Dove viene elaborato l’audio', echo: 'Sul tuo telefono', other: 'Sui loro server' },
      { label: 'Funziona senza internet', echo: 'Sì', other: 'No' },
      { label: 'Serve un account', echo: 'No', other: 'Sì' },
      { label: 'Attività e promemoria dalla voce', echo: 'Sì', other: 'Dipende' },
      { label: 'Entra al posto tuo nelle chiamate Zoom o Teams', echo: 'No', other: 'Spesso' },
    ],
    fit: 'Echo non fa per te se ti serve un bot che entri nelle videochiamate, o note che il team modifica insieme in tempo reale.',
  },

  pricing: {
    eyebrow: 'Prezzi',
    title: 'Inizia gratis. Passa a Pro quando le note si allungano.',
    lead: 'Pro elimina il limite di 2 minuti e aggiunge l’esportazione in Markdown, SRT e audio.',
    bestValue: 'Più conveniente',
    plans: {
      free: {
        name: 'Gratis',
        unit: '',
        sub: 'Per sempre',
        features: ['I primi 2 minuti di ogni nota', 'Riepilogo e attività inclusi', 'Note illimitate'],
      },
      monthly: {
        name: 'Pro mensile',
        unit: '/ mese',
        sub: 'Disdici quando vuoi',
        features: [
          'Nessun limite di tempo',
          'Riepilogo e attività su tutta la registrazione',
          'Importazioni complete',
          'Esportazione in Markdown, SRT e audio',
        ],
      },
      yearly: {
        name: 'Pro annuale',
        unit: '/ anno',
        sub: (perMonth: string, savePercent: number) => `${perMonth} al mese · risparmi il ${savePercent}% rispetto al mensile`,
        features: ['Tutto ciò che è in Pro', 'Addebito una volta all’anno'],
      },
      lifetime: {
        name: 'Pro a vita',
        unit: 'una tantum',
        sub: 'Nessun rinnovo',
        features: ['Tutto ciò che è in Pro', 'Aggiornamenti futuri inclusi'],
      },
    },
    ctaText: 'Inizia gratis. Passa a Pro dall’app quando ti serve.',
    ctaButton: 'Scarica gratis',
    fine: 'Prezzi in euro, IVA inclusa. L’addebito avviene tramite Google Play, che può mostrare la tua valuta locale. Gli abbonamenti si rinnovano finché non li disdici su Google Play.',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Domande e risposte',
    items: [
      {
        q: 'Cosa succede dopo i 2 minuti gratuiti?',
        a: 'L’intera registrazione viene salvata e la trascrizione si ferma a 2:00. Passa a Pro e Echo trascrive il resto della stessa nota.',
      },
      {
        q: 'Su quali telefoni funziona Echo?',
        a: `Android ${product.minAndroid} o successivo. Riepiloghi e attività richiedono circa ${product.notesAiRamGb} GB di RAM. I telefoni con ${product.largeModelRamGb} GB o più usano Whisper Large V3 Turbo, il modello più preciso di Echo; gli altri ne usano uno più piccolo e veloce.`,
      },
      {
        q: 'Quanto è accurato?',
        a: 'Dipende dall’audio: una sola voce chiara e vicina al telefono funziona meglio, mentre voci sovrapposte e rumore di fondo lo rendono più difficile. L’accuratezza è massima nelle lingue più diffuse.',
      },
      {
        q: 'Per quali lingue ci sono riepiloghi e attività?',
        a: 'La trascrizione funziona in circa 100 lingue, e riepiloghi e attività vengono creati per ognuna. Il Notes AI standard li scrive in inglese; il modello multilingue opzionale li scrive nella lingua della nota.',
      },
      {
        q: 'Echo è conforme al GDPR?',
        a: 'Registrazioni e note vengono elaborate e salvate sul tuo dispositivo, quindi non le abbiamo mai. L’informativa sulla privacy elenca i pochi dati coinvolti, come gli acquisti su Google Play.',
      },
      {
        q: 'Quali file posso importare?',
        a: 'File audio come MP3, M4A, AAC, WAV, FLAC, OGG e Opus, più l’audio dei video MP4 e WebM. Echo archivia ognuno nel giorno in cui è stato registrato, oppure in quello di oggi se preferisci.',
      },
      {
        q: 'Come sposto le note su un nuovo telefono?',
        a: 'In Impostazioni, scegli Backup delle note. Echo salva tutto in un unico file che conservi tu. Aprilo sul nuovo telefono per ripristinare.',
      },
      { q: 'Esiste una versione per iPhone?', a: 'Non ancora. Echo nasce prima per Android.' },
    ],
  },

  closingCta: {
    title: 'La tua prossima riunione, messa per iscritto.',
    sub: 'Tocca registra e appoggia il telefono. Echo ti consegna la trascrizione, un breve riepilogo e le attività che hai nominato, senza che le tue parole lascino il telefono.',
    facts: ['Download gratuito', 'Nessun account', 'Funziona offline'],
  },
};
