import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { AddFriendComponent } from '../friends/add-friend/add-friend.component';
import { ViewFriendComponent } from '../friends/view-friend/view-friend.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
