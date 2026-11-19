import { product } from '../../config/product';
import type { PagesDict, RelatedId } from './en';

export const esPages: PagesDict = {
  common: {
    faqTitle: 'Preguntas',
    faqEyebrow: 'FAQ',
    relatedTitle: 'Sigue leyendo',
    checkedOn: (date: string) => `Comprobado el ${date}`,
    sourcesTitle: 'Fuentes',
    tryFree: 'Prueba Echo gratis',
  },

  help: {
    title: 'Centro de ayuda de Echo: grabación, transcripciones y Pro',
    heading: 'Centro de ayuda',
    description:
      'Respuestas sobre Echo: teléfonos compatibles, grabación e importación, transcripciones, resúmenes y tareas, compras de Pro y dónde se guardan tus datos.',
    intro: 'Respuestas breves sobre cómo funciona Echo. Si falta la tuya, escríbenos y la añadiremos.',
    groups: [
      {
        id: 'getting-started',
        title: 'Primeros pasos',
        items: [
          {
            q: '¿En qué teléfonos funciona Echo?',
            a: `En Android ${product.minAndroid} o posterior con un procesador ARM de 64 bits. Los resúmenes y las tareas necesitan unos ${product.notesAiRamGb} GB de RAM, y los teléfonos con ${product.largeModelRamGb} GB o más usan Whisper Large V3 Turbo. La página de teléfonos compatibles tiene los detalles.`,
          },
          {
            q: '¿Qué descarga Echo y cuánto espacio necesita?',
            a: 'El modelo de voz se descarga una sola vez: Whisper Large V3 Turbo ocupa 574 MB y Whisper Small, 190 MB. La detección de hablantes añade unos 42 MB y el Notes AI para resúmenes y tareas, cerca de 1 GB. Las grabaciones ocupan unos 14 MB por hora.',
          },
          {
            q: '¿Necesito conexión a internet?',
            a: 'Solo para descargar los modelos, comprar Pro y comprobar si tienes Pro. La grabación, la transcripción, los resúmenes y las tareas funcionan en el teléfono, así que después puedes usar el modo avión sin problema.',
          },
          {
            q: '¿Necesito una cuenta?',
            a: 'No. No hay registro. Pro se compra y se gestiona con tu cuenta de Google Play.',
          },
        ],
      },
      {
        id: 'recording',
        title: 'Grabación e importación',
        items: [
          {
            q: '¿Sigue grabando si salgo de la app o apago la pantalla?',
            a: 'Sí. Echo graba en segundo plano con una notificación desde la que puedes pausar o detener la grabación. Una llamada pausa la grabación y se reanuda cuando termina la llamada, salvo que la hayas pausado tú.',
          },
          {
            q: '¿Qué archivos puedo importar?',
            a: `Archivos de audio como MP3, M4A, AAC, WAV, FLAC, OGG y Opus, además del audio de vídeos MP4 y WebM. Comparte un archivo con Echo o usa el botón de importar en Notas. Tú eliges el título y si la nota pertenece al día en que se grabó o a hoy.`,
          },
          {
            q: '¿Cómo elijo el idioma?',
            a: 'Echo detecta el idioma por sí solo. Para fijar uno, elígelo en Ajustes. En un archivo importado o en una sola nota puedes elegir otro idioma sin cambiar los Ajustes, y puedes volver a transcribir una nota en otro idioma.',
          },
        ],
      },
      {
        id: 'transcripts',
        title: 'Transcripciones',
        items: [
          {
            q: '¿Qué precisión tiene?',
            a: 'Depende del audio: una sola voz clara y cerca del teléfono funciona mejor; las voces superpuestas y el ruido de fondo lo dificultan. La precisión es mayor en los idiomas más hablados. Añade nombres y términos especiales en Ajustes, Diccionario, y Whisper los escribirá como tú los escribiste.',
          },
          {
            q: '¿Cuánto tarda una transcripción?',
            a: 'Si tu teléfono tiene su propio reconocedor sin conexión para el idioma, el texto aparece en cuanto detienes la grabación. Whisper trabaja después de grabar: Large V3 Turbo puede tardar lo que dura la grabación o más, incluso en un gama alta reciente, y Whisper Small es unas tres veces más rápido.',
          },
          {
            q: '¿Por qué veo texto mientras grabo, pero no siempre?',
            a: 'El texto en directo viene del reconocedor sin conexión de tu propio teléfono. Necesita Android 13 o posterior y el idioma instalado en el teléfono, algo que Ajustes puede descargar por ti. Si no lo tienes, el texto aparece al detener la grabación.',
          },
          {
            q: '¿Puedo corregir quién dijo qué?',
            a: 'Sí. Toca un hablante para ponerle nombre o pasar sus líneas a otro hablante, o selecciona unas cuantas líneas y asigna solo esas. Se te sugieren los nombres que ya usaste.',
          },
          {
            q: '¿Puedo buscar en mis notas?',
            a: 'La búsqueda recorre todas las transcripciones, títulos y resúmenes. Ignora mayúsculas y acentos, así que «cesnik» encuentra «česnik».',
          },
        ],
      },
      {
        id: 'summaries-tasks',
        title: 'Resúmenes y tareas',
        items: [
          {
            q: '¿Por qué no hay resúmenes ni tareas en mi teléfono?',
            a: `Necesitan unos ${product.notesAiRamGb} GB de RAM y la descarga del Notes AI, de cerca de 1 GB. En teléfonos con menos memoria Echo sigue transcribiendo, con hablantes.`,
          },
          {
            q: '¿En qué idioma se escriben los resúmenes y las tareas?',
            a: 'El Notes AI estándar los escribe en inglés para las notas en otros idiomas y mantiene entre comillas las palabras en tu idioma. El modelo multilingüe opcional, Gemma 4 E2B (2,6 GB), los escribe en el idioma de la nota.',
          },
          {
            q: 'Mi recordatorio llegó tarde. ¿Por qué?',
            a: 'Android entrega los recordatorios a la hora exacta solo cuando Echo puede programar alarmas exactas. Ajustes, Recordatorios de tareas, abre los ajustes del sistema para eso y para las notificaciones. Sin el permiso, Android puede retrasar los recordatorios.',
          },
          {
            q: 'Echo se saltó una tarea o se inventó una. ¿Qué puedo hacer?',
            a: 'Los resúmenes y las tareas los genera un modelo de IA pequeño en tu teléfono, y puede equivocarse. Añade, edita o elimina tareas tú mismo. Cada tarea enlaza con la línea de la que salió, así que comprobarla lleva un toque.',
          },
        ],
      },
      {
        id: 'pro',
        title: 'Pro y compras',
        items: [
          {
            q: '¿Qué pasa después de los 2 minutos gratis?',
            a: 'Se guarda toda tu grabación y la transcripción se detiene en 2:00. Pasa a Pro y Echo transcribe el resto de esa misma nota.',
          },
          {
            q: '¿Qué añade Pro?',
            a: 'Sin límite de tiempo en grabaciones e importaciones, resúmenes y tareas de toda la grabación, y exportación a Markdown, subtítulos SRT y el audio original. La exportación a texto sin formato es gratis.',
          },
          {
            q: 'He cambiado de teléfono. ¿Cómo recupero Pro?',
            a: 'Inicia sesión en Google Play con la misma cuenta, abre Echo y elige Restaurar compras en Ajustes.',
          },
          {
            q: '¿Cómo cancelo o pido un reembolso?',
            a: 'Las suscripciones se gestionan en Google Play, en Pagos y suscripciones. Los reembolsos siguen la política de reembolsos de Google Play.',
          },
        ],
      },
      {
        id: 'privacy',
        title: 'Privacidad y tus datos',
        items: [
          {
            q: '¿Dónde se guardan mis grabaciones?',
            a: 'Solo en tu teléfono. No tenemos servidores para tus notas, así que nunca recibimos tu audio, tus transcripciones, tus resúmenes ni tus tareas.',
          },
          {
            q: '¿Cómo paso mis notas a un teléfono nuevo?',
            a: 'En Ajustes, elige Copia de seguridad de las notas. Echo guarda todo en un solo archivo que te quedas tú. En el teléfono nuevo, elige Restaurar copia de seguridad.',
          },
          {
            q: '¿Cómo lo borro todo?',
            a: 'En Ajustes está Eliminar todos los datos. Desinstalar Echo también quita sus notas del teléfono, así que haz antes una copia de seguridad si quieres conservarlas.',
          },
        ],
      },
    ],
    contactTitle: '¿Sigues atascado?',
    contactText: (email: string) => `Escribe a ${email}. Cuéntanos el modelo de tu teléfono y qué has probado; respondemos en inglés o esloveno.`,
  },

  useCases: {
    meetings: {
      title: 'Transcripción de reuniones sin conexión en Android — Echo',
      description:
        'Graba una reunión con tu teléfono Android y obtén la transcripción, los hablantes, un resumen y tareas con recordatorios. Todo se hace en el teléfono, sin bots ni subidas.',
      eyebrow: 'Reuniones',
      heading: 'Actas de reunión que se escriben solas, en tu teléfono',
      lead: 'Deja el teléfono sobre la mesa y habla. Echo guarda la transcripción, quién dijo qué, un resumen breve y las tareas acordadas.',
      problemTitle: 'Escribir el acta es perderse la reunión',
      problem:
        'O escuchas o escribes. Los asistentes en la nube lo resuelven uniéndose a tu llamada y subiéndolo todo a sus servidores, algo que a muchos equipos y clientes no les gusta. Echo hace el trabajo en el teléfono que llevas en el bolsillo, así que la conversación no sale de la sala.',
      phone: {
        label: 'Echo mostrando una nota de reunión con un resumen, dos tareas y la transcripción',
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
      featuresTitle: 'Lo que tienes al terminar la reunión',
      features: [
        {
          title: 'Quién dijo qué',
          text: 'Los hablantes se etiquetan solos. Ponle nombre a alguien una vez y ese nombre se mantiene en la nota y en tus exportaciones.',
        },
        {
          title: 'Tareas con responsables y horas',
          text: 'Echo enumera lo acordado, enlaza cada tarea con la línea de la que salió y te avisa cuando se mencionó una hora.',
        },
        {
          title: 'Actas para compartir',
          text: 'Comparte la transcripción como texto gratis, o como Markdown con el resumen y las tareas con Pro.',
        },
      ],
      faq: [
        {
          q: '¿Puede Echo unirse a llamadas de Zoom, Teams o Meet?',
          a: 'No. Echo graba con el micrófono del teléfono. En una videollamada, pon el teléfono junto al altavoz, o importa después la grabación de la llamada.',
        },
        {
          q: '¿Cuánto puede durar una reunión?',
          a: 'La grabación no tiene límite de tiempo. La versión gratuita transcribe los primeros 2 minutos de cada nota; Pro transcribe toda la reunión.',
        },
        {
          q: '¿Tengo que avisar de que estoy grabando?',
          a: 'Sí. Pregunta a todos antes de grabar. Las normas cambian según el país, y grabar a personas sin su consentimiento es ilegal en muchos de ellos.',
        },
      ],
      related: ['lectures', 'interviews'] as RelatedId[],
    },
    lectures: {
      title: 'Transcribe clases sin conexión en Android — Echo',
      description:
        'Graba una clase y busca cada palabra después. Echo transcribe en tu teléfono Android, con resúmenes y tareas para lecturas y plazos, sin necesidad de internet.',
      eyebrow: 'Clases',
      heading: 'Escucha en clase. Busca en toda la clase después.',
      lead: 'Graba la clase y encuentra el minuto exacto en que el profesor lo explicó. Echo transcribe en tu teléfono, aunque no haya wifi en el aula.',
      problemTitle: 'Los apuntes recogen la mitad de lo que se dijo',
      problem:
        'Mientras anotas una idea, la siguiente ya pasó. Una grabación sola tampoco ayuda mucho: nadie recorre 90 minutos de audio para encontrar una definición. Una transcripción en la que se puede buscar resuelve las dos cosas.',
      phone: {
        label: 'Echo mostrando una nota de clase con un resumen, una tarea de lectura y la transcripción',
        title: 'Microeconomía, semana 6',
        meta: 'Mar, 10:15 · 84 min',
        tag: 'Universidad',
        summaryLabel: 'Resumen',
        summaryText: 'La elasticidad precio de la demanda y cómo calcularla, con el ejemplo de la tarifa del taxi. Las preguntas del examen siguen la hoja de problemas.',
        tasksLabel: 'Tareas · 2',
        task1: 'Leer el capítulo 5 antes del seminario',
        task1Reminder: 'Lunes, 9:00',
        task2: 'Entregar la hoja de problemas 3',
        lines: [
          {
            name: 'Profesor',
            time: '41:02 – 41:20',
            before: 'Entonces la elasticidad es el cambio porcentual de la cantidad dividido por el cambio porcentual del precio. ',
            mark: 'Lean el capítulo cinco antes del lunes',
            after: ', empezamos el seminario con él.',
          },
          {
            name: 'Alumno',
            time: '41:21 – 41:27',
            before: '¿Eso entra también ',
            mark: 'en la hoja de problemas',
            after: '?',
          },
        ],
      },
      featuresTitle: 'Pensado para grabaciones largas',
      features: [
        {
          title: 'Busca cada palabra',
          text: 'La búsqueda recorre todas tus transcripciones a la vez e ignora mayúsculas y acentos. Toca una línea para oírla.',
        },
        {
          title: 'Lecturas y plazos como tareas',
          text: 'Cuando el profesor dice «lean el capítulo cinco antes del lunes», Echo lo convierte en una tarea con recordatorio.',
        },
        {
          title: 'Escribe bien los términos',
          text: 'Añade nombres de asignaturas y términos al Diccionario en Ajustes, y Whisper los escribirá como tú.',
        },
      ],
      faq: [
        {
          q: '¿Puedo grabar una clase de 90 minutos?',
          a: 'Sí. La grabación no tiene límite de tiempo y sigue con la pantalla apagada. Una clase de 90 minutos ocupa unos 21 MB. La versión gratuita transcribe los primeros 2 minutos de cada nota; Pro transcribe toda la clase.',
        },
        {
          q: '¿Funcionará en un aula grande?',
          a: 'Funciona mejor cerca de quien habla. Desde el fondo de un aula grande y con un micrófono flojo, espera más errores; siéntate más cerca o deja el teléfono en la mesa de delante.',
        },
        {
          q: '¿En qué idiomas pueden ser las clases?',
          a: `Whisper transcribe unos 100 idiomas y detecta el idioma por sí solo. La página de idiomas los enumera.`,
        },
      ],
      related: ['meetings', 'interviews'] as RelatedId[],
    },
    interviews: {
      title: 'App privada para transcribir entrevistas en Android — Echo',
      description:
        'Transcribe entrevistas en tu teléfono Android con hablantes etiquetados, listas para citar. No se sube nada, así que las conversaciones delicadas se quedan contigo.',
      eyebrow: 'Entrevistas',
      heading: 'Transcripciones de entrevistas con hablantes, sin subir nada',
      lead: 'Graba o importa la entrevista y obtén una transcripción separada por hablante, lista para citar. El audio y el texto se quedan en tu teléfono.',
      problemTitle: 'Las conversaciones delicadas no deben estar en el servidor de otro',
      problem:
        'Fuentes, pacientes, participantes en investigaciones y candidatos te hablan a ti, no a una empresa de transcripción. La mayoría de los servicios de transcripción suben el audio para procesarlo. Echo nunca lo envía a ninguna parte, así que puedes prometerlo y cumplirlo.',
      phone: {
        label: 'Echo mostrando una nota de entrevista con dos hablantes, un resumen y una tarea de seguimiento',
        title: 'Entrevista con la jefa de enfermeras',
        meta: 'Lun, 14:30 · 47 min',
        tag: 'Investigación',
        summaryLabel: 'Resumen',
        summaryText: 'Los turnos de noche pasaron de tres enfermeras a dos en marzo. Compartirá el cuadrante si no se usa su nombre.',
        tasksLabel: 'Tareas · 2',
        task1: 'Enviar a Ana las citas para que las revise',
        task1Reminder: 'Viernes, 9:00',
        task2: 'Pedir el cuadrante de marzo',
        lines: [
          {
            name: 'Ana',
            time: '12:40 – 12:58',
            before: 'Desde marzo estamos dos en el turno de noche en lugar de tres. ',
            mark: 'Envíame las citas antes del viernes',
            after: ' y las reviso.',
          },
          {
            name: 'Tú',
            time: '12:59 – 13:04',
            before: 'Por supuesto. Y ',
            mark: '¿podría ver el cuadrante de marzo',
            after: '?',
          },
        ],
      },
      featuresTitle: 'Lo que las hace citables',
      features: [
        {
          title: 'Hablantes con nombre',
          text: 'Echo separa las voces. Ponle nombre a cada hablante una vez y corrige cualquier línea que haya ido a la persona equivocada.',
        },
        {
          title: 'Cada línea con su tiempo',
          text: 'Cada línea conserva su momento en la grabación. Tócala para oír las palabras exactas antes de citarlas.',
        },
        {
          title: 'Se queda contigo',
          text: 'Sin cuenta y sin subidas. Haz una copia de seguridad en un archivo que te quedas tú y borra la nota cuando termine el proyecto.',
        },
      ],
      faq: [
        {
          q: '¿Puedo importar una entrevista grabada con otra app?',
          a: `Sí. Echo importa MP3, M4A, AAC, WAV, FLAC, OGG y Opus, además del audio de vídeos MP4 y WebM. Comparte el archivo con Echo o usa el botón de importar en Notas.`,
        },
        {
          q: '¿Qué tan exactas son las etiquetas de hablante?',
          a: 'Buenas en una entrevista clara entre dos personas, menos fiables con voces superpuestas o muchas voces. Las líneas cercanas a un cambio de hablante son las que más fallan; puedes moverlas con un toque.',
        },
        {
          q: '¿Puedo exportar la transcripción?',
          a: 'La exportación a texto sin formato es gratis. Con Pro, exporta a Markdown, a subtítulos SRT con tiempos o como el audio original.',
        },
      ],
      related: ['meetings', 'lectures'] as RelatedId[],
    },
  },


  loronote: {
    title: '¿LoroNote para Android? Echo frente a LoroNote',
    description:
      'LoroNote es una app de transcripción sin conexión para iPhone. Echo es la app para Android que hace lo mismo. Comparación fechada y con fuentes de funciones y precios.',
    eyebrow: 'Comparar',
    heading: 'Echo frente a LoroNote',
    lead: 'Las dos apps transcriben en el dispositivo con Whisper, así que tu audio se queda contigo. La mayor diferencia es el teléfono: LoroNote está hecha para dispositivos Apple y Echo para Android.',
    checked: '2026-11-19',
    whoTitle: 'Para quién es cada app',
    who: {
      echo: 'Para teléfonos Android. Elige Echo si quieres tareas y recordatorios a partir de lo que dices, o resúmenes que se hacen en el propio teléfono.',
      other: 'Para iPhone, iPad y Apple Watch. Elige LoroNote si usas dispositivos Apple, sobre todo si quieres grabar desde el reloj.',
    },
    tableTitle: 'Lado a lado',
    tableCaption: 'Los datos de Echo son de la propia app. Los datos de LoroNote son de su ficha en la App Store de EE. UU.',
    featureColumn: 'Característica',
    otherName: 'LoroNote',
    rows: [
      {
        label: 'Dispositivos',
        echo: `Android ${product.minAndroid} o posterior`,
        other: 'iPhone 13 o posterior e iPhone SE (3.ª generación), iPad, Apple Watch; iOS 18.6 o posterior',
        source: 0,
      },
      {
        label: 'Transcripción',
        echo: 'Whisper en el teléfono: Large V3 Turbo con 8 GB de RAM, un modelo más pequeño en caso contrario, o el reconocedor sin conexión del propio teléfono',
        other: 'Whisper Large V3 Turbo en el dispositivo',
        source: 0,
      },
      { label: 'Funciona sin conexión', echo: 'Sí', other: 'Sí, también en modo avión', source: 0 },
      { label: 'Idiomas', echo: '100, detectados automáticamente', other: '«Más de 100», detectados automáticamente', source: 0 },
      { label: 'Etiquetas de hablante', echo: 'Sí, con renombrado y reasignación', other: 'Sí, con renombrado y asignación manual', source: 0 },
      {
        label: 'Resúmenes',
        echo: `Sí, con el modelo propio de Echo en el teléfono (unos ${product.notesAiRamGb} GB de RAM)`,
        other: 'Con Apple Intelligence, que funciona en el iPhone 15 Pro y posteriores',
        source: 1,
      },
      {
        label: 'Tareas a partir de la voz',
        echo: 'Sí, con recordatorios a las horas que mencionas',
        other: 'Acciones a realizar con Apple Intelligence; no se mencionan los recordatorios',
        source: 0,
      },
      { label: 'Exportación', echo: 'Texto gratis; Markdown, SRT y audio con Pro', other: 'Texto, SRT y audio en MP3 o M4A', source: 0 },
      {
        label: 'Importación',
        echo: 'MP3, M4A, AAC, WAV, FLAC, OGG, Opus y el audio de vídeos MP4 y WebM',
        other: 'MP3, WAV, M4A, MP4, MOV',
        source: 0,
      },
      {
        label: 'Precio',
        echo: (monthly: string, yearly: string, lifetime: string) =>
          `Gratis con los primeros 2 minutos de cada nota; Pro a ${monthly} al mes, ${yearly} al año o ${lifetime} una sola vez`,
        other: 'Gratis con compras dentro de la app: 4,99 $ al mes, 19,99 $ al año, 24,99 $ de por vida (precio de oferta; normalmente 39,99 $)',
        source: 0,
      },
    ],
    winsTitle: 'Cuándo LoroNote es la mejor opción',
    wins: [
      'Tienes un iPhone o un iPad. Echo es solo para Android.',
      'Quieres grabar desde un Apple Watch y transcribir en el teléfono.',
      'Quieres Whisper Large V3 Turbo en un teléfono con menos de 8 GB de RAM: LoroNote lo ofrece desde el iPhone 13, Echo solo en teléfonos Android de 8 GB.',
      'Quieres buscar y reemplazar en las transcripciones, o ver el texto resaltado mientras suena el audio.',
    ],
    switchTitle: 'Cómo pasar de LoroNote a Echo',
    switch: [
      'En LoroNote, exporta tus grabaciones como audio (MP3 o M4A) y cópialas al teléfono Android.',
      'Compártelas con Echo o usa el botón de importar en Notas. Cada archivo puede ir al día en que se grabó.',
      'Antes de importar, añade al Diccionario en Ajustes los nombres y términos que más usas, para que Whisper los escriba a tu manera.',
    ],
    sources: [
      { label: 'LoroNote en la App Store de EE. UU.', url: 'https://apps.apple.com/us/app/loronote-ai-transcribe/id6749249346' },
      { label: 'Apple: dispositivos compatibles con Apple Intelligence', url: 'https://support.apple.com/en-us/121115' },
    ],
    disclaimer:
      'LoroNote es una marca de su titular, Rich Soft Co., Ltd. No tenemos ninguna relación con ellos. Los precios y las funciones cambian; si algo de aquí está desactualizado, escríbenos y lo corregiremos.',
  },

  languages: {
    title: 'Idiomas que Echo puede transcribir — voz a texto sin conexión en 100 idiomas',
    heading: 'Idiomas compatibles',
    description:
      'Echo transcribe 100 idiomas sin conexión con Whisper, del inglés y el alemán al esloveno y el suajili. Mira qué idiomas tienen texto en directo, resúmenes y tareas.',
    intro:
      'Echo transcribe con Whisper, que conoce 100 idiomas y detecta cuál hablas. La calidad varía: los idiomas más hablados funcionan mejor y los que tienen pocos datos de entrenamiento cometen más errores.',
    sections: {
      transcription: {
        title: 'Transcripción',
        text: 'Todos los idiomas de la lista se pueden transcribir sin conexión, tanto desde grabaciones como desde archivos importados. El cantonés necesita Whisper Large V3 Turbo, que Echo usa en teléfonos con 8 GB de RAM o más.',
      },
      live: {
        title: 'Texto en directo y transcripciones al instante',
        text: 'El texto mientras grabas y la transcripción en cuanto detienes la grabación vienen del reconocedor sin conexión de tu propio teléfono. Los idiomas que tiene dependen de tu teléfono; Ajustes muestra si el tuyo está instalado y puede descargarlo. Whisper transcribe los demás idiomas cuando detienes la grabación.',
      },
      notes: {
        title: 'Resúmenes y tareas',
        text: 'Se generan para todos los idiomas de la lista. El Notes AI estándar los escribe en inglés para las notas en otros idiomas y mantiene las citas en el original. El modelo multilingüe opcional los escribe en el idioma de la nota.',
      },
      app: {
        title: 'La propia app',
        text: (list: string) => `Los menús y los ajustes de Echo están disponibles en ${list}.`,
      },
    },
    listTitle: (count: number) => `Los ${count} idiomas`,
  },

  phones: {
    title: 'Requisitos de Echo — teléfonos y modelos Android compatibles',
    heading: 'Teléfonos compatibles',
    description: `Echo funciona en Android ${product.minAndroid} o posterior. Mira qué modelo de voz recibe tu teléfono, cuánta RAM necesitan los resúmenes y las tareas y cuánto espacio ocupan los modelos.`,
    intro: `Echo necesita Android ${product.minAndroid} o posterior y un procesador ARM de 64 bits, que tienen casi todos los teléfonos Android vendidos en los últimos años. La memoria de tu teléfono decide qué funciones y modelos obtienes.`,
    tiersTitle: 'Qué obtiene tu teléfono',
    tiersHead: { ram: 'RAM del teléfono', speech: 'Modelo de voz', notes: 'Resúmenes y tareas' },
    tiers: [
      { ram: 'Menos de 4 GB', speech: 'Whisper Small, o Base', notes: 'No disponible' },
      { ram: 'De 4 a 6 GB', speech: 'Whisper Small, o Base', notes: 'Sí' },
      { ram: '8 GB o más', speech: 'Whisper Large V3 Turbo, o Medium, Small o Base', notes: 'Sí' },
    ],
    tiersNote:
      'Echo elige el primer modelo de la lista; puedes cambiarlo en Ajustes, Modelo de voz. Los teléfonos indican algo menos de memoria de la que pone en la caja, así que uno de 8 GB cuenta como de 8 GB.',
    recognizerTitle: 'El reconocedor de tu propio teléfono',
    recognizer:
      'En Android 13 y posterior, muchos teléfonos traen un reconocedor de voz sin conexión integrado. Cuando tiene tu idioma, Echo lo usa para el texto en directo y una transcripción al instante, y usa Whisper para las importaciones o cuando se lo pides. Los teléfonos que no lo tienen usan Whisper para todo.',
    storageTitle: 'Almacenamiento',
    storageHead: { item: 'Descarga', size: 'Tamaño' },
    storage: [
      { item: 'Whisper Large V3 Turbo', size: '574 MB' },
      { item: 'Whisper Medium', size: '539 MB' },
      { item: 'Whisper Small', size: '190 MB' },
      { item: 'Whisper Base', size: '60 MB' },
      { item: 'Detección de hablantes', size: '42 MB' },
      { item: 'Notes AI (Qwen3 1.7B)', size: '977 MB' },
      { item: 'Notes AI multilingüe (Gemma 4 E2B), opcional', size: '2,6 GB' },
      { item: 'Grabaciones', size: 'Unos 14 MB por hora' },
    ],
    storageNote: 'En el teléfono solo se queda el modelo Whisper que usas. Al cambiar, se descarga el nuevo y se elimina el anterior.',
    speedTitle: 'Velocidad',
    speed:
      'En un Samsung Galaxy S24, Whisper Large V3 Turbo necesita de 33 a 50 segundos por cada 30 segundos de audio, así que una transcripción tarda lo que dura la grabación o más. Whisper Small necesita unos 11 segundos. Los teléfonos se ralentizan cuando se calientan, por ejemplo en un cargador inalámbrico.',
    testedTitle: 'Teléfonos probados',
    tested: (email: string) =>
      `Probamos Echo en un Samsung Galaxy S24. Si no funciona bien en tu teléfono, escribe a ${email} con el nombre del modelo y lo revisaremos.`,
  },
};
