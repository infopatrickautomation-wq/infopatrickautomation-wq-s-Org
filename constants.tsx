
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
    icon: <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=80&h=80&fit=crop&q=80" alt="Coperture Civili" className="rounded-lg object-cover w-20 h-20" />
  },
  {
    id: 's2',
    title: 'Coperture Industriali',
    description: 'Coperture per capannoni, magazzini e strutture commerciali su larga scala.',
    icon: <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=80&h=80&fit=crop&q=80" alt="Coperture Industriali" className="rounded-lg object-cover w-20 h-20" />
  },
  {
    id: 's3',
    title: 'Coibentazione Termica',
    description: 'Isolamento termico per ridurre i consumi energetici fino al 40% in bolletta.',
    icon: <img src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=80&h=80&fit=crop&q=80" alt="Coibentazione Termica" className="rounded-lg object-cover w-20 h-20" />
  },
  {
    id: 's4',
    title: 'Impermeabilizzazione',
    description: 'Protezione totale da infiltrazioni con guaine bituminose e membrane moderne.',
    icon: <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=80&h=80&fit=crop&q=80" alt="Impermeabilizzazione" className="rounded-lg object-cover w-20 h-20" />
  },
  {
    id: 's5',
    title: 'Bonifica Amianto',
    description: 'Rimozione certificata di eternit e amianto in totale sicurezza normativa.',
    icon: <img src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=80&h=80&fit=crop&q=80" alt="Bonifica Amianto" className="rounded-lg object-cover w-20 h-20" />
  },
  {
    id: 's6',
    title: 'Manutenzione',
    description: 'Controlli periodici per prevenire danni e prolungare la vita della copertura.',
    icon: <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=80&h=80&fit=crop&q=80&sat=-100" alt="Manutenzione" className="rounded-lg object-cover w-20 h-20" />
  }
];

export const PROJECTS_DATA: Project[] = [
  // RESIDENZIALE (3)
  { id: 1, title: 'Villetta Unifamiliare Bologna', category: 'Residenziale', description: 'Rifacimento completo tetto con tegole rosse e coibentazione termica.', year: 2024, image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800' },
  { id: 2, title: 'Casa Moderna Modena', category: 'Residenziale', description: 'Copertura moderna tetto piano con impermeabilizzazione avanzata.', year: 2024, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800' },
  { id: 3, title: 'Condominio Ristrutturato Parma', category: 'Residenziale', description: 'Ristrutturazione tetto condominiale 12 unità con isolamento.', year: 2023, image: 'https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=800' },
  // INDUSTRIALE (2)
  { id: 4, title: 'Capannone Industriale Ferrara', category: 'Industriale', description: 'Copertura metallica coibentata per capannone 1200mq.', year: 2024, image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800' },
  { id: 5, title: 'Magazzino Logistico Ravenna', category: 'Industriale', description: 'Pannelli sandwich per magazzino logistico con isolamento termico.', year: 2023, image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800' },
  // BONIFICA (1)
  { id: 6, title: 'Bonifica Amianto Imola', category: 'Bonifica', description: 'Rimozione certificata eternit e posa nuova copertura in sicurezza.', year: 2023, image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800' },
  // RESTAURO (1)
  { id: 7, title: 'Casale Storico Appennino', category: 'Restauro', description: 'Restauro conservativo tetto in legno con coppi originali recuperati.', year: 2024, image: 'https://images.unsplash.com/photo-1513584684374-8bab748fbf90?w=800' },
  // COIBENTAZIONE (1)
  { id: 8, title: 'Isolamento Termico Villa Cesena', category: 'Coibentazione', description: 'Cappotto termico e isolamento sottotetto con materiali ecologici.', year: 2024, image: 'https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=800' },
  // COMMERCIALE (1)
  { id: 9, title: 'Centro Commerciale Rimini', category: 'Industriale', description: 'Copertura veloce con pannelli sandwich per struttura commerciale.', year: 2023, image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800' }
];

export const REVIEWS_DATA: Review[] = [
  { id: 1, name: 'Giuseppe M.', rating: 5, text: 'Professionali e puntuali. Hanno rifatto il tetto di casa mia in una settimana esatta. Preventivo chiaro e nessun costo aggiuntivo.', date: 'Gennaio 2024' },
  { id: 2, name: 'Laura B.', rating: 5, text: 'Finalmente il problema infiltrazioni è risolto. Marco è venuto personalmente a fare il sopralluogo. Lavoro impeccabile.', date: 'Marzo 2024' },
  { id: 3, name: 'Stefano R.', rating: 5, text: 'Tempi stretti rispettati per il nostro capannone industriale. Ottimo rapporto qualità-prezzo.', date: 'Novembre 2023' },
  { id: 4, name: 'Maria G.', rating: 5, text: 'Serietà e competenza nella bonifica amianto. Cantiere pulito e rispetto delle normative.', date: 'Giugno 2023' }
];
