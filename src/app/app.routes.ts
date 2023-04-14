import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  {
    path: 'like-icon',
    loadComponent: () => import('./icons/components/like-icon/like-icon.page').then( m => m.LikeIconPage)
  },
];
