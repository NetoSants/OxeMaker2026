import React, { useEffect } from 'react';
import { X, Download, FileText, CheckCircle, ShieldAlert, BookOpen } from 'lucide-react';
import { EVENT_INFO } from '../core/constants';
import { EVENT_DATE, REGISTRATION_DEADLINE } from '../core/eventMeta';

interface EditalModalProps {
  isOpen: boolean;
  onClose: () => void;
  tournamentName?: string;
  category?: string;
}

export const EditalModal: React.FC<EditalModalProps> = ({
  isOpen,
  onClose,
  tournamentName = 'Regulamento Geral das Competições',
  category = 'Robótica Educacional',
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleDownloadFakePdf = () => {
    // Generate simple printable text document
    const content = `ÔXE MAKER 2026 - REGULAMENTO OFICIAL
${tournamentName} - ${category}
Data: ${EVENT_DATE.long}
Local: ${EVENT_INFO.location.venue}, ${EVENT_INFO.location.neighborhood}, ${EVENT_INFO.location.city} - ${EVENT_INFO.location.state}
Realização: GRE Metropolitana Norte / SEE-PE

TEMA 2026: "Vidas, Escolas e Comunidades: Educar para a Promoção da Justiça Socioambiental"

1. OBJETIVO GERAL:
Fomentar a criatividade e a aplicação prática da robótica e cultura maker entre estudantes da rede pública de Pernambuco.

2. ESPECIFICAÇÕES TÉCNICAS:
- Inscrições abertas até ${REGISTRATION_DEADLINE.shortWithYear}, limitadas por modalidade.
- Credenciamento das 07h00 às 08h00, na frente do evento.
- Todos os robôs devem respeitar os padrões de segurança e possuir chave geral identificada.

3. PREMIAÇÃO:
Troféus artesanais makers com corte a laser e PLA ecológico, medalhas para todos os integrantes e kits didáticos.

Consulte a coordenação pelo e-mail: ${EVENT_INFO.contact.email}
`;
    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `Edital-OxeMaker-2026-${tournamentName.toLowerCase().replace(/\s+/g, '-')}.txt`;
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="edital-title"
    >
      <div
        className="relative w-full max-w-2xl bg-[#F9FDFE] border-2 border-[#01B1FD] rounded-sm maker-shadow-cyan-lg p-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-700/80 pb-4 mb-4">
          <div className="flex items-center gap-2">
            <BookOpen className="w-6 h-6 text-[#0369A1]" />
            <div>
              <span className="text-xs font-mono-code text-[#8A5A04] uppercase block">
                {category} · Edital Oficial 2026
              </span>
              <h2 id="edital-title" className="text-xl md:text-2xl font-bold font-heading text-[#0B1330]">
                {tournamentName}
              </h2>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-[#0B1330] hover:bg-slate-800 rounded transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content of the edital */}
        <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-sans">
          <div className="p-3 bg-[#F1F4FB] border border-slate-700 rounded-sm">
            <p className="text-xs font-mono-code text-slate-400 uppercase mb-1">
              Documento Homologado pela Coordenação Geral
            </p>
            <p className="text-[#0B1330] font-semibold">
              GRE Metropolitana Norte · Comissão Especial de Arbitragem Robótica Ôxe Maker
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-[#8A5A04] flex items-center gap-1.5 mb-1.5">
              <CheckCircle className="w-4 h-4 text-[#8A5A04]" />
              1. Disposições Gerais e Elegibilidade
            </h4>
            <p className="text-xs sm:text-sm">
              Poderão se inscrever estudantes regularmente matriculados no Ensino Fundamental II,
              Ensino Médio e Técnico da Rede Estadual de Pernambuco, bem como escolas parceiras
              convidadas. Cada equipe deve conter entre 2 e 5 estudantes e um professor orientador.
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-[#8A5A04] flex items-center gap-1.5 mb-1.5">
              <ShieldAlert className="w-4 h-4 text-[#0369A1]" />
              2. Critérios de Segurança e Homologação
            </h4>
            <p className="text-xs sm:text-sm">
              É estritamente proibido o uso de líquidos, fogo, produtos químicos corrosivos ou armas
              que emitam radiação perigosa. Baterias de Polímero de Lítio (LiPo) devem ser carregadas
              exclusivamente na área segura de pits com supervisão técnica e sacos anti-chama
              (LiPo safe bag).
            </p>
          </div>

          <div>
            <h4 className="text-base font-bold text-[#8A5A04] flex items-center gap-1.5 mb-1.5">
              <FileText className="w-4 h-4 text-[#8A5A04]" />
              3. Sistema de Pontuação e Julgamento
            </h4>
            <p className="text-xs sm:text-sm">
              As partidas serão conduzidas por comissão de arbitragem composta por professores e
              educadores da rede pública. As decisões do juiz principal são soberanas e baseadas no
              espírito de cooperação, fair-play e aprendizado mútuo.
            </p>
          </div>

          <div className="p-3 bg-amber-500/10 border border-amber-500/30 rounded-sm text-xs text-amber-800 text-justify">
            <strong>Atenção:</strong> O credenciamento das equipes encerra-se às 08h00 do dia{' '}
            {EVENT_DATE.long}. Equipes não credenciadas não poderão competir.
          </div>
        </div>

        {/* Footer actions */}
        <div className="mt-6 pt-4 border-t border-slate-700/80 flex flex-wrap items-center justify-between gap-3">
          <button
            onClick={handleDownloadFakePdf}
            className="maker-btn-primary px-4 py-2 text-xs uppercase flex items-center gap-2"
          >
            <Download className="w-4 h-4" />
            <span>Baixar Regulamento (.TXT / PDF)</span>
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-mono-code text-slate-300 hover:text-[#0B1330] border border-slate-600 rounded-sm transition-colors"
          >
            Fechar Visualização
          </button>
        </div>
      </div>
    </div>
  );
};
