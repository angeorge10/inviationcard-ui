import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendsRoutingModule } from './friends-routing.module';
import { ViewFriendComponent } from './view-friend/view-friend.component';
import { AddFriendComponent } from './add-friend/add-friend.component';


@NgModule({
  declarations: [
    ViewFriendComponent,
    AddFriendComponent
  ],
  imports: [
    CommonModule,
    FriendsRoutingModule
  ]
})
export class FriendsModule { }
