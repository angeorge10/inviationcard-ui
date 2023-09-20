import { Injectable } from '@angular/core';
import { FriendsApiService } from '../../apis/friends-api.service';
import { Observable } from 'rxjs';
import { IApiAdvancedOptions } from 'src/app/core/interfaces/iapi-advanced-options';
import { IApiParamsObj } from 'src/app/core/interfaces/iapi-params-obj';
import { IMessageResponseApi } from 'src/app/shared/interfaces/imessage-response-api';
import { IFriendRequest } from '../../apis/interfaces/ifriend-api';

@Injectable()
export class AddFriendService {

  constructor(private friendApiService: FriendsApiService) { }

  /**
   * Creates a new friend for the logged in user with details by calling api
   *
   * @param reqBody - Friend details
   * @param paramsObj - Params Obj
   * @param advancedOptions - Advanced api options
   *
   * @returns An observable
   */
  add(reqBody: IFriendRequest, paramsObj?: IApiParamsObj, advancedOptions?: IApiAdvancedOptions): Observable<IMessageResponseApi> {
    return this.friendApiService.add(reqBody, paramsObj, advancedOptions);
  }
}
