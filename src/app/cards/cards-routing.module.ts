import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCardsComponent } from './view-cards/view-cards.component';
import { CreateCardComponent } from './create-card/create-card.component';

const routes: Routes = [
  {
    path: '',
    component: ViewCardsComponent
  },
  {
    path: 'create',
    component: CreateCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CardsRoutingModule { }
