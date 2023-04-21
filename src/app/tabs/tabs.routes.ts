import { Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

export const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadComponent: () =>
          import('../tab1/tab1.page').then((m) => m.Tab1Page),
      },
      {
        path: 'tab2',
        loadComponent: () =>
          import('../tab2/tab2.page').then((m) => m.Tab2Page),
      },
      {
        path: 'tab3',
        loadComponent: () =>
          import('../tab3/tab3.page').then((m) => m.Tab3Page),
      },
      {
        path: 'tab-actus',
        loadComponent: () =>
          import('../tab-actus/tab-actus.page').then((m) => m.TabActusPage),
      },
      {
        path: 'tab-annuaire',
        loadComponent: () =>
          import('../tab-annuaire/tab-annuaire.page').then(
            (m) => m.TabAnnuairePage
          ),
      },
      {
        path: 'tab-liste-by-category/:cat',
        loadComponent: () =>
          import('../tab-liste-by-category/tab-liste-by-category.page').then(
            (m) => m.TabListeByCategoryPage
          ),
      },

      {
        path: 'tab-faq',
        loadComponent: () =>
          import('../tab-faq/tab-faq.page').then((m) => m.TabFaqPage),
      },
      {
        path: 'tab-landing',
        loadComponent: () =>
          import('../tab-landing/tab-landing.page').then((m) => m.TabLandingPage),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];
