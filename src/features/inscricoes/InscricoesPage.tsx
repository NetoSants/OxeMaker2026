import React from 'react';
import { Link } from 'react-router-dom';
import {
  EVENT_INFO,
  GEEK_CATEGORIES,
  OXETHON_INFO,
  TOURNAMENTS_DATA,
  WORKSHOPS_DATA,
  WORKSHOPS_REGISTRATION_URL,
} from '../../core/constants';
import { EVENT_DATE, PROGRAM_TIMES, REGISTRATION_DEADLINE } from '../../core/eventMeta';
import {
  ArrowRight,
  Bot,
  Calendar,
  CheckCircle2,
  Clock,
  Cpu,
  ExternalLink,
  FileText,
  MapPin,
  Presentation,
  Sparkles,
  Ticket,
  Users,
  Wrench,
} from 'lucide-react';

const TOPICS = [
  {
    id: 'torneios',
    title: 'Torneios de Robótica',
    description: 'Buzz Line, Buzz PRO e Sumô de Robôs',
    icon: Bot,
  },
  {
    id: 'geek',
    title: 'Cultura Geek',
    description: 'Cosplay e K-Pop Dance Cover',
    icon: Sparkles,
  },
  {
    id: 'oficinas',
    title: 'Oficinas Maker',
    description: 'Propostas enviadas pelas escolas',
    icon: Wrench,
  },
  {
    id: 'mostra',
    title: 'Mostra de Projetos',
    description: 'Feira de ciências e tecnologia',
    icon: Presentation,
  },
  {
    id: 'oxethon',
    title: 'Oxethon',
    description: 'Hackathon e pitch final',
    icon: Cpu,
  },
  {
    id: 'visitantes',
    title: 'Visitantes',
    description: 'Credenciamento, cronograma e atrações',
    icon: Ticket,
  },
];

interface SectionHeadingProps {
  id: string;
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  description: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  id,
  icon,
  eyebrow,
  title,
  description,
}) => (
  <div id={id} className="scroll-mt-28 border-b border-slate-800 pb-5">
    <div className="flex items-start gap-3">
      <div className="p-3 bg-[#F1F4FB] border border-slate-700 rounded-sm flex-shrink-0">
        {icon}
      </div>
      <div className="space-y-1">
        <span className="text-xs font-mono-code text-[#0369A1] uppercase font-bold tracking-widest block">
          {eyebrow}
        </span>
        <h2 className="text-2xl sm:text-3xl font-heading text-[#0B1330] uppercase">{title}</h2>
        <p className="text-sm text-slate-400 font-sans max-w-3xl">{description}</p>
      </div>
    </div>
  </div>
);

export const InscricoesPage: React.FC = () => {
  const scrollToTopic = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      <header className="space-y-3 text-center sm:text-left">
        <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#8A5A04] uppercase font-bold tracking-wider">
          <Sparkles className="w-4 h-4" />
          <span>Inscrições · Ôxe Maker 2026</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-black text-[#0B1330] uppercase tracking-tight">
          Central de Inscrições
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl font-sans">
          Escolha o tópico de sua participação na 6ª edição. As inscrições seguem o prazo e as
          regras de cada modalidade.
        </p>
      </header>

      <div className="relative overflow-hidden bg-gradient-to-r from-[#FCC140]/20 via-[#F9FDFE] to-[#01B1FD]/15 border-2 border-[#FCC140] rounded-sm p-5 sm:p-7 maker-shadow-yellow">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-5">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 px-2 py-0.5 bg-[#FCC140]/20 text-[#8A5A04] font-mono-code text-[11px] font-bold uppercase rounded-sm border border-[#FCC140]/60">
              <Ticket className="w-3.5 h-3.5" />
              Destaque · Visitantes
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading text-[#0B1330] uppercase">
              Visite o Ôxe Maker 2026
            </h2>
            <p className="text-sm text-slate-300 font-sans max-w-2xl leading-relaxed">
              Credencie-se para acompanhar o cronograma e as atrações do evento: torneios de
              robótica, cultura geek, oficinas e Mostra de Projetos.
            </p>
            <div className="flex flex-wrap gap-3 text-xs font-mono-code">
              <Link
                to="/programacao"
                className="inline-flex items-center gap-1.5 text-[#0369A1] hover:text-[#8A5A04] transition-colors"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Cronograma</span>
              </Link>
              <Link
                to="/geek"
                className="inline-flex items-center gap-1.5 text-[#0369A1] hover:text-[#8A5A04] transition-colors"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Atrações</span>
              </Link>
            </div>
          </div>

          <div className="flex-shrink-0 md:w-64">
            {EVENT_INFO.links.visitantesRegistration ? (
              <a
                href={EVENT_INFO.links.visitantesRegistration}
                target="_blank"
                rel="noopener noreferrer"
                className="maker-btn-primary w-full py-3 px-5 text-xs uppercase flex items-center justify-center gap-2"
              >
                <span>Credenciar visitante</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <button
                type="button"
                disabled
                title="O formulário de inscrição de visitantes será disponibilizado em breve"
                className="maker-btn-primary w-full py-3 px-5 text-xs uppercase flex items-center justify-center gap-2 opacity-60 cursor-not-allowed"
              >
                <Clock className="w-4 h-4" />
                <span>Inscrições em breve</span>
              </button>
            )}
          </div>
        </div>
      </div>

      <nav aria-label="Tópicos de inscrição" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {TOPICS.map((topic) => {
          const Icon = topic.icon;
          const isVisitor = topic.id === 'visitantes';
          return (
            <button
              key={topic.id}
              type="button"
              onClick={() => scrollToTopic(topic.id)}
              className={`group border-2 rounded-sm p-6 transition-all hover:maker-shadow-yellow flex flex-col gap-3 text-left cursor-pointer ${
                isVisitor
                  ? 'bg-gradient-to-br from-[#FCC140]/20 via-[#F9FDFE] to-[#01B1FD]/10 border-[#FCC140] maker-shadow-yellow'
                  : 'bg-[#F9FDFE] border-slate-700/80 hover:border-[#FCC140]'
              }`}
            >
              <div
                className={`p-3 border rounded-sm w-fit group-hover:border-[#FCC140] transition-colors ${
                  isVisitor ? 'bg-[#FCC140]/20 border-[#FCC140]' : 'bg-[#F1F4FB] border-slate-700'
                }`}
              >
                <Icon className="w-6 h-6 text-[#8A5A04]" />
              </div>
              <div className="space-y-1.5 flex-1">
                <span className="block text-lg sm:text-xl font-heading text-[#0B1330] uppercase group-hover:text-[#8A5A04] transition-colors">
                  {topic.title}
                </span>
                <span className="block text-sm text-slate-400 font-sans leading-relaxed">
                  {topic.description}
                </span>
              </div>
              <span className="inline-flex items-center gap-2 text-xs sm:text-sm font-mono-code uppercase font-bold text-[#0369A1] group-hover:text-[#8A5A04] transition-colors">
                {isVisitor ? 'Credenciar visitante' : 'Ir para inscrição'}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
          );
        })}
      </nav>

      {/* Torneios */}
      <section className="space-y-6">
        <SectionHeading
          id="torneios"
          icon={<Bot className="w-6 h-6 text-[#8A5A04]" />}
          eyebrow="Competições"
          title="Torneios de Robótica"
          description="Reúna sua equipe escolar, construa seu robô e dispute os troféus do Ôxe Maker 2026."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {TOURNAMENTS_DATA.map((tournament) => (
            <article
              key={tournament.id}
              className="bg-[#F9FDFE] border-2 border-slate-700/80 hover:border-[#FCC140] rounded-sm p-5 flex flex-col gap-4 transition-all hover:maker-shadow-yellow"
            >
              <div className="space-y-2">
                <span className="inline-block px-2 py-0.5 bg-[#F1F4FB] text-[#8A5A04] font-mono-code text-[11px] font-bold rounded-sm border border-slate-700">
                  {tournament.category}
                </span>
                <h3 className="text-xl font-heading text-[#0B1330]">{tournament.name}</h3>
                <p className="text-sm text-slate-400 font-sans leading-relaxed">
                  {tournament.description}
                </p>
              </div>

              <div className="mt-auto space-y-1.5 text-xs font-mono-code text-slate-300 border-t border-slate-800 pt-3">
                <div className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#8A5A04] flex-shrink-0 mt-0.5" />
                  <span>{tournament.scheduleTime}</span>
                </div>
                <div className="flex items-start gap-2">
                  <Users className="w-3.5 h-3.5 text-[#0369A1] flex-shrink-0 mt-0.5" />
                  <span>Até {tournament.maxTeamSize} integrantes por equipe</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={tournament.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 maker-btn-primary py-2.5 px-4 text-xs uppercase flex items-center justify-center gap-2"
                >
                  <span>Inscrever equipe</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={tournament.editalPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 maker-btn-secondary py-2.5 px-4 text-xs uppercase flex items-center justify-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Ver Edital</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Cultura Geek */}
      <section className="space-y-6">
        <SectionHeading
          id="geek"
          icon={<Sparkles className="w-6 h-6 text-[#0369A1]" />}
          eyebrow="Palco Geek"
          title="Cultura Geek"
          description="Mostre seu talento no Cosplay ou no K-Pop Dance Cover e faça parte do palco geek do evento."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {GEEK_CATEGORIES.map((category) => (
            <article
              key={category.id}
              className="bg-[#F9FDFE] border-2 border-slate-700/80 hover:border-[#FCC140] rounded-sm p-5 flex flex-col gap-4 transition-all hover:maker-shadow-yellow"
            >
              <div className="space-y-2">
                <span className="inline-block px-2 py-0.5 bg-[#01B1FD]/15 text-[#0369A1] font-mono-code text-[11px] font-bold rounded-sm border border-[#01B1FD]/40">
                  {category.subtitle}
                </span>
                <h3 className="text-xl font-heading text-[#0B1330]">{category.name}</h3>
                <p className="text-sm text-slate-400 font-sans leading-relaxed">
                  {category.description}
                </p>
              </div>

              <div className="mt-auto space-y-1.5 text-xs font-mono-code text-slate-300 border-t border-slate-800 pt-3">
                <div className="flex items-start gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#8A5A04] flex-shrink-0 mt-0.5" />
                  <span>{category.scheduleTime}</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#0369A1] flex-shrink-0 mt-0.5" />
                  <span>{category.stage}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <a
                  href={category.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 maker-btn-primary py-2.5 px-4 text-xs uppercase flex items-center justify-center gap-2"
                >
                  <span>Inscrever-se</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
                <a
                  href={category.rulesPdfUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 maker-btn-secondary py-2.5 px-4 text-xs uppercase flex items-center justify-center gap-2"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>Ver Edital</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Oficinas */}
      <section className="space-y-6">
        <SectionHeading
          id="oficinas"
          icon={<Wrench className="w-6 h-6 text-[#8A5A04]" />}
          eyebrow="Mão na Massa"
          title="Oficinas Maker"
          description="Conheça as propostas de oficinas enviadas por escolas da rede estadual para esta edição."
        />

        <div className="bg-[#F9FDFE] border-2 border-slate-700/80 rounded-sm p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2 space-y-3">
            <span className="inline-flex items-center gap-2 px-2 py-0.5 bg-[#F1F4FB] text-[#8A5A04] font-mono-code text-[11px] font-bold rounded-sm border border-slate-700">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {WORKSHOPS_DATA.length} propostas recebidas
            </span>
            <h3 className="text-2xl font-heading text-[#0B1330]">
              As oficinas de 2026 já têm propostas
            </h3>
            <p className="text-sm text-slate-400 font-sans leading-relaxed">
              As submissões de propostas para a 6ª edição seguem abertas até {REGISTRATION_DEADLINE.shortWithYear}. Confira
              os temas, as escolas proponentes e os programas previstos na página de Oficinas.
            </p>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-2">
            {WORKSHOPS_REGISTRATION_URL ? (
              <a
                href={WORKSHOPS_REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="maker-btn-primary w-full py-3 px-5 text-xs uppercase flex items-center justify-center gap-2"
              >
                <span>Inscrever-se nas oficinas</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <button
                type="button"
                disabled
                title="O formulário de inscrição será disponibilizado em breve"
                className="maker-btn-primary w-full py-3 px-5 text-xs uppercase flex items-center justify-center gap-2 opacity-60 cursor-not-allowed"
              >
                <Clock className="w-4 h-4" />
                <span>Inscrições em breve</span>
              </button>
            )}
            <Link
              to="/oficinas"
              className="maker-btn-secondary w-full py-3 px-5 text-xs uppercase flex items-center justify-center gap-2"
            >
              <span>Conhecer as oficinas</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Mostra de Projetos */}
      <section className="space-y-6">
        <SectionHeading
          id="mostra"
          icon={<Presentation className="w-6 h-6 text-[#0369A1]" />}
          eyebrow="Feira de Ciências"
          title="Mostra de Projetos"
          description="Apresente seu projeto de tecnologia e inovação para a banca e para os visitantes do evento."
        />

        <div className="bg-[#F9FDFE] border-2 border-slate-700/80 rounded-sm p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2 space-y-3">
            <span className="inline-flex items-center gap-2 px-2 py-0.5 bg-[#01B1FD]/15 text-[#0369A1] font-mono-code text-[11px] font-bold rounded-sm border border-[#01B1FD]/40">
              <CheckCircle2 className="w-3.5 h-3.5" />
              Inscrições de equipes
            </span>
            <h3 className="text-2xl font-heading text-[#0B1330]">
              Mostre seu projeto na feira de ciências
            </h3>
            <p className="text-sm text-slate-400 font-sans leading-relaxed">
              A Mostra de Projetos reúne trabalhos de tecnologia desenvolvidos por estudantes da
              rede estadual, com apresentação para a banca avaliadora e para o público visitante.
            </p>
            <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0369A1] flex-shrink-0 mt-0.5" />
                <span>Projetos de robótica, automação, inteligência artificial, sustentabilidade e cultura maker</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0369A1] flex-shrink-0 mt-0.5" />
                <span>Apresentação para banca e visitantes durante a programação do dia {EVENT_DATE.short}</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#0369A1] flex-shrink-0 mt-0.5" />
                <span>Equipes de escolas da rede estadual, com orientação de professores</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-2">
            {EVENT_INFO.links.mostraRegistration ? (
              <a
                href={EVENT_INFO.links.mostraRegistration}
                target="_blank"
                rel="noopener noreferrer"
                className="maker-btn-primary w-full py-3 px-5 text-xs uppercase flex items-center justify-center gap-2"
              >
                <span>Inscrever projeto</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <button
                type="button"
                disabled
                title="O formulário de inscrição de projetos será disponibilizado em breve"
                className="maker-btn-primary w-full py-3 px-5 text-xs uppercase flex items-center justify-center gap-2 opacity-60 cursor-not-allowed"
              >
                <Clock className="w-4 h-4" />
                <span>Inscrições em breve</span>
              </button>
            )}
            <Link
              to="/programacao"
              className="maker-btn-secondary w-full py-3 px-5 text-xs uppercase flex items-center justify-center gap-2"
            >
              <span>Ver programação</span>
              <Calendar className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Oxethon */}
      <section className="space-y-6">
        <SectionHeading
          id="oxethon"
          icon={<Cpu className="w-6 h-6 text-[#0369A1]" />}
          eyebrow="Hackathon"
          title="Oxethon"
          description={`Monte sua equipe, desenvolva uma solução e apresente o pitch no dia ${EVENT_DATE.dayMonthLong}.`}
        />

        <div className="bg-gradient-to-r from-[#F9FDFE] to-[#0030B5]/15 border-2 border-[#01B1FD] rounded-sm maker-shadow-cyan p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
            <div className="lg:col-span-2 space-y-3">
              <span className="text-xs font-mono-code text-[#8A5A04] uppercase font-bold tracking-wider block">
                {OXETHON_INFO.slogan}
              </span>
              <h3 className="text-2xl font-heading text-[#0B1330]">{OXETHON_INFO.title}</h3>
              <p className="text-sm text-slate-400 font-sans leading-relaxed">
                {OXETHON_INFO.description}
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono-code text-slate-300">
                <span className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#8A5A04]" />
                  {EVENT_INFO.dates.display}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#0369A1]" />
                  {PROGRAM_TIMES.pitch.range}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#0369A1]" />
                  {EVENT_INFO.location.venue}
                </span>
              </div>
            </div>

            <div className="lg:col-span-1">
              {OXETHON_INFO.registrationUrl && (
                <a
                  href={OXETHON_INFO.registrationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="maker-btn-primary w-full py-3 px-5 text-xs uppercase flex items-center justify-center gap-2"
                >
                  <span>Inscrever equipe</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Visitantes */}
      <section className="space-y-6">
        <SectionHeading
          id="visitantes"
          icon={<Ticket className="w-6 h-6 text-[#8A5A04]" />}
          eyebrow="Credenciamento"
          title="Visitantes"
          description="Garanta seu credenciamento e acompanhe o cronograma e as atrações do Ôxe Maker 2026."
        />

        <div className="bg-gradient-to-r from-[#F9FDFE] to-[#FCC140]/10 border-2 border-[#FCC140]/60 rounded-sm p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
          <div className="lg:col-span-2 space-y-3">
            <span className="inline-flex items-center gap-2 px-2 py-0.5 bg-[#F1F4FB] text-[#8A5A04] font-mono-code text-[11px] font-bold rounded-sm border border-slate-700">
              <Ticket className="w-3.5 h-3.5" />
              Entrada gratuita
            </span>
            <h3 className="text-2xl font-heading text-[#0B1330]">
              Credencie-se para visitar o evento
            </h3>
            <p className="text-sm text-slate-400 font-sans leading-relaxed">
              A inscrição de visitantes ajuda a organização a receber escolas, famílias e
              comunidade. Confira abaixo o cronograma e as principais atrações do dia.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono-code text-slate-300 pt-1">
              <Link
                to="/programacao"
                className="flex items-center gap-2 p-2.5 bg-[#F1F4FB] border border-slate-700 rounded-sm hover:border-[#FCC140] hover:text-[#8A5A04] transition-colors"
              >
                <Calendar className="w-4 h-4 text-[#8A5A04]" />
                <span>Cronograma completo</span>
              </Link>
              <Link
                to="/torneio"
                className="flex items-center gap-2 p-2.5 bg-[#F1F4FB] border border-slate-700 rounded-sm hover:border-[#FCC140] hover:text-[#8A5A04] transition-colors"
              >
                <Bot className="w-4 h-4 text-[#0369A1]" />
                <span>Torneios de robótica</span>
              </Link>
              <Link
                to="/geek"
                className="flex items-center gap-2 p-2.5 bg-[#F1F4FB] border border-slate-700 rounded-sm hover:border-[#FCC140] hover:text-[#8A5A04] transition-colors"
              >
                <Sparkles className="w-4 h-4 text-[#0369A1]" />
                <span>Cultura Geek</span>
              </Link>
              <Link
                to="/oficinas"
                className="flex items-center gap-2 p-2.5 bg-[#F1F4FB] border border-slate-700 rounded-sm hover:border-[#FCC140] hover:text-[#8A5A04] transition-colors"
              >
                <Wrench className="w-4 h-4 text-[#8A5A04]" />
                <span>Oficinas Maker</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-1 flex flex-col gap-2">
            {EVENT_INFO.links.visitantesRegistration ? (
              <a
                href={EVENT_INFO.links.visitantesRegistration}
                target="_blank"
                rel="noopener noreferrer"
                className="maker-btn-primary w-full py-3 px-5 text-xs uppercase flex items-center justify-center gap-2"
              >
                <span>Inscrever-se como visitante</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            ) : (
              <button
                type="button"
                disabled
                title="O formulário de inscrição de visitantes será disponibilizado em breve"
                className="maker-btn-primary w-full py-3 px-5 text-xs uppercase flex items-center justify-center gap-2 opacity-60 cursor-not-allowed"
              >
                <Clock className="w-4 h-4" />
                <span>Inscrições em breve</span>
              </button>
            )}
            <Link
              to="/programacao"
              className="maker-btn-secondary w-full py-3 px-5 text-xs uppercase flex items-center justify-center gap-2"
            >
              <span>Ver cronograma</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
