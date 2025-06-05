import { ApplicationConfig } from '@angular/core';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { provideFirebaseApp } from '@angular/fire/app';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyDTu0HD3k0jtaoGLEMBhgVp4roJGGZDAn0",
  authDomain: "ibebb-2ce3f.firebaseapp.com",
  projectId: "ibebb-2ce3f",
  storageBucket: "ibebb-2ce3f.firebasestorage.app",
  messagingSenderId: "351201144515",
  appId: "1:351201144515:web:a0d3bfc9538549da257c76"
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withPreloading(PreloadAllModules)
    ), 
    provideClientHydration(),
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideFirestore(() => getFirestore()),
  ]
};
