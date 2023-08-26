import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'login',
    loadChildren: () => import('./authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  { path: '',   
    redirectTo: '/login',
    pathMatch: 'full' 
  },
  {
    path: 'home',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'cards',
    loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule)
  },
  {
    path: 'friends',
    loadChildren: () => import('./friends/friends.module').then(m => m.FriendsModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
