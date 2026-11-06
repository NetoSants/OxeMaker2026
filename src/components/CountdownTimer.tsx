import React, { useState, useEffect } from 'react';
import { EVENT_INFO } from '../core/constants';
import { EVENT_DATE, EVENT_TIME } from '../core/eventMeta';
import { Clock } from 'lucide-react';

interface CountdownTimerProps {
  className?: string;
  compact?: boolean;
}

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  className = '',
  compact = false,
}) => {
  const calculateTimeRemaining = (): TimeRemaining => {
    const targetDate = new Date(EVENT_INFO.dates.isoStartDate).getTime();
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0, isExpired: true };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return { days, hours, minutes, seconds, isExpired: false };
  };

  const [timeLeft, setTimeLeft] = useState<TimeRemaining>(calculateTimeRemaining);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeRemaining());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num: number) => num.toString().padStart(2, '0');

  if (timeLeft.isExpired) {
    return (
      <div
        className={`inline-flex items-center gap-2 px-4 py-2 bg-[#107C41] border-2 border-[#FCC140] rounded-sm text-white font-mono-code font-bold ${className}`}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#FCC140] animate-ping" />
        <span>O Ôxe Maker 2026 está acontecendo agora na {EVENT_INFO.location.venue}!</span>
      </div>
    );
  }

  const units = [
    { label: 'Dias', value: formatNumber(timeLeft.days) },
    { label: 'Horas', value: formatNumber(timeLeft.hours) },
    { label: 'Min', value: formatNumber(timeLeft.minutes) },
    { label: 'Seg', value: formatNumber(timeLeft.seconds) },
  ];

  if (compact) {
    return (
      <div className={`flex items-center gap-2 font-mono-code text-sm ${className}`}>
        <Clock className="w-4 h-4 text-[#8A5A04]" />
        <span className="text-slate-300">Faltam:</span>
        <span className="font-bold text-[#8A5A04]">
          {timeLeft.days}d {formatNumber(timeLeft.hours)}h {formatNumber(timeLeft.minutes)}m{' '}
          {formatNumber(timeLeft.seconds)}s
        </span>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex items-center gap-2 text-xs font-mono-code text-[#0369A1] uppercase tracking-wider mb-2.5">
        <span className="w-2 h-2 rounded-full bg-[#FCC140] animate-pulse" />
        <span>Contagem Regressiva para o Credenciamento · {EVENT_DATE.short} às {EVENT_TIME.startLabel}</span>
      </div>

      <div className="grid grid-cols-4 gap-2 sm:gap-3.5">
        {units.map((unit, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-2.5 sm:p-3 min-w-[64px] sm:min-w-[80px] bg-[#F9FDFE] border-2 border-slate-700/80 hover:border-[#FCC140] rounded-sm transition-all duration-200 maker-shadow-yellow"
          >
            <span className="text-2xl sm:text-4xl font-bold font-mono-code text-[#8A5A04] tracking-tight">
              {unit.value}
            </span>
            <span className="text-[10px] sm:text-xs font-mono-code text-slate-400 uppercase tracking-widest mt-0.5">
              {unit.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
