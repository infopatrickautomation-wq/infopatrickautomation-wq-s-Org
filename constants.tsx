
import React from 'react';
import { Service, Project, Review } from './types';

export const COLORS = {
  primary: '#1e3a8a', // Navy
  secondary: '#c2410c', // Terracotta/Orange
  accent: '#0369a1', // Sky blue variant
  neutral: {
    light: '#f9fafb',
    dark: '#111827',
    muted: '#6b7280'
  }
};

export const SERVICES_DATA: Service[] = [
  {
    id: 's1',
    title: 'Coperture Civili',
    description: 'Realizzazione e ristrutturazione tetti per abitazioni private, villette e condomini.',
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
  },
  {
    id: 's2',
    title: 'Coperture Industriali',
    description: 'Coperture per capannoni, magazzini e strutture commerciali su larga scala.',
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
  },
  {
    id: 's3',
    title: 'Coibentazione Termica',
    description: 'Isolamento termico per ridurre i consumi energetici fino al 40% in bolletta.',
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
  },
  {
    id: 's4',
    title: 'Impermeabilizzazione',
    description: 'Protezione totale da infiltrazioni con guaine bituminose e membrane moderne.',
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0a2 2 0 01-2 2H6a2 2 0 01-2-2m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" /></svg>
  },
  {
    id: 's5',
    title: 'Bonifica Amianto',
    description: 'Rimozione certificata di eternit e amianto in totale sicurezza normativa.',
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
  },
  {
    id: 's6',
    title: 'Manutenzione',
    description: 'Controlli periodici per prevenire danni e prolungare la vita della copertura.',
    icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  }
];

export const PROJECTS_DATA: Project[] = [
  { id: 1, title: 'Villetta Unifamiliare Bologna', category: 'Residenziale', description: 'Rifacimento completo tetto con coibentazione.', year: 2024, image: 'https://picsum.photos/id/10/800/600' },
  { id: 2, title: 'Condominio Modena', category: 'Residenziale', description: 'Impermeabilizzazione tetto condominiale 8 unità.', year: 2023, image: 'https://picsum.photos/id/20/800/600' },
  { id: 3, title: 'Capannone Industriale Ferrara', category: 'Industriale', description: 'Copertura metallica coibentata 800mq.', year: 2024, image: 'https://picsum.photos/id/30/800/600' },
  { id: 4, title: 'Bonifica Amianto Ravenna', category: 'Bonifica', description: 'Rimozione eternit e posa nuova copertura.', year: 2023, image: 'https://picsum.photos/id/40/800/600' },
  { id: 5, title: 'Ristrutturazione Rustico', category: 'Restauro', description: 'Tetto in legno lamellare con tegole portoghesi.', year: 2024, image: 'https://picsum.photos/id/50/800/600' },
  { id: 6, title: 'Magazzino Commerciale', category: 'Commerciale', description: 'Copertura veloce con pannelli sandwich.', year: 2023, image: 'https://picsum.photos/id/60/800/600' }
];

export const REVIEWS_DATA: Review[] = [
  { id: 1, name: 'Giuseppe M.', rating: 5, text: 'Professionali e puntuali. Hanno rifatto il tetto di casa mia in una settimana esatta. Preventivo chiaro e nessun costo aggiuntivo.', date: 'Gennaio 2024' },
  { id: 2, name: 'Laura B.', rating: 5, text: 'Finalmente il problema infiltrazioni è risolto. Marco è venuto personalmente a fare il sopralluogo. Lavoro impeccabile.', date: 'Marzo 2024' },
  { id: 3, name: 'Stefano R.', rating: 5, text: 'Tempi stretti rispettati per il nostro capannone industriale. Ottimo rapporto qualità-prezzo.', date: 'Novembre 2023' },
  { id: 4, name: 'Maria G.', rating: 5, text: 'Serietà e competenza nella bonifica amianto. Cantiere pulito e rispetto delle normative.', date: 'Giugno 2023' }
];
