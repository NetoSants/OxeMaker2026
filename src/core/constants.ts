import {
  EventGeneralInfo,
  MetricProof,
  FeatureHighlight,
  ScheduleItem,
  RoboticsTournament,
  GeekCategory,
  Workshop,
  OxethonInfo,
  TimelineMilestone,
  FounderTribute,
  SponsorTier,
  GalleryItem,
} from './types';
import { img } from './images';
import {
  EVENT_DATE,
  EVENT_TIME,
  PROGRAM_TIMES,
  REGISTRATION_DEADLINE,
} from './eventMeta';

/**
 * ============================================================================
 * ÔXE MAKER 2026 — DADOS GERAIS DO EVENTO (CONFIGURAÇÃO CENTRALIZADA)
 * Todos os textos, datas, locais e links do site são editáveis neste arquivo.
 * ============================================================================
 */

export const EVENT_INFO: EventGeneralInfo = {
  name: 'Ôxe Maker — Mostra de Robótica Educacional',
  shortName: 'Ôxe Maker 2026',
  edition: '6ª Edição',
  year: 2026,
  tagline: 'Metropolitana Norte · Vidas · Escolas · Comunidade',
  theme2026: 'Vidas, Escolas e Comunidades: Educar para a Promoção da Justiça Socioambiental',
  organizer: 'GRE Metropolitana Norte',
  organizerFullName: 'Gerência Regional de Educação Metropolitana Norte · Secretaria de Educação e Esportes de Pernambuco',
  dates: {
    display: EVENT_DATE.long,
    day1: EVENT_DATE.full,
    isoStartDate: EVENT_DATE.iso,
    timeRange: EVENT_TIME.display,
  },
  location: {
    venue: 'ETE José de Alencar',
    fullName: 'Escola Técnica Estadual (ETE) José de Alencar Gomes da Silva',
    space: 'Frente da escola, ginásio, pátio e cafeteria',
    street: 'Rua João Francisco Batista, 170',
    neighborhood: 'Janga',
    city: 'Paulista',
    state: 'PE',
    cep: '53439-410',
    fullAddress: 'Rua João Francisco Batista, 170 — Janga, Paulista – PE, 53439-410',
    // Embed URL for Google Maps
    googleMapsEmbedUrl:
      'https://www.google.com/maps?q=ETE+Jos%C3%A9+de+Alencar+Gomes+da+Silva,+Janga,+Paulista,+PE,+53439-410&output=embed',
    googleMapsDirectionsUrl:
      'https://maps.google.com/?q=ETE+José+de+Alencar+Gomes+da+Silva,+Rua+João+Francisco+Batista,+170,+Janga,+Paulista,+PE,+53439-410',
    referencePoints: [
      'Localizada na Rua João Francisco Batista, 170 — Janga, Paulista-PE',
      'Acesso pela Av. Dr. Cláudio José Gueiros Leite (Janga)',
      'Credenciamento na frente do evento (a partir das 07h00)',
    ],
    transitTips: [
      {
        title: 'Ônibus',
        description:
          'Linhas que circulam pela Av. Dr. Cláudio José Gueiros Leite e pelo Janga deixam passageiros nas proximidades da escola. Confirme o trajeto com sua escola ou transporte da região.',
      },
      {
        title: 'Caravana Escolar',
        description:
          'Escolas da rede podem se organizar em caravanas com ônibus próprio. O embarque e desembarque devem ser combinados com a coordenação do evento.',
      },
      {
        title: 'Chegada Antecipada',
        description:
          'O credenciamento acontece das 07h00 às 08h00 na frente do evento. Chegue antes das 08h00 para não perder a abertura cultural.',
      },
    ],
  },
  contact: {
    email: 'oxemaker@gremetronorte.pe.gov.br',
    instagram: '@oxemaker.oficial',
    youtube: 'youtube.com/@GREMetropolitanaNorte',
    phone: '(81) 3183-8400',
  },
  links: {
    oficineirosRegistration: 'https://forms.gle/oxemaker2026-oficineiros',
    mostraRegistration: '',
    palestrantesRegistration: 'https://forms.gle/oxemaker2026-palestrantes',
    visitantesRegistration: '',
  },
};

/**
 * ============================================================================
 * NÚMEROS E PROVAS SOCIAIS
 * ============================================================================
 */
export const METRICS_DATA: MetricProof[] = [
  {
    id: 'alunos',
    value: 2000,
    suffix: '+',
    label: 'Estudantes Impactados',
    description: 'Jovens cientistas e inventores da rede pública estadual.',
  },
  {
    id: 'escolas',
    value: 58,
    suffix: '+',
    label: 'Escolas Parceiras',
    description: 'Polos de ensino integral, regulares e técnicas de Pernambuco.',
  },
  {
    id: 'competicoes',
    value: 6,
    suffix: '+',
    label: 'Competições & Desafios',
    description: 'Modalidades de robótica, dança e cultura geek.',
  },
  {
    id: 'projetos',
    value: 90,
    suffix: '+',
    label: 'Projetos Makers',
    description: 'Soluções reais para sustentabilidade, clima e inclusão.',
  },
  {
    id: 'visitantes',
    value: 10000,
    suffix: '+',
    label: 'Visitantes em 2025',
    description: 'Comunidade escolar, famílias e entusiastas de tecnologia.',
  },
];

/**
 * ============================================================================
 * 6 DESTAQUES DA HOME
 * ============================================================================
 */
export const HIGHLIGHTS_DATA: FeatureHighlight[] = [
  {
    id: 'oficinas',
    title: 'Oficinas Práticas Mão na Massa',
    description:
      'Oficina de robótica e cultura maker com atividades práticas para alunos e professores da rede.',
    iconName: 'Wrench',
    link: '/oficinas',
    tag: 'Laboratórios Vivos',
    accentColor: 'yellow',
  },
  {
    id: 'conexoes',
    title: 'Conexões que Transformam',
    description:
      'Estudantes, professores e convidados se encontram em um único dia de trocas, ideias e protagonismo juvenil.',
    iconName: 'Network',
    link: '/sobre',
    tag: 'Impacto Social',
    accentColor: 'cyan',
  },
  {
    id: 'torneios',
    title: 'Torneios de Robótica',
    description:
      'Competições de seguidor de linha Buzz Line e Buzz PRO e duelo de Sumô de Robôs, além das disputas geek.',
    iconName: 'Bot',
    link: '/torneio',
    tag: 'Arenas Dinâmicas',
    accentColor: 'yellow',
  },
  {
    id: 'hackathon',
    title: 'Hackathon Ôxe Maker',
    description:
      `As equipes apresentam seus projetos no grande pitch do Hackathon, às ${PROGRAM_TIMES.pitch.startLabel} do dia ${EVENT_DATE.dayMonthLong}.`,
    iconName: 'Cpu',
    link: '/oxethon',
    tag: 'Pitch Final',
    accentColor: 'cyan',
  },
  {
    id: 'mostra',
    title: 'Mostra de Projetos Científicos',
    description: 'Estudantes do ensino fundamental e médio apresentando protótipos funcionais, automação agrícola e reciclagem técnica.',
    iconName: 'Sparkles',
    link: '/programacao',
    tag: 'Inovação Aberta',
    accentColor: 'blue',
  },
  {
    id: 'premiacoes',
    title: 'Premiações & Reconhecimento',
    description: 'Troféus de design ecológico, medalhas de mérito técnico, kits de componentes eletrônicos e bolsas de mentoria.',
    iconName: 'Trophy',
    link: '/torneio',
    tag: 'Celebração Maker',
    accentColor: 'yellow',
  },
];

/**
 * ============================================================================
 * PROGRAMAÇÃO OFICIAL (DIA ÚNICO)
 * ============================================================================
 */
export const SCHEDULE_DATA: ScheduleItem[] = [
  {
    id: 'd1-1',
    day: 'day1',
    time: '07h00 - 08h00',
    title: 'Credenciamento',
    description: 'Local para credenciamento dos inscritos, na frente do evento.',
    category: 'cerimonia',
    location: 'Frente da ETE José de Alencar',
  },
  {
    id: 'd1-2',
    day: 'day1',
    time: '08h30 - 09h00',
    title: 'Abertura Cultural',
    description: 'Abertura com danças e ações culturais.',
    category: 'cerimonia',
    location: 'Palco principal',
  },
  {
    id: 'd1-3',
    day: 'day1',
    time: '09h00 - 09h30',
    title: 'TED Talks / Palestra Breve',
    description: 'Palestra breve (preferencialmente Laís – Tech Woman).',
    category: 'palestras',
    location: 'Palco principal',
    speakerOrHost: 'Laís — Tech Woman',
  },
  {
    id: 'd1-4',
    day: 'day1',
    time: '09h30 - 10h00',
    title: 'Lanche',
    description: 'Momento de pausa para os alunos lancharm.',
    category: 'cerimonia',
    location: 'Cafeteria',
  },
  {
    id: 'd1-5',
    day: 'day1',
    time: '10h00 - 12h00',
    title: 'Oficinas',
    description: 'Oficina de robótica e cultura maker.',
    category: 'oficinas',
    location: 'Salas de oficina',
  },
  {
    id: 'd1-6',
    day: 'day1',
    time: '12h00 - 13h00',
    title: 'Almoço',
    description: 'Intervalo para almoço na cafeteria.',
    category: 'cerimonia',
    location: 'Cafeteria',
  },
  {
    id: 'd1-7',
    day: 'day1',
    time: '13h00 - 14h30',
    title: 'Mostra de Projetos',
    description: 'Momento de apresentação dos projetos para a banca.',
    category: 'mostra',
    location: 'Área da Mostra',
  },
  {
    id: 'd1-8',
    day: 'day1',
    time: '14h30 - 15h30',
    title: 'Competições & Geek',
    description:
      'Competições de Buzz Line (linha mais simples), Buzz PRO (linha mais complexa), Sumô de Robôs, Dança K-POP e Cosplay.',
    category: 'robotica',
    location: 'Arena de Competições',
  },
  {
    id: 'd1-9',
    day: 'day1',
    time: '15h30 - 16h00',
    title: 'Lanche',
    description: 'Momento de pausa para os alunos lancharm.',
    category: 'cerimonia',
    location: 'Cafeteria',
  },
  {
    id: 'd1-10',
    day: 'day1',
    time: '16h00 - 17h00',
    title: 'Apresentação do Pitch do Hackathon',
    description: 'Apresentação dos projetos das equipes do Hackathon Ôxe Maker.',
    category: 'palestras',
    location: 'Palco principal',
  },
  {
    id: 'd1-11',
    day: 'day1',
    time: '17h00 - 18h00',
    title: 'Cerimônia de Premiação',
    description: 'Momento de entrega das premiações e encerramento do evento.',
    category: 'cerimonia',
    location: 'Palco principal',
  },
];

/**
 * ============================================================================
 * 5 COMPETIÇÕES DE ROBÓTICA
 * ============================================================================
 */
export const TOURNAMENTS_DATA: RoboticsTournament[] = [
  {
    id: 'buzz-line',
    name: 'Buzz Line Júnior',
    category: 'Seguidor de Linha',
    description: 'Robôs autônomos que percorrem circuitos demarcados por fita preta em pista branca com curvas acentuadas, cruzamentos e pequenos obstáculos.',
    requirements: [
      'Controle 100% autônomo (sem controle remoto)',
      'Dimensões máximas: 25cm x 25cm na largada',
      'Tensão máxima de alimentação: 12.6V',
      'Plataforma livre (Arduino, ESP32, Raspberry Pi Pico ou circuitos discretos)',
    ],
    arenaDetails: 'Pista de MDF fosco de 3m x 2m com curvas de raio fechado e marcas de parada reflexiva.',
    maxTeamSize: 4,
    scheduleTime: `${EVENT_DATE.short} · Competições & Geek (${PROGRAM_TIMES.competitions.label})`,
    editalPdfUrl: 'https://drive.google.com/file/d/1lVZgVDc12WPgL4cuI6OS7jVz8TeFCSxc/view?usp=drive_link',
    registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdFEmR2FsT9fwvZZjLlXCztOeZimsvnidaMZOBrRYKDA3u_Kg/viewform',
    prizeSummary: '1º, 2º e 3º Lugares com Troféu Maker 3D, medalhas e Kits de Sensores Analógicos e Digitais.',
    icon: 'Navigation',
    image: img('buzzline.webp'),
  },
  {
    id: 'buzz-pro',
    name: 'Buzz PRO Alta Performance',
    category: 'Seguidor de Linha Avançado',
    description: 'Categoria de altíssima velocidade com algoritmos PID refinados, freio por turbina aerodinâmica e leitura óptica em milissegundos.',
    requirements: [
      'Tempo de volta cronometrado por barreiras infravermelhas de laser',
      'Largura máxima: 20cm · Comprimento livre até 30cm',
      'Permitida turbina de sucção (downforce)',
      'Registro obrigatório de código-fonte aberto para fins educativos',
    ],
    arenaDetails: 'Pista profissional de 6m com desnível suave, curvas parabólicas e retas de arrancada.',
    maxTeamSize: 4,
    scheduleTime: `${EVENT_DATE.short} · Competições & Geek (${PROGRAM_TIMES.competitions.label})`,
    editalPdfUrl: 'https://drive.google.com/file/d/1lVZgVDc12WPgL4cuI6OS7jVz8TeFCSxc/view?usp=drive_link',
    registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSdFEmR2FsT9fwvZZjLlXCztOeZimsvnidaMZOBrRYKDA3u_Kg/viewform',
    prizeSummary: 'Troféus, medalhas e kits de componentes eletrônicos para os vencedores.',
    icon: 'Zap',
    image: img('buzzpro.webp'),
  },
  {
    id: 'sumo',
    name: 'Sumô de Robôs',
    category: 'Arremesso & Estratégia',
    description: 'Duelos entre dois robôs em uma arena, com o objetivo de arrastar o adversário para fora. Cada batalha pode ter até 3 rounds, vencendo quem conquistar 2 primeiro.',
    requirements: [
      'Carenagem sem metal: use madeira, papelão, plástico e outros materiais',
      'Apenas motor DC 3V–6V amarelo, sem modificações na caixa de redução',
      'Peso máximo de 1500g',
      'Dimensões máximas: 25cm de comprimento × 25cm de largura × 20cm de altura, incluindo arma passiva',
      'Armas funcionais proibidas; armas passivas devem estar travadas externamente e visíveis ao juiz',
      'Proibido usar ligas, materiais grudentos ou fitas para aumentar a aderência das rodas',
    ],
    arenaDetails: 'Arena preferencialmente circular, com 70cm a 150cm de diâmetro. A marcação de início fica entre 10cm e 30cm da linha de contorno.',
    maxTeamSize: 4,
    scheduleTime: `${EVENT_DATE.short} · Competições & Geek (${PROGRAM_TIMES.competitions.label})`,
    editalPdfUrl: 'https://drive.google.com/file/d/1PtF4WqOwho7xJwdD9exidnyD51Qw-SgD/view?usp=drive_link',
    registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSeOckNfYCA_BdjSqGzWB88LSFskNIXUzmN4hGjTZ1QBykE2VQ/viewform',
    prizeSummary: 'Troféus dos Guerreiros do Mangue, motores de alto torque N20 e pontes H profissionais.',
    icon: 'Shield',
    image: img('sumo.webp'),
  },
];

/**
 * ============================================================================
 * 2 CATEGORIAS GEEK (COSPLAY E K-POP)
 * ============================================================================
 */
export const GEEK_CATEGORIES: GeekCategory[] = [
  {
    id: 'cosplay',
    name: 'Concurso Cosplay Ôxe Maker',
    subtitle: 'Criatividade, Caracterização & Performance',
    description: 'Celebração da cultura pop onde os estudantes se transformam em personagens de animes, mangás, games, HQs e universos geek.',
    criteria: [
      'Fidelidade e Acabamento da Fantasia (40%)',
      'Criatividade no uso de materiais makers e recicláveis (20%)',
      'Interpretação e Presença de Palco (30%)',
      'Empatia e Respeito às Normas do Evento (10%)',
    ],
    rulesHighlight: [
      'Inscrições limitadas a 40 participantes',
      'Armas cenográficas de metal cortante ou fogo são terminantemente proibidas',
      'Apresentações individuais (até 1min30s) e duplas (até 2min30s)',
      'Camarim climatizado para preparação dos participantes no local',
    ],
    scheduleTime: `${EVENT_DATE.weekdayShort}, ${EVENT_DATE.dayMonthLong} · Competições & Geek (${PROGRAM_TIMES.competitions.label})`,
    stage: 'ETE José de Alencar · Paulista-PE',
    registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSd4R3JcsSD_8gPA9DwBJ3HMes4C9Z5YwhQk57AadqcZn6wGug/viewform',
    rulesPdfUrl: 'https://docs.google.com/document/d/1JSj1mhJ9lFLgzRjuAn0TOssGCi1vxQWWEfx3_X4xXjQ/edit?usp=drivesdk',
    prizes: '1º Lugar: R$ 800 em vales geek + Troféu Calango Dourado; 2º e 3º Lugares: Vales e Colecionáveis.',
    image: img('calango-cosplay.webp'),
  },
  {
    id: 'kpop',
    name: 'Mostra & Torneio K-Pop Dance Cover',
    subtitle: 'Sincronia, Energia & Expressão Corporal',
    description: 'O palco ferve com coreografias das principais bandas e solistas da música pop coreana, revelando o talento rítmico dos jovens da rede pública.',
    criteria: [
      'Precisão da Coreografia e Sincronia (40%)',
      'Expressão Facial e Carisma Cênico (30%)',
      'Figurino e Caracterização do Grupo (20%)',
      'Harmonia de Grupo / Ocupação de Espaço (10%)',
    ],
    rulesHighlight: [
      'Modalidades: Solo e Grupos (de 2 a 9 integrantes)',
      'Tempo máximo de música: 4 minutos em áudio enviado previamente em alta qualidade (MP3)',
      `Ensaios e reconhecimento de palco combinados com a coordenação no dia ${EVENT_DATE.short}`,
    ],
    scheduleTime: `${EVENT_DATE.weekdayShort}, ${EVENT_DATE.dayMonthLong} · Competições & Geek (${PROGRAM_TIMES.competitions.label})`,
    stage: 'ETE José de Alencar · Paulista-PE',
    registrationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSftjJcV2ciOO2Jt0uWN0yAHIclFtr2uDcjy8teEm8q85WaJpA/viewform',
    rulesPdfUrl: 'https://docs.google.com/document/d/1d6mWJLKoLgf8ZDlmRN20hzaPcGI9Z9x8uqQV5iptbZc/edit?usp=drivesdk',
    prizes: 'Troféus para Campeão Solo e Campeão Grupo + Vales em lojas de dança e kits culturais.',
    image: img('k-pop.webp'),
  },
];

/**
 * ============================================================================
 * HACKATHON ÔXE MAKER (PITCH FINAL)
 * ============================================================================
 */
export const OXETHON_INFO: OxethonInfo = {
  title: 'Hackathon Ôxe Maker',
  description:
    `As equipes do Hackathon Ôxe Maker apresentam seus projetos no grande pitch, no dia ${EVENT_DATE.long}, das ${PROGRAM_TIMES.pitch.range}, logo antes da cerimônia de premiação.`,
  stages: [
    {
      phase: 'Apresentação do Pitch do Hackathon',
      time: `${EVENT_DATE.weekdayShort}, ${EVENT_DATE.short} · ${PROGRAM_TIMES.pitch.range}`,
      description:
        'Momento de apresentação dos projetos das equipes, seguido da cerimônia de premiação às 17h00.',
    },
  ],
  regulationsSummary: [
    `As inscrições de equipes e projetos são feitas até ${REGISTRATION_DEADLINE.long} pelos formulários oficiais.`,
    'Mais detalhes do regulamento do Hackathon serão divulgados pela coordenação.',
    'Menores de idade devem apresentar autorização dos responsáveis no credenciamento (07h00 às 08h00).',
  ],
  slogan: 'O Hackathon Arretado',
  story:
    `O Ôxethon é o hackathon do Ôxe Maker e acontece dentro da programação do evento, no dia ${EVENT_DATE.dayMonthLong}. Equipes multidisciplinares criam soluções tecnológicas que impactem positivamente a comunidade local e apresentam seus projetos no pitch final, às 16h. É o lugar onde o código encontra a realidade e a inovação acontece na prática.`,
  registrationUrl: 'https://forms.gle/oxemaker2026-oficineiros',
  regulationsUrl: '#regulamento-oxethon',
  image: img('oxethon.webp'),
};

/**
 * ============================================================================
 * OFICINA OFICIAL (DIA DO EVENTO)
 * ============================================================================
 */
const WORKSHOP_REGISTRATION_URLS: Record<string, string> = {
  'arduino-tinkercad-abp':
    'https://docs.google.com/forms/d/e/1FAIpQLScKGG3F9u9iQzmZKHh-ZoatSGR4ZylxicHKb54puLOsW5BOYA/viewform?usp=dialog',
  'prompt-zero-aplicacao':
    'https://docs.google.com/forms/d/e/1FAIpQLSezOl76CDoOwKVGSma7u2LbgalVOVJ9Xls5kPBt9Sh_Y2gFyQ/viewform?usp=dialog',
  'pixel-medicamento':
    'https://docs.google.com/forms/d/e/1FAIpQLSfFwW7HZOoWai2SRj-eq85SJ3WXxJW1z0A-lhbaDtSj64PXGg/viewform?usp=dialog',
  'eletronica-sem-misterio':
    'https://docs.google.com/forms/d/e/1FAIpQLScAw27o0PQrlRsYiN3IEo_W9Iv45pr_fFaK1JLfBJhKg47oBw/viewform?usp=dialog',
  'futcar-futebol-robos':
    'https://docs.google.com/forms/d/e/1FAIpQLScfUhccS1wIyoVqirBU3nK40IoYPVaYokriYaVFBRpefWma5g/viewform?usp=dialog',
  'microbit-primeiros-passos':
    'https://docs.google.com/forms/d/e/1FAIpQLSeafZrarPQAZh_1D548uZyStg7UkBAk9ENKG10za0nF9IuRZA/viewform?usp=dialog',
  'mundo-3d':
    'https://docs.google.com/forms/d/e/1FAIpQLSeGAyusyzXQzeUubB3Z_cKj8XpW1HD5g55Q_ldGWM9Wj63Qfw/viewform?usp=dialog',
  'robos-manipuladores':
    'https://docs.google.com/forms/d/e/1FAIpQLSf60CKRQ0-hbYSWJIj63KX2XUruvhOB-yYdqfYLRvbzlqkm3A/viewform?usp=dialog',
  'tecnologias-assistivas-acessibilidade-digital':
    'https://docs.google.com/forms/d/e/1FAIpQLSevq7kQTgexLlctEZ3HNsmnv3v4gIZlnWDW8r9pc6k7p8vbLA/viewform?usp=dialog',
  'recomposicao-aprendizagem-diagnosticos':
    'https://docs.google.com/forms/d/e/1FAIpQLSdxK9nsjKYDrUW1RnVGPXAUsftweEMY8mvfwVovinGV55AMfA/viewform?usp=dialog',
  'solarisando-bioglow':
    'https://docs.google.com/forms/d/e/1FAIpQLScjvSUQxqdvOaO9NJjjEs1AmwtlRptaWAIuLL2jr_1KKg-1lw/viewform?usp=dialog',
  'monitoramento-climatico-iot':
    'https://docs.google.com/forms/d/e/1FAIpQLSeTkz2Ty1TKUkRAanmzYRzCq95vqQbkODcA2eDD5MNlFR-6Lg/viewform?usp=dialog',
  'introducao-arduino':
    'https://docs.google.com/forms/d/e/1FAIpQLSc5azkSINDVZ1TI0xf2fVkYR0mQREK3covcMMtVvqG5mUl-xg/viewform?usp=dialog',
};

export const WORKSHOPS_DATA: Workshop[] = [
  {
    id: 'arduino-tinkercad-abp',
    title: 'Construção de Projetos com Arduino Utilizando Tinkercad e ABP',
    description:
      'Uso do Tinkercad para criação e simulação de projetos com Arduino, explorando modelagem de circuitos elétricos, lógica de programação e algoritmos em blocos. A proposta permite compreender, testar e aprimorar projetos de forma prática, dinâmica e interativa.',
    schedule: `${EVENT_DATE.dayMonthLong} · horário a definir`,
    room: 'Salas de oficina · ETE José de Alencar',
    targetAudience: 'Estudantes e professores da rede estadual.',
    school: 'EREM Professor Estevão Pinto',
    instructor: {
      name: 'Mario Barbosa Monteiro',
      role: 'Oficineiro',
      institution: 'EREM Professor Estevão Pinto',
      bio: 'Responsável pela oficina.',
    },
    materialsProvided: ['Computadores', 'Acesso ao Tinkercad pelo navegador'],
    equipment: ['Projetor', 'Internet'],
    software: 'Tinkercad (navegador de internet)',
  },
  {
    id: 'prompt-zero-aplicacao',
    title: 'Prompt: do Zero até a aplicação em sala de aula e no cotidiano escolar',
    description:
      'Criação, refino e validação de prompts para diferentes atividades pedagógicas, desde a produção de vídeos curtos até a elaboração de atividades.',
    schedule: `${EVENT_DATE.dayMonthLong} · horário a definir`,
    room: 'Salas de oficina · ETE José de Alencar',
    targetAudience: 'Professores e estudantes interessados em inteligência artificial.',
    school: 'EREM Áurea de Moura Cavalcanti',
    instructor: {
      name: 'João Bosco da Silva Junior',
      role: 'Oficineiro',
      institution: 'EREM Áurea de Moura Cavalcanti',
      bio: 'Responsável pela oficina.',
    },
    materialsProvided: ['Smartphone ou notebook'],
    equipment: ['Projetor ou TV', 'Extensão', 'Internet'],
    software: 'ChatGPT e NotebookLM',
  },
  {
    id: 'pixel-medicamento',
    title: 'Do Pixel ao Medicamento: Transformando o Celular em um Laboratório de Análise Digital',
    description:
      'Oficina prática que usa a câmera do smartphone e aplicativos de leitura de cor para demonstrar conceitos de óptica, espectrofotometria e Lei de Beer-Lambert na análise de soluções coloridas, conectando química, física, saúde e tecnologia.',
    schedule: `${EVENT_DATE.dayMonthLong} · horário a definir`,
    room: 'Salas de oficina · ETE José de Alencar',
    targetAudience: 'Estudantes e professores do ensino médio.',
    school: 'ETE Pastor Isaac Martins Rodrigues',
    instructor: {
      name: 'Luiz Pereira',
      role: 'Oficineiro',
      institution: 'ETE Pastor Isaac Martins Rodrigues',
      bio: 'Responsável pela oficina.',
    },
    materialsProvided: [
      'Smartphones dos participantes com acesso à internet',
      'Aplicativo de leitura de cor (Color Meter)',
      'Mesa com iluminação constante',
    ],
    equipment: ['Projetor (Datashow)', 'Internet', 'Tomadas e extensões'],
    software: 'Color Meter, Word, PowerPoint e Excel',
  },
  {
    id: 'eletronica-sem-misterio',
    title: 'Eletrônica sem Mistério',
    description:
      'Oficina de eletrônica básica voltada para a robótica, com montagem de circuitos simples e dinâmicos para tornar o aprendizado mais interativo e prático.',
    schedule: `${EVENT_DATE.dayMonthLong} · horário a definir`,
    room: 'Salas de oficina · ETE José de Alencar',
    targetAudience: 'Estudantes e professores da rede estadual.',
    school: 'ETE Pastor Isaac Martins Rodrigues',
    instructor: {
      name: 'Ítalo Remígio e equipe',
      role: 'Oficineiro',
      institution: 'ETE Pastor Isaac Martins Rodrigues',
      bio: 'Responsável pela oficina.',
    },
    materialsProvided: [
      '10 placas Arduino e 10 protoboards',
      '10 ferros de solda e 1 tubo de estanho',
      '15 baterias 18650',
      '30 jumpers, 20 LEDs, resistores, capacitores, diodos, transistores e MOSFETs',
      '10 pontes H',
    ],
    equipment: ['Internet', '1 TV', '2 cabos HDMI', '3 extensões'],
    software: 'Arduino IDE',
  },
  {
    id: 'futcar-futebol-robos',
    title: 'FutCar – Futebol de Robôs',
    description:
      'Montagem de robôs LEGO para competição de futebol e programação no aplicativo, com foco em construção, movimentação e trabalho em equipe.',
    schedule: `${EVENT_DATE.dayMonthLong} · horário a definir`,
    room: 'Salas de oficina · ETE José de Alencar',
    targetAudience: 'Estudantes e professores da rede estadual.',
    school: 'EREM Alberto Augusto de Morais Pradines',
    instructor: {
      name: 'Maria José Ivo de Oliveira e estudantes',
      role: 'Oficineira',
      institution: 'EREM Alberto Augusto de Morais Pradines',
      bio: 'Responsável pela oficina.',
    },
    materialsProvided: ['2 kits LEGO NXT'],
    equipment: ['Internet'],
    software: 'Não requer software específico',
  },
  {
    id: 'microbit-primeiros-passos',
    title: 'Primeiros passos na programação: descobrindo o micro:bit',
    description:
      'Apresentação da placa micro:bit, seus botões, LEDs e sensores; exploração da plataforma MakeCode; criação da primeira programação em blocos e teste do projeto no simulador ou na placa física.',
    schedule: `${EVENT_DATE.dayMonthLong} · horário a definir`,
    room: 'Salas de oficina · ETE José de Alencar',
    targetAudience: 'Estudantes e professores da rede estadual.',
    school: 'EREM Maria Gayão Pessoa Guerra',
    instructor: {
      name: 'Eloyse Cordeiro da Silva e equipe',
      role: 'Oficineira',
      institution: 'EREM Maria Gayão Pessoa Guerra',
      bio: 'Responsável pela oficina.',
    },
    materialsProvided: ['Computadores', 'Kits com placas micro:bit'],
    equipment: ['Internet'],
    software: 'MakeCode para micro:bit',
  },
  {
    id: 'mundo-3d',
    title: 'Mundo 3D',
    description:
      'Oficina de introdução ao universo 3D, com fundamentos da modelagem e da percepção espacial. A atividade combina demonstrações e práticas com caneta 3D e óculos de realidade virtual Meta Quest para explorar criação digital, tridimensionalidade e experiências imersivas.',
    schedule: `${EVENT_DATE.dayMonthLong} · horário a definir`,
    room: 'Salas de oficina · ETE José de Alencar',
    targetAudience: 'Estudantes e professores da rede estadual.',
    instructor: {
      name: 'João Brasil',
      role: 'Instrutor',
      institution: '+Maker',
      bio: 'João Brasil integra a +Maker e conduz a oficina Mundo 3D.',
    },
    materialsProvided: ['Caneta 3D', 'Óculos de realidade virtual Meta Quest'],
    equipment: ['Caneta 3D', 'Meta Quest'],
    software: 'Aplicativos do Meta Quest',
  },
  {
    id: 'robos-manipuladores',
    title: 'Robôs Manipuladores',
    description:
      'Controle de um robô manipulador de 3 graus de liberdade com garra, abordando noções básicas de Arduino, acionamento de servomotores e leitura de joystick analógico.',
    schedule: `${EVENT_DATE.dayMonthLong} · horário a definir`,
    room: 'Salas de oficina · ETE José de Alencar',
    targetAudience: 'Estudantes e professores da rede estadual.',
    instructor: {
      name: 'João Paulo Cerquinho Cajueiro',
      role: 'Oficineiro',
      institution: 'DEMEC/UFPE',
      bio: 'Responsável pela oficina.',
    },
    materialsProvided: ['4 kits de robôs manipuladores', '4 computadores para programação'],
    equipment: ['Tomadas', 'Internet para instalar o Arduino'],
    software: 'Arduino',
  },
  {
    id: 'tecnologias-assistivas-acessibilidade-digital',
    title: 'Tecnologias Assistivas e Acessibilidade Digital',
    description:
      'Oficina de acessibilidade digital para todos, com introdução a recursos e soluções tecnológicas que ampliam a inclusão e a autonomia de pessoas com deficiência.',
    schedule: `${EVENT_DATE.dayMonthLong} · horário a definir`,
    room: 'Salas de oficina · ETE José de Alencar',
    targetAudience: 'Estudantes e professores da rede estadual.',
    school: 'EREM José',
    instructor: {
      name: 'Luiza Pereira',
      role: 'Oficineira',
      institution: 'EREM José',
      bio: 'Responsável pela oficina.',
    },
    materialsProvided: ['Computador', 'Internet'],
    equipment: ['Projetor'],
    software: 'Python',
  },
  {
    id: 'recomposicao-aprendizagem-diagnosticos',
    title: 'Recomposição da Aprendizagem: como transformar diagnósticos em decisões pedagógicas',
    description:
      'Oficina para gestores escolares sobre como usar evidências de aprendizagem para identificar lacunas e orientar ações de recomposição, conectando diagnósticos à tomada de decisão pedagógica.',
    schedule: `${EVENT_DATE.dayMonthLong} · horário a definir`,
    room: 'Salas de oficina · ETE José de Alencar',
    targetAudience: 'Gestores escolares e professores.',
    instructor: {
      name: 'Cássio Kennedy',
      role: 'Oficineiro',
      institution: 'Dulino',
      bio: 'Responsável pela oficina.',
    },
    materialsProvided: ['Cadeiras', 'Mesas para grupos de 4 pessoas', 'Extensão'],
    equipment: ['Projetor', 'Tomada', 'Internet', 'Notebook a cada 4 pessoas'],
    software: 'Google Chrome',
  },
  {
    id: 'solarisando-bioglow',
    title: 'Solarisando a Bioglow',
    description:
      'Atividade inspirada na FIRST LEGO League Challenge: capacitação em robótica LEGO, programação, montagem de anexos e uma competição prática com o tapete oficial BIOGLOW 2026/2027.',
    schedule: `${EVENT_DATE.dayMonthLong} · horário a definir`,
    room: 'Salas de oficina · ETE José de Alencar',
    targetAudience: 'Estudantes e professores da rede estadual.',
    school: 'ETE Pastor Isaac Martins Rodrigues',
    instructor: {
      name: 'Letícia Vitória Martins Correia',
      role: 'Oficineira',
      institution: 'ETE Pastor Isaac Martins Rodrigues',
      bio: 'Responsável pela oficina.',
    },
    materialsProvided: ['LEGO, NXT e EV3', 'Computador', 'Tapete oficial BIOGLOW 2026/2027'],
    equipment: ['Computador', 'Projetor', 'Internet'],
    software: 'MINDSTORMS',
  },
  {
    id: 'monitoramento-climatico-iot',
    title: 'Monitoramento Climático e IoT na Prática',
    description:
      'Montagem de uma estação microclimática com ESP32/ESP8266, leitura de sensores ambientais e envio de dados em tempo real para a nuvem usando MQTT, com visualização de gráficos ao vivo.',
    schedule: `${EVENT_DATE.dayMonthLong} · horário a definir`,
    room: 'Salas de oficina · ETE José de Alencar',
    targetAudience: 'Estudantes e professores da rede estadual.',
    school: 'EREM Maestro Nelson Ferreira',
    instructor: {
      name: 'Felipe Pessoa da Silva',
      role: 'Oficineiro',
      institution: 'EREM Maestro Nelson Ferreira',
      bio: 'Responsável pela oficina.',
    },
    materialsProvided: ['Notebooks', 'Jumpers para Arduino'],
    equipment: ['Projetor', 'Extensão', 'Notebooks ou computadores', 'Internet'],
    software: 'Arduino',
  },
  {
    id: 'introducao-arduino',
    title: 'Introdução ao Arduino',
    description:
      'Introdução à eletrônica básica e ao Arduino, com uso de multímetro, apresentação de componentes e montagem prática de um semáforo.',
    schedule: `${EVENT_DATE.dayMonthLong} · horário a definir`,
    room: 'Salas de oficina · ETE José de Alencar',
    targetAudience: 'Estudantes e professores da rede estadual.',
    school: 'EREM Senador José Ermírio de Morais',
    instructor: {
      name: 'Railton Ricardo Alves',
      role: 'Oficineiro',
      institution: 'EREM Senador José Ermírio de Morais',
      bio: 'Responsável pela oficina.',
    },
    materialsProvided: [
      '5 Arduinos',
      '100 jumpers',
      '5 LEDs amarelos, 5 verdes e 5 vermelhos',
      '5 protoboards',
      '5 notebooks',
      '5 resistores',
    ],
    equipment: ['Projetor ou TV', 'Extensão', 'Internet'],
    software: 'Arduino IDE',
  },
].map((workshop) => ({
  ...workshop,
  registrationUrl: WORKSHOP_REGISTRATION_URLS[workshop.id],
}));

/**
 * ============================================================================
 * LINHA DO TEMPO DA HISTÓRIA (2021–2026)
 * ============================================================================
 */
export const TIMELINE_DATA: TimelineMilestone[] = [
  {
    year: 2021,
    edition: '1ª Edição',
    title: 'O Começo de Tudo: A Centelha no Pátio',
    description: 'Em meio aos desafios da retomada escolar pós-isolamento, um grupo incansável de professores de física, matemática e informática da GRE Metropolitana Norte uniu 8 escolas no pátio da ETE para compartilhar os primeiros carrinhos seguidores de linha feitos de papelão.',
    stats: '8 escolas · 120 estudantes · 1 arena improvisada',
  },
  {
    year: 2022,
    edition: '2ª Edição',
    title: 'Nasce a Identidade: O Ôxe que Conecta',
    description: 'O evento ganha oficialmente o nome "Ôxe Maker", celebrando o sotaque e o orgulho pernambucano. Introdução da modalidade Sumô de Robôs e adesão de escolas regulares do ensino fundamental.',
    stats: '18 escolas · 350 estudantes · 400 visitantes',
  },
  {
    year: 2023,
    edition: '3ª Edição',
    title: 'A Chegada da Cultura Geek & Palco Aberto',
    description: 'Reconhecendo que a robótica anda de mãos dadas com animes, ficção científica e dança urbana, o evento expande suas fronteiras com o primeiro Concurso Cosplay e Arena Gamer na rede pública.',
    stats: '32 escolas · 780 participantes · 2 dias de mostra',
  },
  {
    year: 2024,
    edition: '4ª Edição',
    title: 'Consolidação Regional & Primeira Arena Blindada',
    description: 'Criação do combate de robôs com gaiola de proteção e a primeira maratona de prototipagem rápida. Escolas de Olinda, Paulista, Abreu e Lima e Igarassu lotam o ginásio da ETE.',
    stats: '46 escolas parceiras · 1.400 estudantes · 4.500 visitantes',
  },
  {
    year: 2025,
    edition: '5ª Edição',
    title: 'Marco Histórico: +70 Escolas e 10 Mil Visitantes',
    description: 'A 5ª edição celebrou a maturidade do movimento com mais de 70 escolas envolvidas, feira de projetos científicos premiada nacionalmente e cerca de 10.000 pessoas circulando nos 2 dias.',
    stats: '70+ escolas · ~2.000 alunos protagonistas · ~10.000 visitantes',
  },
  {
    year: 2026,
    edition: '6ª Edição',
    title: 'O Presente: Justiça Socioambiental & Futuro',
    description:
      `A 6ª edição acontece em um único dia, ${EVENT_DATE.dayMonthLong}, na ETE José de Alencar em Paulista, com oficinas, mostra de projetos, competições, cultura geek e o pitch do Hackathon.`,
    stats: '58+ escolas parceiras · 6+ competições · 90+ projetos makers',
  },
];

/**
 * ============================================================================
 * HOMENAGEM À FUNDADORA
 * ============================================================================
 */
export const FOUNDER_TRIBUTE: FounderTribute = {
  name: 'Lidyane Lira',
  role: 'Fundadora do Ôxe Maker',
  title: 'Idealizadora da Mostra de Robótica e Cultura Maker Educacional',
  quote: 'Lidyane Lira: a semente, a bússola e a força que impulsiona o Ôxe Maker.',
  bio: [
    'Desde 2021, Lidyane Lira, idealizadora da Mostra de Robótica e Cultura Maker Educacional da GRE Metropolitana Norte, vem transformando a curiosidade dos estudantes da rede pública de Pernambuco em oportunidades de aprendizagem, inovação, ciência, tecnologia e protagonismo juvenil.',
    'Com dedicação, sensibilidade e compromisso com a educação, semeou uma iniciativa que cresceu, ganhou identidade e se consolidou ao longo dos anos. Em 2026, o Ôxe Maker celebra sua histórica 6ª edição, reafirmando seu papel como espaço de criatividade, experimentação, compartilhamento de conhecimentos e valorização da cultura maker.',
    'Mais do que construir robôs e desenvolver projetos tecnológicos, Lidyane idealizou um movimento educacional que carrega a identidade e o orgulho nordestino, mostrando que a inovação também nasce da nossa cultura, da nossa criatividade e da capacidade de transformar ideias em realidade. Afinal, quando a tecnologia funciona, a gente celebra do nosso jeito: "Ôxe, funcionou!"',
    'Mas nenhuma trajetória se constrói sozinha. Mais do que idealizar e conduzir essa jornada, Lidyane contou com uma equipe extraordinária, que acreditou no projeto e caminhou ao seu lado. Fica aqui o mais sincero agradecimento a todos os CGIPs e CGEMPs que, de 2021 até hoje, compartilharam ideias, desafios, esforços, afetos e sonhos para tornar o Ôxe Maker possível.',
    'Cada edição carrega um pouco de cada pessoa que contribuiu para essa história. O Ôxe Maker é fruto de uma construção coletiva, de parcerias fortalecidas e do compromisso de quem acredita que a educação pode transformar vidas.',
    'Porque algumas sementes florescem em projetos, outras em oportunidades, e algumas se transformam em movimentos capazes de inspirar gerações. O Ôxe Maker é tudo isso!',
  ],
  imagePlaceholder: img('foto-lidy.webp'),
};

/**
 * ============================================================================
 * REALIZAÇÃO OFICIAL
 * ============================================================================
 */
export const SPONSORS_TIERS: SponsorTier[] = [
  {
    tierName: 'Realização Oficial',
    description: 'Iniciativa institucional pública de educação e cidadania',
    sponsors: [
      {
        name: 'GRE Metropolitana Norte',
        role: 'Gerência Regional de Educação de Pernambuco',
        logoAlt: 'Logo da GRE Metropolitana Norte',
      },
      {
        name: 'Secretaria de Educação e Esportes de PE',
        role: 'Governo do Estado de Pernambuco',
        logoAlt: 'Logo da Secretaria de Educação e Esportes de Pernambuco',
      },
      {
        name: 'ETE José de Alencar',
        role: 'Escola Anfitriã (Paulista-PE)',
        logoAlt: 'Logo da ETE José de Alencar',
      },
    ],
  },
];

/**
 * ============================================================================
 * GALERIA HISTÓRICA DE MOMENTOS (2021–2026)
 * ============================================================================
 */
export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Disputa Intensa no Dohyo de Sumô',
    year: 2025,
    category: 'competicoes',
    description: 'Momento decisivo entre os robôs autônomos da EREM Olinda e ETE Paulista no ginásio lotado.',
    caption: 'Foto: Arquivo GRE Metro Norte 2025',
    image: img('logo06oxemaker.webp'),
  },
  {
    id: 'gal-2',
    title: 'Mão na Massa: Montando o Primeiro Circuito',
    year: 2025,
    category: 'oficinas',
    description: 'Estudantes do ensino fundamental testando sensores de luz LDR durante a oficina prática de Arduino.',
    caption: 'Foto: Laboratório Maker Ôxe Maker',
    image: img('logoOxemaker05.webp'),
  },
  {
    id: 'gal-3',
    title: 'Desfile Cosplay com Torcida Apaixonada',
    year: 2024,
    category: 'geek',
    description: 'O palco do pátio reuniu caracterizações marcantes inspiradas em jogos e heróis da ficção científica.',
    caption: 'Foto: Palco Geek Ôxe Maker',
    image: img('oxemakerlogo2024.webp'),
  },
  {
    id: 'gal-4',
    title: 'Prototipando com Sucata e Motores Reciclados',
    year: 2023,
    category: 'projetos',
    description: 'Robôs construídos com coolers de computador e caixas de leite demonstrando a força do lixo zero.',
    caption: 'Foto: Mostra Científica 2023',
    image: img('oxemaker-logo01.webp'),
  },
  {
    id: 'gal-5',
    title: 'A Largada do Seguidor de Linha Buzz Line',
    year: 2024,
    category: 'competicoes',
    description: 'Concentração absoluta dos jovens pilotos antes de acionar a chave táctil do robô seguidor.',
    caption: 'Foto: Pista Alfa de Robótica',
    image: img('logo01oxemaker.webp'),
  },
  {
    id: 'gal-6',
    title: 'A Celebração dos Troféus no Pódio Maker',
    year: 2025,
    category: 'competicoes',
    description: 'Equipes de 12 escolas diferentes comemorando juntas com os troféus ecológicos feitos em 3D.',
    caption: 'Foto: Cerimônia de Premiação 2025',
    image: img('logooxemaker02.webp'),
  },
];

/**
 * ============================================================================
 * PERGUNTAS FREQUENTES (FAQ)
 * ============================================================================
 */
export const FAQ_DATA = [
  {
    question: 'Quando e onde acontece o Ôxe Maker 2026?',
    answer:
      `O evento acontece em um único dia: ${EVENT_DATE.long} (${EVENT_DATE.weekdayLong}), das ${EVENT_TIME.startLabel} às ${EVENT_TIME.endLabel}, na ETE José de Alencar (Rua João Francisco Batista, 170 — Janga, Paulista-PE, 53439-410).`,
  },
  {
    question: 'Até quando posso me inscrever?',
    answer:
      `As inscrições vão até ${REGISTRATION_DEADLINE.long} e abrangem Torneios (Buzz Line, Buzz PRO e Sumô de Robôs), Cultura Geek (Cosplay e K-pop), Oficinas Maker, Mostra de Projetos, Ôxethon e Visitantes.`,
  },
  {
    question: 'Quais são as modalidades de inscrição?',
    answer:
      'As modalidades estão reunidas na página de Inscrições: Torneios (Buzz Line, Buzz PRO e Sumô de Robôs), Cultura Geek (Cosplay e K-pop), Oficinas Maker, Mostra de Projetos, Ôxethon e Visitantes.',
  },
  {
    question: 'Quem pode participar do Ôxe Maker?',
    answer:
      'O evento é da GRE Metropolitana Norte e abre espaço para toda a comunidade escolar: estudantes da rede estadual, professores, famílias e amantes da tecnologia.',
  },
  {
    question: 'Como faço para participar das competições?',
    answer:
      `Acesse a página de Inscrições e escolha entre Torneios (Buzz Line, Buzz PRO e Sumô de Robôs), Cultura Geek (Cosplay e K-POP), Oficinas Maker e Oxethon. Confirme as regras da categoria desejada e faça sua inscrição até ${REGISTRATION_DEADLINE.shortWithYear}. As competições acontecem no dia ${EVENT_DATE.short}, das ${PROGRAM_TIMES.competitions.range}.`,
  },
  {
    question: 'Qual é a programação do dia do evento?',
    answer:
      'Das 07h00 às 08h00 credenciamento; 08h30 abertura cultural; 09h00 TED Talks; 09h30 lanche; 10h00 às 12h00 oficinas; 12h00 almoço; 13h00 Mostra de Projetos; 14h30 competições e cultura geek; 16h00 pitch do Hackathon; 17h00 cerimônia de premiação. A grade completa está na aba Programação.',
  },
];
