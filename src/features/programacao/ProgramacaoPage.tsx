import React, { useState, useMemo } from 'react';
import { EVENT_INFO, SCHEDULE_DATA } from '../../core/constants';
import { EVENT_DATE } from '../../core/eventMeta';
import { ScheduleItem } from '../../core/types';
import {
  Calendar,
  Clock,
  MapPin,
  Search,
  Filter,
  Download,
  Bot,
  Wrench,
  Sparkles,
  Award,
  Mic,
  Presentation,
  AlertTriangle,
  Lightbulb,
  ListChecks,
  Sunrise,
  Sunset,
} from 'lucide-react';

export const ProgramacaoPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', label: 'Todas as Áreas' },
    { id: 'robotica', label: 'Torneios de Robótica', icon: Bot },
    { id: 'oficinas', label: 'Oficinas Práticas', icon: Wrench },
    { id: 'mostra', label: 'Mostra de Projetos', icon: Presentation },
    { id: 'geek', label: 'Cultura Geek & Dança', icon: Sparkles },
    { id: 'palestras', label: 'Palestras & Pitches', icon: Mic },
    { id: 'cerimonia', label: 'Solenidades & Abertura', icon: Award },
  ];

  const filteredSchedule = useMemo(() => {
    return SCHEDULE_DATA.filter((item) => {
      const matchCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchSearch =
        searchQuery === '' ||
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.speakerOrHost &&
          item.speakerOrHost.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchCategory && matchSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleExportSchedule = () => {
    let content = `PROGRAMAÇÃO OFICIAL - ÔXE MAKER 2026\nData: ${EVENT_INFO.dates.display} | ${EVENT_INFO.location.venue}, ${EVENT_INFO.location.city}-${EVENT_INFO.location.state}\n\n`;

    SCHEDULE_DATA.forEach((item) => {
      content += `${item.time} - ${item.title}\nLocal: ${item.location}\nCategoria: ${item.category.toUpperCase()}\nDetalhes: ${item.description}\n----------------------------------------\n`;
    });

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Programacao-OxeMaker-2026.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const getPeriod = (time: string): 'manha' | 'tarde' => {
    const hour = parseInt(time, 10);
    return hour < 12 ? 'manha' : 'tarde';
  };

  const getCategoryBadge = (category: ScheduleItem['category']) => {
    switch (category) {
      case 'robotica':
        return {
          label: 'Robótica & Batalhas',
          bg: 'bg-[#FCC140]/10 border-[#FCC140]/50 text-[#8A5A04]',
        };
      case 'oficinas':
        return {
          label: 'Oficina Maker',
          bg: 'bg-[#01B1FD]/10 border-[#01B1FD]/50 text-[#0369A1]',
        };
      case 'mostra':
        return {
          label: 'Mostra de Projetos',
          bg: 'bg-sky-500/10 border-sky-500/50 text-sky-700',
        };
      case 'geek':
        return {
          label: 'Cultura Geek',
          bg: 'bg-purple-500/10 border-purple-500/50 text-purple-700',
        };
      case 'palestras':
        return {
          label: 'Palestra / Debate',
          bg: 'bg-emerald-500/10 border-emerald-500/50 text-emerald-700',
        };
      case 'cerimonia':
        return {
          label: 'Solenidade Oficial',
          bg: 'bg-amber-500/10 border-amber-500/50 text-amber-800',
        };
      default:
        return {
          label: 'Geral',
          bg: 'bg-slate-700/50 border-slate-600 text-slate-300',
        };
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Page Header */}
      <div className="space-y-3 text-center sm:text-left border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#8A5A04] uppercase font-bold tracking-wider">
          <Calendar className="w-4 h-4" />
          <span>Grade Oficial de Atividades · 07h00 às 18h00</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-black text-[#0B1330] uppercase tracking-tight">
          Programação · {EVENT_DATE.dayMonthLongCapitalized}
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl font-sans">
          Acompanhe todos os horários do dia: credenciamento, abertura cultural, TED Talks,
          oficinas, Mostra de Projetos, competições, pitch do Hackathon e cerimônia de premiação
          na ETE José de Alencar, em {EVENT_INFO.location.city}.
        </p>

        <div className="pt-2 flex flex-wrap items-center gap-3">
          <button
            onClick={handleExportSchedule}
            className="maker-btn-secondary px-4 py-2 text-xs uppercase flex items-center gap-1.5"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Baixar Programação (.TXT)</span>
          </button>
          <span className="text-xs font-mono-code text-slate-400">
            ✓ Horário de Brasília (GMT-3) · Sujeito a pequenos ajustes no local
          </span>
        </div>
      </div>

      {/* Filter Controls Bar */}
      <div className="bg-[#F9FDFE] border-2 border-slate-700/80 rounded-sm p-4 space-y-4 maker-shadow-yellow">
        {/* Category & Search Filter */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3">
          {/* Category tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            <Filter className="w-3.5 h-3.5 text-slate-400 mr-1 hidden sm:inline" />
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-2.5 py-1 text-xs font-mono-code rounded-sm transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-[#01B1FD] text-[#050D34] font-bold'
                    : 'bg-[#F1F4FB]/70 text-slate-300 hover:text-[#0B1330] border border-slate-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search field */}
          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Buscar por atração ou sala..."
              className="w-full pl-9 pr-3 py-1.5 bg-[#F1F4FB] border border-slate-700 focus:border-[#FCC140] rounded-sm text-xs text-[#0B1330] placeholder-slate-400 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Aviso Importante | O que esperar? | Dica Maker */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-5 bg-[#F9FDFE] border-2 border-[#FCC140]/60 rounded-sm space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#8A5A04] uppercase font-bold">
            <AlertTriangle className="w-4 h-4" />
            <span>Aviso Importante</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            Os horários podem sofrer pequenas alterações conforme o andamento do Evento.
          </p>
        </div>

        <div className="p-5 bg-[#F9FDFE] border border-slate-700/80 rounded-sm space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#0369A1] uppercase font-bold">
            <ListChecks className="w-4 h-4" />
            <span>O que esperar?</span>
          </div>
          <ul className="space-y-1 text-xs sm:text-sm text-slate-300 font-sans">
            <li>· Competições de robótica em alto nível</li>
            <li>· Oficinas práticas para todas as idades</li>
            <li>· Arena Geek com cosplay e K-pop</li>
            <li>· Network com a comunidade maker de Pernambuco</li>
          </ul>
        </div>

        <div className="p-5 bg-[#F9FDFE] border-2 border-[#01B1FD]/60 rounded-sm space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#8A5A04] uppercase font-bold">
            <Lightbulb className="w-4 h-4 text-[#0369A1]" />
            <span>Dica Maker</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            Recomendamos chegarem mais cedo para se credenciarem e aproveitarem o evento ao máximo.
          </p>
        </div>
      </div>

      {/* Schedule Items Timeline — dividido em Manhã & Tarde */}
      {filteredSchedule.length === 0 ? (
        <div className="text-center py-16 bg-[#F9FDFE] border border-slate-800 rounded-sm">
          <Clock className="w-10 h-10 text-slate-500 mx-auto mb-2" />
          <h3 className="text-lg font-heading text-[#0B1330]">Nenhuma atividade encontrada</h3>
          <p className="text-xs text-slate-400 mt-1">
            Tente remover os filtros ou buscar por outro termo.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('all');
              setSearchQuery('');
            }}
            className="mt-3 text-xs font-mono-code text-[#0369A1] hover:underline"
          >
            Limpar todos os filtros
          </button>
        </div>
      ) : (
        <div className="space-y-10">
          {[
            {
              id: 'manha',
              label: 'Manhã',
              range: '07h00 às 11h59',
              icon: Sunrise,
              items: filteredSchedule.filter((i) => getPeriod(i.time) === 'manha'),
            },
            {
              id: 'tarde',
              label: 'Tarde',
              range: '12h00 às 18h00',
              icon: Sunset,
              items: filteredSchedule.filter((i) => getPeriod(i.time) === 'tarde'),
            },
          ].map((period) => (
            <div key={period.id} className="space-y-4">
              {/* Period Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b-2 border-slate-800">
                <div className="flex items-center gap-3">
                  <period.icon className="w-6 h-6 text-[#8A5A04]" />
                  <h2 className="text-2xl font-heading font-black uppercase text-[#0B1330]">
                    {period.label}
                    <span className="ml-3 text-xs font-mono-code text-slate-400 font-normal uppercase tracking-wider">
                      {period.range}
                    </span>
                  </h2>
                </div>
                <span className="text-xs font-mono-code px-2.5 py-1 bg-[#F1F4FB] border border-slate-700 rounded-sm text-slate-300">
                  {period.items.length} atividade{period.items.length === 1 ? '' : 's'}
                </span>
              </div>

              {period.items.length === 0 ? (
                <p className="text-xs font-mono-code text-slate-500 italic">
                  Nenhuma atividade nesse período com os filtros atuais.
                </p>
              ) : (
                <div className="space-y-4">
                  {period.items.map((item) => {
                    const badge = getCategoryBadge(item.category);

                    return (
                      <div
                        key={item.id}
                        className="bg-[#F9FDFE] border-2 border-slate-700/80 hover:border-[#FCC140] rounded-sm p-4 sm:p-5 transition-all hover:maker-shadow-yellow group"
                      >
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 pb-3 border-b border-slate-800">
                          {/* Left: Time */}
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="font-mono-code text-sm sm:text-base font-bold text-[#8A5A04] flex items-center gap-1.5">
                              <Clock className="w-4 h-4 text-[#0369A1]" />
                              {item.time}
                            </span>
                            <span className="text-slate-500">·</span>
                            <span className="text-[11px] font-mono-code px-2 py-0.5 rounded-sm border bg-[#0030B5]/30 border-[#01B1FD]/40 text-[#0369A1]">
                              {EVENT_DATE.short} · {EVENT_DATE.weekdayLongCapitalized}
                            </span>
                          </div>

                          {/* Right: Category badge */}
                          <span
                            className={`inline-block text-[11px] font-mono-code uppercase px-2.5 py-0.5 rounded-sm border ${badge.bg}`}
                          >
                            {badge.label}
                          </span>
                        </div>

                        {/* Middle: Title & Description */}
                        <div className="py-3 space-y-1.5">
                          <h3 className="text-lg sm:text-xl font-heading text-[#0B1330] group-hover:text-[#8A5A04] transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        {/* Bottom: Location and Speaker */}
                        <div className="pt-2 flex flex-wrap items-center justify-between gap-2 text-xs font-mono-code text-slate-400 border-t border-slate-800/80">
                          <div className="flex items-center gap-1.5 text-slate-300">
                            <MapPin className="w-3.5 h-3.5 text-[#0369A1]" />
                            <span>{item.location}</span>
                          </div>

                          {item.speakerOrHost && (
                            <div className="flex items-center gap-1.5 text-slate-400">
                              <span className="text-slate-500">Coordenação:</span>
                              <span className="text-slate-200">{item.speakerOrHost}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
