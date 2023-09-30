import { TestBed } from '@angular/core/testing';

import { ViewCardsService } from './view-cards.service';

describe('ViewCardsService', () => {
  let service: ViewCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
