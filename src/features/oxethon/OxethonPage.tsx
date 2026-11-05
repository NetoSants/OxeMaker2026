import React from 'react';
import { Link } from 'react-router-dom';
import { OXETHON_INFO, EVENT_INFO } from '../../core/constants';
import {
  Cpu,
  Clock,
  Trophy,
  CheckCircle2,
  Calendar,
  Users,
  Award,
  FileText,
  Compass,
} from 'lucide-react';

export const OxethonPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="space-y-3 text-center sm:text-left border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#8A5A04] uppercase font-bold tracking-wider">
          <Cpu className="w-4 h-4 text-[#0369A1]" />
          <span>Hackathon Ôxe Maker · Pitch Final às 16h</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-black text-[#0B1330] uppercase tracking-tight">
          {OXETHON_INFO.title} 2026
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl font-sans">
          {OXETHON_INFO.description}
        </p>

        <div className="pt-3 flex flex-wrap items-center gap-3">
          <Link
            to="/programacao"
            className="maker-btn-primary px-6 py-3 text-xs uppercase flex items-center gap-2"
          >
            <Compass className="w-4 h-4" />
            <span>Ver Horário na Grade</span>
          </Link>
          <span className="text-xs font-mono-code text-slate-400">
            {EVENT_INFO.dates.display} · {EVENT_INFO.location.venue}
          </span>
        </div>
      </div>

      {/* Quick Overview Bento Card */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 bg-[#F9FDFE] border-2 border-slate-700/80 rounded-sm maker-shadow-yellow space-y-2">
          <div className="flex items-center gap-2 text-[#8A5A04] font-mono-code text-xs uppercase font-bold">
            <Clock className="w-4 h-4" />
            <span>Pitch Final</span>
          </div>
          <h3 className="text-xl font-heading text-[#0B1330]">16h00 às 17h00</h3>
          <p className="text-xs text-slate-300 font-sans">
            As equipes apresentam seus projetos no grande pitch, logo antes da cerimônia de
            premiação.
          </p>
        </div>

        <div className="p-5 bg-[#F9FDFE] border-2 border-slate-700/80 rounded-sm maker-shadow-cyan space-y-2">
          <div className="flex items-center gap-2 text-[#0369A1] font-mono-code text-xs uppercase font-bold">
            <Users className="w-4 h-4" />
            <span>Participação</span>
          </div>
          <h3 className="text-xl font-heading text-[#0B1330]">Equipes Escolares</h3>
          <p className="text-xs text-slate-300 font-sans">
            Inscrição de equipes e projetos pelo formulário oficial até 25/11/2026, com
            representantes da rede pública de Pernambuco.
          </p>
        </div>

        <div className="p-5 bg-[#F9FDFE] border-2 border-slate-700/80 rounded-sm maker-shadow-yellow space-y-2">
          <div className="flex items-center gap-2 text-emerald-700 font-mono-code text-xs uppercase font-bold">
            <Trophy className="w-4 h-4" />
            <span>Premiação</span>
          </div>
          <h3 className="text-xl font-heading text-[#0B1330]">Cerimônia às 17h</h3>
          <p className="text-xs text-slate-300 font-sans">
            A premiação do Hackathon acontece junto com a entrega de prêmios das competições, das
            17h00 às 18h00.
          </p>
        </div>
      </div>

      {/* Hackathon Arretado — história e espírito */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-[#F9FDFE] border-2 border-slate-700/80 rounded-sm p-6 sm:p-8 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-mono-code text-[#8A5A04] uppercase font-bold tracking-widest block">
            O Hackathon Arretado
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading text-[#0B1330] uppercase">
            {OXETHON_INFO.slogan}
          </h2>
          <p className="text-sm text-slate-300 font-sans leading-relaxed">{OXETHON_INFO.story}</p>
          <div className="flex flex-wrap gap-3 pt-2">
            <a
              href={OXETHON_INFO.registrationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="maker-btn-primary px-5 py-2.5 text-xs uppercase flex items-center gap-2"
            >
              <Users className="w-4 h-4" />
              <span>Inscrever Equipe</span>
            </a>
            <a
              href={OXETHON_INFO.regulationsUrl}
              className="maker-btn-secondary px-5 py-2.5 text-xs uppercase flex items-center gap-2"
            >
              <FileText className="w-4 h-4" />
              <span>Regulamento</span>
            </a>
          </div>
        </div>
        <div className="lg:col-span-5">
          <img
            src={OXETHON_INFO.image}
            alt="Hackathon Oxethon Ôxe Maker"
              className="w-full h-56 md:h-64 object-cover rounded-sm border border-slate-700/80"
              loading="lazy"
              decoding="async"
          />
        </div>
      </div>

      {/* Stages Timeline */}
      <div className="bg-[#F9FDFE] border-2 border-[#01B1FD] rounded-sm p-6 sm:p-8 maker-shadow-cyan-lg space-y-6">
        <div className="flex items-center gap-2 border-b border-slate-800 pb-4">
          <Calendar className="w-5 h-5 text-[#8A5A04]" />
          <h2 className="text-2xl font-heading text-[#0B1330] uppercase">
            Momento do Hackathon no Cronograma
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {OXETHON_INFO.stages.map((stage, idx) => (
            <div
              key={idx}
              className="bg-[#F1F4FB] border border-slate-700/80 p-4 rounded-sm space-y-2 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono-code text-[#0369A1] uppercase font-bold block mb-1">
                  Etapa 0{idx + 1}
                </span>
                <h4 className="text-sm font-bold font-heading text-[#0B1330]">{stage.phase}</h4>
                <span className="text-xs font-mono-code text-[#8A5A04] block my-1">
                  {stage.time}
                </span>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">
                  {stage.description}
                </p>
              </div>
            </div>
          ))}

          <div className="bg-[#F1F4FB] border border-slate-700/80 p-4 rounded-sm space-y-2 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-mono-code text-[#8A5A04] uppercase font-bold block mb-1">
                Premiação
              </span>
              <h4 className="text-sm font-bold font-heading text-[#0B1330]">
                Cerimônia de Premiação Geral
              </h4>
              <span className="text-xs font-mono-code text-[#8A5A04] block my-1">
                Quarta, 02/12 · 17h00 às 18h00
              </span>
              <p className="text-xs text-slate-300 font-sans leading-relaxed">
                Entrega de prêmios, encerramento e foto oficial do evento.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Awards highlight */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 bg-[#F9FDFE] border-2 border-slate-700/80 rounded-sm space-y-2">
          <div className="flex items-center gap-2 text-[#8A5A04] font-mono-code text-xs uppercase font-bold">
            <Award className="w-4 h-4" />
            <span>Tema 2026</span>
          </div>
          <p className="text-sm text-slate-200 font-sans leading-relaxed">
            "Vidas, Escolas e Comunidades: Educar para a Promoção da Justiça Socioambiental"
          </p>
        </div>
        <div className="p-5 bg-[#F9FDFE] border-2 border-slate-700/80 rounded-sm space-y-2">
          <div className="flex items-center gap-2 text-[#0369A1] font-mono-code text-xs uppercase font-bold">
            <Clock className="w-4 h-4" />
            <span>Validação</span>
          </div>
          <p className="text-sm text-slate-200 font-sans leading-relaxed">
            Projetos selecionados são validados por banca composta por representantes da GRE
            Metropolitana Norte e da SEE-PE.
          </p>
        </div>
        <div className="p-5 bg-[#F9FDFE] border-2 border-slate-700/80 rounded-sm space-y-2">
          <div className="flex items-center gap-2 text-emerald-700 font-mono-code text-xs uppercase font-bold">
            <Users className="w-4 h-4" />
            <span>Inscrições</span>
          </div>
          <p className="text-sm text-slate-200 font-sans leading-relaxed">
            Inscrições limitadas por modalidade, até 25 de novembro de 2026.
          </p>
        </div>
      </div>

      {/* Regulations summary */}
      <div className="bg-[#F9FDFE] border border-slate-700/80 rounded-sm p-6 space-y-4">
        <h3 className="text-base font-bold font-heading text-[#0B1330] flex items-center gap-2">
          <FileText className="w-5 h-5 text-[#0369A1]" />
          <span>Orientações do Hackathon</span>
        </h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300 font-sans">
          {OXETHON_INFO.regulationsSummary.map((reg, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#0369A1] flex-shrink-0 mt-0.5" />
              <span>{reg}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Final CTA Banner */}
      <div className="text-center p-8 bg-[#0030B5]/20 border-2 border-[#FCC140] rounded-sm maker-shadow-yellow space-y-4">
        <h3 className="text-2xl sm:text-3xl font-heading text-[#0B1330] uppercase">
          Inscreva Sua Equipe Até 25/11
        </h3>
        <p className="text-slate-300 text-xs sm:text-sm max-w-xl mx-auto font-sans">
          Garanta a vaga da sua escola no Ôxe Maker 2026 e prepare o projeto para o pitch final das
          16h.
        </p>
        <Link
          to="/#inscricoes"
          className="maker-btn-primary px-8 py-3.5 text-xs uppercase inline-flex items-center gap-2"
        >
          <Trophy className="w-4 h-4" />
          <span>Ver Modalidades de Inscrição</span>
        </Link>
      </div>
    </div>
  );
};
