import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },

  {
    path: 'home',
    loadComponent: () => import("./pages/home/home.component").then(m => m.HomeComponent),
  },

  {
    path: 'detail/:id',
    loadComponent: () => import("./pages/detail/detail.component").then(m => m.DetailComponent),
  },

  {
    path: 'cart',
    loadComponent: () => import("./pages/cart/cart.component").then(m => m.CartComponent),
  },

  {
    path: '**',
    loadComponent: () => import("./pages/not-found/not-found.component").then(m => m.NotFoundComponent),
  }


];


//setup routing
// 1. app.routes.ts: Tạo đường dẫn và trỏ tới các component theo đường path đó
// 2. thêm ther router-outlet vào file app.component.html
// 3. test routing
