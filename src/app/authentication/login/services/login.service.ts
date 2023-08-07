import { Injectable } from '@angular/core';
import { AuthenticationApiService } from '../../apis/authentication-api.service';
import { ILoginReqBody } from '../../apis/interfaces/ilogin-api';
import { Observable } from 'rxjs';

@Injectable()
export class LoginService {

  constructor(private authenticationApiService: AuthenticationApiService) { }

  /**
   * Calls the api to check the validity of passed credentials via authenticationApiService
   *
   * @param reqBody - Request Body
   *
   * @returns - An observable
   */
  login(reqBody: ILoginReqBody): Observable<any> {
    return this.authenticationApiService.login(reqBody);
  }
}
