import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateInvatationComponent } from './dashboard/create-invatation/create-invatation.component';
import { ViewinvitationDetailsComponent } from './dashboard/viewinvitation-details/viewinvitation-details.component';
import { CreateFriendlistComponent } from './dashboard/create-friendlist/create-friendlist.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'sign-up',
    component: SignUpComponent
  },
  {
    path : 'dashboard',
    component: DashboardComponent
  },
  {
    path : 'dashboard/create-invatation',
    component : CreateInvatationComponent
  },
  {
    path :'dashboard/viewinvitation-details',
    component :ViewinvitationDetailsComponent
  },
  {
    path :'dashboard/create-friendlist',
    component : CreateFriendlistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
