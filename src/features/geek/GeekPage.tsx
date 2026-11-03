import React from 'react';
import { GEEK_CATEGORIES, EVENT_INFO } from '../../core/constants';
import {
  Sparkles,
  Music,
  Crown,
  Clock,
  MapPin,
  CheckCircle2,
  AlertCircle,
  FileText,
  Smile,
  Flame,
} from 'lucide-react';

export const GeekPage: React.FC = () => {
  const getCategoryIcon = (id: string) => {
    switch (id) {
      case 'cosplay':
        return <Crown className="w-6 h-6 text-[#8A5A04]" />;
      case 'kpop':
        return <Music className="w-6 h-6 text-[#0369A1]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#8A5A04]" />;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="space-y-3 text-center sm:text-left border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#0369A1] uppercase font-bold tracking-wider">
          <Sparkles className="w-4 h-4 text-[#8A5A04]" />
          <span>Palco Geek & Cultura Pop · {EVENT_INFO.location.venue}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-black text-[#0B1330] uppercase tracking-tight">
          Cultura Geek & Expressão Juvenil
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl font-sans">
          A robótica ganha vida quando se conecta com a paixão dos estudantes por animes, games,
          ficção científica e dança. Conheça as 2 modalidades do Polo Geek do Ôxe Maker 2026!
        </p>
      </div>

      {/* Geek Banner Highlight */}
      <div className="p-6 bg-gradient-to-r from-[#F9FDFE] to-[#0030B5]/15 border-2 border-[#01B1FD] rounded-sm maker-shadow-cyan flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#8A5A04] uppercase font-bold">
            <Flame className="w-4 h-4 text-[#8A5A04]" />
            <span>Espaço Totalmente Climatizado para Camarim</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-heading text-[#0B1330]">
            Apresentações ao Vivo, Torcida Apaixonada & Premiações
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-sans max-w-xl">
            Inscrições abertas para estudantes da rede pública e comunidade. Traga seu
            cosplay feito com materiais makers ou monte seu grupo cover de K-pop!
          </p>
        </div>

        <div className="flex-shrink-0">
          <a
            href={GEEK_CATEGORIES[0].registrationUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="maker-btn-primary px-6 py-3 text-xs uppercase flex items-center gap-2"
          >
            <Crown className="w-4 h-4" />
            <span>Inscrever Meu Cosplay</span>
          </a>
        </div>
      </div>

      {/* 2 Categories Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {GEEK_CATEGORIES.map((cat) => (
          <div
            key={cat.id}
            className="bg-[#F9FDFE] border-2 border-slate-700/80 hover:border-[#FCC140] rounded-sm p-6 flex flex-col justify-between space-y-6 transition-all hover:maker-shadow-yellow group"
          >
            <div className="space-y-4">
              {cat.image && (
                <div className="rounded-sm overflow-hidden border border-slate-700/80 bg-[#F1F4FB]">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full aspect-[16/9] object-cover group-hover:scale-[1.02] transition-transform"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              )}

              {/* Icon and Title */}
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#F1F4FB] border border-slate-700 rounded-sm">
                  {getCategoryIcon(cat.id)}
                </div>
                <div>
                  <h3 className="text-xl font-heading text-[#0B1330] group-hover:text-[#8A5A04] transition-colors">
                    {cat.name}
                  </h3>
                  <span className="text-xs font-mono-code text-[#0369A1] block">
                    {cat.subtitle}
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {cat.description}
              </p>

              {/* Schedule and Stage */}
              <div className="p-3 bg-[#F1F4FB] border border-slate-800 rounded-sm space-y-1.5 text-xs font-mono-code">
                <div className="flex items-center gap-2 text-slate-300">
                  <Clock className="w-3.5 h-3.5 text-[#8A5A04]" />
                  <span>{cat.scheduleTime}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <MapPin className="w-3.5 h-3.5 text-[#0369A1]" />
                  <span>{cat.stage}</span>
                </div>
              </div>

              {/* Judging Criteria */}
              <div>
                <span className="text-xs font-mono-code text-[#8A5A04] uppercase font-bold block mb-2">
                  Critérios de Avaliação da Banca:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-300 font-sans">
                  {cat.criteria.map((cr, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#0369A1] flex-shrink-0 mt-0.5" />
                      <span>{cr}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlight Rules */}
              <div>
                <span className="text-xs font-mono-code text-slate-400 uppercase font-bold block mb-1.5">
                  Regulamento Resumido:
                </span>
                <ul className="space-y-1 text-[11px] text-slate-400 font-sans">
                  {cat.rulesHighlight.map((rule, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-[#8A5A04] font-bold">·</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Prizes */}
              <div className="p-3 bg-[#0030B5]/20 border border-[#01B1FD]/30 rounded-sm text-xs font-sans text-slate-300 text-justify">
                <strong className="text-[#8A5A04] block font-mono-code text-[11px] uppercase mb-0.5">
                  Premiação Oficial:
                </strong>
                <span>{cat.prizes}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row gap-2.5">
              <a
                href={cat.registrationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 maker-btn-primary py-2.5 text-xs uppercase flex items-center justify-center gap-2"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Inscrever-se</span>
              </a>
              <a
                href={cat.rulesPdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 maker-btn-secondary py-2.5 text-xs uppercase flex items-center justify-center gap-2"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Ver Edital</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Safety & Conduct Policy */}
      <div className="bg-[#F9FDFE] border border-slate-700/80 rounded-sm p-6 space-y-3">
        <div className="flex items-center gap-2 text-[#0B1330] font-heading text-lg">
          <AlertCircle className="w-5 h-5 text-[#8A5A04]" />
          <span>Diretrizes de Convivência & Respeito no Palco Geek</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
          O Ôxe Maker promove um ambiente inclusivo, seguro e acolhedor para todas as identidades,
          expressões de gênero e etnias. Assédio verbal, físico ou fotográfico não consentido resulta
          em expulsão imediata do evento. Cosplay não é consentimento! Respeitem os artistas.
        </p>
      </div>
    </div>
  );
};
