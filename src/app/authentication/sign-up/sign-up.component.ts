import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SignUpService } from './services/sign-up.service';
import { ISignUpReqBody } from '../apis/interfaces/isign-up-api';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm: FormGroup;
  states: string[];
  constructor(private fb: FormBuilder,
    private signUpService: SignUpService) {
    this.signUpForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      address: [''],
      address2: [''],
      city: [''],
      state: [''],
      zip: [undefined]
    });
    this.states = this.signUpService.getStates();
  }

  /**
   * returns the signUp form controls
   */
  get signUpFormControls() {
    return this.signUpForm.controls;
  }

  /**
   * Gets for state formControl
   */
  get stateControl() {
    return this.signUpForm.get('state');
  }

  /**
   * Callback when state is changed
   * @param e - event
   */
  changeState(e: any) {
    this.stateControl.setValue(e.target.value)
  }

  /**
   * Callback when signup button is clicked.
   */
  onSignUp() {
    this.signUpService.signUp({ ...this.signUpForm.value } as ISignUpReqBody).subscribe((response) => {
      console.log(response);
    });
  }
}
