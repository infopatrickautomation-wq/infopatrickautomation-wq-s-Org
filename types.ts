// Fix: Added missing React import to resolve namespace 'React' not found error
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Project {
  id: number;
  title: string;
  category: 'Residenziale' | 'Industriale' | 'Bonifica' | 'Restauro' | 'Commerciale' | 'Coibentazione';
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

export enum JobType {
  CIVILE = "Rifacimento tetto civile",
  NUOVA = "Nuova copertura",
  COIBENTAZIONE = "Coibentazione",
  IMPERMEABILIZZAZIONE = "Impermeabilizzazione",
  BONIFICA = "Bonifica amianto",
  MANUTENZIONE = "Manutenzione",
  INDUSTRIALE = "Copertura industriale",
  ALTRO = "Altro"
}