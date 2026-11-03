export interface EventGeneralInfo {
  name: string;
  shortName: string;
  edition: string;
  year: number;
  tagline: string;
  theme2026: string;
  organizer: string;
  organizerFullName: string;
  dates: {
    display: string;
    day1: string;
    isoStartDate: string; // "2026-11-27T07:00:00-03:00"
    timeRange: string;
  };
  location: {
    venue: string;
    fullName: string;
    space: string;
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    cep: string;
    fullAddress: string;
    googleMapsEmbedUrl: string;
    googleMapsDirectionsUrl: string;
    referencePoints: string[];
    transitTips: {
      title: string;
      description: string;
    }[];
  };
  contact: {
    email: string;
    instagram: string;
    youtube: string;
    phone: string;
  };
  links: {
    oficineirosRegistration: string;
    mostraRegistration: string;
    palestrantesRegistration: string;
    visitantesRegistration: string;
  };
}

export interface MetricProof {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
}

export interface FeatureHighlight {
  id: string;
  title: string;
  description: string;
  iconName: string;
  link: string;
  tag: string;
  accentColor: 'yellow' | 'cyan' | 'blue';
}

export interface ScheduleItem {
  id: string;
  day: 'day1';
  time: string;
  title: string;
  description: string;
  category: 'robotica' | 'oficinas' | 'geek' | 'palestras' | 'cerimonia' | 'mostra';
  location: string;
  speakerOrHost?: string;
}

export interface RoboticsTournament {
  id: string;
  name: string;
  category: string;
  description: string;
  requirements: string[];
  arenaDetails: string;
  maxTeamSize: number;
  scheduleTime: string;
  editalPdfUrl: string;
  registrationUrl: string;
  prizeSummary: string;
  icon: string;
  image?: string;
}

export interface GeekCategory {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  criteria: string[];
  rulesHighlight: string[];
  scheduleTime: string;
  stage: string;
  registrationUrl: string;
  rulesPdfUrl: string;
  prizes: string;
  image?: string;
}

export interface Workshop {
  id: string;
  title: string;
  description: string;
  schedule: string;
  targetAudience: string;
  registrationUrl?: string;
  duration?: string;
  room?: string;
  capacity?: number;
  prerequisites?: string;
  materialsProvided?: string[];
  school?: string;
  equipment?: string[];
  software?: string;
  instructor?: {
    name: string;
    role: string;
    institution: string;
    bio: string;
  };
}

export interface OxethonInfo {
  title: string;
  description: string;
  stages: {
    phase: string;
    time: string;
    description: string;
  }[];
  regulationsSummary: string[];
  slogan?: string;
  story?: string;
  registrationUrl?: string;
  regulationsUrl?: string;
  image?: string;
}

export interface TimelineMilestone {
  year: number;
  edition: string;
  title: string;
  description: string;
  stats: string;
}

export interface FounderTribute {
  name: string;
  role: string;
  title: string;
  quote?: string;
  bio: string[];
  imagePlaceholder: string;
}

export interface SponsorTier {
  tierName: string;
  description: string;
  sponsors: {
    name: string;
    role: string;
    logoAlt: string;
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  year: number;
  category: 'competicoes' | 'projetos' | 'oficinas' | 'geek';
  description: string;
  caption: string;
  image?: string;
}

export interface NewsItem {
  id: string;
  date: string;
  outlet: string;
  title: string;
  summary: string;
  url: string;
  type: 'reportagem' | 'republicacao';
  alsoPublishedAt?: {
    outlet: string;
    url: string;
  };
}
