import React from 'react';
import { NEWS_DATA } from '../../core/news';
import { Newspaper, ExternalLink, CalendarDays, ArrowUpRight } from 'lucide-react';

const formatDate = (iso: string) => {
  const date = new Date(`${iso}T12:00:00`);
  return date.toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  });
};

export const NoticiasPage: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="space-y-3 text-center sm:text-left border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#8A5A04] uppercase font-bold tracking-wider">
          <Newspaper className="w-4 h-4" />
          <span>Na Mídia · 2024–2025</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-black text-[#0B1330] uppercase tracking-tight">
          O <span className="brand-name">Ôxe Maker</span> na Imprensa
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl font-sans">
          Reunimos as publicações que citam o Ôxe Maker nominalmente. São fontes externas,
          mantidas pelos próprios veículos — o conteúdo completo está sempre no link original.
        </p>
        <div className="flex flex-wrap items-center gap-2 pt-2 text-[11px] font-mono-code uppercase tracking-wider">
          <span className="px-2.5 py-1 bg-[#FCC140] text-[#050D34] font-bold rounded-sm">
            {NEWS_DATA.length} publicações
          </span>
          <span className="px-2.5 py-1 bg-[#F1F4FB] border border-slate-700 text-[#0369A1] rounded-sm">
            2 veículos
          </span>
          <span className="px-2.5 py-1 bg-[#F1F4FB] border border-slate-700 text-slate-400 rounded-sm">
            Sem cobertura de 2026 até o momento
          </span>
        </div>
      </div>

      {/* Timeline */}
      <div className="relative pl-6 sm:pl-8 border-l-2 border-[#01B1FD]/40 space-y-8">
        {NEWS_DATA.map((item) => (
          <article key={item.id} className="relative group">
            <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#FCC140] border-2 border-[#050D34] group-hover:scale-125 transition-transform" />

            <div className="bg-[#F9FDFE] border border-slate-700/80 hover:border-[#FCC140] p-5 sm:p-6 rounded-sm space-y-3 transition-all">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
                <div className="flex items-center gap-2 text-xs font-mono-code text-[#8A5A04]">
                  <CalendarDays className="w-3.5 h-3.5" />
                  <time dateTime={item.date} className="uppercase font-semibold">
                    {formatDate(item.date)}
                  </time>
                </div>
                <span
                  className={`px-2 py-0.5 text-[10px] font-mono-code uppercase font-bold rounded-sm ${
                    item.type === 'republicacao'
                      ? 'bg-[#F1F4FB] text-slate-400 border border-slate-700'
                      : 'bg-[#01B1FD]/15 text-[#0369A1] border border-[#01B1FD]/40'
                  }`}
                >
                  {item.type === 'republicacao' ? 'Republicação' : 'Reportagem'}
                </span>
              </div>

              <span className="block text-[11px] font-mono-code text-[#0369A1] uppercase tracking-widest">
                {item.outlet}
              </span>

              <h2 className="text-lg sm:text-xl font-heading text-[#0B1330] font-bold leading-snug">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-start gap-1.5 hover:text-[#8A5A04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FCC140] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F9FDFE] rounded-sm transition-colors"
                >
                  <span>{item.title}</span>
                  <ArrowUpRight className="w-4 h-4 mt-1 flex-shrink-0 opacity-60" />
                </a>
              </h2>

              <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                {item.summary}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-1">
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono-code font-bold uppercase tracking-wider text-[#8A5A04] hover:text-[#0369A1] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FCC140] rounded-sm transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>Ler no {item.outlet}</span>
                </a>

                {item.alsoPublishedAt && (
                  <a
                    href={item.alsoPublishedAt.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono-code uppercase tracking-wider text-slate-400 hover:text-[#0369A1] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FCC140] rounded-sm transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Também no {item.alsoPublishedAt.outlet}</span>
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Footer note */}
      <div className="bg-[#F9FDFE] border-2 border-slate-700/80 rounded-sm p-5 sm:p-6 space-y-2">
        <span className="text-xs font-mono-code text-[#0369A1] uppercase font-bold tracking-widest block">
          Sobre esta curadoria
        </span>
        <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
          Esta página lista apenas matérias jornalísticas que mencionam o Ôxe Maker. Textos,
          títulos e imagens pertencem aos veículos originais; ao clicar, você é levado ao site de
          cada publicação. A cobertura da 6ª edição (02 de dezembro de 2026) será adicionada aqui
          assim que for publicada.
        </p>
      </div>
    </div>
  );
};
