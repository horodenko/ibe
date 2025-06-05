import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { 
    path: 'home', 
    loadComponent: () => import('./features/home/components/home.component').then(m => m.HomeComponent),
    title: 'IBE'
  },
  { 
    path: 'novidades-e-eventos', 
    loadComponent: () => import('./features/news-and-events/components/news-and-events.component').then(m => m.NewsAndEventsComponent),
    title: 'Novidades e Eventos | IBE'
  },
  { 
    path: 'fale-conosco', 
    loadComponent: () => import('./features/contact-us/components/contact-us.component').then(m => m.ContactUsComponent),
    title: 'Fale Conosco | IBE'
  },
  { 
    path: '**', 
    loadComponent: () => import('./features/home/components/home.component').then(m => m.HomeComponent) 
  }
];