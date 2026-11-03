import React from 'react';
import { WORKSHOPS_DATA, WORKSHOPS_REGISTRATION_URL } from '../../core/constants';
import { Wrench, Clock, MapPin, Users, BookOpen, School, Laptop, Sparkles } from 'lucide-react';

export const OficinasPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="space-y-3 text-center sm:text-left border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#0369A1] uppercase font-bold tracking-wider">
          <Wrench className="w-4 h-4 text-[#8A5A04]" />
          <span>Oficinas 2026 · Propostas Recebidas</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-black text-[#0B1330] uppercase tracking-tight">
          Oficinas Propostas
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl font-sans">
          Nove propostas enviadas por escolas da rede estadual para a 6ª edição. A programação
          final, os horários e a grade de oficinas serão confirmados pela organização.
        </p>
        <div className="flex flex-col sm:flex-row gap-2.5 pt-2">
          {WORKSHOPS_REGISTRATION_URL ? (
            <a
              href={WORKSHOPS_REGISTRATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="maker-btn-primary py-2.5 px-5 text-xs uppercase flex items-center justify-center gap-2"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Inscrever-se nas oficinas</span>
            </a>
          ) : (
            <button
              type="button"
              disabled
              title="O formulário de inscrição será disponibilizado em breve"
              className="maker-btn-primary py-2.5 px-5 text-xs uppercase flex items-center justify-center gap-2 opacity-60 cursor-not-allowed"
            >
              <Clock className="w-3.5 h-3.5" />
              <span>Inscrições em breve</span>
            </button>
          )}
        </div>
      </div>

      {/* Workshop Proposal Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
        {WORKSHOPS_DATA.map((ws, idx) => (
          <article
            key={ws.id}
            className="bg-[#F9FDFE] border-2 border-slate-700/80 hover:border-[#FCC140] rounded-sm p-5 sm:p-6 transition-all hover:maker-shadow-yellow group flex flex-col gap-4"
          >
            <div className="space-y-2">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2 py-0.5 bg-[#F1F4FB] text-[#8A5A04] font-mono-code text-xs font-bold rounded-sm border border-slate-700">
                  Proposta {String(idx + 1).padStart(2, '0')}
                </span>
                {ws.school && (
                  <span className="inline-flex items-center gap-1.5 max-w-full px-2 py-0.5 bg-[#01B1FD]/15 text-[#0369A1] font-mono-code text-[11px] font-bold rounded-sm border border-[#01B1FD]/40">
                    <School className="w-3.5 h-3.5 flex-shrink-0" />
                    <span className="break-words">{ws.school}</span>
                  </span>
                )}
              </div>

              <h2 className="text-xl sm:text-2xl font-heading text-[#0B1330] group-hover:text-[#8A5A04] transition-colors">
                {ws.title}
              </h2>
            </div>

            <p className="text-sm text-slate-300 font-sans leading-relaxed">{ws.description}</p>

            <div className="mt-auto bg-[#F1F4FB] border border-slate-700/80 rounded-sm p-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono-code">
              <div className="sm:col-span-2">
                <span className="flex items-center gap-1.5 text-slate-400 uppercase text-[10px] font-bold mb-1">
                  <Clock className="w-3.5 h-3.5 text-[#8A5A04]" />
                  Data & Hora
                </span>
                <span className="font-bold text-[#0B1330]">{ws.schedule}</span>
              </div>

              <div>
                <span className="flex items-center gap-1.5 text-slate-400 uppercase text-[10px] font-bold mb-1">
                  <MapPin className="w-3.5 h-3.5 text-[#0369A1]" />
                  Local
                </span>
                <span className="font-bold text-[#0B1330]">{ws.room || 'A definir'}</span>
              </div>

              <div>
                <span className="flex items-center gap-1.5 text-slate-400 uppercase text-[10px] font-bold mb-1">
                  <Users className="w-3.5 h-3.5 text-emerald-700" />
                  Público-Alvo
                </span>
                <span className="font-bold text-[#0B1330]">{ws.targetAudience}</span>
              </div>

              {ws.software && (
                <div className="sm:col-span-2 border-t border-slate-800 pt-2">
                  <span className="flex items-center gap-1.5 text-slate-400 uppercase text-[10px] font-bold mb-1">
                    <Laptop className="w-3.5 h-3.5 text-[#8A5A04]" />
                    Programa / Software
                  </span>
                  <span className="font-bold text-[#0B1330]">{ws.software}</span>
                </div>
              )}
            </div>

            <p className="flex items-center gap-1.5 text-[10px] font-mono-code text-slate-400">
              <BookOpen className="w-3.5 h-3.5 text-[#0369A1] flex-shrink-0" />
              Proposta recebida para avaliação da organização.
            </p>
          </article>
        ))}
      </div>
    </div>
  );
};
