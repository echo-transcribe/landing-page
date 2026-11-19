import { product } from '../../config/product';
import type { PagesDict, RelatedId } from './en';

// French (vous-form, matching the app).   is replaced by U+00A0 (no-break space) at write time.
export const frPages: PagesDict = {
  common: {
    faqTitle: 'Questions',
    faqEyebrow: 'FAQ',
    relatedTitle: 'À lire ensuite',
    checkedOn: (date: string) => `Vérifié le ${date}`,
    sourcesTitle: 'Sources',
    tryFree: 'Essayer Echo gratuitement',
  },

  help: {
    title: 'Centre d’aide Echo — enregistrement, transcriptions et Pro',
    heading: 'Centre d’aide',
    description:
      'Réponses sur Echo : téléphones compatibles, enregistrement et import, transcriptions, résumés et tâches, achat de Pro, et où se trouvent vos données.',
    intro: 'De courtes réponses sur le fonctionnement d’Echo. Si la vôtre manque, écrivez-nous et nous l’ajouterons.',
    groups: [
      {
        id: 'getting-started',
        title: 'Pour commencer',
        items: [
          {
            q: 'Sur quels téléphones fonctionne Echo ?',
            a: `Android ${product.minAndroid} ou plus récent, avec un processeur ARM 64 bits. Les résumés et les tâches demandent environ ${product.notesAiRamGb} Go de RAM, et les téléphones avec ${product.largeModelRamGb} Go ou plus utilisent Whisper Large V3 Turbo. La page des téléphones compatibles donne tous les détails.`,
          },
          {
            q: 'Qu’est-ce qu’Echo télécharge, et quel espace faut-il ?',
            a: 'Le modèle vocal ne se télécharge qu’une fois : Whisper Large V3 Turbo pèse 574 Mo, Whisper Small 190 Mo. La détection des intervenants ajoute environ 42 Mo, et l’IA des notes pour les résumés et les tâches environ 1 Go. Les enregistrements occupent environ 14 Mo par heure.',
          },
          {
            q: 'Faut-il une connexion internet ?',
            a: 'Seulement pour télécharger les modèles, acheter Pro et vérifier que vous avez Pro. L’enregistrement, la transcription, les résumés et les tâches fonctionnent tous sur le téléphone : le mode avion ne pose ensuite aucun problème.',
          },
          {
            q: 'Faut-il un compte ?',
            a: 'Non. Il n’y a aucune inscription. Pro s’achète et se gère avec votre compte Google Play.',
          },
        ],
      },
      {
        id: 'recording',
        title: 'Enregistrement et import',
        items: [
          {
            q: 'L’enregistrement continue-t-il si je quitte l’appli ou éteins l’écran ?',
            a: 'Oui. Echo enregistre en arrière-plan, avec une notification qui permet de mettre en pause ou d’arrêter. Un appel téléphonique met l’enregistrement en pause, et il reprend à la fin de l’appel, sauf si vous l’aviez vous-même mis en pause.',
          },
          {
            q: 'Quels fichiers puis-je importer ?',
            a: `Des fichiers audio comme MP3, M4A, AAC, WAV, FLAC, OGG et Opus, ainsi que le son des vidéos MP4 et WebM. Partagez un fichier vers Echo ou utilisez le bouton d’import dans Notes. Vous choisissez le titre, et si la note appartient au jour de son enregistrement ou à aujourd’hui.`,
          },
          {
            q: 'Comment définir la langue ?',
            a: 'Echo détecte la langue tout seul. Pour en imposer une, choisissez-la dans Réglages. Pour un fichier importé ou une seule note, vous pouvez choisir une autre langue sans toucher aux Réglages, et vous pouvez retranscrire une note dans une autre langue.',
          },
        ],
      },
      {
        id: 'transcripts',
        title: 'Transcriptions',
        items: [
          {
            q: 'Quelle est la précision ?',
            a: 'Cela dépend de l’audio : une voix claire près du téléphone donne les meilleurs résultats, les voix qui se chevauchent et le bruit de fond compliquent les choses. La précision est la meilleure dans les langues très répandues. Ajoutez des noms et des termes spécifiques dans Réglages, Dictionnaire, et Whisper les écrira comme vous.',
          },
          {
            q: 'Combien de temps prend une transcription ?',
            a: 'Si votre téléphone a son propre moteur de reconnaissance hors ligne pour la langue, le texte est prêt dès que vous arrêtez. Whisper travaille après l’enregistrement : Large V3 Turbo peut prendre autant de temps que l’enregistrement, voire plus, même sur un haut de gamme récent, et Whisper Small est environ trois fois plus rapide.',
          },
          {
            q: 'Pourquoi vois-je du texte pendant l’enregistrement, mais pas toujours ?',
            a: 'Le texte en direct vient du moteur de reconnaissance hors ligne de votre téléphone. Il faut Android 13 ou plus récent et la langue installée sur le téléphone, ce que les Réglages peuvent télécharger pour vous. Sans cela, le texte apparaît après l’arrêt.',
          },
          {
            q: 'Puis-je corriger qui a dit quoi ?',
            a: 'Oui. Touchez un intervenant pour le nommer ou déplacer ses lignes vers un autre intervenant, ou sélectionnez quelques lignes et attribuez-les seules. Les noms déjà utilisés vous sont proposés.',
          },
          {
            q: 'Puis-je chercher dans mes notes ?',
            a: 'La recherche parcourt chaque transcription, titre et résumé. Elle ignore la casse et les accents :  « cesnik »  trouve  « česnik » .',
          },
        ],
      },
      {
        id: 'summaries-tasks',
        title: 'Résumés et tâches',
        items: [
          {
            q: 'Pourquoi n’y a-t-il ni résumés ni tâches sur mon téléphone ?',
            a: `Ils demandent environ ${product.notesAiRamGb} Go de RAM et le téléchargement de l’IA des notes, environ 1 Go. Sur les téléphones avec moins de mémoire, Echo transcrit quand même, avec les intervenants.`,
          },
          {
            q: 'Dans quelle langue sont rédigés les résumés et les tâches ?',
            a: 'L’IA des notes standard les rédige en anglais pour les notes dans d’autres langues, et garde les citations dans votre langue. Le modèle multilingue optionnel, Gemma 4 E2B (2,6 Go), les rédige dans la langue de la note.',
          },
          {
            q: 'Mon rappel est arrivé en retard. Pourquoi ?',
            a: 'Android ne remet les rappels à l’heure que si Echo est autorisé à programmer des alarmes exactes. Réglages, Rappels de tâches, ouvre les réglages du système pour cela et pour les notifications. Sans cette autorisation, Android peut retarder les rappels.',
          },
          {
            q: 'Echo a manqué une tâche, ou en a inventé une. Que faire ?',
            a: 'Les résumés et les tâches viennent d’un petit modèle d’IA sur votre téléphone, qui peut se tromper. Ajoutez, modifiez ou supprimez les tâches vous-même. Chaque tâche renvoie à la ligne d’où elle vient : la vérifier prend un simple appui.',
          },
        ],
      },
      {
        id: 'pro',
        title: 'Pro et achats',
        items: [
          {
            q: 'Que se passe-t-il après les 2 minutes gratuites ?',
            a: 'Tout votre enregistrement est conservé, et la transcription s’arrête à 2:00. Passez à Pro et Echo transcrit le reste de la même note.',
          },
          {
            q: 'Qu’ajoute Pro ?',
            a: 'Aucune limite de durée pour les enregistrements et les imports, des résumés et des tâches à partir de tout l’enregistrement, et l’export en Markdown, sous-titres SRT et audio d’origine. L’export en texte brut est gratuit.',
          },
          {
            q: 'J’ai changé de téléphone. Comment retrouver Pro ?',
            a: 'Connectez-vous à Google Play avec le même compte, ouvrez Echo et choisissez Restaurer les achats dans Réglages.',
          },
          {
            q: 'Comment résilier ou obtenir un remboursement ?',
            a: 'Les abonnements se gèrent dans Google Play, sous Paiements et abonnements. Les remboursements suivent la politique de remboursement de Google Play.',
          },
        ],
      },
      {
        id: 'privacy',
        title: 'Confidentialité et vos données',
        items: [
          {
            q: 'Où sont stockés mes enregistrements ?',
            a: 'Uniquement sur votre téléphone. Nous n’exploitons aucun serveur pour vos notes, nous ne recevons donc jamais vos audios, transcriptions, résumés ni tâches.',
          },
          {
            q: 'Comment transférer mes notes vers un nouveau téléphone ?',
            a: 'Dans Réglages, choisissez Sauvegarder les notes. Echo enregistre tout dans un seul fichier que vous conservez. Sur le nouveau téléphone, choisissez Restaurer une sauvegarde.',
          },
          {
            q: 'Comment tout supprimer ?',
            a: 'Les Réglages proposent Supprimer toutes les données. Désinstaller Echo supprime aussi ses notes du téléphone : faites d’abord une sauvegarde si vous voulez les garder.',
          },
        ],
      },
    ],
    contactTitle: 'Toujours bloqué ?',
    contactText: (email: string) =>
      `Écrivez à ${email}. Indiquez-nous le modèle de votre téléphone et ce que vous avez essayé ; nous répondons en anglais ou en slovène.`,
  },

  useCases: {
    meetings: {
      title: 'Transcription de réunions hors ligne sur Android — Echo',
      description:
        'Enregistrez une réunion sur votre téléphone Android : transcription, intervenants, résumé et tâches avec rappels. Tout se passe sur le téléphone, sans bot ni envoi.',
      eyebrow: 'Réunions',
      heading: 'Des comptes rendus qui s’écrivent tout seuls, sur votre téléphone',
      lead: 'Posez le téléphone sur la table et parlez. Echo garde la transcription, qui a dit quoi, un court résumé et les tâches décidées.',
      problemTitle: 'Rédiger le compte rendu, c’est manquer la réunion',
      problem:
        'Soit vous écoutez, soit vous écrivez. Les assistants cloud règlent cela en rejoignant votre appel et en envoyant tout sur leurs serveurs, ce que beaucoup d’équipes et de clients n’acceptent pas. Echo travaille sur le téléphone que vous avez en poche : la conversation ne quitte jamais la pièce.',
      phone: {
        label: 'Echo affichant une note de réunion avec un résumé, deux tâches et la transcription',
        title: 'Lancement du projet',
        meta: 'Aujourd’hui, 9 h 42 · 18 min',
        tag: 'Travail',
        summaryLabel: 'Résumé',
        summaryText: 'L’équipe s’est accordée sur le périmètre du lancement et a réparti le travail sur le budget. Alex relit le brouillon avant vendredi.',
        tasksLabel: 'Tâches · 2',
        task1: 'Envoyer le brouillon du budget à Alex',
        task1Reminder: 'Demain, 10 h 00',
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
      featuresTitle: 'Ce que vous obtenez après la réunion',
      features: [
        {
          title: 'Qui a dit quoi',
          text: 'Les intervenants sont identifiés automatiquement. Nommez-les une fois, et les noms se retrouvent dans la note et dans vos exports.',
        },
        {
          title: 'Des tâches avec responsables et heures',
          text: 'Echo liste ce qui a été décidé, relie chaque tâche à la ligne d’où elle vient, et vous le rappelle quand une heure a été mentionnée.',
        },
        {
          title: 'Un compte rendu à partager',
          text: 'Partagez la transcription en texte gratuitement, ou en Markdown avec le résumé et les tâches avec Pro.',
        },
      ],
      faq: [
        {
          q: 'Echo peut-il rejoindre les appels Zoom, Teams ou Meet ?',
          a: 'Non. Echo enregistre avec le micro du téléphone. Pour un appel vidéo, posez le téléphone près de votre haut-parleur, ou importez ensuite l’enregistrement de l’appel.',
        },
        {
          q: 'Quelle peut être la durée d’une réunion ?',
          a: 'L’enregistrement n’a pas de limite de durée. La version gratuite transcrit les 2 premières minutes de chaque note ; Pro transcrit toute la réunion.',
        },
        {
          q: 'Dois-je prévenir que j’enregistre ?',
          a: 'Oui. Demandez à tout le monde avant d’enregistrer. Les règles varient selon les pays, et enregistrer des personnes sans leur consentement est illégal dans beaucoup d’entre eux.',
        },
      ],
      related: ['lectures', 'interviews'] as RelatedId[],
    },
    lectures: {
      title: 'Transcrire des cours hors ligne sur Android — Echo',
      description:
        'Enregistrez un cours et cherchez chaque mot ensuite. Echo transcrit sur votre téléphone Android, avec résumés et tâches pour lectures et échéances, sans internet.',
      eyebrow: 'Cours',
      heading: 'Écoutez en cours. Cherchez dans tout le cours plus tard.',
      lead: 'Enregistrez le cours, puis retrouvez la minute exacte où le professeur l’a expliqué. Echo transcrit sur votre téléphone, même sans Wi-Fi dans l’amphi.',
      problemTitle: 'Les notes ne captent que la moitié',
      problem:
        'Pendant que vous notez un point, le suivant vous échappe. Un enregistrement seul n’aide pas beaucoup non plus : personne ne parcourt 90 minutes d’audio pour trouver une définition. Une transcription dans laquelle on peut chercher règle les deux problèmes.',
      phone: {
        label: 'Echo affichant une note de cours avec un résumé, une tâche de lecture et la transcription',
        title: 'Microéconomie, semaine 6',
        meta: 'Mar., 10 h 15 · 84 min',
        tag: 'Université',
        summaryLabel: 'Résumé',
        summaryText: 'L’élasticité-prix de la demande et son calcul, avec l’exemple du tarif de taxi. Les questions d’examen suivent la série d’exercices.',
        tasksLabel: 'Tâches · 2',
        task1: 'Lire le chapitre 5 avant le séminaire',
        task1Reminder: 'Lundi, 9 h 00',
        task2: 'Rendre la série d’exercices 3',
        lines: [
          {
            name: 'Professeur',
            time: '41:02 – 41:20',
            before: 'Donc l’élasticité, c’est la variation en pourcentage de la quantité sur la variation en pourcentage du prix. ',
            mark: 'Lisez le chapitre cinq avant lundi',
            after: ', nous commencerons le séminaire avec.',
          },
          {
            name: 'Étudiant',
            time: '41:21 – 41:27',
            before: 'C’est aussi ',
            mark: 'dans la série d’exercices',
            after: ' ?',
          },
        ],
      },
      featuresTitle: 'Pensé pour les longs enregistrements',
      features: [
        {
          title: 'Cherchez chaque mot',
          text: 'La recherche parcourt toutes vos transcriptions à la fois et ignore la casse et les accents. Touchez une ligne pour l’entendre.',
        },
        {
          title: 'Lectures et échéances en tâches',
          text: 'Quand le professeur dit  « lisez le chapitre cinq avant lundi » , Echo en fait une tâche avec un rappel.',
        },
        {
          title: 'Les termes bien orthographiés',
          text: 'Ajoutez noms de cours et termes au Dictionnaire dans Réglages, et Whisper les écrit comme vous.',
        },
      ],
      faq: [
        {
          q: 'Puis-je enregistrer un cours de 90 minutes ?',
          a: 'Oui. L’enregistrement n’a pas de limite de durée et continue écran éteint. Un cours de 90 minutes occupe environ 21 Mo. La version gratuite transcrit les 2 premières minutes de chaque note ; Pro transcrit tout le cours.',
        },
        {
          q: 'Cela marchera-t-il dans un grand amphi ?',
          a: 'Cela marche mieux près de l’orateur. Du fond d’un grand amphi, avec un micro peu sensible, attendez-vous à plus d’erreurs ; asseyez-vous plus près ou posez le téléphone sur le bureau du premier rang.',
        },
        {
          q: 'Dans quelles langues les cours peuvent-ils être ?',
          a: `Whisper transcrit environ 100 langues et détecte la langue tout seul. La page des langues les liste.`,
        },
      ],
      related: ['meetings', 'interviews'] as RelatedId[],
    },
    interviews: {
      title: 'Transcription d’entretiens privée pour Android — Echo',
      description:
        'Transcrivez vos entretiens sur Android avec intervenants identifiés, prêts à citer. Rien n’est envoyé : les échanges sensibles restent chez vous.',
      eyebrow: 'Entretiens',
      heading: 'Des transcriptions d’entretiens par intervenant, et rien d’envoyé',
      lead: 'Enregistrez ou importez l’entretien et obtenez une transcription séparée par intervenant, prête à citer. L’audio et le texte restent sur votre téléphone.',
      problemTitle: 'Les échanges sensibles n’ont rien à faire sur le serveur d’un autre',
      problem:
        'Sources, patients, participants à une étude et candidats se confient à vous, pas à une société de transcription. La plupart des services de transcription envoient l’audio pour le traiter. Echo ne l’envoie nulle part : vous pouvez le promettre, et le penser.',
      phone: {
        label: 'Echo affichant une note d’entretien avec deux intervenants, un résumé et une tâche de suivi',
        title: 'Entretien avec l’infirmière-cheffe',
        meta: 'Lun., 14 h 30 · 47 min',
        tag: 'Recherche',
        summaryLabel: 'Résumé',
        summaryText: 'Les équipes de nuit sont passées de trois infirmières à deux en mars. Elle partagera le planning si son nom n’est pas cité.',
        tasksLabel: 'Tâches · 2',
        task1: 'Envoyer à Ana les citations à vérifier',
        task1Reminder: 'Vendredi, 9 h 00',
        task2: 'Demander le planning de mars',
        lines: [
          {
            name: 'Ana',
            time: '12:40 – 12:58',
            before: 'Depuis mars, nous sommes deux de nuit au lieu de trois. ',
            mark: 'Envoyez-moi les citations d’ici vendredi',
            after: ' et je les vérifierai.',
          },
          {
            name: 'Vous',
            time: '12:59 – 13:04',
            before: 'Bien sûr. Et ',
            mark: 'pourrais-je voir le planning de mars',
            after: ' ?',
          },
        ],
      },
      featuresTitle: 'Ce qui le rend citable',
      features: [
        {
          title: 'Des intervenants nommés',
          text: 'Echo sépare les voix. Nommez chaque intervenant une fois, et corrigez toute ligne attribuée à la mauvaise personne.',
        },
        {
          title: 'Chaque ligne minutée',
          text: 'Chaque ligne garde son moment dans l’enregistrement. Touchez-la pour entendre les mots exacts avant de les citer.',
        },
        {
          title: 'Reste chez vous',
          text: 'Ni compte ni envoi. Sauvegardez dans un fichier que vous gardez, et supprimez la note quand le projet se termine.',
        },
      ],
      faq: [
        {
          q: 'Puis-je importer un entretien enregistré ailleurs ?',
          a: `Oui. Echo importe MP3, M4A, AAC, WAV, FLAC, OGG et Opus, ainsi que le son des vidéos MP4 et WebM. Partagez le fichier vers Echo ou utilisez le bouton d’import dans Notes.`,
        },
        {
          q: 'Les étiquettes d’intervenants sont-elles exactes ?',
          a: 'Bonnes pour un entretien clair à deux personnes, moins fiables avec des voix qui se chevauchent ou de nombreuses voix. Les lignes proches d’un changement d’intervenant sont les plus susceptibles d’être fausses ; vous pouvez les déplacer d’un appui.',
        },
        {
          q: 'Puis-je exporter la transcription ?',
          a: 'L’export en texte brut est gratuit. Avec Pro, exportez en Markdown, en sous-titres SRT minutés, ou en audio d’origine.',
        },
      ],
      related: ['meetings', 'lectures'] as RelatedId[],
    },
  },


  languages: {
    title: 'Langues transcrites par Echo — reconnaissance vocale hors ligne en 100 langues',
    heading: 'Langues prises en charge',
    description:
      'Echo transcrit 100 langues hors ligne avec Whisper, de l’anglais et l’allemand au slovène et au swahili. Voyez lesquelles ont le texte en direct, les résumés et les tâches.',
    intro:
      'Echo transcrit avec Whisper, qui connaît 100 langues et détecte celle que vous parlez. Le résultat varie : les langues très répandues marchent le mieux, et celles qui ont peu de données d’entraînement font plus d’erreurs.',
    sections: {
      transcription: {
        title: 'Transcription',
        text: 'Chaque langue ci-dessous peut être transcrite hors ligne, depuis des enregistrements et des fichiers importés. Le cantonais demande Whisper Large V3 Turbo, qu’Echo utilise sur les téléphones avec 8 Go de RAM ou plus.',
      },
      live: {
        title: 'Texte en direct et transcriptions instantanées',
        text: 'Le texte pendant l’enregistrement, et une transcription dès l’arrêt, viennent du moteur de reconnaissance hors ligne de votre téléphone. Les langues disponibles dépendent de votre téléphone ; les Réglages indiquent si la vôtre est installée et peuvent la télécharger. Les autres langues sont transcrites par Whisper après l’arrêt.',
      },
      notes: {
        title: 'Résumés et tâches',
        text: 'Créés pour chaque langue de la liste. L’IA des notes standard les rédige en anglais pour les notes dans d’autres langues, et garde les citations d’origine. Le modèle multilingue optionnel les rédige dans la langue de la note.',
      },
      app: {
        title: 'L’appli elle-même',
        text: (list: string) => `Les menus et les réglages d’Echo sont disponibles en ${list}.`,
      },
    },
    listTitle: (count: number) => `Les ${count} langues`,
  },

  phones: {
    title: 'Prérequis d’Echo — téléphones Android et modèles compatibles',
    heading: 'Téléphones compatibles',
    description: `Echo fonctionne sur Android ${product.minAndroid} ou plus récent. Voyez quel modèle vocal votre téléphone utilise, la RAM nécessaire aux résumés et aux tâches, et l’espace pris par les modèles.`,
    intro: `Echo demande Android ${product.minAndroid} ou plus récent et un processeur ARM 64 bits, ce que presque tous les téléphones Android vendus ces dernières années ont. La mémoire de votre téléphone détermine les fonctions et les modèles que vous obtenez.`,
    tiersTitle: 'Ce que votre téléphone obtient',
    tiersHead: { ram: 'RAM du téléphone', speech: 'Modèle vocal', notes: 'Résumés et tâches' },
    tiers: [
      { ram: 'Moins de 4 Go', speech: 'Whisper Small, ou Base', notes: 'Non disponible' },
      { ram: '4 à 6 Go', speech: 'Whisper Small, ou Base', notes: 'Oui' },
      { ram: '8 Go ou plus', speech: 'Whisper Large V3 Turbo, ou Medium, Small ou Base', notes: 'Oui' },
    ],
    tiersNote:
      'Echo choisit le premier modèle listé ; vous pouvez le changer dans Réglages, Modèle vocal. Les téléphones indiquent un peu moins de mémoire que sur la boîte : un téléphone de 8 Go compte donc pour 8 Go.',
    recognizerTitle: 'Le moteur de reconnaissance de votre téléphone',
    recognizer:
      'Sur Android 13 et plus récent, beaucoup de téléphones ont un moteur de reconnaissance vocale hors ligne intégré. Quand il connaît votre langue, Echo l’utilise pour le texte en direct et une transcription instantanée, et Whisper pour les imports ou quand vous le demandez. Les téléphones sans moteur intégré utilisent Whisper pour tout.',
    storageTitle: 'Stockage',
    storageHead: { item: 'Téléchargement', size: 'Taille' },
    storage: [
      { item: 'Whisper Large V3 Turbo', size: '574 Mo' },
      { item: 'Whisper Medium', size: '539 Mo' },
      { item: 'Whisper Small', size: '190 Mo' },
      { item: 'Whisper Base', size: '60 Mo' },
      { item: 'Détection des intervenants', size: '42 Mo' },
      { item: 'IA des notes (Qwen3 1.7B)', size: '977 Mo' },
      { item: 'IA des notes multilingue (Gemma 4 E2B), optionnelle', size: '2,6 Go' },
      { item: 'Enregistrements', size: 'Environ 14 Mo par heure' },
    ],
    storageNote: 'Seul le modèle Whisper utilisé reste sur le téléphone. En changer télécharge le nouveau et supprime l’ancien.',
    speedTitle: 'Vitesse',
    speed:
      'Sur un Samsung Galaxy S24, Whisper Large V3 Turbo met de 33 à 50 secondes pour 30 secondes d’audio : une transcription prend donc à peu près autant de temps que l’enregistrement, voire plus. Whisper Small met environ 11 secondes. Les téléphones ralentissent quand ils chauffent, par exemple sur un chargeur sans fil.',
    testedTitle: 'Téléphones testés',
    tested: (email: string) =>
      `Nous testons Echo sur un Samsung Galaxy S24. S’il ne fonctionne pas bien sur votre téléphone, écrivez à ${email} avec le nom du modèle, et nous nous pencherons dessus.`,
  },
};
