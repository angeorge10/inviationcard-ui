import { TestBed } from '@angular/core/testing';

import { LogoutApiService } from './logout-api.service';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { of } from 'rxjs';

describe('LogoutApiService', () => {
  let service: LogoutApiService;
  class HttpApiServiceStub {
    httpGet() {
      return of({});
    }
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: HttpApiService,
          useClass: HttpApiServiceStub
        }
      ]
    });
    service = TestBed.inject(LogoutApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
