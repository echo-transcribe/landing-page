import type { Dict } from './en';
import { product } from '../config/product';

export const es: Dict = {
  common: {
    skipToContent: 'Saltar al contenido',
    downloadNow: 'Descargar ahora',
    playBadgeAlt: 'Disponible en Google Play',
    logoLabel: 'Inicio de Echo',
    brandTagline: 'Voz a texto sin conexión para Android',
    ogImageAlt: 'Echo: dilo una vez y Echo lo escribe.',
    switchToDark: 'Cambiar a modo oscuro',
    switchToLight: 'Cambiar a modo claro',
  },

  meta: {
    home: {
      title: 'Echo — voz a texto sin conexión para Android',
      description:
        'Reuniones, clases y notas de voz se convierten en texto, resúmenes y tareas en tu teléfono. No se sube nada y funciona sin conexión.',
      appDescription: 'Voz a texto sin conexión para Android. Transcripciones, resúmenes y tareas, hechos en tu teléfono.',
    },
    privacy: {
      title: 'Política de privacidad — Echo',
      description:
        'Cómo tratan los datos personales Echo y este sitio web. Tus grabaciones y notas se quedan en tu teléfono; este sitio no usa cookies.',
    },
    terms: {
      title: 'Condiciones de uso — Echo',
      description: 'Las condiciones para usar Echo y comprar Echo Pro a través de Google Play.',
    },
    legalNotice: {
      title: 'Aviso legal — Echo',
      description: 'Datos del editor de Echo, la app de voz a texto sin conexión para Android.',
    },
    licenses: {
      title: 'Licencias de código abierto — Echo',
      description: 'Los modelos y bibliotecas de código abierto en los que se basa Echo, con sus licencias.',
    },
    notFound: {
      title: 'Página no encontrada — Echo',
      description: 'Esta página no existe.',
    },
  },

  header: {
    navLabel: 'Principal',
    openMenu: 'Abrir menú',
    closeMenu: 'Cerrar menú',
    nav: {
      features: 'Funciones',
      useCases: 'Usos',
      privacy: 'Privacidad',
      pricing: 'Precios',
      faq: 'FAQ',
    },
  },

  footer: {
    copyright: (year: number) => `© ${year} Koman`,
    noCookies: 'Sin cookies en este sitio',
    groups: {
      product: 'Producto',
      useCases: 'Usos',
      compare: 'Comparar',
      resources: 'Recursos',
      legal: 'Legal',
    },
    links: {
      features: 'Funciones',
      pricing: 'Precios',
      changelog: 'Novedades',
      phones: 'Teléfonos compatibles',
      languages: 'Idiomas',
      meetings: 'Reuniones',
      lectures: 'Clases',
      interviews: 'Entrevistas',
      voiceNotes: 'Notas de voz',
      subtitles: 'Subtítulos',
      vsLoronote: 'Echo vs LoroNote',
      vsOtter: 'Echo vs Otter',
      vsGoogleRecorder: 'Echo vs Google Recorder',
      blog: 'Blog',
      help: 'Centro de ayuda',
      contact: 'Contacto',
      privacy: 'Política de privacidad',
      terms: 'Condiciones de uso',
      legalNotice: 'Aviso legal',
      licenses: 'Licencias de código abierto',
    },
  },

  languageSwitcher: {
    label: 'Idioma',
  },

  textPage: {
    lastUpdated: 'Última actualización',
    draftNotice: 'Borrador. Hay que rellenar cada valor entre [corchetes] y que alguien cualificado en derecho de la UE revise el texto antes del lanzamiento.', // launch-check: ignore
    translationNotice: 'Esta traducción es solo para tu comodidad. Si difiere de la versión en inglés, prevalece la versión en inglés.',
    translationNoticeLink: 'Leer la versión en inglés',
  },

  notFound: {
    heading: 'Aquí no hay nada grabado.',
    lead: 'La página que buscas no existe o se ha movido.',
    home: 'Volver al inicio',
  },

  hero: {
    pill: 'Voz a texto sin conexión para Android',
    headingLine1: 'Dilo una vez.',
    headingLine2: 'Echo lo escribe.',
    lead: 'Reuniones, clases y notas de voz se convierten en texto, resúmenes y tareas en tu teléfono. No se sube nada y, tras descargar el modelo una sola vez, funciona sin internet.',
    qrLabel: 'Código QR que lleva a Echo en Google Play',
    qrNote: 'O escanéalo con tu teléfono Android',
    note: 'Descarga gratis · Sin cuenta',
  },

  phone: {
    label: 'Echo mostrando la transcripción de una reunión con un resumen y una tarea',
    title: 'Inicio del proyecto',
    meta: 'Hoy, 9:42 · 18 min',
    tag: 'Trabajo',
    summaryLabel: 'Resumen',
    summaryText: 'El equipo acordó el alcance del lanzamiento y repartió el trabajo del presupuesto. Alex revisa el borrador antes del viernes.',
    tasksLabel: 'Tareas · 2',
    task1: 'Enviar a Alex el borrador del presupuesto',
    task1Reminder: 'Mañana, 10:00',
    task2: 'Reservar la sala para el jueves',
    lines: [
      {
        name: 'Maja',
        time: '2:14 – 2:31',
        before: 'Vale, pues ',
        mark: 'mañana a las diez le envío a Alex el borrador del presupuesto',
        after: ', y así puede revisarlo antes del viernes.',
      },
      {
        name: 'Alex',
        time: '2:32 – 2:40',
        before: 'Me parece bien. Alguien debería ',
        mark: 'reservar la sala para el jueves',
        after: '.',
      },
    ],
  },

  features: {
    eyebrow: 'Funciones',
    title: 'Todo lo que dijiste, listo para usar',
    items: [
      {
        title: 'Preciso, en tu teléfono',
        text: 'Whisper Large V3 Turbo en teléfonos con 8 GB de RAM, un modelo Whisper más pequeño en el resto, o el reconocedor sin conexión de tu teléfono para resultados al instante.',
      },
      {
        title: 'Sabe quién habló',
        text: 'Los hablantes se etiquetan solos. Ponle nombre a alguien una vez y ese nombre se mantiene en la nota y en tus exportaciones.',
      },
      {
        title: 'Un resumen de cada nota',
        text: 'Un resumen breve llega justo después de la transcripción. Requiere un teléfono con unos 4 GB de RAM.',
      },
      {
        title: 'Unos 100 idiomas',
        text: 'Detección automática, incluidos inglés, alemán, esloveno, croata e italiano.',
      },
      {
        title: 'Calendario y carpetas',
        text: 'Consulta notas y tareas por día y ordénalas en carpetas como Trabajo, Personal o Ideas.',
      },
      {
        title: 'Importa y comparte',
        text: 'Trae las grabaciones que ya tienes. Comparte como texto gratis, o como Markdown, subtítulos SRT y el audio original con Pro.',
      },
    ],
  },

  tasksCallout: {
    eyebrow: 'Solo en Echo',
    title: 'Dilo en voz alta. Se convierte en tarea.',
    lead: 'Echo saca de tu transcripción lo que hay que hacer. Si mencionaste una hora, te avisa entonces.',
    points: ['Las tareas de hoy en la pantalla de inicio, el resto en el calendario', 'Toca una tarea para ir al momento en que se dijo'],
    speaker: 'Tú',
    time: '0:04 – 0:11',
    saidBefore: 'Creo que ',
    saidMark: 'mañana a las 10 tengo que ir al dentista',
    saidAfter: ', y luego recojo el paquete.',
    taskTitle: 'Cita con el dentista',
    reminder: 'Mañana, 10:00 · recordatorio activado',
    chip: 'Nueva tarea',
  },

  howItWorks: {
    eyebrow: 'Cómo funciona',
    title: 'Tres pasos, nada que configurar',
    steps: [
      { title: 'Graba o importa', text: 'Toca el micrófono o abre un archivo de audio que ya tengas.' },
      { title: 'Echo hace el trabajo', text: 'La transcripción se va escribiendo línea a línea. Después llegan los hablantes, el resumen y las tareas.' },
      { title: 'Lee, escucha, comparte', text: 'Toca cualquier línea para oírla. Tus ediciones nunca sobrescriben el original.' },
    ],
  },

  useCases: {
    eyebrow: 'Usos',
    title: 'Hecho para cómo grabas',
    learnMore: 'Saber más',
    items: {
      meetings: { title: 'Reuniones', text: 'Actas y responsables, sin teclear durante la reunión.' },
      lectures: { title: 'Clases', text: 'Escucha en clase y busca en toda la clase después.' },
      interviews: { title: 'Entrevistas', text: 'Hablantes etiquetados, listos para citar. Las conversaciones delicadas se quedan contigo.' },
      subtitles: { title: 'Subtítulos', text: 'Archivos SRT con tiempos para tus vídeos, listos para cualquier editor.' },
    },
  },

  privacySection: {
    eyebrow: 'Privacidad',
    title: 'Privado por diseño, no por promesa',
    lead: 'No podemos filtrar, vender ni entrenar con tus grabaciones, porque nunca las recibimos.',
    points: [
      { title: 'Sin servidores para tus notas', text: 'El audio, las transcripciones, los resúmenes y las tareas se guardan solo en tu teléfono.' },
      { title: 'Sin cuenta', text: 'Sin registro y sin correo. Pro se compra y se gestiona en Google Play.' },
      {
        title: 'Internet solo para descargar',
        text: 'Necesitas conexión para descargar los modelos y comprar Pro. Después, el modo avión no es problema.',
      },
    ],
    siteTitle: 'Este sitio web también',
    siteText: 'Sin cookies. Las visitas se cuentan con analítica sin cookies alojada en la UE, sin guardar tu dirección IP.',
    policyLink: 'Política de privacidad',
  },

  compare: {
    eyebrow: 'Comparar',
    title: 'Echo frente a los asistentes en la nube',
    featureColumn: 'Característica',
    otherColumn: 'Servicios en la nube habituales',
    rows: [
      { label: 'Dónde se procesa tu audio', echo: 'En tu teléfono', other: 'En sus servidores' },
      { label: 'Funciona sin internet', echo: 'Sí', other: 'No' },
      { label: 'Requiere cuenta', echo: 'No', other: 'Sí' },
      { label: 'Tareas y recordatorios a partir de la voz', echo: 'Sí', other: 'Depende' },
      { label: 'Se une por ti a llamadas de Zoom o Teams', echo: 'No', other: 'A menudo' },
    ],
    fit: 'Echo no es lo tuyo si necesitas un bot que entre en videollamadas, o notas que tu equipo edite junto en tiempo real.',
  },

  pricing: {
    eyebrow: 'Precios',
    title: 'Empieza gratis. Pasa a Pro cuando tus notas se alarguen.',
    lead: 'Pro quita el límite de 2 minutos y añade exportación a Markdown, SRT y audio.',
    bestValue: 'Mejor precio',
    plans: {
      free: {
        name: 'Gratis',
        unit: '',
        sub: 'Para siempre',
        features: ['Los primeros 2 minutos de cada nota', 'Resumen y tareas incluidos', 'Notas ilimitadas'],
      },
      monthly: {
        name: 'Pro mensual',
        unit: '/ mes',
        sub: 'Cancela cuando quieras',
        features: [
          'Sin límite de tiempo',
          'Resumen y tareas de toda la grabación',
          'Importaciones completas',
          'Exportación a Markdown, SRT y audio',
        ],
      },
      yearly: {
        name: 'Pro anual',
        unit: '/ año',
        sub: (perMonth: string, savePercent: number) => `${perMonth} al mes · ahorra un ${savePercent}% frente al plan mensual`,
        features: ['Todo lo de Pro', 'Se cobra una vez al año'],
      },
      lifetime: {
        name: 'Pro de por vida',
        unit: 'único',
        sub: 'Sin renovaciones',
        features: ['Todo lo de Pro', 'Actualizaciones futuras incluidas'],
      },
    },
    ctaText: 'Empieza gratis. Mejora dentro de la app cuando lo necesites.',
    ctaButton: 'Descargar gratis',
    fine: 'Precios en euros, IVA incluido. Se cobra a través de Google Play, que puede mostrar tu moneda local. Las suscripciones se renuevan hasta que las canceles en Google Play.',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Preguntas y respuestas',
    items: [
      {
        q: '¿Qué pasa después de los 2 minutos gratis?',
        a: 'Se guarda toda tu grabación y la transcripción se detiene en 2:00. Pasa a Pro y Echo transcribe el resto de esa misma nota.',
      },
      {
        q: '¿En qué teléfonos funciona Echo?',
        a: `Android ${product.minAndroid} o posterior. Los resúmenes y las tareas necesitan unos ${product.notesAiRamGb} GB de RAM. Los teléfonos con ${product.largeModelRamGb} GB o más usan Whisper Large V3 Turbo, el modelo más preciso de Echo; el resto, uno más pequeño y rápido.`,
      },
      {
        q: '¿Qué precisión tiene?',
        a: 'Depende del audio: una sola voz clara y cerca del teléfono funciona mejor; las voces superpuestas y el ruido de fondo lo dificultan. La precisión es mayor en los idiomas más hablados.',
      },
      {
        q: '¿Qué idiomas tienen resúmenes y tareas?',
        a: 'La transcripción funciona en unos 100 idiomas, y los resúmenes y las tareas se generan para todos ellos. El Notes AI estándar los escribe en inglés; el modelo multilingüe opcional los escribe en el idioma de la nota.',
      },
      {
        q: '¿Echo cumple el RGPD?',
        a: 'Tus grabaciones y notas se procesan y guardan en tu dispositivo, así que nunca las tenemos. La política de privacidad detalla los pocos datos implicados, como las compras en Google Play.',
      },
      {
        q: '¿Qué archivos puedo importar?',
        a: 'Archivos de audio como MP3, M4A, AAC, WAV, FLAC, OGG y Opus, además del audio de vídeos MP4 y WebM. Echo guarda cada uno en el día en que se grabó, o en hoy si lo prefieres.',
      },
      {
        q: '¿Cómo paso mis notas a un teléfono nuevo?',
        a: 'En Ajustes, elige Copia de seguridad. Echo guarda todo en un solo archivo que te quedas tú. Ábrelo en el teléfono nuevo para restaurar.',
      },
      { q: '¿Hay versión para iPhone?', a: 'Todavía no. Echo está pensado primero para Android.' },
    ],
  },

  closingCta: {
    title: 'Tu próxima reunión, por escrito.',
    sub: 'Toca grabar y deja el teléfono. Echo te entrega la transcripción, un resumen breve y las tareas que mencionaste, sin que tus palabras salgan del teléfono.',
    facts: ['Descarga gratis', 'Sin cuenta', 'Funciona sin conexión'],
  },
};
