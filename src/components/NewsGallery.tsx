import React from 'react';
import { Link } from 'react-router-dom';
import { Camera, ExternalLink, Newspaper } from 'lucide-react';
import { img } from '../core/images';
import { NEWS_GALLERY } from '../core/news';

interface NewsGalleryProps {
  eyebrow?: string;
  title?: React.ReactNode;
  showCta?: boolean;
  className?: string;
}

const DEFAULT_TITLE = (
  <>
    O <span className="brand-name">Ôxe Maker</span> na Imprensa
  </>
);

export const NewsGallery: React.FC<NewsGalleryProps> = ({
  eyebrow = 'Memória em Imagens',
  title = DEFAULT_TITLE,
  showCta = false,
  className = '',
}) => {
  return (
    <section className={`space-y-6 ${className}`}>
      <div className="flex flex-wrap items-end justify-between gap-4 border-b border-slate-800 pb-4">
        <div className="space-y-1">
          <span className="inline-flex items-center gap-2 text-xs font-mono-code text-[#0369A1] uppercase font-bold tracking-widest">
            <Camera className="w-4 h-4" />
            {eyebrow}
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading text-[#0B1330] uppercase">{title}</h2>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <span className="px-2.5 py-1 bg-[#F1F4FB] border border-slate-700 text-[#0369A1] font-mono-code text-[11px] font-bold rounded-sm uppercase tracking-wider">
            {NEWS_GALLERY.length} registros
          </span>

          {showCta && (
            <Link
              to="/noticias"
              className="maker-btn-secondary px-4 py-2 text-[11px] uppercase flex items-center gap-2"
            >
              <Newspaper className="w-4 h-4" />
              <span>Na Mídia</span>
            </Link>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {NEWS_GALLERY.map((item) => (
          <a
            key={item.id}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group block bg-[#F9FDFE] border-2 border-slate-700/80 rounded-sm overflow-hidden hover:border-[#FCC140] hover:shadow-[4px_4px_0_0_#FCC140] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FCC140] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F1F4FB] transition-all"
          >
            <figure>
              <div className="relative aspect-[4/3] overflow-hidden border-b border-slate-800">
                <img
                  src={img(item.image)}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 px-2 py-0.5 bg-[#FCC140] text-[#050D34] font-mono-code text-[10px] font-bold rounded-sm uppercase tracking-wider">
                  {item.year}
                </span>
              </div>
              <figcaption className="p-4 space-y-2 text-left">
                <span className="block text-[10px] font-mono-code text-[#0369A1] uppercase font-bold tracking-widest">
                  {item.outlet}
                </span>
                <p className="text-xs text-slate-300 font-sans leading-relaxed">{item.caption}</p>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono-code font-bold uppercase tracking-wider text-[#8A5A04] group-hover:text-[#0369A1] transition-colors">
                  Ver cobertura
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </figcaption>
            </figure>
          </a>
        ))}
      </div>

      <p className="text-[11px] text-slate-400 font-sans leading-relaxed">
        Fotos publicadas nas coberturas da SEE-PE e da Folha de Pernambuco. Os links levam às
        matérias originais; textos e imagens pertencem aos veículos.
      </p>
    </section>
  );
};
