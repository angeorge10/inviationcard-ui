import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';
import { ILoginReqBody } from '../apis/interfaces/ilogin-api';
import { Router } from '@angular/router';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private utilityService: UtilityService) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  /**
   * returns the login form controls
   */
  get loginFormControls() {
    return this.loginForm.controls;
  }

  /**
   * Callback on login button click
   */
  onLogin() {
    this.loginService.login({...this.loginForm.value} as ILoginReqBody).subscribe((response) => {
      this.utilityService.setUserDetails(response);
      void this.router.navigate(['/home']);
    });
  }
}
