import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {characterReducer} from './ngrx/reducer/character.reducer';
import * as characterEffects from './ngrx/effect/character.effect';
import {provideHttpClient} from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideStore({
      character : characterReducer
    }),
    provideEffects(
      characterEffects,
    ),
    provideFirebaseApp(() => initializeApp({ projectId: "buoi11-dd0d8", appId: "1:997183023998:web:ae78635342245fb784e12f", storageBucket: "buoi11-dd0d8.firebasestorage.app", apiKey: "AIzaSyDifd_LbYKUHjOOQvc3OeY8vhoLX6BfIvY", authDomain: "buoi11-dd0d8.firebaseapp.com", messagingSenderId: "997183023998", measurementId: "G-FHQTLKEE8H" })), provideAuth(() => getAuth())]
};
