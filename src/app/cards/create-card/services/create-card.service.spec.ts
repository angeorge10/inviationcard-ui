import { TestBed } from '@angular/core/testing';

import { CreateCardService } from './create-card.service';
import { FriendsApiService } from 'src/app/friends/apis/friends-api.service';
import { CardsApiService } from '../../apis/cards-api.service';
import { of } from 'rxjs';
import { ICardRequest } from '../../apis/interfaces/icard-api';

describe('CreateCardService', () => {
  let service: CreateCardService;
  class CardsApiServiceStub {
    add() {
      return of({});
    }
  }
  class FriendsApiServiceStub {
    getAll() {
      return of({});
    }
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CreateCardService,
        {
          provide: CardsApiService,
          useClass: CardsApiServiceStub
        },
        {
          provide: FriendsApiService,
          useClass: FriendsApiServiceStub
        }
      ]
    });
    service = TestBed.inject(CreateCardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('createCard should return response', () => {
    service.createCard({} as ICardRequest).subscribe((response) => {
      expect(response).toBeDefined()
    });
  });

  it('getAllFriends should return response', () => {
    service.getAllFriends().subscribe((response) => {
      expect(response).toBeDefined()
    });
  });
});
