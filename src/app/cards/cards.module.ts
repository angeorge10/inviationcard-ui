import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CreateCardComponent } from './create-card/create-card.component';
import { ViewCardsComponent } from './view-cards/view-cards.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CreateCardComponent,
    ViewCardsComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    SharedModule
  ]
})
export class CardsModule { }
