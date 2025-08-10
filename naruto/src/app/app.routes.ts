import { Routes } from '@angular/router';
import {CardAcsynComponent} from './card-acsyn/card-acsyn.component';

export const routes: Routes = [

  {
    path: '', redirectTo: 'card', pathMatch: 'full'
  },
  {
    path: 'card',
    loadComponent:() => import('./card/card.component').then(m => m.CardComponent),
  },

  {
    path: 'card-acsyn',
    loadComponent:() => import('./card-acsyn/card-acsyn.component').then(m => m.CardAcsynComponent),
  },

  {
    path: 'detail/:id',
    loadComponent:() => import('../app/detail/detail.component').then(m => m.DetailComponent)
  }


];
