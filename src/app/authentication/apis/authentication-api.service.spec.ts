import { TestBed } from '@angular/core/testing';

import { AuthenticationApiService } from './authentication-api.service';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { of } from 'rxjs';
import { ILoginReqBody } from './interfaces/ilogin-api';
import { ISignUpReqBody } from './interfaces/isign-up-api';

describe('AuthenticationApiService', () => {
  let service: AuthenticationApiService;
  class HttpApiServiceStub {
    httpPost() {
      return of({});
    }
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthenticationApiService,
        {
          provide: HttpApiService,
          useClass: HttpApiServiceStub
        }
      ]
    });
    service = TestBed.inject(AuthenticationApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('login should return an observable with response', () => {
    service.login({} as ILoginReqBody).subscribe((response) => {
      expect(response).toBeDefined();
    });
  });

  it('signUp should return an observable with response', () => {
    service.signUp({} as ISignUpReqBody).subscribe((response) => {
      expect(response).toBeDefined();
    });
  });

  it('forgotPassword should return an observable with response', () => {
    service.forgotPassword({}).subscribe((response) => {
      expect(response).toBeDefined();
    });
  });
});
