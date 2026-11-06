import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Logo } from './Logo';
import { Menu, X, Calendar, MapPin, Sparkles, ChevronDown, ChevronRight } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { EVENT_INFO } from '../core/constants';
import { REGISTRATION_DEADLINE } from '../core/eventMeta';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Track scroll for slight header shadow
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  type NavItem =
    | { label: string; path: string }
    | { label: string; children: { label: string; path: string }[] };

  const navLinks: NavItem[] = [
    { label: 'Início', path: '/' },
    { label: 'Programação', path: '/programacao' },
    { label: 'Mapa & Local', path: '/mapa' },
    {
      label: 'Eventos',
      children: [
        { label: 'Robótica', path: '/torneio' },
        { label: 'Cultura Geek', path: '/geek' },
        { label: 'Oficinas Maker', path: '/oficinas' },
        { label: 'Oxethon 2026', path: '/oxethon' },
      ],
    },
    { label: 'Na Mídia', path: '/noticias' },
    { label: 'Sobre', path: '/sobre' },
  ];

  const isChildActive = (children: { label: string; path: string }[]) =>
    children.some((child) => location.pathname === child.path);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 shadow-lg shadow-black/40 ${
          scrolled
            ? 'bg-[#F1F4FB]/95 backdrop-blur-md border-b-2 border-[#01B1FD]/30'
            : 'bg-[#F1F4FB]/90 backdrop-blur-sm border-b border-slate-700'
        }`}
      >
        {/* Top Info Micro-Bar */}
        <div className="hidden lg:flex items-center justify-between px-6 py-1 bg-[#0030B5]/30 border-b border-[#01B1FD]/15 text-[11px] font-mono-code text-slate-300">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#8A5A04]">
              <Calendar className="w-3.5 h-3.5" />
              <span>{EVENT_INFO.dates.display} · {EVENT_INFO.dates.timeRange}</span>
            </span>
            <span className="text-slate-500">·</span>
            <span className="flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-[#0369A1]" />
              <span>{EVENT_INFO.location.venue} · {EVENT_INFO.location.city}-{EVENT_INFO.location.state}</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-emerald-700 font-semibold">● Inscrições até {REGISTRATION_DEADLINE.short}</span>
            <span className="text-slate-500">·</span>
            <span className="text-slate-400">GRE Metropolitana Norte</span>
          </div>
        </div>

        {/* Main Nav Container */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-16">
            {/* Logo */}
            <Logo size="md" />

            {/* Desktop Navigation Links */}
            <nav
              className="hidden lg:flex items-center gap-2 xl:gap-7 font-heading text-base uppercase font-black tracking-wider whitespace-nowrap"
              aria-label="Navegação Principal"
            >
              {navLinks.map((link) =>
                'children' in link ? (
                  <div key={link.label} className="relative group">
                    <span
                      className={`group/btn relative flex items-center gap-1.5 py-5 transition-colors cursor-pointer ${
                        isChildActive(link.children)
                          ? 'text-[#8A5A04]'
                          : 'text-[#0B1330] hover:text-[#8A5A04]'
                      }`}
                    >
                      <span className="group-hover:translate-x-1 transition-transform whitespace-nowrap">
                        {link.label}
                      </span>
                      <ChevronDown className="w-4 h-4 opacity-70 group-hover/btn:rotate-180 transition-transform" />
                      {isChildActive(link.children) && (
                        <span className="absolute left-0 right-0 -bottom-0.5 h-[3px] bg-[#FCC140] shadow-[2px_2px_0px_#0030B5]" />
                      )}
                    </span>
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-52 opacity-0 invisible translate-y-1 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-150 z-50">
                      <div className="bg-[#F1F4FB] border-2 border-[#FCC140] shadow-[6px_6px_0px_#0030B5] p-1.5 space-y-0.5">
                        {link.children.map((child) => (
                          <NavLink
                            key={child.path}
                            to={child.path}
                            viewTransition
                            className={({ isActive }) =>
                              `flex items-center justify-between px-3 py-2 text-xs font-mono-code uppercase tracking-wider transition-colors ${
                                isActive
                                  ? 'bg-[#FCC140] text-[#050D34]'
                                  : 'text-slate-200 hover:bg-slate-800/80 hover:text-[#8A5A04]'
                              }`
                            }
                          >
                            <span>{child.label}</span>
                            <ChevronRight className="w-3.5 h-3.5 opacity-40" />
                          </NavLink>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <NavLink key={link.path} to={link.path} viewTransition>
                    {({ isActive }) => (
                      <span
                        className={`group relative flex items-center py-5 transition-colors cursor-pointer ${
                          isActive ? 'text-[#8A5A04]' : 'text-[#0B1330] hover:text-[#8A5A04]'
                        }`}
                      >
                        <span className="group-hover:translate-x-1 transition-transform whitespace-nowrap">
                          {link.label}
                        </span>
                        {isActive && (
                          <span className="absolute left-0 right-0 -bottom-0.5 h-[3px] bg-[#FCC140] shadow-[2px_2px_0px_#0030B5]" />
                        )}
                      </span>
                    )}
                  </NavLink>
                )
              )}
            </nav>

            {/* Right Action CTA + Theme Toggle + Hamburger */}
            <div className="flex items-center gap-3">
              <ThemeToggle className="flex items-center justify-center w-10 h-10 border-2 border-slate-700 text-slate-300 hover:border-[#01B1FD] hover:text-[#01B1FD] rounded-sm transition-colors cursor-pointer" />
              <Link
                to="/inscricoes"
                viewTransition
                className="hidden sm:flex maker-btn-secondary px-5 py-2.5 text-sm uppercase items-center gap-1.5 tracking-wider cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Inscreva-se</span>
              </Link>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden p-2 text-slate-300 hover:text-[#0B1330] hover:bg-slate-800 rounded-sm focus:outline-none focus:ring-2 focus:ring-[#FCC140]"
                aria-label={isOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
                aria-expanded={isOpen}
              >
                {isOpen ? <X className="w-6 h-6 text-[#8A5A04]" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden bg-[#F1F4FB] border-b-2 border-[#FCC140] px-4 pt-3 pb-6 space-y-1 shadow-2xl animate-in slide-in-from-top duration-200">
            <div className="p-2 mb-2 bg-[#F9FDFE] border border-slate-700 rounded-sm text-xs font-mono-code text-slate-300">
              <p className="brand-name font-bold">Ôxe Maker 2026 · 6ª Edição</p>
              <p className="text-[11px] text-slate-400">{EVENT_INFO.dates.display} · {EVENT_INFO.location.venue}</p>
            </div>

            {navLinks.map((link) =>
              'children' in link ? (
                <div key={link.label}>
                  <div className="flex items-center justify-between px-3 py-2.5 text-sm font-bold text-[#0369A1]">
                    <span>{link.label}</span>
                    <ChevronDown className="w-4 h-4 opacity-50" />
                  </div>
                  {link.children.map((child) => (
                    <NavLink
                      key={child.path}
                      to={child.path}
                      viewTransition
                      className={({ isActive }) =>
                        `flex items-center justify-between pl-6 pr-3 py-2.5 text-sm font-bold rounded-sm transition-all ${
                          isActive
                            ? 'bg-[#FCC140] text-[#050D34] shadow-[3px_3px_0px_#0030B5]'
                            : 'text-slate-200 hover:bg-slate-800/80 hover:text-[#8A5A04]'
                        }`
                      }
                    >
                      <span>{child.label}</span>
                      <ChevronRight className="w-4 h-4 opacity-40" />
                    </NavLink>
                  ))}
                </div>
              ) : (
                <NavLink
                  key={link.path}
                  to={link.path}
                  viewTransition
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3 py-2.5 text-sm font-bold rounded-sm transition-all ${
                      isActive
                        ? 'bg-[#FCC140] text-[#050D34] shadow-[3px_3px_0px_#0030B5]'
                        : 'text-slate-200 hover:bg-slate-800/80 hover:text-[#8A5A04]'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 opacity-40" />
                </NavLink>
              )
            )}

            <div className="pt-4 mt-2 border-t border-slate-800">
              <Link
                to="/inscricoes"
                viewTransition
                onClick={() => setIsOpen(false)}
                className="maker-btn-secondary w-full py-3 text-lg uppercase tracking-widest flex items-center justify-center"
              >
                Inscreva-se
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
