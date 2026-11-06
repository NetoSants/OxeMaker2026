import React, { useState } from 'react';
import { EVENT_INFO } from '../../core/constants';
import { REGISTRATION_DEADLINE } from '../../core/eventMeta';
import {
  MapPin,
  Navigation,
  Bus,
  Bike,
  Compass,
  CheckCircle2,
  ExternalLink,
  Layers,
  Sparkles,
} from 'lucide-react';

export const MapaPage: React.FC = () => {
  const [activeSector, setActiveSector] = useState<'ginasio' | 'patio' | 'labs' | 'cafeteria'>('ginasio');

  const sectors = [
    {
      id: 'ginasio',
      name: 'Frente da Escola · Credenciamento',
      subtitle: '07h00 às 08h00',
      description:
        'Ponto de chegada de todos os participantes. O credenciamento dos inscritos acontece na frente do evento, das 07h00 às 08h00, antes da abertura cultural.',
      color: '#FCC140',
      highlights: ['Credenciamento dos inscritos', 'Acolhimento e crachás', 'Chegada de caravanas escolares'],
    },
    {
      id: 'patio',
      name: 'Palco Principal · Abertura & Premiação',
      subtitle: 'Cultura, Palestras & Pitch',
      description:
        'Palco onde acontecem a abertura cultural com danças (08h30), os TED Talks (09h00), a apresentação do pitch do Hackathon (16h00) e a cerimônia de premiação (17h00).',
      color: '#01B1FD',
      highlights: ['Abertura Cultural · 08h30', 'TED Talks · 09h00', 'Pitch do Hackathon · 16h00', 'Premiação · 17h00'],
    },
    {
      id: 'labs',
      name: 'Salas de Oficina',
      subtitle: 'Oficinas de Robótica & Cultura Maker',
      description:
        `Salas onde acontecem as oficinas de robótica e cultura maker, das 10h00 às 12h00, com os oficineiros (alunos e professores) inscritos até ${REGISTRATION_DEADLINE.short}.`,
      color: '#4ADE80',
      highlights: ['Oficina de robótica', 'Cultura maker', 'Materiais fornecidos pela organização'],
    },
    {
      id: 'cafeteria',
      name: 'Cafeteria · Almoço & Lanches',
      subtitle: 'Intervalos do Dia',
      description:
        'Espaço dos intervalos: lanche às 09h30, almoço das 12h00 às 13h00 e novo lanche às 15h30, conforme o cronograma oficial.',
      color: '#C084FC',
      highlights: ['Lanche · 09h30', 'Almoço · 12h00 às 13h00', 'Lanche · 15h30'],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Header */}
      <div className="space-y-3 text-center sm:text-left border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#0369A1] uppercase font-bold tracking-wider">
          <MapPin className="w-4 h-4 text-[#8A5A04]" />
          <span>Localização & Infraestrutura · {EVENT_INFO.location.city} - {EVENT_INFO.location.state}</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-black text-[#0B1330] uppercase tracking-tight">
          Como Chegar & Mapa do Local
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl font-sans">
          O Ôxe Maker 2026 será sediado na {EVENT_INFO.location.venue}, em {EVENT_INFO.location.city} ({EVENT_INFO.location.neighborhood}), com
          frente ampla para credenciamento, palco principal, salas de oficina e cafeteria.
        </p>
      </div>

      {/* Address & Quick Actions Card */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-7 bg-[#F9FDFE] border-2 border-slate-700/80 rounded-sm p-6 maker-shadow-yellow flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            <span className="text-xs font-mono-code text-[#8A5A04] uppercase font-bold block">
              Endereço Oficial
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading text-[#0B1330]">
              {EVENT_INFO.location.venue}
            </h2>
            <p className="text-base text-slate-200 font-sans">
              {EVENT_INFO.location.fullAddress}
            </p>
            <div className="p-3 bg-[#F1F4FB] border border-slate-700 rounded-sm text-xs text-slate-300 space-y-1">
              <strong className="text-[#0B1330] block font-mono-code">Espaços do Evento:</strong>
              <p>{EVENT_INFO.location.space}</p>
            </div>
          </div>

          <div className="space-y-3 pt-4 border-t border-slate-700/80">
            <span className="text-xs font-mono-code text-slate-400 uppercase font-bold block">
              Pontos de Referência Importantes:
            </span>
            <ul className="space-y-1.5 text-xs text-slate-300">
              {EVENT_INFO.location.referencePoints.map((ref, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0369A1] flex-shrink-0" />
                  <span>{ref}</span>
                </li>
              ))}
            </ul>

            <div className="pt-3 flex flex-wrap gap-3">
              <a
                href={EVENT_INFO.location.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="maker-btn-primary px-5 py-2.5 text-xs uppercase flex items-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Abrir Rota no Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Embedded Interactive Google Map */}
        <div className="lg:col-span-5 bg-[#F9FDFE] border-2 border-[#01B1FD] rounded-sm p-2 maker-shadow-cyan overflow-hidden min-h-[340px] flex flex-col">
          <div className="p-2 flex items-center justify-between text-xs font-mono-code text-slate-300 bg-[#F1F4FB] border border-slate-800 rounded-t-sm mb-2">
            <span className="flex items-center gap-1.5 text-[#0369A1]">
              <Compass className="w-3.5 h-3.5" />
              <span>{EVENT_INFO.location.neighborhood}, {EVENT_INFO.location.city} ({EVENT_INFO.location.state})</span>
            </span>
            <span className="text-slate-400">Ao vivo</span>
          </div>
          <div className="flex-1 w-full rounded-sm overflow-hidden border border-slate-700/60 relative">
            <iframe
              title="Localização ETE José de Alencar no Google Maps"
              src={EVENT_INFO.location.googleMapsEmbedUrl}
              className="w-full h-full min-h-[300px] border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              sandbox="allow-scripts allow-same-origin allow-popups"
            />
          </div>
        </div>
      </div>

      {/* Transit & Transport Tips */}
      <div className="space-y-4">
        <h2 className="text-2xl font-heading text-[#0B1330] uppercase flex items-center gap-2">
          <Bus className="w-6 h-6 text-[#8A5A04]" />
          <span>Dicas de Transporte & Acesso</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {EVENT_INFO.location.transitTips.map((tip, idx) => (
            <div
              key={idx}
              className="bg-[#F9FDFE] border border-slate-700/80 p-5 rounded-sm space-y-2 hover:border-[#FCC140] transition-colors"
            >
              <div className="flex items-center gap-2 text-[#0369A1]">
                {idx === 0 ? <Bus className="w-5 h-5" /> : idx === 1 ? <Bike className="w-5 h-5" /> : <Navigation className="w-5 h-5" />}
                <h3 className="text-sm font-bold font-heading text-[#0B1330]">{tip.title}</h3>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-sans">{tip.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Interactive Sectors Map of ETE José de Alencar */}
      <div className="bg-[#F9FDFE] border-2 border-[#FCC140] rounded-sm p-6 sm:p-8 maker-shadow-yellow-lg space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <span className="text-xs font-mono-code text-[#0369A1] uppercase font-bold tracking-wider block mb-1">
              Planta & Ambientes do Evento
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading text-[#0B1330] uppercase">
              Espaços da ETE José de Alencar
            </h2>
          </div>
          <div className="flex items-center gap-1.5 text-xs font-mono-code text-[#8A5A04]">
            <Layers className="w-4 h-4" />
            <span>Selecione para explorar o setor:</span>
          </div>
        </div>

        {/* Sector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
          {sectors.map((sec) => (
            <button
              key={sec.id}
              onClick={() => setActiveSector(sec.id as any)}
              className={`p-3 text-left rounded-sm font-mono-code transition-all ${
                activeSector === sec.id
                  ? 'bg-[#F1F4FB] border-2 border-[#FCC140] text-[#0B1330] shadow-md'
                  : 'bg-[#F1F4FB]/50 border border-slate-700 text-slate-300 hover:border-slate-500'
              }`}
            >
              <span className="text-[10px] text-[#0369A1] block uppercase">{sec.subtitle}</span>
              <span className="text-xs sm:text-sm font-bold text-[#0B1330] font-sans">{sec.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Sector Details Box */}
        {(() => {
          const current = sectors.find((s) => s.id === activeSector)!;
          return (
            <div className="p-5 bg-[#F1F4FB] border border-slate-700 rounded-sm space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                <h3 className="text-xl font-heading text-[#0B1330] flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full" style={{ backgroundColor: current.color }} />
                  {current.name}
                </h3>
                <span className="text-xs font-mono-code text-[#8A5A04] uppercase">
                  {current.subtitle}
                </span>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {current.description}
              </p>

              <div>
                <span className="text-xs font-mono-code text-slate-400 uppercase font-bold block mb-2">
                  Destaques no local:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {current.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs text-slate-200 bg-[#F9FDFE] px-3 py-1.5 rounded-sm border border-slate-700/60"
                    >
                      <Sparkles className="w-3 h-3 text-[#8A5A04] flex-shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          );
        })()}
      </div>
    </div>
  );
};
