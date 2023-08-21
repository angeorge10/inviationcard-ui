import { Injectable } from '@angular/core';
import { AuthenticationApiService } from '../../apis/authentication-api.service';
import { Observable } from 'rxjs';
import { ISignUpReqBody } from '../../apis/interfaces/isign-up-api';

@Injectable()
export class SignUpService {

  constructor(
    private authenticationApiService: AuthenticationApiService
  ) { }

  /**
   * Gets the list of states
   * @returns State List
   */
  getStates(): string[] {
    return [
      'Kerala',
      'Tamil Nadu',
      'Karnataka',
      'Andra Pradesh',
      'Telengana',
      'Goa',
      'Mumbai'
    ]
  }

  /**
   * Calls the api to create an account via authenticationApiService
   *
   * @param reqBody - Request Body
   *
   * @returns - An observable
   */
  signUp(reqBody: ISignUpReqBody): Observable<any> {
    return this.authenticationApiService.signUp(reqBody);
  }
}
