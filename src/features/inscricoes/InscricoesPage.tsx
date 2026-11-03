import React from 'react';
import { Link } from 'react-router-dom';
import {
  EVENT_INFO,
  GEEK_CATEGORIES,
  OXETHON_INFO,
  TOURNAMENTS_DATA,
  WORKSHOPS_DATA,
} from '../../core/constants';
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
  Sparkles,
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
    id: 'oxethon',
    title: 'Oxethon',
    description: 'Hackathon e pitch final',
    icon: Cpu,
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

      <nav aria-label="Tópicos de inscrição" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {TOPICS.map((topic) => {
          const Icon = topic.icon;
          return (
            <button
              key={topic.id}
              type="button"
              onClick={() => scrollToTopic(topic.id)}
              className="group bg-[#F9FDFE] border-2 border-slate-700/80 hover:border-[#FCC140] rounded-sm p-5 transition-all hover:maker-shadow-yellow flex flex-col gap-3 text-left cursor-pointer"
            >
              <div className="p-2.5 bg-[#F1F4FB] border border-slate-700 rounded-sm w-fit group-hover:border-[#FCC140] transition-colors">
                <Icon className="w-5 h-5 text-[#8A5A04]" />
              </div>
              <div className="space-y-1 flex-1">
                <span className="block text-base font-heading text-[#0B1330] uppercase group-hover:text-[#8A5A04] transition-colors">
                  {topic.title}
                </span>
                <span className="block text-xs text-slate-400 font-sans">{topic.description}</span>
              </div>
              <span className="inline-flex items-center gap-2 text-[11px] font-mono-code uppercase font-bold text-[#0369A1] group-hover:text-[#8A5A04] transition-colors">
                Ir para inscrição
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
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
              As submissões de propostas para a 6ª edição foram encerradas em 09/10/2026. Confira
              os temas, as escolas proponentes e os programas previstos na página de Oficinas.
            </p>
          </div>

          <div className="lg:col-span-1">
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

      {/* Oxethon */}
      <section className="space-y-6">
        <SectionHeading
          id="oxethon"
          icon={<Cpu className="w-6 h-6 text-[#0369A1]" />}
          eyebrow="Hackathon"
          title="Oxethon"
          description="Monte sua equipe, desenvolva uma solução e apresente o pitch no dia 27 de novembro."
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
                  16h00 às 17h00
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
    </div>
  );
};
