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


@NgModule({
  declarations: [
    LoginComponent,
    ForgotPasswordComponent,
    SignUpComponent
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
