import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewFriendComponent } from './view-friend/view-friend.component';
import { AddFriendComponent } from './add-friend/add-friend.component';

const routes: Routes = [
  {
    path: '',
    component: ViewFriendComponent
  },
  {
    path: 'create',
    component: AddFriendComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FriendsRoutingModule { }
