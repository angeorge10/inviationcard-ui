import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CreateCardComponent } from './create-card/create-card.component';
import { ViewCardsComponent } from './view-cards/view-cards.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { CardsApiService } from './apis/cards-api.service';
import { ViewCardsService } from './view-cards/services/view-cards.service';
import { CreateCardService } from './create-card/services/create-card.service';
import { FriendsApiService } from '../friends/apis/friends-api.service';


@NgModule({
  declarations: [
    CreateCardComponent,
    ViewCardsComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    SharedModule
  ],
  providers: [
    CardsApiService,
    CreateCardService,
    ViewCardsService,
    FriendsApiService
  ]
})
export class CardsModule { }
