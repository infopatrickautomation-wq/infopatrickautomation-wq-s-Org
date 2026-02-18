
import React from 'react';

export enum JobType {
  RISTRUTTURAZIONE = 'Ristrutturazione',
  MANUTENZIONE = 'Manutenzione',
  IMPERMEABILIZZAZIONE = 'Impermeabilizzazione',
  LINEE_VITA = 'Linee Vita',
  ISPEZIONI = 'Ispezioni',
  PULIZIA_GRONDAIE = 'Pulizia Grondaie'
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Project {
  id: number;
  title: string;
  category: 'Ristrutturazione' | 'Manutenzione' | 'Impermeabilizzazione' | 'Linee Vita' | 'Ispezioni';
  description: string;
  year: number;
  image: string;
}

export interface Review {
  id: number;
  name: string;
  rating: number;
  text: string;
  date: string;
}