import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationApiService } from './apis/authentication-api.service';
import { LoginService } from './login/services/login.service';
import { SignUpService } from './sign-up/services/sign-up.service';
import { FooterComponent } from './dashboard/footer/footer.component';
import { CreateInvatationComponent } from './dashboard/create-invatation/create-invatation.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavigationComponent } from './dashboard/navigation/navigation.component';
import { ViewinvitationDetailsComponent } from './dashboard/viewinvitation-details/viewinvitation-details.component';
import { CreateFriendlistComponent } from './dashboard/create-friendlist/create-friendlist.component';


@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    SignUpComponent,
     DashboardComponent,
    CreateInvatationComponent,
    ViewinvitationDetailsComponent,
    NavigationComponent,
    FooterComponent,
    CreateFriendlistComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SharedModule
  ],
  providers: [
    LoginService, 
    AuthenticationApiService,
    SignUpService
  ]
})
export class AuthenticationModule { }
