import React from 'react';
import { Service, Project, Review } from './types';
import { Building2, PaintBucket, Droplets, ShieldCheck, Wrench, Search } from 'lucide-react';

export const COLORS = {
  primary: '#000000',     // Black
  secondary: '#FF8C00',   // Orange brand
  accent: '#1a1a1a',      // Dark gray
  neutral: {
    light: '#f5f5f5',
    dark: '#000000',
    muted: '#6b7280'
  }
};

export const SERVICES_DATA: Service[] = [
  {
    id: 's1',
    title: 'Ristrutturazione in Quota',
    description: 'Interventi edili su edifici alti: intonacatura, tinteggiatura, ripristino facciate senza ponteggi.',
    icon: <Building2 className="w-12 h-12" />,
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80'
  },
  {
    id: 's2',
    title: 'Manutenzione Facciate',
    description: 'Pulizia, tinteggiatura e restauro facciate di edifici residenziali, commerciali e industriali.',
    icon: <PaintBucket className="w-12 h-12" />,
    image: 'https://images.unsplash.com/photo-1599708153386-73d8d69f0bd6?w=800&q=80'
  },
  {
    id: 's3',
    title: 'Impermeabilizzazioni',
    description: 'Risoluzione infiltrazioni, applicazione guaine, impermeabilizzazioni di coperture e pareti.',
    icon: <Droplets className="w-12 h-12" />,
    image: 'https://images.unsplash.com/photo-1621261313436-b6ad4860df89?w=800&q=80'
  },
  {
    id: 's4',
    title: 'Installazione Linee Vita',
    description: 'Installazione sistemi anticaduta certificati per accesso e manutenzione coperture.',
    icon: <ShieldCheck className="w-12 h-12" />,
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80'
  },
  {
    id: 's5',
    title: 'Pulizia Grondaie',
    description: 'Pulizia, riparazione e sostituzione grondaie e pluviali in quota.',
    icon: <Wrench className="w-12 h-12" />,
    image: 'https://images.unsplash.com/photo-1616423640778-2cfd9b972e66?w=800&q=80'
  },
  {
    id: 's6',
    title: 'Ispezioni Tecniche',
    description: 'Ispezioni visive e strumentali di strutture in quota, ponti, capannoni, ciminiere.',
    icon: <Search className="w-12 h-12" />,
    image: 'https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?w=800&q=80'
  }
];

export const PROJECTS_DATA: Project[] = [
  // RISTRUTTURAZIONE (3)
  { id: 1, title: 'Facciata Condominio Bologna', category: 'Ristrutturazione', description: 'Ristrutturazione completa facciata condominio 6 piani con tecnica rope access.', year: 2024, image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800' },
  { id: 2, title: 'Ripristino Intonaco Modena', category: 'Ristrutturazione', description: 'Ripristino intonaco e tinteggiatura edificio storico centro città.', year: 2024, image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800' },
  { id: 3, title: 'Restauro Facciata Ferrara', category: 'Ristrutturazione', description: 'Intervento di restauro conservativo su facciata palazzo storico.', year: 2023, image: 'https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800' },
  // MANUTENZIONE (2)
  { id: 4, title: 'Tinteggiatura Villa Imola', category: 'Manutenzione', description: 'Tinteggiatura esterna villetta 3 piani senza ponteggi.', year: 2024, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800' },
  { id: 5, title: 'Pulizia Grondaie Ravenna', category: 'Manutenzione', description: 'Pulizia e riparazione grondaie edificio commerciale.', year: 2023, image: 'https://images.unsplash.com/photo-1504615755583-2916b52192a3?w=800' },
  // IMPERMEABILIZZAZIONE (1)
  { id: 6, title: 'Impermeabilizzazione Capannone', category: 'Impermeabilizzazione', description: 'Applicazione guaine e impermeabilizzazione copertura industriale 800mq.', year: 2023, image: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800' }
];

export const REVIEWS_DATA: Review[] = [
  { id: 1, name: 'Marco T.', rating: 5, text: 'Abbiamo fatto ristrutturare la facciata del nostro condominio con Vertical System. Lavoro perfetto, veloce e senza i disagi di un ponteggio tradizionale. Consigliatissimi!', date: 'Amministratore Condominio, Bologna' },
  { id: 2, name: 'Giulia R.', rating: 5, text: 'Avevamo infiltrazioni dal tetto. Sono intervenuti rapidamente, hanno risolto il problema in pochi giorni. Professionalità al top!', date: 'Proprietaria Immobile, Modena' },
  { id: 3, name: 'Andrea M.', rating: 5, text: 'Installazione linee vita sul nostro capannone. Lavoro certificato, operatori competenti, prezzi onesti. Perfetto!', date: 'Titolare Azienda, Ferrara' },
  { id: 4, name: 'Luca B.', rating: 5, text: 'Tinteggiatura esterna villetta su 3 piani. Niente ponteggi, niente disagi. Risultato impeccabile!', date: 'Privato, Bologna' },
  { id: 5, name: 'Stefano P.', rating: 5, text: 'Collaboriamo con Vertical System per le manutenzioni dei nostri edifici. Sempre puntuali, professionali e attenti alla sicurezza.', date: 'Facility Manager, Imola' }
];
