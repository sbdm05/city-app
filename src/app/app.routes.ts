import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./tab-landing/tab-landing.page').then((m) => m.TabLandingPage),
  },
  {
    path: 'content',
    loadChildren: () => import('./tabs/tabs.routes').then((m) => m.routes),
  },
  // {
  //   path: 'tab-actus',
  //   loadComponent: () => import('./tab-actus/tab-actus.page').then( m => m.TabActusPage)
  // },
  // {
  //   path: 'tab-annuaire',
  //   loadComponent: () => import('./tab-annuaire/tab-annuaire.page').then( m => m.TabAnnuairePage)
  // },
  // {
  //   path: 'tab-liste-by-category/:cat',
  //   loadComponent: () => import('./tab-liste-by-category/tab-liste-by-category.page').then( m => m.TabListeByCategoryPage)
  // }
];
