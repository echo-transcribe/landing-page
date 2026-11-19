import type { Dict } from './en';
import { product } from '../config/product';

// French (vous-form, matching the app).   is replaced by U+00A0 below.
export const fr: Dict = {
  common: {
    skipToContent: 'Aller au contenu',
    downloadNow: 'Télécharger',
    playBadgeAlt: 'Disponible sur Google Play',
    logoLabel: 'Accueil Echo',
    brandTagline: 'Reconnaissance vocale hors ligne pour Android',
    ogImageAlt: 'Echo : dites-le une fois, Echo l’écrit.',
    ogTagline: 'Notes, résumés et tâches privés, sur votre téléphone.',
    switchToDark: 'Passer en mode sombre',
    switchToLight: 'Passer en mode clair',
  },

  meta: {
    home: {
      title: 'Echo — reconnaissance vocale hors ligne pour Android',
      description:
        'Réunions, cours et notes vocales deviennent texte, résumés et tâches sur votre téléphone. Rien n’est envoyé, et tout fonctionne hors ligne.',
      appDescription:
        'Reconnaissance vocale hors ligne pour Android. Transcriptions, résumés et tâches, créés sur votre téléphone.',
    },
    privacy: {
      title: 'Politique de confidentialité — Echo',
      description:
        'Comment Echo et ce site traitent les données personnelles. Vos enregistrements et notes restent sur votre téléphone ; ce site ne dépose aucun cookie.',
    },
    terms: {
      title: 'Conditions d’utilisation — Echo',
      description: 'Les conditions d’utilisation d’Echo et d’achat d’Echo Pro via Google Play.',
    },
    legalNotice: {
      title: 'Mentions légales — Echo',
      description: 'Informations sur l’éditeur d’Echo, l’appli de reconnaissance vocale hors ligne pour Android.',
    },
    licenses: {
      title: 'Licences open source — Echo',
      description: 'Les modèles et bibliothèques open source sur lesquels repose Echo, avec leurs licences.',
    },
    notFound: {
      title: 'Page introuvable — Echo',
      description: 'Cette page n’existe pas.',
    },
  },

  header: {
    navLabel: 'Principal',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    nav: {
      features: 'Fonctions',
      useCases: 'Usages',
      privacy: 'Confidentialité',
      pricing: 'Tarifs',
      faq: 'FAQ',
    },
  },

  footer: {
    copyright: (year: number) => `© ${year} Koman`,
    noCookies: 'Aucun cookie sur ce site',
    groups: {
      product: 'Produit',
      useCases: 'Usages',
      compare: 'Comparer',
      resources: 'Ressources',
      legal: 'Mentions',
    },
    links: {
      features: 'Fonctions',
      pricing: 'Tarifs',
      changelog: 'Historique des versions',
      phones: 'Téléphones compatibles',
      languages: 'Langues',
      meetings: 'Réunions',
      lectures: 'Cours',
      interviews: 'Entretiens',
      voiceNotes: 'Notes vocales',
      subtitles: 'Sous-titres',
      vsOtter: 'Echo vs Otter',
      vsGoogleRecorder: 'Echo vs Google Recorder',
      blog: 'Blog',
      help: 'Centre d’aide',
      contact: 'Contact',
      privacy: 'Politique de confidentialité',
      terms: 'Conditions d’utilisation',
      legalNotice: 'Mentions légales',
      licenses: 'Licences',
    },
  },

  languageSwitcher: {
    label: 'Langue',
  },

  textPage: {
    lastUpdated: 'Dernière mise à jour',
    contents: 'Sur cette page',
    draftNotice:
      'Brouillon. Chaque valeur entre [crochets] doit être renseignée, et le texte relu par un spécialiste du droit européen, avant le lancement.', // launch-check: ignore
    translationNotice: 'Cette traduction vous est fournie pour faciliter la lecture. En cas de divergence, la version anglaise fait foi.',
    translationNoticeLink: 'Lire la version anglaise',
  },

  notFound: {
    heading: 'Rien d’enregistré ici.',
    lead: 'La page que vous cherchez n’existe pas ou a été déplacée.',
    home: 'Retour à l’accueil',
  },

  hero: {

    rating: (value: string, count: string) => `${value} sur Google Play · ${count} avis`,
    pill: 'Reconnaissance vocale hors ligne pour Android',
    headingLine1: 'Dites-le une fois.',
    headingLine2: 'Echo l’écrit.',
    lead: 'Réunions, cours et notes vocales deviennent texte, résumés et tâches sur votre téléphone. Rien n’est envoyé, et après un téléchargement unique du modèle, tout fonctionne sans internet.',
    qrLabel: 'QR code vers Echo sur Google Play',
    qrNote: 'Ou scannez avec votre téléphone Android',
    note: 'Gratuit à télécharger · Sans compte',
  },

  phone: {
    label: 'Echo affichant la transcription d’une réunion avec un résumé et une tâche',
    title: 'Lancement du projet',
    meta: 'Aujourd’hui, 9 h 42 · 18 min',
    tag: 'Travail',
    summaryLabel: 'Résumé',
    summaryText:
      'L’équipe s’est accordée sur le périmètre du lancement et a réparti le travail sur le budget. Alex relit le brouillon avant vendredi.',
    tasksLabel: 'Tâches · 2',
    task1: 'Envoyer le brouillon du budget à Alex',
    task1Reminder: 'Demain, 10 h 00',
    task2: 'Réserver la salle pour jeudi',
    lines: [
      {
        name: 'Maja',
        time: '2:14 – 2:31',
        before: 'Bon, alors ',
        mark: 'demain à dix heures j’envoie le brouillon du budget à Alex',
        after: ', et il pourra le relire avant vendredi.',
      },
      {
        name: 'Alex',
        time: '2:32 – 2:40',
        before: 'Ça me va. Quelqu’un devrait ',
        mark: 'réserver la salle pour jeudi',
        after: '.',
      },
    ],
  },

  features: {
    eyebrow: 'Fonctions',
    title: 'Tout ce que vous avez dit, prêt à l’emploi',
    items: [
      {
        title: 'Précis, sur votre téléphone',
        text: 'Whisper Large V3 Turbo sur les téléphones avec 8 Go de RAM, un modèle Whisper plus léger sur les autres, ou le moteur hors ligne de votre téléphone pour un résultat immédiat.',
      },
      {
        title: 'Sait qui a dit quoi',
        text: 'Les intervenants sont identifiés automatiquement. Nommez quelqu’un une fois, et le nom se retrouve dans la note et dans vos exports.',
      },
      {
        title: 'Un résumé pour chaque note',
        text: 'Un court résumé suit juste après la transcription. Il faut un téléphone avec environ 4 Go de RAM.',
      },
      {
        title: 'Environ 100 langues',
        text: 'Détectées automatiquement, dont le français, l’anglais, l’allemand, le slovène et l’italien.',
      },
      {
        title: 'Calendrier et dossiers',
        text: 'Parcourez notes et tâches par jour, et rangez-les dans des dossiers comme Travail, Perso ou Idées.',
      },
      {
        title: 'Importer et partager',
        text: 'Importez les enregistrements que vous avez déjà. Partagez en texte gratuitement, ou en Markdown, sous-titres SRT et audio d’origine avec Pro.',
      },
    ],
  },

  tasksCallout: {
    eyebrow: 'Seulement dans Echo',
    title: 'Dites-le à voix haute. Ça devient une tâche.',
    lead: 'Echo extrait de votre transcription ce qu’il y a à faire. Si vous avez mentionné une heure, il vous le rappelle à ce moment-là.',
    points: ['Les tâches du jour sur l’écran d’accueil, le reste dans le calendrier', 'Touchez une tâche pour revenir à l’endroit où elle a été dite'],
    speaker: 'Vous',
    time: '0:04 – 0:11',
    saidBefore: 'Je crois que ',
    saidMark: 'demain à 10 heures je dois aller chez le dentiste',
    saidAfter: ', et ensuite j’irai chercher le colis.',
    taskTitle: 'Rendez-vous chez le dentiste',
    reminder: 'Demain, 10 h 00 · rappel activé',
    chip: 'Nouvelle tâche',
  },

  howItWorks: {

    videoLabel: 'Enregistrement d’écran d’Echo : on enregistre une réunion, la transcription s’affiche, puis le résumé et les tâches.',
    eyebrow: 'Comment ça marche',
    title: 'Trois étapes, rien à configurer',
    steps: [
      { title: 'Enregistrez ou importez', text: 'Touchez le micro, ou ouvrez un fichier audio que vous avez déjà.' },
      { title: 'Echo fait le travail', text: 'La transcription se remplit ligne par ligne. Intervenants, résumé et tâches suivent.' },
      { title: 'Lisez, écoutez, partagez', text: 'Touchez une ligne pour l’entendre. Vos modifications n’écrasent jamais l’original.' },
    ],
  },

  useCases: {
    eyebrow: 'Usages',
    title: 'Conçu pour votre façon d’enregistrer',
    learnMore: 'En savoir plus',
    items: {
      meetings: { title: 'Réunions', text: 'Comptes rendus et responsables, sans taper pendant la réunion.' },
      lectures: { title: 'Cours', text: 'Écoutez en cours et cherchez dans tout le cours plus tard.' },
      interviews: { title: 'Entretiens', text: 'Intervenants identifiés, citations prêtes à l’emploi. Les échanges sensibles restent chez vous.' },
      subtitles: { title: 'Sous-titres', text: 'Des fichiers SRT minutés pour vos vidéos, compatibles avec tous les éditeurs.' },
    },
  },

  privacySection: {
    eyebrow: 'Confidentialité',
    title: 'Privé par conception, pas par promesse',
    lead: 'Nous ne pouvons ni divulguer, ni vendre, ni utiliser vos enregistrements pour entraîner une IA, car nous ne les recevons jamais.',
    points: [
      { title: 'Aucun serveur pour vos notes', text: 'Audio, transcriptions, résumés et tâches sont stockés uniquement sur votre téléphone.' },
      { title: 'Aucun compte', text: 'Ni inscription ni e-mail. Pro s’achète et se gère dans Google Play.' },
      {
        title: 'Internet seulement pour télécharger',
        text: 'Une connexion sert à télécharger les modèles et à acheter Pro. Ensuite, le mode avion ne pose aucun problème.',
      },
    ],
    siteTitle: 'Ce site aussi',
    siteText: 'Aucun cookie. Les visites sont comptées par une analyse sans cookie hébergée dans l’UE, sans enregistrer votre adresse IP.',
    policyLink: 'Politique de confidentialité',
  },

  compare: {
    eyebrow: 'Comparer',
    title: 'Echo vs services de notes dans le cloud',
    featureColumn: 'Critère',
    otherColumn: 'Services cloud classiques',
    rows: [
      { label: 'Où votre audio est traité', echo: 'Sur votre téléphone', other: 'Sur leurs serveurs' },
      { label: 'Fonctionne sans internet', echo: 'Oui', other: 'Non' },
      { label: 'Compte requis', echo: 'Non', other: 'Oui' },
      { label: 'Tâches et rappels à partir de la voix', echo: 'Oui', other: 'Variable' },
      { label: 'Rejoint pour vous les appels Zoom ou Teams', echo: 'Non', other: 'Souvent' },
    ],
    fit: 'Echo ne convient pas si vous avez besoin d’un bot qui rejoint les appels vidéo, ou de notes que votre équipe modifie ensemble en temps réel.',
  },

  pricing: {
    eyebrow: 'Tarifs',
    title: 'Commencez gratuitement. Passez à Pro quand les notes s’allongent.',
    lead: 'Pro supprime la limite de 2 minutes et ajoute l’export Markdown, SRT et audio.',
    bestValue: 'Meilleur prix',
    plans: {
      free: {
        name: 'Gratuit',
        unit: '',
        sub: 'Pour toujours',
        features: ['Les 2 premières minutes de chaque note', 'Résumé et tâches inclus', 'Notes illimitées'],
      },
      monthly: {
        name: 'Pro mensuel',
        unit: '/ mois',
        sub: 'Résiliable à tout moment',
        features: [
          'Aucune limite de durée',
          'Résumé et tâches à partir de tout l’enregistrement',
          'Imports en durée complète',
          'Export Markdown, SRT et audio',
        ],
      },
      yearly: {
        name: 'Pro annuel',
        unit: '/ an',
        sub: (perMonth: string, savePercent: number) => `${perMonth} par mois · ${savePercent} % d’économie par rapport au mensuel`,
        features: ['Tout ce qui est dans Pro', 'Facturé une fois par an'],
      },
      lifetime: {
        name: 'Pro à vie',
        unit: 'une fois',
        sub: 'Sans renouvellement',
        features: ['Tout ce qui est dans Pro', 'Mises à jour futures incluses'],
      },
    },
    ctaText: 'Commencez gratuitement. Passez à Pro dans l’appli quand il le faut.',
    ctaButton: 'Télécharger gratuitement',
    fine: 'Prix en euros, TVA comprise. Facturation via Google Play, qui peut afficher votre devise locale. Les abonnements se renouvellent jusqu’à leur résiliation dans Google Play.',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Vos questions, nos réponses',
    items: [
      {
        q: 'Que se passe-t-il après les 2 minutes gratuites ?',
        a: 'Tout votre enregistrement est conservé, et la transcription s’arrête à 2:00. Passez à Pro et Echo transcrit le reste de la même note.',
      },
      {
        q: 'Sur quels téléphones fonctionne Echo ?',
        a: `Android ${product.minAndroid} ou plus récent. Les résumés et les tâches demandent environ ${product.notesAiRamGb} Go de RAM. Les téléphones avec ${product.largeModelRamGb} Go ou plus utilisent Whisper Large V3 Turbo, le modèle le plus précis d’Echo ; les autres, un modèle plus léger et plus rapide.`,
      },
      {
        q: 'Quelle est la précision ?',
        a: 'Cela dépend de l’audio : une voix claire près du téléphone donne les meilleurs résultats, les voix qui se chevauchent et le bruit de fond compliquent les choses. La précision est la meilleure dans les langues très répandues.',
      },
      {
        q: 'Dans quelles langues a-t-on résumés et tâches ?',
        a: 'La transcription fonctionne dans environ 100 langues, et résumés et tâches sont créés pour chacune. L’IA des notes standard les rédige en anglais ; le modèle multilingue optionnel les rédige dans la langue de la note.',
      },
      {
        q: 'Echo est-il conforme au RGPD ?',
        a: 'Vos enregistrements et notes sont traités et stockés sur votre appareil, nous ne les détenons donc jamais. La politique de confidentialité détaille le peu de données concernées, comme les achats Google Play.',
      },
      {
        q: 'Quels fichiers puis-je importer ?',
        a: 'Des fichiers audio comme MP3, M4A, AAC, WAV, FLAC, OGG et Opus, ainsi que le son des vidéos MP4 et WebM. Echo classe chacun au jour de son enregistrement, ou à aujourd’hui si vous préférez.',
      },
      {
        q: 'Comment transférer mes notes vers un nouveau téléphone ?',
        a: 'Dans Réglages, choisissez Sauvegarder les notes. Echo enregistre tout dans un seul fichier que vous conservez. Ouvrez-le sur le nouveau téléphone pour restaurer.',
      },
      { q: 'Existe-t-il une version iPhone ?', a: 'Pas encore. Echo est d’abord conçu pour Android.' },
    ],
  },

  closingCta: {
    title: 'Votre prochaine réunion, mise par écrit.',
    sub: 'Touchez enregistrer et posez votre téléphone. Echo vous remet la transcription, un court résumé et les tâches mentionnées, sans que vos mots quittent jamais le téléphone.',
    facts: ['Gratuit à télécharger', 'Sans compte', 'Fonctionne hors ligne'],
  },
};
