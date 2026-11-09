import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { EVENT_INFO } from '../core/constants';
import { img } from '../core/images';
import { MapPin, Mail, Phone, ExternalLink, Heart, ShieldCheck, Calendar } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#DFE6F3] text-slate-300 border-t-2 border-[#01B1FD]/20 pt-14 pb-8 relative overflow-hidden">
      {/* Decorative top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FCC140] via-[#01B1FD] to-[#C8D8F4]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-10 border-b border-slate-800">
          {/* Brand & Slogan Column */}
          <div className="lg:col-span-4 space-y-4">
            <Logo size="md" />
            <div>
              <p className="text-xs font-mono-code text-[#8A5A04] tracking-wide">
                {EVENT_INFO.tagline}
              </p>
              <p className="text-[11px] font-mono-code text-slate-500">
                // formando cidadãs e cidadãos críticos e responsáveis
              </p>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed font-sans">
              O maior evento de robótica educacional e cultura maker da rede pública de Pernambuco.
              Inovação aberta, ciência viva e protagonismo juvenil das escolas do Litoral Norte.
            </p>
            <div className="p-3 bg-[#FCC140]/10 border-2 border-[#FCC140]/70 rounded-sm">
              <span className="text-[10px] font-mono-code text-[#8A5A04] uppercase font-bold block mb-1">
                Tema Oficial 2026:
              </span>
              <p className="text-xs text-[#0B1330] italic font-sans font-semibold">
                "{EVENT_INFO.theme2026}"
              </p>
            </div>
          </div>

          {/* Quick Links Column */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-mono-code uppercase font-bold text-[#0B1330] tracking-widest border-b border-slate-800 pb-2">
              Navegação
            </h3>
            <ul className="space-y-2 text-xs font-medium">
              <li>
                <Link to="/" className="text-slate-400 hover:text-[#8A5A04] transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/programacao" className="text-slate-400 hover:text-[#8A5A04] transition-colors">
                  Programação do Evento
                </Link>
              </li>
              <li>
                <Link to="/torneio" className="text-slate-400 hover:text-[#8A5A04] transition-colors">
                  Torneios de Robótica
                </Link>
              </li>
              <li>
                <Link to="/geek" className="text-slate-400 hover:text-[#8A5A04] transition-colors">
                  Cultura Geek & Cosplay
                </Link>
              </li>
              <li>
                <Link to="/oxethon" className="text-slate-400 hover:text-[#8A5A04] transition-colors">
                  Hackathon Ôxe Maker
                </Link>
              </li>
              <li>
                <Link to="/oficinas" className="text-slate-400 hover:text-[#8A5A04] transition-colors">
                  Oficinas Práticas
                </Link>
              </li>
              <li>
                <Link to="/mapa" className="text-slate-400 hover:text-[#8A5A04] transition-colors">
                  Mapa & Como Chegar
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-slate-400 hover:text-[#8A5A04] transition-colors">
                  História & Homenagem
                </Link>
              </li>
            </ul>
          </div>

          {/* Data · Local · Contato Column (unificada) */}
          <div className="lg:col-span-5 space-y-5">
            <div className="space-y-3">
              <h3 className="text-xs font-mono-code uppercase font-bold text-[#0B1330] tracking-widest border-b border-slate-800 pb-2">
                Data & Local
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-400">
                <div className="space-y-2.5">
                  <div className="flex items-start gap-2">
                    <Calendar className="w-4 h-4 text-[#8A5A04] flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#0B1330] block font-mono-code">{EVENT_INFO.dates.display}</strong>
                      <span>{EVENT_INFO.dates.timeRange}</span>
                    </div>
                  </div>
                  <Link
                    to="/mapa"
                    className="inline-flex items-center gap-1.5 text-xs font-mono-code text-[#0369A1] hover:underline"
                  >
                    <span>Ver rota e mapa ampliado</span>
                    <ExternalLink className="w-3 h-3" />
                  </Link>
                </div>

                <div className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 text-[#0369A1] flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#0B1330] block">{EVENT_INFO.location.venue}</strong>
                    <p>{EVENT_INFO.location.fullAddress}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-800 space-y-3">
              <h3 className="text-xs font-mono-code uppercase font-bold text-[#0B1330] tracking-widest">
                Realização & Contato
              </h3>
              <p className="text-xs text-slate-300 font-semibold">
                {EVENT_INFO.organizer} · Secretaria de Educação e Esportes de PE
              </p>
              <div className="space-y-2 text-xs font-mono-code text-slate-400">
                <div className="flex items-center gap-2">
                  <Mail className="w-3.5 h-3.5 text-slate-400" />
                  <a
                    href={`mailto:${EVENT_INFO.contact.email}`}
                    className="hover:text-[#8A5A04] transition-colors"
                  >
                    {EVENT_INFO.contact.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-3.5 h-3.5 text-slate-400" />
                  <span>{EVENT_INFO.contact.phone}</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-slate-900 border border-slate-700 rounded text-[11px] font-mono-code text-emerald-700">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Evento Oficial Certificado · 6ª Edição</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom unified bar: créditos + parceiros */}
        <div className="pt-6 flex flex-col lg:flex-row items-center justify-between gap-4 text-xs font-mono-code text-slate-500">
          <p>
            © 2021–2026 {EVENT_INFO.name}. Todos os direitos reservados.
          </p>
          {/* Logos brancos ("claras") sobre plaque escuro para manter visibilidade no footer claro */}
          <div className="bg-[#0B1330] px-4 py-2.5 rounded-sm border border-[#01B1FD]/25">
            <img
              src={img('logos-claras.webp')}
              alt="Logos dos parceiros do Ôxe Maker"
              width={900}
              height={157}
              className="max-h-10 w-auto object-contain"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="flex items-center gap-1.5">
            <span>Desenvolvido com</span>
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>para a Educação Pública de Pernambuco.</span>
          </p>
        </div>
      </div>
    </footer>
  );
};