import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  EVENT_INFO,
  METRICS_DATA,
  HIGHLIGHTS_DATA,
  GALLERY_DATA,
  SPONSORS_TIERS,
  FAQ_DATA,
} from '../../core/constants';
import { CountdownTimer } from '../../components/CountdownTimer';
import { img } from '../../core/images';
import { AnimatedCounter } from '../../components/AnimatedCounter';
import {
  Sparkles,
  Calendar,
  MapPin,
  ArrowRight,
  ChevronDown,
  Wrench,
  Network,
  Bot,
  Cpu,
  Trophy,
  ExternalLink,
  ShieldCheck,
  CheckCircle2,
  Users,
  Compass,
  Lightbulb,
  Presentation,
  Ticket,
} from 'lucide-react';

export const HomePage: React.FC = () => {
  const registrationOptions = [
    {
      id: 'torneios',
      title: 'Torneios de Robótica',
      description: 'Inscreva sua equipe nas modalidades Buzz Line, Buzz PRO e Sumô de Robôs.',
      href: '/inscricoes#torneios',
      icon: <Bot className="w-5 h-5 text-[#8A5A04]" />,
    },
    {
      id: 'geek',
      title: 'Cultura Geek',
      description: 'Participe do concurso Cosplay ou da mostra e torneio de K-Pop Dance Cover.',
      href: '/inscricoes#geek',
      icon: <Sparkles className="w-5 h-5 text-[#0369A1]" />,
    },
    {
      id: 'oficinas',
      title: 'Oficinas Maker',
      description: 'Conheça as nove propostas de oficinas enviadas pelas escolas da rede estadual.',
      href: '/inscricoes#oficinas',
      icon: <Wrench className="w-5 h-5 text-[#8A5A04]" />,
    },
    {
      id: 'mostra',
      title: 'Mostra de Projetos',
      description: 'Inscreva seu projeto de tecnologia para a feira de ciências do evento.',
      href: '/inscricoes#mostra',
      icon: <Presentation className="w-5 h-5 text-[#0369A1]" />,
    },
    {
      id: 'oxethon',
      title: 'Oxethon',
      description: 'Monte sua equipe para o hackathon e apresente o pitch no dia do evento.',
      href: '/inscricoes#oxethon',
      icon: <Cpu className="w-5 h-5 text-[#0369A1]" />,
    },
    {
      id: 'visitantes',
      title: 'Visitantes',
      description: 'Garanta seu credenciamento e acesse o cronograma e as atrações do evento.',
      href: '/inscricoes#visitantes',
      icon: <Ticket className="w-5 h-5 text-[#8A5A04]" />,
    },
  ];

  const [activeGalleryCategory, setActiveGalleryCategory] = useState<string>('todos');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const iconMap: Record<string, React.ReactNode> = {
    Wrench: <Wrench className="w-6 h-6 text-[#8A5A04]" />,
    Network: <Network className="w-6 h-6 text-[#0369A1]" />,
    Bot: <Bot className="w-6 h-6 text-[#8A5A04]" />,
    Cpu: <Cpu className="w-6 h-6 text-[#0369A1]" />,
    Sparkles: <Sparkles className="w-6 h-6 text-[#0369A1]" />,
    Trophy: <Trophy className="w-6 h-6 text-[#8A5A04]" />,
  };

  const filteredGallery =
    activeGalleryCategory === 'todos'
      ? GALLERY_DATA
      : GALLERY_DATA.filter((item) => item.category === activeGalleryCategory);

  return (
    <div className="space-y-20 pb-16">
      {/* =====================================================================
          1. HERO SECTION
         ===================================================================== */}
      <section className="relative overflow-hidden pt-8 pb-16 md:pt-12 md:pb-24 lg:pt-8 border-b border-slate-800">
        {/* Glow backdrop circles */}
        <div className="absolute top-10 right-10 w-72 h-72 bg-[#0030B5]/20 blur-[80px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center lg:items-stretch">
            {/* Left Column: Hero Content */}
            <div className="max-lg:contents lg:order-1 lg:col-span-7 space-y-6 lg:space-y-4 text-center lg:text-left">
              <div className="order-2 space-y-6 lg:space-y-3">
                {/* Edition and Slogan Kicker */}
                <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs font-mono-code">
                  <span className="px-2.5 py-1 bg-[#FCC140] text-[#050D34] font-bold rounded-sm uppercase tracking-wider">
                    {EVENT_INFO.edition} · 2021–2026
                  </span>
                  <span className="text-slate-400">·</span>
                  <span className="text-[#0369A1] font-semibold tracking-wide">
                    {EVENT_INFO.tagline}
                  </span>
                </div>

                {/* Main Heading */}
                <div className="space-y-2">
                  <h1 className="text-[2.5rem] sm:text-6xl xl:text-7xl font-heading font-black tracking-tight brand-name uppercase leading-[1.05]">
                    ÔXE MAKER <span>2026</span>
                  </h1>
                  <p className="text-lg sm:text-xl font-heading text-[#0369A1] tracking-wide">
                    Mostra de Robótica Educacional & Cultura Maker da Rede Estadual
                  </p>
                </div>
              </div>

              <div className="order-4 space-y-6 lg:space-y-4">
              {/* Destaque combinado: Tema Central + Data + Local */}
        <div className="rounded-sm overflow-hidden border-2 border-[#FCC140] maker-shadow-yellow-lg bg-[#F9FDFE]">
          <div className="p-5 sm:p-7 lg:p-4 bg-gradient-to-r from-[#F9FDFE] via-[#EDF1FA] to-[#FCC140]/20 border-b-2 border-[#FCC140]/40 text-left">
            <span className="inline-flex items-center gap-2 text-[11px] font-mono-code text-[#8A5A04] uppercase font-bold tracking-widest mb-2">
              <Lightbulb className="w-4 h-4" /> Tema Central 2026
            </span>
            <p className="text-lg sm:text-2xl font-heading text-[#0B1330] font-black leading-tight">
              "{EVENT_INFO.theme2026}"
            </p>
          </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 text-left">
                  <div className="flex items-center gap-3 p-5 sm:p-6 lg:p-4 border-b sm:border-b-0 sm:border-r border-slate-700/60">
                    <div className="flex items-center justify-center w-11 h-11 shrink-0 bg-[#FCC140]/15 border-2 border-[#FCC140] rounded-sm">
                      <Calendar className="w-5 h-5 text-[#8A5A04]" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono-code text-[#8A5A04] uppercase font-bold tracking-widest mb-0.5">
                        Data
                      </span>
                      <p className="text-base sm:text-lg font-heading text-[#0B1330] font-black leading-tight">
                        {EVENT_INFO.dates.display}
                      </p>
                      <p className="text-xs font-mono-code text-slate-300">{EVENT_INFO.dates.timeRange}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 p-5 sm:p-6 lg:p-4">
                    <div className="flex items-center justify-center w-11 h-11 shrink-0 bg-[#01B1FD]/15 border-2 border-[#01B1FD] rounded-sm">
                      <MapPin className="w-5 h-5 text-[#0369A1]" />
                    </div>
                    <div>
                      <span className="block text-[10px] font-mono-code text-[#0369A1] uppercase font-bold tracking-widest mb-0.5">
                        Local
                      </span>
                      <p className="text-base sm:text-lg font-heading text-[#0B1330] font-black leading-tight">
                        {EVENT_INFO.location.venue}
                      </p>
                      <p className="text-xs font-mono-code text-slate-300">{EVENT_INFO.location.city}-{EVENT_INFO.location.state} · {EVENT_INFO.location.neighborhood}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="pt-2 lg:pt-0 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                <Link
                  to="/inscricoes"
                  className="maker-btn-secondary px-6 py-3.5 text-sm uppercase flex items-center gap-2 cursor-pointer"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Acessar Inscrições</span>
                </Link>

                <Link
                  to="/programacao"
                  className="px-5 py-3.5 text-sm uppercase flex items-center gap-2 border-2 border-slate-600 rounded-sm text-slate-200 hover:border-[#01B1FD] hover:text-[#0B1330] transition-colors"
                >
                  <Compass className="w-4 h-4" />
                  <span>Ver Programação</span>
                </Link>
              </div>
              </div>
            </div>

            {/* Right Column: Mascot & Live Countdown */}
            <div className="max-lg:contents lg:order-2 lg:col-span-5 flex flex-col items-center space-y-6 lg:justify-between">
              <div className="order-1 justify-self-center relative w-64 h-64 md:w-80 md:h-80 lg:w-72 lg:h-72 flex items-center justify-center">
                {/* Texto circular rotativo */}
                <div className="absolute inset-0 animate-rotate">
                  <svg viewBox="0 0 200 200" className="w-full h-full">
                    <path
                      id="circlePath"
                      d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                      fill="none"
                    />
                    <text className="font-heading brand-name uppercase text-[15px] font-black tracking-[0.2em]">
                      <textPath href="#circlePath" startOffset="0%">
                        ÔXE MAKER 2026 • ÔXE MAKER 2026 • ÔXE MAKER 2026 •
                      </textPath>
                    </text>
                  </svg>
                </div>

                {/* Logo central */}
                <div className="relative w-2/3 h-2/3 flex items-center justify-center p-2">
                  <img
                    alt="Calango Maker"
                    className="w-full h-full object-contain drop-shadow-2xl"
                    src={img('calango-logo.webp')}
                    width={512}
                    height={413}
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>
              </div>

              {/* Live Countdown to 02/12/2026 07:00 */}
              <div className="order-3 w-full">
                <CountdownTimer />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          2. PROVAS SOCIAIS & NÚMEROS DO EVENTO (ANIMATED COUNTERS)
         ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-mono-code text-[#0369A1] uppercase font-bold tracking-widest">
            A Força da Escola Pública
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-[#0B1330] uppercase">
            Números que Transformam o Futuro
          </h2>
          <p className="text-slate-400 text-sm max-w-2xl mx-auto">
            Consolidação do Ôxe Maker como a maior vitrine de ciência, tecnologia e cultura geek da
            Região Metropolitana Norte de Pernambuco.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
          {METRICS_DATA.map((item) => (
            <div
              key={item.id}
              className="p-5 bg-[#F9FDFE] border-2 border-slate-700 hover:border-[#FCC140] rounded-sm maker-shadow-yellow text-center transition-all group"
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-mono-code text-[#8A5A04] group-hover:scale-105 transition-transform mb-1">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-[#0B1330] uppercase font-heading tracking-wide mb-1">
                {item.label}
              </h3>
            <p className="text-[11px] text-slate-400 font-sans leading-tight">
              {item.description}
            </p>
            </div>
          ))}
        </div>

        {/* 2025 Retrospective Snapshot Callout */}
        <div className="mt-6 p-4 bg-[#FCC140]/15 border border-[#FCC140]/60 rounded-sm flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono-code">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#FCC140] flex-shrink-0 animate-ping" />
            <p className="text-slate-200">
              <strong className="text-[#8A5A04]">Retrospectiva 2025:</strong> +70 escolas
              participantes, cerca de 2 mil estudantes no protagonismo direto e mais de 10 mil
              visitantes nos 2 dias.
            </p>
          </div>
          <Link
            to="/sobre"
            className="text-[#0369A1] hover:text-[#8A5A04] flex items-center gap-1 font-bold flex-shrink-0"
          >
            <span>Conheça a história desde 2021</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* =====================================================================
          3. GRID DE 6 DESTAQUES
         ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono-code text-[#8A5A04] uppercase font-bold tracking-widest block mb-1">
              Pilares do Evento
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-[#0B1330] uppercase">
              O Que Rola no <span className="brand-name">Ôxe Maker</span> 2026
            </h2>
          </div>
            <p className="text-sm text-slate-400 max-w-md">
              Um dia intensíssimo de aprendizado mão na massa, adrenalina nas arenas de batalha e
              celebração do protagonismo juvenil.
            </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HIGHLIGHTS_DATA.map((item) => (
            <div
              key={item.id}
              className="maker-card p-6 rounded-sm flex flex-col justify-between group relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="p-3 bg-[#F1F4FB] border border-slate-700 rounded-sm">
                    {iconMap[item.iconName] || <Bot className="w-6 h-6 text-[#8A5A04]" />}
                  </div>
                  <span className="text-[10px] font-mono-code uppercase px-2 py-0.5 rounded-sm bg-slate-800 text-slate-300 border border-slate-700">
                    {item.tag}
                  </span>
                </div>

                <div>
                  <h3 className="text-xl font-heading text-[#0B1330] group-hover:text-[#8A5A04] transition-colors mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-slate-800">
                <Link
                  to={item.link}
                  className="inline-flex items-center gap-1.5 text-xs font-mono-code text-[#0369A1] hover:text-[#8A5A04] font-bold group-hover:translate-x-1 transition-all"
                >
                  <span>Saiba Mais Detalhes</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          4. GALERIA HISTÓRICA 2021–2026
         ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-8">
          <span className="text-xs font-mono-code text-[#0369A1] uppercase font-bold tracking-widest">
            Memórias & Trajetória
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-[#0B1330] uppercase">
            Galeria <span className="brand-name">Ôxe Maker</span> (2021–2026)
          </h2>
          <p className="text-sm text-slate-400 max-w-xl mx-auto">
            Registros marcantes de robôs em combate, oficinas cheias de entusiasmo e jovens
            descobrindo suas vocações científicas.
          </p>
        </div>

        {/* Gallery interactive filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {[
            { id: 'todos', label: 'Todos os Momentos' },
            { id: 'competicoes', label: 'Torneios & Batalhas' },
            { id: 'oficinas', label: 'Oficinas Mão na Massa' },
            { id: 'geek', label: 'Cultura Geek & Cosplay' },
            { id: 'projetos', label: 'Feira Científica' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveGalleryCategory(tab.id)}
              className={`px-3 py-1.5 text-xs font-mono-code font-bold uppercase rounded-sm transition-all ${
                activeGalleryCategory === tab.id
                  ? 'bg-[#FCC140] text-[#050D34] maker-shadow-cyan'
                  : 'bg-[#F9FDFE] text-slate-300 hover:text-[#0B1330] border border-slate-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGallery.map((item) => (
            <div
              key={item.id}
              className="bg-[#F9FDFE] border-2 border-slate-700 hover:border-[#01B1FD] rounded-sm p-4 transition-all hover:maker-shadow-cyan group"
            >
              {/* Visual illustration / photo placeholder */}
              <div className="relative aspect-video bg-[#F1F4FB] rounded-sm border border-slate-800 overflow-hidden mb-3">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    decoding="async"
                  />
                ) : (
                  <>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0B1330]/10 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                      <Bot className="w-10 h-10 text-[#0369A1] mb-2 group-hover:scale-110 transition-transform" />
                      <span className="text-[10px] font-mono-code text-[#8A5A04] uppercase tracking-wider">
                        Edição {item.year}
                      </span>
                      <span className="text-xs font-bold text-[#0B1330] z-10">{item.title}</span>
                    </div>
                  </>
                )}
              </div>

              <p className="text-xs text-slate-300 font-sans mb-2 leading-relaxed">
                {item.description}
              </p>
              <div className="flex items-center justify-between text-[10px] font-mono-code text-slate-400 border-t border-slate-800 pt-2">
                <span>{item.caption}</span>
                <span className="text-[#0369A1] uppercase font-bold">{item.category}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          5. PATROCINADORES & REALIZADORES POR TIER
         ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800 pt-16">
        <div className="text-center space-y-2 mb-12">
          <span className="text-xs font-mono-code text-[#8A5A04] uppercase font-bold tracking-widest">
            Aliança Pela Educação
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-[#0B1330] uppercase">
            Realizadores & Apoiadores Institucionais
          </h2>
          <p className="text-sm text-slate-400 max-w-2xl mx-auto">
            Uma rede de cooperação unindo o Estado, universidades, centros de tecnologia e a
            comunidade maker em prol do futuro dos estudantes.
          </p>
        </div>

        <div className="space-y-10">
          {SPONSORS_TIERS.map((tier, idx) => (
            <div key={idx} className="space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-2">
                <h3 className="text-sm font-mono-code uppercase font-bold text-[#8A5A04] tracking-wider">
                  {tier.tierName}
                </h3>
                <span className="text-xs text-slate-400 font-sans hidden sm:inline">
                  — {tier.description}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {tier.sponsors.map((sponsor, sIdx) => (
                  <div
                    key={sIdx}
                    className="p-4 bg-[#F9FDFE] border border-slate-700 rounded-sm hover:border-[#01B1FD] transition-all flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-sm bg-[#F1F4FB] border border-slate-700 flex items-center justify-center flex-shrink-0 text-[#0369A1]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-[#0B1330] font-sans">{sponsor.name}</h4>
                      <p className="text-xs text-slate-400 font-mono-code">{sponsor.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =====================================================================
          5.5 INSCRIÇÕES (6 TÓPICOS)
         ===================================================================== */}
      <section id="inscricoes" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <span className="text-xs font-mono-code text-[#8A5A04] uppercase font-bold tracking-widest block mb-1">
              Inscrições Ôxe Maker 2026
            </span>
            <h2 className="text-3xl md:text-4xl font-heading text-[#0B1330] uppercase">
              Escolha Seu Tópico
            </h2>
          </div>
          <p className="text-sm text-slate-400 max-w-md">
            Seis caminhos para participar: torneios de robótica, cultura geek, oficinas maker,
            Mostra de Projetos, Oxethon e credenciamento de visitantes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {registrationOptions.map((option) => (
            <Link
              key={option.id}
              to={option.href}
              viewTransition
              className="maker-card p-6 rounded-sm text-left flex flex-col gap-4 group cursor-pointer"
            >
              <div className="p-3 bg-[#F1F4FB] border border-slate-700 rounded-sm w-fit group-hover:border-[#FCC140] transition-colors">
                {option.icon}
              </div>
              <div className="space-y-2 flex-1">
                <h3 className="text-xl font-heading text-[#0B1330] group-hover:text-[#8A5A04] transition-colors uppercase">
                  {option.title}
                </h3>
                <p className="text-sm text-slate-400 font-sans leading-relaxed">
                  {option.description}
                </p>
              </div>
              <span className="inline-flex items-center gap-2 text-xs font-mono-code uppercase font-bold text-[#0369A1] group-hover:text-[#8A5A04] transition-colors">
                Inscrever-se
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* =====================================================================
          6. PERGUNTAS FREQUENTES (FAQ)
         ===================================================================== */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-2 mb-10">
          <span className="text-xs font-mono-code text-[#0369A1] uppercase font-bold tracking-widest">
            Tire Suas Dúvidas
          </span>
          <h2 className="text-3xl md:text-4xl font-heading text-[#0B1330] uppercase">
            Perguntas Frequentes
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.map((item, index) => {
            const isOpen = openFaqIndex === index;
            return (
              <div
                key={index}
                className="bg-[#F9FDFE] border border-slate-700 rounded-sm overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 text-[#0B1330] font-semibold hover:text-[#8A5A04] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-sans">{item.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0369A1] transition-transform duration-200 flex-shrink-0 ${
                      isOpen ? 'rotate-180 text-[#8A5A04]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-slate-300 border-t border-slate-800 leading-relaxed font-sans text-justify">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* =====================================================================
          7. CTA FINAL & CONVITE
         ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden bg-gradient-to-r from-[#F9FDFE] via-[#EDF1FA] to-[#0030B5]/15 border-2 border-[#FCC140] rounded-sm maker-shadow-yellow-lg p-8 sm:p-12 text-center lg:text-left">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#0369A1] uppercase font-bold">
                <CheckCircle2 className="w-4 h-4 text-[#8A5A04]" />
                <span>Aberto a Toda a Comunidade</span>
              </div>
              <h2 className="text-3xl sm:text-5xl font-heading text-[#0B1330] uppercase leading-tight">
                Venha Viver o Maior Encontro Maker de Pernambuco!
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-2xl font-sans">
                Traga sua escola, seus amigos e sua família para prestigiar o talento e a inovação
                dos jovens estudantes da Rede Estadual na {EVENT_INFO.location.venue}, em {EVENT_INFO.location.city}.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 justify-center">
              <Link
                to="/inscricoes"
                className="maker-btn-primary py-3.5 px-6 text-xs uppercase flex items-center justify-center gap-2 cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Acessar Inscrições</span>
              </Link>

              <Link
                to="/mapa"
                className="maker-btn-secondary py-3.5 px-6 text-xs uppercase flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                <span>Ver Mapa & Transporte</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
