import { TestBed } from '@angular/core/testing';

import { ViewCardsService } from './view-cards.service';
import { CardsApiService } from '../../apis/cards-api.service';
import { of } from 'rxjs';

describe('ViewCardsService', () => {
  let service: ViewCardsService;
  class CardsApiServiceStub {
    getAll() {
      return of({});
    }
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ViewCardsService,
        {
          provide: CardsApiService,
          useClass: CardsApiServiceStub
        }
      ]
    });
    service = TestBed.inject(ViewCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getAll should return response', () => {
    service.getAll().subscribe((response) => {
      expect(response).toBeDefined();
    });
  })
});
