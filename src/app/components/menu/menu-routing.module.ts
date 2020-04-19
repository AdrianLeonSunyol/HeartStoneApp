import { NgModule } from '@angular/core';
import { MenuComponent } from './menu.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'tabs',
    component: MenuComponent,
    children: [
      {
        path: 'componentes',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../card-decks/card-decks.module').then(m => m.CardDecksModule)
          }
        ]
      },
      {
        path: 'servicios',
        children: [
          {
            path: '',
            loadChildren: () => 
            import('../card-list-page/card-list-page.module').then(m => m.CardListPageModule)
          }
        ]
      },
      {
        path: 'about',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('../about/about.module').then(m => m.AboutModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tabs/componentes',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/componentes',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], 
  exports: [RouterModule]
})
export class MenuRoutingModule { }
