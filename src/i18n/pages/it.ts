import { product } from '../../config/product';
import type { PagesDict, RelatedId } from './en';

export const itPages: PagesDict = {
  common: {
    faqTitle: 'Domande',
    faqEyebrow: 'FAQ',
    relatedTitle: 'Da leggere dopo',
    checkedOn: (date: string) => `Verificato il ${date}`,
    sourcesTitle: 'Fonti',
    tryFree: 'Prova Echo gratis',
  },

  help: {
    title: 'Centro assistenza Echo — registrazioni, trascrizioni e Pro',
    heading: 'Centro assistenza',
    description:
      'Risposte su Echo: telefoni supportati, registrazione e importazione, trascrizioni, riepiloghi e attività, acquisti di Pro e dove restano i tuoi dati.',
    intro: 'Risposte brevi su come funziona Echo. Se la tua manca, scrivici e la aggiungeremo.',
    groups: [
      {
        id: 'getting-started',
        title: 'Per iniziare',
        items: [
          {
            q: 'Su quali telefoni funziona Echo?',
            a: `Android ${product.minAndroid} o successivo, con processore ARM a 64 bit. Riepiloghi e attività richiedono circa ${product.notesAiRamGb} GB di RAM, e i telefoni con ${product.largeModelRamGb} GB o più usano Whisper Large V3 Turbo. La pagina dei telefoni supportati ha tutti i dettagli.`,
          },
          {
            q: 'Cosa scarica Echo e quanto spazio occupa?',
            a: 'Il modello vocale si scarica una sola volta: Whisper Large V3 Turbo pesa 574 MB, Whisper Small 190 MB. Il riconoscimento degli interlocutori aggiunge circa 42 MB e il Notes AI per riepiloghi e attività circa 1 GB. Le registrazioni occupano circa 14 MB all’ora.',
          },
          {
            q: 'Mi serve una connessione a internet?',
            a: 'Solo per scaricare i modelli, acquistare Pro e verificare se hai Pro. Registrazione, trascrizione, riepiloghi e attività funzionano tutti sul telefono, quindi dopo puoi stare tranquillamente in modalità aereo.',
          },
          {
            q: 'Mi serve un account?',
            a: 'No, non c’è nessuna registrazione. Pro si acquista e si gestisce dal tuo account Google Play.',
          },
        ],
      },
      {
        id: 'recording',
        title: 'Registrazione e importazione',
        items: [
          {
            q: 'La registrazione continua se esco dall’app o spengo lo schermo?',
            a: 'Sì. Echo registra in background, con una notifica da cui puoi metterla in pausa o fermarla. Una chiamata mette in pausa la registrazione, che riprende alla fine della chiamata, a meno che tu non l’abbia messa in pausa da solo.',
          },
          {
            q: 'Quali file posso importare?',
            a: `File audio come MP3, M4A, AAC, WAV, FLAC, OGG e Opus, più l’audio dei video MP4 e WebM. Condividi un file con Echo oppure usa il pulsante Importa audio in Note. Scegli tu il titolo e se la nota appartiene al giorno in cui è stata registrata o a oggi.`,
          },
          {
            q: 'Come imposto la lingua?',
            a: 'Echo rileva la lingua da solo. Per fissarne una, sceglila in Impostazioni. Per un file importato o per una singola nota puoi scegliere una lingua diversa senza cambiare le Impostazioni, e puoi trascrivere di nuovo una nota in un’altra lingua.',
          },
        ],
      },
      {
        id: 'transcripts',
        title: 'Trascrizioni',
        items: [
          {
            q: 'Quanto è accurato?',
            a: 'Dipende dall’audio: una sola voce chiara e vicina al telefono funziona meglio, mentre voci sovrapposte e rumore di fondo lo rendono più difficile. L’accuratezza è massima nelle lingue più diffuse. Aggiungi nomi e termini speciali in Impostazioni, Dizionario, e Whisper li scriverà come li hai scritti tu.',
          },
          {
            q: 'Quanto ci mette una trascrizione?',
            a: 'Se il tuo telefono ha un riconoscitore offline per quella lingua, il testo è pronto appena ti fermi. Whisper lavora dopo la registrazione: Large V3 Turbo può impiegare quanto la registrazione o più, anche su un top di gamma recente, mentre Whisper Small è circa tre volte più veloce.',
          },
          {
            q: 'Perché vedo il testo mentre registro, ma non sempre?',
            a: 'Il testo in tempo reale arriva dal riconoscitore offline del tuo telefono. Servono Android 13 o successivo e la lingua installata sul telefono, che le Impostazioni possono scaricare per te. Senza, il testo compare dopo che ti fermi.',
          },
          {
            q: 'Posso correggere chi ha detto cosa?',
            a: 'Sì. Tocca un interlocutore per dargli un nome o spostare le sue righe su un altro interlocutore, oppure seleziona alcune righe e assegna solo quelle. I nomi usati in precedenza vengono suggeriti.',
          },
          {
            q: 'Posso cercare nelle mie note?',
            a: 'La ricerca scorre tutte le trascrizioni, i titoli e i riepiloghi. Ignora maiuscole e accenti, quindi “cesnik” trova “česnik”.',
          },
        ],
      },
      {
        id: 'summaries-tasks',
        title: 'Riepiloghi e attività',
        items: [
          {
            q: 'Perché sul mio telefono non ci sono riepiloghi o attività?',
            a: `Servono circa ${product.notesAiRamGb} GB di RAM e il download del Notes AI di circa 1 GB. Sui telefoni con meno memoria Echo trascrive comunque, con gli interlocutori.`,
          },
          {
            q: 'In quale lingua vengono scritti riepiloghi e attività?',
            a: 'Il Notes AI standard li scrive in inglese per le note in altre lingue, mantenendo le citazioni nella tua lingua. Il modello multilingue opzionale, Gemma 4 E2B (2,6 GB), li scrive nella lingua della nota.',
          },
          {
            q: 'Il promemoria è arrivato in ritardo. Perché?',
            a: 'Android consegna i promemoria in orario solo se Echo può impostare sveglie esatte. Impostazioni, Promemoria attività, apre le impostazioni di sistema per questo e per le notifiche. Senza il permesso Android può ritardare i promemoria.',
          },
          {
            q: 'Echo ha saltato un’attività, o ne ha inventata una. Cosa posso fare?',
            a: 'Riepiloghi e attività vengono da un piccolo modello di IA sul tuo telefono, e può sbagliare. Aggiungi, modifica o elimina le attività da solo. Ogni attività rimanda alla riga da cui nasce, quindi verificarla richiede un tocco.',
          },
        ],
      },
      {
        id: 'pro',
        title: 'Pro e acquisti',
        items: [
          {
            q: 'Cosa succede dopo i 2 minuti gratuiti?',
            a: 'L’intera registrazione viene salvata e la trascrizione si ferma a 2:00. Passa a Pro e Echo trascrive il resto della stessa nota.',
          },
          {
            q: 'Cosa aggiunge Pro?',
            a: 'Nessun limite di tempo per registrazioni e importazioni, riepiloghi e attività su tutta la registrazione, ed esportazione in Markdown, sottotitoli SRT e audio originale. L’esportazione come testo semplice è gratuita.',
          },
          {
            q: 'Ho cambiato telefono. Come recupero Pro?',
            a: 'Accedi a Google Play con lo stesso account, apri Echo e scegli Ripristina acquisti in Impostazioni.',
          },
          {
            q: 'Come disdico o chiedo un rimborso?',
            a: 'Gli abbonamenti si gestiscono in Google Play, in Pagamenti e abbonamenti. I rimborsi seguono la politica di rimborso di Google Play.',
          },
        ],
      },
      {
        id: 'privacy',
        title: 'Privacy e i tuoi dati',
        items: [
          {
            q: 'Dove vengono salvate le mie registrazioni?',
            a: 'Solo sul tuo telefono. Non gestiamo server per le tue note, quindi non riceviamo mai i tuoi audio, le trascrizioni, i riepiloghi o le attività.',
          },
          {
            q: 'Come sposto le note su un nuovo telefono?',
            a: 'In Impostazioni, scegli Backup delle note. Echo salva tutto in un unico file che conservi tu. Sul nuovo telefono, scegli Ripristina da backup.',
          },
          {
            q: 'Come cancello tutto?',
            a: 'In Impostazioni trovi Elimina tutti i dati. Anche disinstallare Echo rimuove le sue note dal telefono, quindi fai prima un backup se vuoi conservarle.',
          },
        ],
      },
    ],
    contactTitle: 'Sei ancora bloccato?',
    contactText: (email: string) => `Scrivi a ${email}. Indicaci il modello del tuo telefono e cosa hai provato; rispondiamo in inglese o in sloveno.`,
  },

  useCases: {
    meetings: {
      title: 'Trascrizione offline delle riunioni per Android — Echo',
      description:
        'Registra una riunione sul tuo telefono Android e ottieni trascrizione, interlocutori, riepilogo e attività con promemoria. Tutto sul telefono, senza bot e senza upload.',
      eyebrow: 'Riunioni',
      heading: 'Verbali che si scrivono da soli, sul tuo telefono',
      lead: 'Appoggia il telefono sul tavolo e parla. Echo conserva la trascrizione, chi ha detto cosa, un breve riepilogo e le attività concordate.',
      problemTitle: 'Scrivere il verbale significa perdersi la riunione',
      problem:
        'O ascolti o scrivi. I servizi cloud risolvono il problema entrando nella tua chiamata e caricando tutto sui loro server, cosa che a molti team e clienti non piace. Echo fa il lavoro sul telefono che hai in tasca, quindi la conversazione non esce dalla stanza.',
      phone: {
        label: 'Echo mostra una nota di riunione con un riepilogo, due attività e la trascrizione',
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
      featuresTitle: 'Cosa ottieni dopo la riunione',
      features: [
        {
          title: 'Chi ha detto cosa',
          text: 'Gli interlocutori vengono etichettati in automatico. Dai un nome a qualcuno una volta e il nome resta nella nota e nelle esportazioni.',
        },
        {
          title: 'Attività con responsabili e orari',
          text: 'Echo elenca ciò che è stato concordato, collega ogni attività alla riga da cui nasce e ti avvisa quando è stato detto un orario.',
        },
        {
          title: 'Verbali da condividere',
          text: 'Condividi la trascrizione come testo gratis, oppure come Markdown con riepilogo e attività con Pro.',
        },
      ],
      faq: [
        {
          q: 'Echo può entrare nelle chiamate Zoom, Teams o Meet?',
          a: 'No. Echo registra attraverso il microfono del telefono. Per una videochiamata, metti il telefono accanto all’altoparlante, oppure importa la registrazione della chiamata in seguito.',
        },
        {
          q: 'Quanto può durare una riunione?',
          a: 'La registrazione non ha limiti di tempo. La versione gratuita trascrive i primi 2 minuti di ogni nota; Pro trascrive l’intera riunione.',
        },
        {
          q: 'Devo dire agli altri che sto registrando?',
          a: 'Sì. Chiedi a tutti prima di registrare. Le regole cambiano da paese a paese, e registrare le persone senza il loro consenso è illegale in molti.',
        },
      ],
      related: ['lectures', 'interviews'] as RelatedId[],
    },
    lectures: {
      title: 'Trascrivi le lezioni offline su Android — Echo',
      description:
        'Registra una lezione e cerca ogni parola più tardi. Echo trascrive sul tuo telefono Android, con riepiloghi e attività per letture e scadenze, senza internet.',
      eyebrow: 'Lezioni',
      heading: 'Ascolta in aula. Cerca nell’intera lezione più tardi.',
      lead: 'Registra la lezione, poi trova il minuto esatto in cui il professore l’ha spiegato. Echo trascrive sul tuo telefono, anche senza Wi-Fi in aula.',
      problemTitle: 'Gli appunti catturano metà di ciò che è stato detto',
      problem:
        'Mentre scrivi un punto, il successivo è già andato. Nemmeno la sola registrazione aiuta molto: nessuno scorre 90 minuti di audio per trovare una definizione. Una trascrizione in cui cercare risolve entrambi i problemi.',
      phone: {
        label: 'Echo mostra una nota di lezione con un riepilogo, un’attività di lettura e la trascrizione',
        title: 'Microeconomia, settimana 6',
        meta: 'Mar, 10:15 · 84 min',
        tag: 'Università',
        summaryLabel: 'Riepilogo',
        summaryText: 'L’elasticità della domanda rispetto al prezzo e come calcolarla, con l’esempio della tariffa del taxi. Le domande d’esame seguono gli esercizi.',
        tasksLabel: 'Attività · 2',
        task1: 'Leggere il capitolo 5 prima del seminario',
        task1Reminder: 'Lunedì, 9:00',
        task2: 'Consegnare gli esercizi 3',
        lines: [
          {
            name: 'Docente',
            time: '41:02 – 41:20',
            before: 'Quindi l’elasticità è la variazione percentuale della quantità divisa per la variazione percentuale del prezzo. ',
            mark: 'Leggete il capitolo cinque entro lunedì',
            after: ', il seminario parte da lì.',
          },
          {
            name: 'Studente',
            time: '41:21 – 41:27',
            before: 'È ',
            mark: 'negli esercizi',
            after: ' anche questo?',
          },
        ],
      },
      featuresTitle: 'Pensato per le registrazioni lunghe',
      features: [
        {
          title: 'Cerca ogni parola',
          text: 'La ricerca scorre tutte le tue trascrizioni insieme e ignora maiuscole e accenti. Tocca una riga per ascoltarla.',
        },
        {
          title: 'Letture e scadenze come attività',
          text: 'Quando il docente dice “leggete il capitolo cinque entro lunedì”, Echo ne fa un’attività con un promemoria.',
        },
        {
          title: 'Scrive bene i termini',
          text: 'Aggiungi nomi di corsi e termini al Dizionario in Impostazioni, e Whisper li scrive come li scriveresti tu.',
        },
      ],
      faq: [
        {
          q: 'Posso registrare una lezione di 90 minuti?',
          a: 'Sì. La registrazione non ha limiti di tempo e continua con lo schermo spento. Una lezione di 90 minuti occupa circa 21 MB. La versione gratuita trascrive i primi 2 minuti di ogni nota; Pro trascrive l’intera lezione.',
        },
        {
          q: 'Funziona in un’aula grande?',
          a: 'Funziona meglio vicino a chi parla. Dal fondo di un’aula grande, con il microfono che capta poco, aspettati più errori; siediti più vicino o appoggia il telefono sulla cattedra.',
        },
        {
          q: 'In quali lingue possono essere le lezioni?',
          a: `Whisper trascrive circa 100 lingue e rileva la lingua da solo. La pagina delle lingue le elenca.`,
        },
      ],
      related: ['meetings', 'interviews'] as RelatedId[],
    },
    interviews: {
      title: 'App per trascrivere interviste in privato su Android — Echo',
      description:
        'Trascrivi interviste sul tuo telefono Android con interlocutori etichettati, pronte da citare. Non viene caricato nulla, così le conversazioni riservate restano con te.',
      eyebrow: 'Interviste',
      heading: 'Trascrizioni di interviste con interlocutori, e nulla caricato',
      lead: 'Registra o importa l’intervista e ottieni una trascrizione divisa per interlocutore, pronta da citare. L’audio e il testo restano sul tuo telefono.',
      problemTitle: 'Le conversazioni riservate non devono finire sul server di qualcun altro',
      problem:
        'Fonti, pazienti, partecipanti a una ricerca e candidati parlano con te, non con un’azienda di trascrizioni. La maggior parte dei servizi di trascrizione carica l’audio per elaborarlo. Echo non lo invia da nessuna parte, quindi puoi promettere che resta con te e dirlo sul serio.',
      phone: {
        label: 'Echo mostra una nota di intervista con due interlocutori, un riepilogo e un’attività di follow-up',
        title: 'Intervista alla caposala',
        meta: 'Lun, 14:30 · 47 min',
        tag: 'Ricerca',
        summaryLabel: 'Riepilogo',
        summaryText: 'A marzo i turni di notte sono passati da tre infermieri a due. Condividerà i turni se il suo nome non viene usato.',
        tasksLabel: 'Attività · 2',
        task1: 'Inviare ad Ana le citazioni da verificare',
        task1Reminder: 'Venerdì, 9:00',
        task2: 'Chiedere i turni di marzo',
        lines: [
          {
            name: 'Ana',
            time: '12:40 – 12:58',
            before: 'Da marzo di notte siamo in due invece che in tre. ',
            mark: 'Mandami le citazioni entro venerdì',
            after: ' e le controllo.',
          },
          {
            name: 'Tu',
            time: '12:59 – 13:04',
            before: 'Certo. E ',
            mark: 'potrei vedere i turni di marzo',
            after: '?',
          },
        ],
      },
      featuresTitle: 'Cosa le rende citabili',
      features: [
        {
          title: 'Interlocutori con un nome',
          text: 'Echo separa le voci. Dai un nome a ogni interlocutore una volta e correggi le righe finite alla persona sbagliata.',
        },
        {
          title: 'Ogni riga con il suo tempo',
          text: 'Ogni riga mantiene il suo momento nella registrazione. Toccala per riascoltare le parole esatte prima di citarle.',
        },
        {
          title: 'Resta con te',
          text: 'Nessun account e nessun upload. Fai il backup in un file che conservi tu ed elimina la nota quando il progetto finisce.',
        },
      ],
      faq: [
        {
          q: 'Posso importare un’intervista registrata altrove?',
          a: `Sì. Echo importa file audio come MP3, M4A, AAC, WAV, FLAC, OGG e Opus, più l’audio dei video MP4 e WebM. Condividi il file con Echo oppure usa il pulsante Importa audio in Note.`,
        },
        {
          q: 'Quanto sono precise le etichette degli interlocutori?',
          a: 'Buone per un’intervista chiara tra due persone, meno affidabili con voci sovrapposte o tante voci. Le righe vicine a un cambio di interlocutore sono le più soggette a errori; puoi spostarle con un tocco.',
        },
        {
          q: 'Posso esportare la trascrizione?',
          a: 'L’esportazione come testo semplice è gratuita. Con Pro puoi esportare in Markdown, come sottotitoli SRT con i tempi, oppure come audio originale.',
        },
      ],
      related: ['meetings', 'lectures'] as RelatedId[],
    },
  },


  languages: {
    title: 'Le lingue che Echo trascrive — da voce a testo offline in 100 lingue',
    heading: 'Lingue supportate',
    description:
      'Echo trascrive 100 lingue offline con Whisper, dall’inglese al tedesco, dallo sloveno allo swahili. Scopri quali lingue hanno testo in tempo reale, riepiloghi e attività.',
    intro:
      'Echo trascrive con Whisper, che conosce 100 lingue e rileva quale parli. Il risultato varia: le lingue più diffuse funzionano meglio, mentre quelle con pochi dati di addestramento sbagliano di più.',
    sections: {
      transcription: {
        title: 'Trascrizione',
        text: 'Ogni lingua qui sotto può essere trascritta offline, da registrazioni e da file importati. Il cantonese richiede Whisper Large V3 Turbo, che Echo usa sui telefoni con 8 GB di RAM o più.',
      },
      live: {
        title: 'Testo in tempo reale e trascrizioni istantanee',
        text: 'Il testo mentre registri e la trascrizione nel momento in cui ti fermi vengono dal riconoscitore offline del tuo telefono. Quali lingue ha dipende dal telefono; le Impostazioni mostrano se il tuo è installato e possono scaricarlo. Le altre lingue vengono trascritte da Whisper dopo che ti fermi.',
      },
      notes: {
        title: 'Riepiloghi e attività',
        text: 'Creati per ogni lingua dell’elenco. Il Notes AI standard li scrive in inglese per le note in altre lingue e mantiene le citazioni nell’originale. Il modello multilingue opzionale li scrive nella lingua della nota.',
      },
      app: {
        title: 'L’app stessa',
        text: (list: string) => `I menu e le impostazioni di Echo sono disponibili in ${list}.`,
      },
    },
    listTitle: (count: number) => `Tutte le ${count} lingue`,
  },

  phones: {
    title: 'Requisiti di Echo — telefoni Android e modelli supportati',
    heading: 'Telefoni supportati',
    description: `Echo funziona su Android ${product.minAndroid} o successivo. Scopri quale modello vocale ottiene il tuo telefono, quanta RAM servono a riepiloghi e attività e quanto spazio occupano i modelli.`,
    intro: `Echo richiede Android ${product.minAndroid} o successivo e un processore ARM a 64 bit, che hanno quasi tutti i telefoni Android venduti negli ultimi anni. È la memoria del telefono a decidere quali funzioni e modelli ottieni.`,
    tiersTitle: 'Cosa ottiene il tuo telefono',
    tiersHead: { ram: 'RAM del telefono', speech: 'Modello vocale', notes: 'Riepiloghi e attività' },
    tiers: [
      { ram: 'Meno di 4 GB', speech: 'Whisper Small, oppure Base', notes: 'Non disponibili' },
      { ram: 'Da 4 a 6 GB', speech: 'Whisper Small, oppure Base', notes: 'Sì' },
      { ram: '8 GB o più', speech: 'Whisper Large V3 Turbo, oppure Medium, Small o Base', notes: 'Sì' },
    ],
    tiersNote:
      'Echo sceglie il primo modello dell’elenco; puoi cambiarlo in Impostazioni, Modello vocale. I telefoni dichiarano un po’ meno memoria di quella scritta sulla scatola, quindi un telefono da 8 GB conta come 8 GB.',
    recognizerTitle: 'Il riconoscitore del tuo telefono',
    recognizer:
      'Con Android 13 e successivi, molti telefoni hanno un riconoscitore vocale offline integrato. Quando ha la tua lingua, Echo lo usa per il testo in tempo reale e per una trascrizione istantanea, e usa Whisper per le importazioni o quando lo chiedi. I telefoni che non ne hanno uno usano Whisper per tutto.',
    storageTitle: 'Spazio',
    storageHead: { item: 'Download', size: 'Dimensione' },
    storage: [
      { item: 'Whisper Large V3 Turbo', size: '574 MB' },
      { item: 'Whisper Medium', size: '539 MB' },
      { item: 'Whisper Small', size: '190 MB' },
      { item: 'Whisper Base', size: '60 MB' },
      { item: 'Riconoscimento degli interlocutori', size: '42 MB' },
      { item: 'Notes AI (Qwen3 1.7B)', size: '977 MB' },
      { item: 'Notes AI multilingue (Gemma 4 E2B), opzionale', size: '2,6 GB' },
      { item: 'Registrazioni', size: 'Circa 14 MB all’ora' },
    ],
    storageNote: 'Sul telefono resta solo il modello Whisper in uso. Passare a un altro scarica quello nuovo e rimuove il vecchio.',
    speedTitle: 'Velocità',
    speed:
      'Su un Samsung Galaxy S24, Whisper Large V3 Turbo impiega da 33 a 50 secondi ogni 30 secondi di audio, quindi una trascrizione dura circa quanto la registrazione o più. Whisper Small ne impiega circa 11. I telefoni rallentano quando si scaldano, per esempio su un caricabatterie wireless.',
    testedTitle: 'Telefoni testati',
    tested: (email: string) =>
      `Testiamo Echo su un Samsung Galaxy S24. Se sul tuo telefono non funziona bene, scrivi a ${email} indicando il modello e ce ne occuperemo.`,
  },
};
