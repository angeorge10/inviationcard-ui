import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';
import { ILoginReqBody } from '../apis/interfaces/ilogin-api';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,
    private loginService: LoginService) {
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

  onLogin() {
    this.loginService.login({...this.loginForm.value} as ILoginReqBody).subscribe(() => {});
  }
}
