import React from 'react';
import { TOURNAMENTS_DATA, EVENT_INFO } from '../../core/constants';
import {
  Bot,
  Zap,
  Shield,
  Navigation,
  FileText,
  Users,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
} from 'lucide-react';

export const TorneioPage: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Zap':
        return <Zap className="w-6 h-6 text-[#8A5A04]" />;
      case 'Shield':
        return <Shield className="w-6 h-6 text-[#0369A1]" />;
      default:
        return <Navigation className="w-6 h-6 text-[#8A5A04]" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="space-y-3 text-center sm:text-left border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#8A5A04] uppercase font-bold tracking-wider">
          <Bot className="w-4 h-4" />
          <span>Competições · 02 de Dezembro · {EVENT_INFO.location.venue}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-black text-[#0B1330] uppercase tracking-tight">
          Torneios de Robótica 2026
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl font-sans">
          3 categorias oficiais de robótica: Buzz Line, Buzz Pro e Sumô.
          Reúna sua equipe escolar, construa seu robô e dispute os troféus do Ôxe Maker 2026!
        </p>
      </div>

      {/* Credentialing Notice Banner */}
      <div className="p-4 bg-[#F9FDFE] border-l-4 border-[#01B1FD] border-y border-r border-slate-700/80 rounded-sm flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-[#8A5A04] flex-shrink-0 mt-0.5" />
          <div className="text-xs text-slate-300 space-y-0.5">
            <span className="font-bold text-[#0B1330] block uppercase font-mono-code">
              Credenciamento e Regras Técnicas:
            </span>
            <p>
              As equipes devem estar credenciadas das 07h00 às 08h00 do dia 02/12. Todos os robôs
              devem respeitar os padrões de segurança e possuir chave geral identificada.
            </p>
          </div>
        </div>
        <span className="text-xs font-mono-code text-[#0369A1] font-bold flex-shrink-0">
          Competições · 14h30 às 15h30
        </span>
      </div>

      {/* 3 Tournament Cards */}
      <div className="space-y-8">
        {TOURNAMENTS_DATA.map((t, index) => (
          <div
            key={t.id}
            className="bg-[#F9FDFE] border-2 border-slate-700/80 hover:border-[#FCC140] rounded-sm p-6 sm:p-8 transition-all hover:maker-shadow-yellow group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Left Column: Title, Category, Description + Imagem */}
              <div className="lg:col-span-8 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-[#F1F4FB] border border-slate-700 rounded-sm">
                    {getIcon(t.icon)}
                  </div>
                  <div>
                    <span className="text-xs font-mono-code text-[#0369A1] uppercase font-bold tracking-wider block">
                      Modalidade 0{index + 1} · {t.category}
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-heading text-[#0B1330] group-hover:text-[#8A5A04] transition-colors">
                      {t.name}
                    </h2>
                  </div>
                </div>

                <p className="text-sm text-slate-300 font-sans leading-relaxed">
                  {t.description}
                </p>

                {t.image && (
                  <div className="rounded-sm overflow-hidden border border-slate-700/80 bg-[#F1F4FB]">
                    <img
                      src={t.image}
                      alt={t.name}
              className="w-full h-56 sm:h-64 lg:h-72 object-cover group-hover:scale-[1.02] transition-transform duration-300"
              loading="lazy"
              decoding="async"
                    />
                  </div>
                )}

                {/* Arena details */}
                <div className="p-3 bg-[#F1F4FB] border border-slate-800 rounded-sm text-xs font-sans text-slate-300 text-justify">
                  <strong className="text-slate-200 block font-mono-code text-[11px] uppercase mb-0.5">
                    Especificações da Arena:
                  </strong>
                  <span>{t.arenaDetails}</span>
                </div>
              </div>

              {/* Right Column: Schedule, Team, Prize, Regras & Ações */}
              <div className="lg:col-span-4 bg-[#F1F4FB] border border-slate-700/80 rounded-sm p-5 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono-code text-slate-300 border-b border-slate-800 pb-2">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Clock className="w-4 h-4 text-[#8A5A04]" />
                      Horário:
                    </span>
                    <span className="font-bold text-[#0B1330] text-right">{t.scheduleTime}</span>
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono-code text-slate-300 border-b border-slate-800 pb-2">
                    <span className="flex items-center gap-1.5 text-slate-400">
                      <Users className="w-4 h-4 text-[#0369A1]" />
                      Tamanho da Equipe:
                    </span>
                    <span className="font-bold text-[#0B1330]">Até {t.maxTeamSize} integrantes</span>
                  </div>

                  <div className="text-xs text-slate-300 space-y-1">
                    <span className="text-[11px] font-mono-code text-[#8A5A04] uppercase font-bold block">
                      Premiação:
                    </span>
                    <p className="font-sans leading-tight text-slate-300">{t.prizeSummary}</p>
                  </div>
                </div>

                {/* Requirements bullet list */}
                <div className="space-y-1.5 pt-3 border-t border-slate-800">
                  <span className="text-[11px] font-mono-code text-[#8A5A04] uppercase font-bold block">
                    Regras & Requisitos Principais:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {t.requirements.map((req, rIdx) => (
                      <li key={rIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0369A1] flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action buttons */}
                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <a
                    href={t.registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 maker-btn-primary py-2.5 px-4 text-xs uppercase flex items-center justify-center gap-1.5"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Inscrever Robô</span>
                  </a>

                  <a
                    href={t.editalPdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="maker-btn-secondary py-2.5 px-4 text-xs uppercase flex items-center justify-center gap-1.5"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Ver Edital</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
