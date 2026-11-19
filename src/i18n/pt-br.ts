import type { Dict } from './en';
import { product } from '../config/product';

export const ptBr: Dict = {
  common: {
    skipToContent: 'Pular para o conteúdo',
    downloadNow: 'Baixar agora',
    playBadgeAlt: 'Disponível no Google Play',
    logoLabel: 'Página inicial do Echo',
    brandTagline: 'Fala em texto offline para Android',
    ogImageAlt: 'Echo: fale uma vez, o Echo escreve.',
    ogTagline: 'Notas, resumos e tarefas privados, no seu celular.',
    switchToDark: 'Mudar para o modo escuro',
    switchToLight: 'Mudar para o modo claro',
  },

  meta: {
    home: {
      title: 'Echo — fala em texto offline para Android',
      description:
        'Reuniões, aulas e notas de voz viram texto, resumos e tarefas no seu celular. Nada é enviado e funciona offline.',
      appDescription: 'Fala em texto offline para Android. Transcrições, resumos e tarefas, feitos no seu celular.',
    },
    privacy: {
      title: 'Política de privacidade — Echo',
      description:
        'Como o Echo e este site tratam dados pessoais. Suas gravações e notas ficam no seu celular; este site não usa cookies.',
    },
    terms: {
      title: 'Termos de uso — Echo',
      description: 'Os termos para usar o Echo e comprar o Echo Pro pelo Google Play.',
    },
    legalNotice: {
      title: 'Aviso legal — Echo',
      description: 'Dados do editor do Echo, o app de fala em texto offline para Android.',
    },
    licenses: {
      title: 'Licenças de código aberto — Echo',
      description: 'Os modelos e bibliotecas de código aberto em que o Echo se baseia, com suas licenças.',
    },
    notFound: {
      title: 'Página não encontrada — Echo',
      description: 'Esta página não existe.',
    },
  },

  header: {
    navLabel: 'Principal',
    openMenu: 'Abrir menu',
    closeMenu: 'Fechar menu',
    nav: {
      features: 'Recursos',
      useCases: 'Usos',
      privacy: 'Privacidade',
      pricing: 'Preços',
      faq: 'FAQ',
    },
  },

  footer: {
    copyright: (year: number) => `© ${year} Koman`,
    noCookies: 'Sem cookies neste site',
    groups: {
      product: 'Produto',
      useCases: 'Usos',
      compare: 'Comparar',
      resources: 'Recursos',
      legal: 'Legal',
    },
    links: {
      features: 'Recursos',
      pricing: 'Preços',
      changelog: 'Novidades',
      phones: 'Celulares compatíveis',
      languages: 'Idiomas',
      meetings: 'Reuniões',
      lectures: 'Aulas',
      interviews: 'Entrevistas',
      voiceNotes: 'Notas de voz',
      subtitles: 'Legendas',
      vsLoronote: 'Echo vs LoroNote',
      vsOtter: 'Echo vs Otter',
      vsGoogleRecorder: 'Echo vs Google Recorder',
      blog: 'Blog',
      help: 'Central de ajuda',
      contact: 'Contato',
      privacy: 'Política de privacidade',
      terms: 'Termos de uso',
      legalNotice: 'Aviso legal',
      licenses: 'Licenças',
    },
  },

  languageSwitcher: {
    label: 'Idioma',
  },

  textPage: {
    lastUpdated: 'Última atualização',
    contents: 'Nesta página',
    draftNotice:
      'Rascunho. Todo valor entre [colchetes] precisa ser preenchido, e o texto revisado por alguém qualificado em direito da UE, antes do lançamento.', // launch-check: ignore
    translationNotice: 'Esta tradução é apenas para sua conveniência. Em caso de divergência, prevalece a versão em inglês.',
    translationNoticeLink: 'Ler a versão em inglês',
  },

  notFound: {
    heading: 'Nada gravado aqui.',
    lead: 'A página que você procura não existe ou mudou de lugar.',
    home: 'Voltar para o início',
  },

  hero: {

    rating: (value: string, count: string) => `${value} no Google Play · ${count} avaliações`,
    pill: 'Fala em texto offline para Android',
    headingLine1: 'Fale uma vez.',
    headingLine2: 'O Echo escreve.',
    lead: 'Reuniões, aulas e notas de voz viram texto, resumos e tarefas no seu celular. Nada é enviado e, depois de baixar o modelo uma única vez, tudo funciona sem internet.',
    qrLabel: 'QR code para o Echo no Google Play',
    qrNote: 'Ou escaneie com seu celular Android',
    note: 'Download grátis · Sem conta',
  },

  phone: {
    label: 'Echo mostrando a transcrição de uma reunião com um resumo e uma tarefa',
    title: 'Início do projeto',
    meta: 'Hoje, 9:42 · 18 min',
    tag: 'Trabalho',
    summaryLabel: 'Resumo',
    summaryText: 'A equipe definiu o escopo do lançamento e dividiu o trabalho do orçamento. O Alex revisa o rascunho até sexta.',
    tasksLabel: 'Tarefas · 2',
    task1: 'Enviar o rascunho do orçamento para o Alex',
    task1Reminder: 'Amanhã, 10:00',
    task2: 'Reservar a sala para quinta',
    lines: [
      {
        name: 'Maja',
        time: '2:14 – 2:31',
        before: 'Certo, então ',
        mark: 'amanhã às dez eu mando o rascunho do orçamento para o Alex',
        after: ', e ele pode revisar até sexta.',
      },
      {
        name: 'Alex',
        time: '2:32 – 2:40',
        before: 'Por mim tudo bem. Alguém precisa ',
        mark: 'reservar a sala para quinta',
        after: '.',
      },
    ],
  },

  features: {
    eyebrow: 'Recursos',
    title: 'Tudo o que você disse, pronto para usar',
    items: [
      {
        title: 'Preciso, no seu celular',
        text: 'Whisper Large V3 Turbo em celulares com 8 GB de RAM, um modelo Whisper menor nos demais, ou o reconhecedor offline do próprio celular para resultados instantâneos.',
      },
      {
        title: 'Sabe quem disse o quê',
        text: 'Os falantes são identificados automaticamente. Dê um nome uma vez e ele vale para a nota inteira e para as exportações.',
      },
      {
        title: 'Um resumo para cada nota',
        text: 'Um resumo curto aparece logo depois da transcrição. Exige um celular com cerca de 4 GB de RAM.',
      },
      {
        title: 'Cerca de 100 idiomas',
        text: 'Detectados automaticamente, incluindo português, inglês, alemão, esloveno, croata e italiano.',
      },
      {
        title: 'Calendário e pastas',
        text: 'Veja notas e tarefas por dia e organize-as em pastas como Trabalho, Pessoal ou Ideias.',
      },
      {
        title: 'Importe e compartilhe',
        text: 'Traga gravações que você já tem. Compartilhe como texto de graça, ou como Markdown, legendas SRT e o áudio original com o Pro.',
      },
    ],
  },

  tasksCallout: {
    eyebrow: 'Só no Echo',
    title: 'Diga em voz alta. Vira tarefa.',
    lead: 'O Echo tira da transcrição o que precisa ser feito. Se você citou um horário, ele lembra você na hora certa.',
    points: ['As tarefas de hoje na tela inicial, o resto no calendário', 'Toque numa tarefa para ir ao trecho em que ela foi dita'],
    speaker: 'Você',
    time: '0:04 – 0:11',
    saidBefore: 'Acho que ',
    saidMark: 'amanhã às 10 da manhã eu tenho que ir ao dentista',
    saidAfter: ', e depois disso vou buscar a encomenda.',
    taskTitle: 'Consulta no dentista',
    reminder: 'Amanhã, 10:00 · lembrete ativado',
    chip: 'Nova tarefa',
  },

  howItWorks: {

    videoLabel: 'Gravação de tela do Echo: gravando uma reunião, a transcrição aparecendo e depois o resumo e as tarefas.',
    eyebrow: 'Como funciona',
    title: 'Três passos, nada para configurar',
    steps: [
      { title: 'Grave ou importe', text: 'Toque no microfone ou abra um arquivo de áudio que você já tem.' },
      { title: 'O Echo faz o trabalho', text: 'A transcrição aparece linha por linha. Falantes, resumo e tarefas vêm em seguida.' },
      { title: 'Leia, ouça, compartilhe', text: 'Toque em qualquer linha para ouvi-la. Suas edições nunca substituem o original.' },
    ],
  },

  useCases: {
    eyebrow: 'Usos',
    title: 'Feito para o seu jeito de gravar',
    learnMore: 'Saiba mais',
    items: {
      meetings: { title: 'Reuniões', text: 'Ata e responsáveis, sem digitar durante a reunião.' },
      lectures: { title: 'Aulas', text: 'Ouça na aula e pesquise a aula inteira depois.' },
      interviews: { title: 'Entrevistas', text: 'Falantes identificados, prontos para citar. Conversas sensíveis ficam com você.' },
      subtitles: { title: 'Legendas', text: 'Arquivos SRT com tempo marcado para seus vídeos, prontos para qualquer editor.' },
    },
  },

  privacySection: {
    eyebrow: 'Privacidade',
    title: 'Privado por design, não por promessa',
    lead: 'Não temos como vazar, vender nem treinar IA com suas gravações, porque nunca as recebemos.',
    points: [
      { title: 'Sem servidores para suas notas', text: 'Áudio, transcrições, resumos e tarefas ficam armazenados só no seu celular.' },
      { title: 'Sem conta', text: 'Sem cadastro e sem e-mail. O Pro é comprado e gerenciado no Google Play.' },
      {
        title: 'Internet só para downloads',
        text: 'Você precisa de conexão para baixar os modelos e para comprar o Pro. Depois disso, o modo avião não atrapalha.',
      },
    ],
    siteTitle: 'Este site também',
    siteText: 'Sem cookies. As visitas são contadas com uma análise sem cookies, hospedada na UE, sem guardar seu endereço IP.',
    policyLink: 'Política de privacidade',
  },

  compare: {
    eyebrow: 'Comparar',
    title: 'Echo vs anotadores na nuvem',
    featureColumn: 'Recurso',
    otherColumn: 'Serviços de nuvem típicos',
    rows: [
      { label: 'Onde seu áudio é processado', echo: 'No seu celular', other: 'Nos servidores deles' },
      { label: 'Funciona sem internet', echo: 'Sim', other: 'Não' },
      { label: 'Exige conta', echo: 'Não', other: 'Sim' },
      { label: 'Tarefas e lembretes a partir da fala', echo: 'Sim', other: 'Depende' },
      { label: 'Entra em chamadas do Zoom ou Teams por você', echo: 'Não', other: 'Muitas vezes' },
    ],
    fit: 'O Echo não é a melhor escolha se você precisa de um bot que entre em videochamadas, ou de notas que sua equipe edite junta em tempo real.',
  },

  pricing: {
    eyebrow: 'Preços',
    title: 'Comece de graça. Vá para o Pro quando as notas ficarem longas.',
    lead: 'O Pro tira o limite de 2 minutos e inclui exportação em Markdown, SRT e áudio.',
    bestValue: 'Melhor custo-benefício',
    plans: {
      free: {
        name: 'Grátis',
        unit: '',
        sub: 'Para sempre',
        features: ['Os 2 primeiros minutos de cada nota', 'Resumo e tarefas incluídos', 'Notas ilimitadas'],
      },
      monthly: {
        name: 'Pro mensal',
        unit: '/ mês',
        sub: 'Cancele quando quiser',
        features: [
          'Sem limite de tempo',
          'Resumo e tarefas da gravação inteira',
          'Importações completas',
          'Exportação em Markdown, SRT e áudio',
        ],
      },
      yearly: {
        name: 'Pro anual',
        unit: '/ ano',
        sub: (perMonth: string, savePercent: number) => `${perMonth} por mês · economize ${savePercent}% em relação ao mensal`,
        features: ['Tudo do Pro', 'Cobrado uma vez por ano'],
      },
      lifetime: {
        name: 'Pro vitalício',
        unit: 'único',
        sub: 'Sem renovações',
        features: ['Tudo do Pro', 'Atualizações futuras incluídas'],
      },
    },
    ctaText: 'Comece de graça. Faça o upgrade dentro do app quando precisar.',
    ctaButton: 'Baixar grátis',
    fine: 'Preços em euros, com IVA incluído. Cobrança pelo Google Play, que pode mostrar a moeda do seu país. As assinaturas se renovam até você cancelá-las no Google Play.',
  },

  faq: {
    eyebrow: 'FAQ',
    title: 'Perguntas respondidas',
    items: [
      {
        q: 'O que acontece depois dos 2 minutos grátis?',
        a: 'A gravação inteira é salva, e a transcrição para em 2:00. Faça o upgrade para o Pro e o Echo transcreve o resto da mesma nota.',
      },
      {
        q: 'Em quais celulares o Echo funciona?',
        a: `Android ${product.minAndroid} ou mais recente. Resumos e tarefas exigem cerca de ${product.notesAiRamGb} GB de RAM. Celulares com ${product.largeModelRamGb} GB ou mais usam o Whisper Large V3 Turbo, o modelo mais preciso do Echo; os demais usam um modelo menor e mais rápido.`,
      },
      {
        q: 'Qual é a precisão?',
        a: 'Depende do áudio: uma voz clara perto do celular funciona melhor; vozes sobrepostas e ruído de fundo dificultam. A precisão é maior em idiomas muito falados.',
      },
      {
        q: 'Quais idiomas têm resumos e tarefas?',
        a: 'A transcrição funciona em cerca de 100 idiomas, e resumos e tarefas são criados para todos eles. A IA de notas padrão os escreve em inglês; o modelo multilíngue opcional os escreve no idioma da nota.',
      },
      {
        q: 'O Echo está em conformidade com o RGPD?',
        a: 'Suas gravações e notas são processadas e armazenadas no seu aparelho, então nunca ficamos com elas. A política de privacidade lista os poucos dados envolvidos, como as compras no Google Play.',
      },
      {
        q: 'Quais arquivos posso importar?',
        a: 'Arquivos de áudio como MP3, M4A, AAC, WAV, FLAC, OGG e Opus, além do áudio de vídeos MP4 e WebM. O Echo coloca cada um no dia em que foi gravado, ou em hoje, se você preferir.',
      },
      {
        q: 'Como levo minhas notas para um celular novo?',
        a: 'Em Ajustes, escolha Fazer backup das notas. O Echo salva tudo em um único arquivo que fica com você. Abra-o no celular novo para restaurar.',
      },
      { q: 'Existe versão para iPhone?', a: 'Ainda não. O Echo é feito primeiro para Android.' },
    ],
  },

  closingCta: {
    title: 'Sua próxima reunião, escrita.',
    sub: 'Toque em gravar e deixe o celular de lado. O Echo entrega a transcrição, um resumo curto e as tarefas que você mencionou, sem que suas palavras saiam do celular.',
    facts: ['Download grátis', 'Sem conta', 'Funciona offline'],
  },
};
