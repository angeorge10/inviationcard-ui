import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FriendsRoutingModule } from './friends-routing.module';
import { ViewFriendComponent } from './view-friend/view-friend.component';
import { AddFriendComponent } from './add-friend/add-friend.component';
import { FriendsApiService } from './apis/friends-api.service';
import { AddFriendService } from './add-friend/services/add-friend.service';
import { SharedModule } from '../shared/shared.module';
import { ViewFriendService } from './view-friend/services/view-friend.service';


@NgModule({
  declarations: [
    ViewFriendComponent,
    AddFriendComponent
  ],
  imports: [
    CommonModule,
    FriendsRoutingModule,
    SharedModule
  ],
  providers: [FriendsApiService, AddFriendService, ViewFriendService]
})
export class FriendsModule { }
