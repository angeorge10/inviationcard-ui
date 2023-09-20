import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CreateCardComponent } from './create-card/create-card.component';
import { ViewCardsComponent } from './view-cards/view-cards.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreateCardComponent,
    ViewCardsComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    FormsModule
  ]
})
export class CardsModule { }
