import { TestBed } from '@angular/core/testing';

import { SignUpService } from './sign-up.service';
import { AuthenticationApiService } from '../../apis/authentication-api.service';
import { of } from 'rxjs';
import { ISignUpReqBody } from '../../apis/interfaces/isign-up-api';

describe('SignUpService', () => {
  let service: SignUpService;
  class AuthenticationApiServiceStub {
    signUp() {
      return of({});
    }
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        SignUpService,
        {
          provide: AuthenticationApiService,
          useClass: AuthenticationApiServiceStub
        }]
    });
    service = TestBed.inject(SignUpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getStates should return states', () => {
    const response = service.getStates();
    expect(response.length).toBeGreaterThan(0);
  });

  it('signUp should provide an obervable with a response', () => {
    service.signUp({} as ISignUpReqBody).subscribe((response) => {
      expect(response).toBeDefined();
    });
  });
});
