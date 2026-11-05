import React from 'react';
import {
  EVENT_INFO,
  TIMELINE_DATA,
  FOUNDER_TRIBUTE,
  METRICS_DATA,
} from '../../core/constants';
import { AnimatedCounter } from '../../components/AnimatedCounter';
import { img } from '../../core/images';
import {
  History,
  Heart,
  Award,
  Sparkles,
  BookOpen,
  Target,
  Users,
  Compass,
  CheckCircle2,
  GraduationCap,
} from 'lucide-react';

export const SobrePage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-16">
      {/* Header */}
      <div className="space-y-3 text-center sm:text-left border-b border-slate-800 pb-8">
        <div className="inline-flex items-center gap-2 text-xs font-mono-code text-[#8A5A04] uppercase font-bold tracking-wider">
          <History className="w-4 h-4" />
          <span>6 Anos de História · 2021 a 2026</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-heading font-black text-[#0B1330] uppercase tracking-tight">
          Sobre o <span className="brand-name">Ôxe Maker</span> &amp; Nossa Missão
        </h1>
        <p className="text-slate-300 text-sm sm:text-base max-w-3xl font-sans">
          Da primeira oficina com caixas de papelão e motores de DVD usados em 2021 ao maior
          encontro de robótica educacional e cultura maker da rede pública estadual de Pernambuco.
        </p>
      </div>

      {/* Origin & Meaning of "Ôxe" */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#F9FDFE] border-2 border-slate-700/80 rounded-sm p-6 sm:p-10 maker-shadow-yellow">
        <div className="lg:col-span-8 space-y-4">
          <span className="text-xs font-mono-code text-[#0369A1] uppercase font-bold tracking-widest block">
            Identidade & Orgulho Pernambucano
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading text-[#0B1330] uppercase">
            Por que "<span className="brand-name">Ôxe Maker</span>"?
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            "Ôxe" é a interjeição mais autêntica do vocabulário pernambucano: expressa surpresa,
            admiração, entusiasmo e acolhimento. Quando nossos alunos ligam um circuito e exclamam
            <em className="text-[#8A5A04] font-semibold"> "Ôxe, funcionou!"</em>, estamos
            celebrando a democratização do conhecimento científico.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            Unimos essa energia nordestina à cultura <strong>Maker ("faça você mesmo")</strong> para
            provar que a escola pública é polo gerador de alta tecnologia, pensamento crítico e
            soluções socioambientais.
          </p>
        </div>

        <div className="lg:col-span-4 flex flex-col items-center gap-3">
          <img
            src={img('calango-logo.webp')}
            alt="Calango mascote do Ôxe Maker"
            className="w-48 h-48 object-contain"
            loading="lazy"
            decoding="async"
          />
          <span className="px-2.5 py-1 bg-[#FCC140] text-[#050D34] font-mono-code text-xs font-bold rounded-sm uppercase tracking-wider">
            Maker de Raça!
          </span>
        </div>
      </div>

      {/* Nossa História — origem do projeto */}
      <div className="bg-[#F9FDFE] border-2 border-slate-700/80 rounded-sm p-6 sm:p-10 space-y-4">
        <span className="text-xs font-mono-code text-[#0369A1] uppercase font-bold tracking-widest block">
          Nossa História · Desde 2021
        </span>
        <h2 className="text-2xl sm:text-3xl font-heading text-[#0B1330] uppercase">O <span className="brand-name">Ôxe Maker</span></h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            O Ôxe Maker surgiu da ideia de trazer para os jovens da Regional Metropolitana Norte da
            Rede Estadual de Educação de Pernambuco um evento que reunisse{' '}
            <strong className="text-[#8A5A04]">Robótica</strong>,{' '}
            <strong className="text-[#8A5A04]">Cultura Maker</strong> e o{' '}
            <strong className="text-[#8A5A04]">Universo Geek</strong>.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            A proposta contempla aspectos vivenciados por essa juventude cosmopolita, possibilitando
            a exposição dos projetos desenvolvidos pelas Escolas Estaduais da Regional.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            É tecnologia e educação de mãos dadas na era digital, proporcionando uma verdadeira
            viagem — sem sair do lugar — em uma mistura de diversão, iniciação científica e
            protagonismo juvenil.
          </p>
          <p className="text-sm text-slate-300 leading-relaxed font-sans">
            O projeto, atualmente em sua sexta edição, foi idealizado pela Professora Lidyane Lira
            com o objetivo de fomentar práticas ligadas à Robótica e Cultura Maker.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-2">
          {['Vidas reais', 'Escolas Makers', 'Comunidade Unida', 'Justiça pra Todos'].map(
            (v, i) => (
              <div
                key={v}
                className="p-3 bg-[#F1F4FB] border border-slate-700 rounded-sm text-center"
              >
                <span className="text-[10px] font-mono-code text-[#0369A1] block">0{i + 1}_</span>
                <span className="text-sm font-bold font-heading text-[#8A5A04] uppercase">{v}</span>
              </div>
            )
          )}
        </div>
      </div>

      {/* Animated Metrics Strip */}
      <div className="space-y-6">
        <div className="text-center space-y-1">
          <span className="text-xs font-mono-code text-[#8A5A04] uppercase font-bold">
            Impacto Acumulado
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading text-[#0B1330] uppercase">
            A Trajetória em Números
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 sm:gap-4">
          {METRICS_DATA.map((item) => (
            <div
              key={item.id}
              className="p-5 bg-[#F9FDFE] border border-slate-700 rounded-sm text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold font-mono-code text-[#8A5A04] mb-1">
                <AnimatedCounter value={item.value} suffix={item.suffix} />
              </div>
              <h3 className="text-xs font-bold text-[#0B1330] uppercase font-heading">{item.label}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline 2021-2026 */}
      <div className="space-y-8">
        <div className="border-b border-slate-800 pb-4">
          <span className="text-xs font-mono-code text-[#0369A1] uppercase font-bold tracking-widest block mb-1">
            Linha do Tempo
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading text-[#0B1330] uppercase">
            Ano a Ano: A Evolução da Mostra
          </h2>
        </div>

        <div className="relative pl-6 sm:pl-8 border-l-2 border-[#01B1FD]/40 space-y-8">
          {TIMELINE_DATA.map((m) => (
            <div key={m.year} className="relative group">
              {/* Bullet dot */}
              <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-[#FCC140] border-2 border-[#050D34] group-hover:scale-125 transition-transform" />

              <div className="bg-[#F9FDFE] border border-slate-700/80 hover:border-[#FCC140] p-5 sm:p-6 rounded-sm space-y-2 transition-all">
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xl sm:text-2xl font-bold font-mono-code text-[#8A5A04]">
                      {m.year}
                    </span>
                    <span className="text-xs font-mono-code text-slate-400">· {m.edition}</span>
                  </div>
                  <span className="text-xs font-mono-code text-[#0369A1] font-semibold">
                    {m.stats}
                  </span>
                </div>

                <h3 className="text-lg font-heading text-[#0B1330] font-bold">{m.title}</h3>
                <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
                  {m.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Special Tribute to Founder Section */}
      <section className="bg-gradient-to-r from-[#F9FDFE] via-[#EDF1FA] to-[#0030B5]/15 border-2 border-[#FCC140] rounded-sm maker-shadow-yellow-lg p-6 sm:p-10 space-y-8">
        <div className="flex items-center gap-3 border-b border-slate-700/80 pb-4">
          <Heart className="w-6 h-6 text-rose-500 fill-rose-500 flex-shrink-0" />
          <div>
            <span className="text-xs font-mono-code text-[#8A5A04] uppercase font-bold tracking-widest block">
              Homenagem Especial
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading text-[#0B1330] uppercase">
              Tributo à Idealizadora do <span className="brand-name">Ôxe Maker</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Avatar / Vector Profile */}
          <div className="lg:col-span-4 flex flex-col items-center text-center space-y-3">
            <div className="w-36 h-36 sm:w-44 sm:h-44 rounded-full bg-[#F9FDFE] border-4 border-[#FCC140] flex items-center justify-center p-1 relative maker-shadow-yellow overflow-hidden">
              <img
                src={img('foto-lidy.webp')}
                alt={`Foto de ${FOUNDER_TRIBUTE.name}`}
                width={288}
                height={512}
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover rounded-full"
              />
              <div className="absolute -bottom-2 bg-[#01B1FD] text-[#050D34] font-mono-code text-[10px] font-bold px-2 py-0.5 rounded-sm uppercase">
                Pioneira da Rede
              </div>
            </div>

            <div>
              <h3 className="text-xl font-heading text-[#0B1330] font-bold">{FOUNDER_TRIBUTE.name}</h3>
              <p className="text-xs font-mono-code text-[#0369A1]">{FOUNDER_TRIBUTE.role}</p>
            </div>
          </div>

          {/* Tribute Quote and Bio */}
          <div className="lg:col-span-8 space-y-4">
            {FOUNDER_TRIBUTE.quote && (
              <blockquote className="p-4 bg-[#F1F4FB] border-l-4 border-[#FCC140] rounded-r-sm text-sm sm:text-base italic text-slate-200 font-sans">
                {FOUNDER_TRIBUTE.quote}
              </blockquote>
            )}

            <div className="space-y-2 text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
              {FOUNDER_TRIBUTE.bio.map((paragraph, pIdx) => (
                <p key={pIdx}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-[#F9FDFE] border border-slate-700/80 rounded-sm space-y-3 hover:border-[#01B1FD] transition-colors">
          <div className="p-2.5 bg-[#F1F4FB] w-fit rounded-sm text-[#8A5A04]">
            <Target className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-heading text-[#0B1330] uppercase">Nossa Missão</h3>
          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            Democratizar o acesso à tecnologia e à cultura maker para estudantes da rede pública,
            transformando consumidores de tecnologia em criadores de soluções reais.
          </p>
        </div>

        <div className="p-6 bg-[#F9FDFE] border border-slate-700/80 rounded-sm space-y-3 hover:border-[#01B1FD] transition-colors">
          <div className="p-2.5 bg-[#F1F4FB] w-fit rounded-sm text-[#0369A1]">
            <Compass className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-heading text-[#0B1330] uppercase">Nossa Visão</h3>
          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            Ser o principal ecossistema de inovação educacional em Pernambuco, conectando escola,
            comunidade e mercado através do 'aprender fazendo'.
          </p>
        </div>

        <div className="p-6 bg-[#F9FDFE] border border-slate-700/80 rounded-sm space-y-3 hover:border-[#01B1FD] transition-colors">
          <div className="p-2.5 bg-[#F1F4FB] w-fit rounded-sm text-[#8A5A04]">
            <Users className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-heading text-[#0B1330] uppercase">Nossos Valores</h3>
          <p className="text-xs sm:text-sm text-slate-300 font-sans leading-relaxed">
            Vidas reais · Escolas Makers · Comunidade Unida · Justiça pra Todos. Educação pública de
            excelência, colaboração solidária e paixão pela ciência viva.
          </p>
        </div>
      </div>
    </div>
  );
};
