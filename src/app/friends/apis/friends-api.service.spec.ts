import { TestBed } from '@angular/core/testing';

import { FriendsApiService } from './friends-api.service';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { of } from 'rxjs';
import { IFriendRequest } from './interfaces/ifriend-api';

describe('FriendsApiService', () => {
  let service: FriendsApiService;
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
        FriendsApiService,
        {
          provide: HttpApiService,
          useClass: HttpApiServiceStub
        }
      ]
    });
    service = TestBed.inject(FriendsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return response when add is called', () => {
    service.add({} as IFriendRequest).subscribe((response) => {
      expect(response).toBeDefined();
    });
  });
  it('should return response when getAll is called', () => {
    service.getAll().subscribe((response) => {
      expect(response).toBeDefined();
    })
  });
});
