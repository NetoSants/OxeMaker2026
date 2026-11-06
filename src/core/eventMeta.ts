const EVENT_TIME_ZONE = 'America/Recife';

export const EVENT_START_ISO = '2026-12-01T07:00:00-03:00';
export const REGISTRATION_DEADLINE_ISO = '2026-11-25T23:59:59-03:00';

export interface DateLabels {
  iso: string;
  short: string;
  shortWithYear: string;
  dayMonthLong: string;
  dayMonthLongCapitalized: string;
  long: string;
  longCapitalized: string;
  weekdayShort: string;
  weekdayLong: string;
  weekdayLongCapitalized: string;
  full: string;
}

export interface TimeRange {
  start: string;
  end: string;
  startLabel: string;
  endLabel: string;
  label: string;
  range: string;
}

const capitalize = (value: string): string =>
  value.charAt(0).toUpperCase() + value.slice(1);

const getPart = (
  parts: Intl.DateTimeFormatPart[],
  type: Intl.DateTimeFormatPartTypes,
): string => parts.find((part) => part.type === type)?.value ?? '';

const createDateLabels = (iso: string): DateLabels => {
  const date = new Date(iso);
  const parts = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
    timeZone: EVENT_TIME_ZONE,
  }).formatToParts(date);

  const day = getPart(parts, 'day');
  const month = getPart(parts, 'month');
  const year = getPart(parts, 'year');
  const weekdayLong = new Intl.DateTimeFormat('pt-BR', {
    weekday: 'long',
    timeZone: EVENT_TIME_ZONE,
  }).format(date);

  const dayMonthLong = `${day} de ${month}`;
  const dayMonthLongCapitalized = `${day} de ${capitalize(month)}`;
  const long = `${dayMonthLong} de ${year}`;
  const longCapitalized = `${dayMonthLongCapitalized} de ${year}`;
  const weekdayLongCapitalized = capitalize(weekdayLong);
  const shortWithYear = new Intl.DateTimeFormat('pt-BR', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    timeZone: EVENT_TIME_ZONE,
  }).format(date);

  return {
    iso,
    short: shortWithYear.slice(0, 5),
    shortWithYear,
    dayMonthLong,
    dayMonthLongCapitalized,
    long,
    longCapitalized,
    weekdayShort: weekdayLongCapitalized.split('-')[0],
    weekdayLong,
    weekdayLongCapitalized,
    full: `${longCapitalized} (${weekdayLongCapitalized})`,
  };
};

const createTimeRange = (start: string, end: string): TimeRange => {
  const startLabel = start.replace(':', 'h');
  const endLabel = end.replace(':', 'h');

  return {
    start,
    end,
    startLabel,
    endLabel,
    label: `${startLabel} - ${endLabel}`,
    range: `${startLabel} às ${endLabel}`,
  };
};

export const EVENT_DATE = createDateLabels(EVENT_START_ISO);
export const REGISTRATION_DEADLINE = createDateLabels(REGISTRATION_DEADLINE_ISO);

const eventHours = createTimeRange('07:00', '18:00');

export const EVENT_TIME = {
  ...eventHours,
  display: `Das ${eventHours.range}`,
};

export const PROGRAM_TIMES = {
  competitions: createTimeRange('14:30', '15:30'),
  pitch: createTimeRange('16:00', '17:00'),
  awards: createTimeRange('17:00', '18:00'),
};
