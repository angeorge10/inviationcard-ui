import { TestBed } from '@angular/core/testing';

import { ViewFriendService } from './view-friend.service';
import { of } from 'rxjs';
import { FriendsApiService } from '../../apis/friends-api.service';

describe('ViewFriendService', () => {
  let service: ViewFriendService;
  class FriendsApiServiceStub {
    getAll() {
      return of({});
    }
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ViewFriendService,
        {
          provide: FriendsApiService,
          useClass: FriendsApiServiceStub
        }
      ]
    });
    service = TestBed.inject(ViewFriendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return response of getAll', () => {
    service.getAll().subscribe((response) => {
      expect(response).toBeDefined();
    });
  });
});
