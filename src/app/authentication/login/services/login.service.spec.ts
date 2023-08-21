import { TestBed } from '@angular/core/testing';

import { LoginService } from './login.service';
import { AuthenticationApiService } from '../../apis/authentication-api.service';
import { of } from 'rxjs';
import { ILoginReqBody } from '../../apis/interfaces/ilogin-api';

describe('LoginService', () => {
  let service: LoginService;
  class AuthenticationApiServiceStub {
    login() {
      return of({});
    }
  }
  beforeEach(() => {    
    TestBed.configureTestingModule({
      providers: [
        {
          provide: AuthenticationApiService,
          useClass: AuthenticationApiServiceStub
        },
        LoginService
      ]
    });
    service = TestBed.inject(LoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('login should return an observable with a response', () => {
    service.login({} as ILoginReqBody).subscribe((response) => {
      expect(response).toBeDefined();
    });
  });
});
