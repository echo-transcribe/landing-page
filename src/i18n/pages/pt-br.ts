import { product } from '../../config/product';
import type { PagesDict, RelatedId } from './en';

export const ptBrPages: PagesDict = {
  common: {
    faqTitle: 'Perguntas',
    faqEyebrow: 'FAQ',
    relatedTitle: 'Leia a seguir',
    checkedOn: (date: string) => `Verificado em ${date}`,
    sourcesTitle: 'Fontes',
    tryFree: 'Experimente o Echo grátis',
  },

  help: {
    title: 'Central de ajuda do Echo — respostas sobre gravação, transcrições e Pro',
    heading: 'Central de ajuda',
    description:
      'Respostas sobre o Echo: celulares compatíveis, gravação e importação, transcrições, resumos e tarefas, compras do Pro e onde ficam seus dados.',
    intro: 'Respostas curtas sobre como o Echo funciona. Se a sua não estiver aqui, escreva para nós e vamos incluí-la.',
    groups: [
      {
        id: 'getting-started',
        title: 'Primeiros passos',
        items: [
          {
            q: 'Em quais celulares o Echo funciona?',
            a: `Android ${product.minAndroid} ou mais recente, com processador ARM de 64 bits. Resumos e tarefas exigem cerca de ${product.notesAiRamGb} GB de RAM, e celulares com ${product.largeModelRamGb} GB ou mais usam o Whisper Large V3 Turbo. A página de celulares compatíveis tem os detalhes.`,
          },
          {
            q: 'O que o Echo baixa e quanto espaço ele ocupa?',
            a: 'O modelo de fala é baixado uma única vez: o Whisper Large V3 Turbo tem 574 MB e o Whisper Small, 190 MB. A detecção de falantes acrescenta cerca de 42 MB, e a IA de notas, para resumos e tarefas, cerca de 1 GB. As gravações ocupam cerca de 14 MB por hora.',
          },
          {
            q: 'Preciso de conexão com a internet?',
            a: 'Só para baixar os modelos, comprar o Pro e verificar se você tem o Pro. Gravação, transcrição, resumos e tarefas rodam no celular, então depois disso o modo avião não atrapalha.',
          },
          {
            q: 'Preciso de uma conta?',
            a: 'Não. Não há cadastro. O Pro é comprado e gerenciado pela sua conta do Google Play.',
          },
        ],
      },
      {
        id: 'recording',
        title: 'Gravação e importação',
        items: [
          {
            q: 'A gravação continua se eu sair do app ou apagar a tela?',
            a: 'Sim. O Echo grava em segundo plano, com uma notificação pela qual você pode pausar ou parar. Uma ligação pausa a gravação, e ela continua quando a ligação termina, a menos que você mesmo a tenha pausado.',
          },
          {
            q: 'Quais arquivos posso importar?',
            a: `Arquivos de áudio como MP3, M4A, AAC, WAV, FLAC, OGG e Opus, além do áudio de vídeos MP4 e WebM. Compartilhe um arquivo com o Echo ou use o botão de importar em Notas. Você escolhe o título e se a nota fica no dia em que foi gravada ou em hoje.`,
          },
          {
            q: 'Como defino o idioma?',
            a: 'O Echo detecta o idioma sozinho. Para fixar um, escolha-o em Ajustes. Em um arquivo importado ou em uma única nota, você pode escolher outro idioma sem mudar os Ajustes, e também pode transcrever uma nota de novo em outro idioma.',
          },
        ],
      },
      {
        id: 'transcripts',
        title: 'Transcrições',
        items: [
          {
            q: 'Qual é a precisão?',
            a: 'Depende do áudio: uma voz clara perto do celular funciona melhor; vozes sobrepostas e ruído de fundo dificultam. A precisão é maior em idiomas muito falados. Adicione nomes e termos especiais em Ajustes, Dicionário, e o Whisper vai escrevê-los do jeito que você digitou.',
          },
          {
            q: 'Quanto tempo leva uma transcrição?',
            a: 'Se o seu celular tem um reconhecedor offline próprio para o idioma, o texto fica pronto assim que você para. O Whisper roda depois da gravação: o Large V3 Turbo pode levar tanto tempo quanto a gravação, ou mais, mesmo em um top de linha recente, e o Whisper Small é cerca de três vezes mais rápido.',
          },
          {
            q: 'Por que vejo texto enquanto gravo, mas nem sempre?',
            a: 'O texto ao vivo vem do reconhecedor offline do próprio celular. Ele exige Android 13 ou mais recente e o idioma instalado no celular, que os Ajustes podem baixar para você. Sem isso, o texto aparece depois que você para.',
          },
          {
            q: 'Posso corrigir quem disse o quê?',
            a: 'Sim. Toque em um falante para dar um nome a ele ou mover as falas dele para outro falante, ou selecione algumas linhas e atribua só essas. Os nomes que você já usou são sugeridos.',
          },
          {
            q: 'Posso buscar nas minhas notas?',
            a: 'A busca vasculha todas as transcrições, títulos e resumos. Ela ignora maiúsculas e acentos, então “cesnik” encontra “česnik”.',
          },
        ],
      },
      {
        id: 'summaries-tasks',
        title: 'Resumos e tarefas',
        items: [
          {
            q: 'Por que não há resumos nem tarefas no meu celular?',
            a: `Eles exigem cerca de ${product.notesAiRamGb} GB de RAM e o download de cerca de 1 GB da IA de notas. Em celulares com menos memória, o Echo ainda transcreve, com falantes.`,
          },
          {
            q: 'Em que idioma os resumos e as tarefas são escritos?',
            a: 'A IA de notas padrão os escreve em inglês para notas em outros idiomas e mantém no seu idioma as palavras citadas. O modelo multilíngue opcional, Gemma 4 E2B (2,6 GB), os escreve no idioma da nota.',
          },
          {
            q: 'Meu lembrete chegou atrasado. Por quê?',
            a: 'O Android só entrega lembretes na hora certa quando o Echo tem permissão para definir alarmes exatos. Em Ajustes, Lembretes de tarefas, você abre as configurações do sistema para isso e para as notificações. Sem a permissão, o Android pode atrasar os lembretes.',
          },
          {
            q: 'O Echo deixou passar uma tarefa, ou inventou uma. O que posso fazer?',
            a: 'Resumos e tarefas vêm de um modelo de IA pequeno no seu celular, e ele pode errar. Adicione, edite ou exclua tarefas por conta própria. Cada tarefa tem um link para a linha de onde veio, então conferir uma leva só um toque.',
          },
        ],
      },
      {
        id: 'pro',
        title: 'Pro e compras',
        items: [
          {
            q: 'O que acontece depois dos 2 minutos grátis?',
            a: 'A gravação inteira é salva, e a transcrição para em 2:00. Faça o upgrade para o Pro e o Echo transcreve o resto da mesma nota.',
          },
          {
            q: 'O que o Pro oferece?',
            a: 'Sem limite de tempo em gravações e importações, resumos e tarefas da gravação inteira, e exportação em Markdown, legendas SRT e o áudio original. A exportação em texto simples é grátis.',
          },
          {
            q: 'Troquei de celular. Como recupero o Pro?',
            a: 'Entre no Google Play com a mesma conta, abra o Echo e escolha Restaurar compras em Ajustes.',
          },
          {
            q: 'Como cancelo ou peço reembolso?',
            a: 'As assinaturas são gerenciadas no Google Play, em Pagamentos e assinaturas. Os reembolsos seguem a política de reembolso do Google Play.',
          },
        ],
      },
      {
        id: 'privacy',
        title: 'Privacidade e seus dados',
        items: [
          {
            q: 'Onde ficam armazenadas as minhas gravações?',
            a: 'Só no seu celular. Não temos servidores para as suas notas, então nunca recebemos seu áudio, transcrições, resumos nem tarefas.',
          },
          {
            q: 'Como levo minhas notas para um celular novo?',
            a: 'Em Ajustes, escolha Fazer backup das notas. O Echo salva tudo em um único arquivo que fica com você. No celular novo, escolha Restaurar backup.',
          },
          {
            q: 'Como excluo tudo?',
            a: 'Os Ajustes têm Excluir todos os dados. Desinstalar o Echo também remove as notas do celular, então faça um backup antes se quiser guardá-las.',
          },
        ],
      },
    ],
    contactTitle: 'Ainda com dúvidas?',
    contactText: (email: string) =>
      `Escreva para ${email}. Conte o modelo do seu celular e o que você tentou.`,
  },

  useCases: {
    meetings: {
      title: 'Transcrição de reuniões offline para Android — Echo',
      description:
        'Grave uma reunião no seu celular Android e receba a transcrição, os falantes, um resumo e tarefas com lembretes. Tudo roda no celular, sem bot e sem upload.',
      eyebrow: 'Reuniões',
      heading: 'Atas de reunião que se escrevem sozinhas, no seu celular',
      lead: 'Coloque o celular na mesa e converse. O Echo guarda a transcrição, quem disse o quê, um resumo curto e as tarefas combinadas.',
      problemTitle: 'Digitar a ata é perder a reunião',
      problem:
        'Ou você ouve, ou você escreve. Os anotadores na nuvem resolvem isso entrando na sua chamada e enviando tudo para os servidores deles, o que muitas equipes e clientes não aceitam. O Echo faz o trabalho no celular que está no seu bolso, então a conversa nunca sai da sala.',
      phone: {
        label: 'Echo mostrando a nota de uma reunião com um resumo, duas tarefas e a transcrição',
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
      featuresTitle: 'O que você recebe depois da reunião',
      features: [
        {
          title: 'Quem disse o quê',
          text: 'Os falantes são identificados automaticamente. Dê um nome uma vez e ele vale para a nota inteira e para as exportações.',
        },
        {
          title: 'Tarefas com responsáveis e horários',
          text: 'O Echo lista o que foi combinado, liga cada tarefa à linha de onde ela veio e lembra você quando um horário foi citado.',
        },
        {
          title: 'Ata pronta para compartilhar',
          text: 'Compartilhe a transcrição como texto de graça, ou como Markdown, com o resumo e as tarefas, no Pro.',
        },
      ],
      faq: [
        {
          q: 'O Echo entra em chamadas do Zoom, Teams ou Meet?',
          a: 'Não. O Echo grava pelo microfone do celular. Numa videochamada, deixe o celular perto do alto-falante ou importe a gravação da chamada depois.',
        },
        {
          q: 'Quanto tempo pode durar uma reunião?',
          a: 'A gravação não tem limite de tempo. A versão grátis transcreve os 2 primeiros minutos de cada nota; o Pro transcreve a reunião inteira.',
        },
        {
          q: 'Preciso avisar que estou gravando?',
          a: 'Sim. Pergunte a todos antes de gravar. As regras variam de país para país, e gravar pessoas sem o consentimento delas é ilegal em muitos deles.',
        },
      ],
      related: ['lectures', 'interviews'] as RelatedId[],
    },
    lectures: {
      title: 'Transcreva aulas offline no Android — Echo',
      description:
        'Grave uma aula e pesquise cada palavra depois. O Echo transcreve no seu celular Android, com resumos e tarefas para leituras e prazos, sem precisar de internet.',
      eyebrow: 'Aulas',
      heading: 'Ouça na aula. Pesquise a aula inteira depois.',
      lead: 'Grave a aula e encontre o minuto exato em que o professor explicou. O Echo transcreve no seu celular, mesmo sem Wi-Fi no auditório.',
      problemTitle: 'As anotações pegam só metade do que foi dito',
      problem:
        'Enquanto você anota um ponto, o seguinte já passou. Só a gravação também ajuda pouco: ninguém percorre 90 minutos de áudio para achar uma definição. Uma transcrição pesquisável resolve os dois problemas.',
      phone: {
        label: 'Echo mostrando a nota de uma aula com um resumo, uma tarefa de leitura e a transcrição',
        title: 'Microeconomia, semana 6',
        meta: 'Ter, 10:15 · 84 min',
        tag: 'Faculdade',
        summaryLabel: 'Resumo',
        summaryText: 'Elasticidade-preço da demanda e como calculá-la, com o exemplo da tarifa de táxi. As questões da prova seguem a lista de exercícios.',
        tasksLabel: 'Tarefas · 2',
        task1: 'Ler o capítulo 5 antes do seminário',
        task1Reminder: 'Segunda, 9:00',
        task2: 'Entregar a lista de exercícios 3',
        lines: [
          {
            name: 'Professor',
            time: '41:02 – 41:20',
            before: 'Então a elasticidade é a variação percentual da quantidade sobre a variação percentual do preço. ',
            mark: 'Leiam o capítulo cinco até segunda',
            after: ', porque começamos o seminário com ele.',
          },
          {
            name: 'Aluno',
            time: '41:21 – 41:27',
            before: 'Isso também ',
            mark: 'cai na lista de exercícios',
            after: '?',
          },
        ],
      },
      featuresTitle: 'Feito para gravações longas',
      features: [
        {
          title: 'Pesquise cada palavra',
          text: 'A busca vasculha todas as suas transcrições de uma vez e ignora maiúsculas e acentos. Toque em uma linha para ouvi-la.',
        },
        {
          title: 'Leituras e prazos viram tarefas',
          text: 'Quando o professor diz “leiam o capítulo cinco até segunda”, o Echo cria uma tarefa com lembrete.',
        },
        {
          title: 'Escreve os termos certos',
          text: 'Adicione nomes de disciplinas e termos ao Dicionário em Ajustes, e o Whisper os escreve do seu jeito.',
        },
      ],
      faq: [
        {
          q: 'Posso gravar uma aula de 90 minutos?',
          a: 'Sim. A gravação não tem limite de tempo e continua com a tela apagada. Uma aula de 90 minutos ocupa cerca de 21 MB de armazenamento. A versão grátis transcreve os 2 primeiros minutos de cada nota; o Pro transcreve a aula inteira.',
        },
        {
          q: 'Funciona num auditório grande?',
          a: 'Funciona melhor perto de quem fala. Do fundo de um auditório grande, com o microfone captando pouco, espere mais erros; sente-se mais perto ou deixe o celular na mesa da frente.',
        },
        {
          q: 'Em quais idiomas as aulas podem ser?',
          a: `O Whisper transcreve cerca de 100 idiomas e detecta o idioma sozinho. A página de idiomas lista todos.`,
        },
      ],
      related: ['meetings', 'interviews'] as RelatedId[],
    },
    interviews: {
      title: 'App de transcrição privada de entrevistas para Android — Echo',
      description:
        'Transcreva entrevistas no seu celular Android com falantes identificados, prontas para citar. Nada é enviado, então conversas sensíveis ficam com você.',
      eyebrow: 'Entrevistas',
      heading: 'Transcrições de entrevistas com falantes, e nada enviado',
      lead: 'Grave ou importe a entrevista e receba a transcrição separada por falante, pronta para citar. O áudio e o texto ficam no seu celular.',
      problemTitle: 'Conversas sensíveis não devem ficar no servidor de outra pessoa',
      problem:
        'Fontes, pacientes, participantes de pesquisa e candidatos falam com você, não com uma empresa de transcrição. A maioria dos serviços de transcrição envia o áudio para processá-lo. O Echo não o envia a lugar nenhum, então você pode prometer isso e cumprir.',
      phone: {
        label: 'Echo mostrando a nota de uma entrevista com dois falantes, um resumo e uma tarefa de acompanhamento',
        title: 'Entrevista com a enfermeira-chefe',
        meta: 'Seg, 14:30 · 47 min',
        tag: 'Pesquisa',
        summaryLabel: 'Resumo',
        summaryText: 'Em março, os plantões noturnos passaram de três enfermeiras para duas. Ela envia a escala se o nome dela não for usado.',
        tasksLabel: 'Tarefas · 2',
        task1: 'Enviar à Ana as citações para ela conferir',
        task1Reminder: 'Sexta, 9:00',
        task2: 'Pedir a escala de março',
        lines: [
          {
            name: 'Ana',
            time: '12:40 – 12:58',
            before: 'Desde março estamos em duas no plantão noturno, em vez de três. ',
            mark: 'Me mande as citações até sexta',
            after: ' e eu confiro.',
          },
          {
            name: 'Você',
            time: '12:59 – 13:04',
            before: 'Claro. E ',
            mark: 'será que eu poderia ver a escala de março',
            after: '?',
          },
        ],
      },
      featuresTitle: 'O que torna a transcrição citável',
      features: [
        {
          title: 'Falantes com nome',
          text: 'O Echo separa as vozes. Dê um nome a cada falante uma vez e corrija qualquer linha que tenha ido para a pessoa errada.',
        },
        {
          title: 'Cada linha com horário',
          text: 'Cada linha guarda o momento dela na gravação. Toque nela para ouvir as palavras exatas antes de citá-las.',
        },
        {
          title: 'Fica com você',
          text: 'Sem conta e sem upload. Faça backup em um arquivo que fica com você e exclua a nota quando o projeto acabar.',
        },
      ],
      faq: [
        {
          q: 'Posso importar uma entrevista gravada em outro lugar?',
          a: `Sim. O Echo importa MP3, M4A, AAC, WAV, FLAC, OGG e Opus, além do áudio de vídeos MP4 e WebM. Compartilhe o arquivo com o Echo ou use o botão de importar em Notas.`,
        },
        {
          q: 'Qual é a exatidão dos rótulos de falante?',
          a: 'Boa para uma entrevista clara entre duas pessoas, menos confiável com vozes sobrepostas ou muitos falantes. As linhas perto de uma troca de falante são as mais propensas a erro; você pode movê-las com um toque.',
        },
        {
          q: 'Posso exportar a transcrição?',
          a: 'A exportação em texto simples é grátis. Com o Pro, exporte em Markdown, em legendas SRT com tempos ou como o áudio original.',
        },
      ],
      related: ['meetings', 'lectures'] as RelatedId[],
    },
  },


  languages: {
    title: 'Idiomas que o Echo transcreve — fala em texto offline em 100 idiomas',
    heading: 'Idiomas compatíveis',
    description:
      'O Echo transcreve 100 idiomas offline com o Whisper, do inglês e alemão ao esloveno e suaíli. Veja quais idiomas têm texto ao vivo, resumos e tarefas.',
    intro:
      'O Echo transcreve com o Whisper, que conhece 100 idiomas e detecta qual deles você fala. O resultado varia: idiomas muito falados funcionam melhor, e idiomas com poucos dados de treinamento têm mais erros.',
    sections: {
      transcription: {
        title: 'Transcrição',
        text: 'Todos os idiomas abaixo podem ser transcritos offline, a partir de gravações e de arquivos importados.',
      },
      live: {
        title: 'Texto ao vivo e transcrições instantâneas',
        text: 'O texto enquanto você grava, e a transcrição no instante em que você para, vêm do reconhecedor offline do próprio celular. Quais idiomas ele tem depende do seu celular; os Ajustes mostram se o seu está instalado e podem baixá-lo. Os demais idiomas são transcritos pelo Whisper depois que você para.',
      },
      notes: {
        title: 'Resumos e tarefas',
        text: 'Criados para todos os idiomas da lista. A IA de notas padrão os escreve em inglês para notas em outros idiomas e mantém as citações no original. O modelo multilíngue opcional os escreve no idioma da nota.',
      },
      app: {
        title: 'O próprio app',
        text: (list: string) => `Os menus e ajustes do Echo estão disponíveis em ${list}.`,
      },
    },
    listTitle: (count: number) => `Todos os ${count} idiomas`,
  },

  phones: {
    title: 'Requisitos do Echo — celulares Android e modelos compatíveis',
    heading: 'Celulares compatíveis',
    description: `O Echo funciona no Android ${product.minAndroid} ou mais recente. Veja qual modelo de fala o seu celular recebe, quanta RAM resumos e tarefas exigem e quanto espaço os modelos ocupam.`,
    intro: `O Echo exige Android ${product.minAndroid} ou mais recente e um processador ARM de 64 bits, que quase todo celular Android vendido nos últimos anos tem. A memória do seu celular decide quais recursos e modelos você recebe.`,
    tiersTitle: 'O que o seu celular recebe',
    tiersHead: { ram: 'RAM do celular', speech: 'Modelo de fala', notes: 'Resumos e tarefas' },
    tiers: [
      { ram: 'Menos de 4 GB', speech: 'Whisper Small ou Base', notes: 'Indisponível' },
      { ram: '4 a 6 GB', speech: 'Whisper Small ou Base', notes: 'Sim' },
      { ram: '8 GB ou mais', speech: 'Whisper Large V3 Turbo, ou Medium, Small ou Base', notes: 'Sim' },
    ],
    tiersNote:
      'O Echo escolhe o primeiro modelo da lista; você pode mudar em Ajustes, Modelo de fala. Os celulares informam um pouco menos de memória do que a caixa diz, então um celular de 8 GB conta como 8 GB.',
    recognizerTitle: 'O reconhecedor do próprio celular',
    recognizer:
      'No Android 13 e mais recente, muitos celulares têm um reconhecedor de fala offline embutido. Quando ele tem o seu idioma, o Echo o usa para o texto ao vivo e para uma transcrição instantânea, e usa o Whisper para importações ou quando você pede. Celulares sem ele usam o Whisper para tudo.',
    storageTitle: 'Armazenamento',
    storageHead: { item: 'Download', size: 'Tamanho' },
    storage: [
      { item: 'Whisper Large V3 Turbo', size: '574 MB' },
      { item: 'Whisper Medium', size: '539 MB' },
      { item: 'Whisper Small', size: '190 MB' },
      { item: 'Whisper Base', size: '60 MB' },
      { item: 'Detecção de falantes', size: '42 MB' },
      { item: 'IA de notas (Qwen3 1.7B)', size: '977 MB' },
      { item: 'IA de notas multilíngue (Gemma 4 E2B), opcional', size: '2,6 GB' },
      { item: 'Gravações', size: 'Cerca de 14 MB por hora' },
    ],
    storageNote: 'Só o modelo Whisper em uso fica no celular. Ao trocar, o novo é baixado e o antigo é removido.',
    speedTitle: 'Velocidade',
    speed:
      'Num Samsung Galaxy S24, o Whisper Large V3 Turbo leva de 33 a 50 segundos para cada 30 segundos de áudio, então uma transcrição leva cerca de tanto tempo quanto a gravação, ou mais. O Whisper Small leva cerca de 11 segundos. Os celulares ficam mais lentos quando esquentam, por exemplo num carregador sem fio.',
    testedTitle: 'Celulares testados',
    tested: (email: string) =>
      `Testamos o Echo em um Samsung Galaxy S24. Se ele não funcionar bem no seu celular, escreva para ${email} com o nome do modelo e vamos investigar.`,
  },
};
