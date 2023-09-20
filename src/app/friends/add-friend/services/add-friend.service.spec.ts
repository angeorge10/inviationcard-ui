import { TestBed } from '@angular/core/testing';

import { AddFriendService } from './add-friend.service';
import { FriendsApiService } from '../../apis/friends-api.service';
import { of } from 'rxjs';
import { IFriendRequest } from '../../apis/interfaces/ifriend-api';

describe('AddFriendService', () => {
  let service: AddFriendService;
  class FriendsApiServiceStub {
    add() {
      return of({});
    }
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AddFriendService,
        {
          provide: FriendsApiService,
          useClass: FriendsApiServiceStub
        }
      ]
    });
    service = TestBed.inject(AddFriendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return response on calling add', () => {
    service.add({} as IFriendRequest).subscribe((response) => {
      expect(response).toBeDefined();
    });
  });
});
