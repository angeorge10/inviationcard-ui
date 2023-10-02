import { TestBed } from '@angular/core/testing';

import { CardsApiService } from './cards-api.service';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { of } from 'rxjs';
import { ICardRequest } from './interfaces/icard-api';

describe('CardsApiService', () => {
  let service: CardsApiService;

  class HttpApiServiceStub {
    httpPost() {
      return of({});
    }

    httpGet() {
      return of({});
    }
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CardsApiService,
        {
        provide: HttpApiService,
        useClass: HttpApiServiceStub
        }
      ]
    });
    service = TestBed.inject(CardsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('add should return response', () => {
    service.add({} as ICardRequest).subscribe((response) => {
      expect(response).toBeDefined();
    })
  });

  it('getAll should return response', () => {
    service.getAll().subscribe((response) => {
      expect(response).toBeDefined();
    });
  });
});
