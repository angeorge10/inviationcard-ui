import { Injectable } from '@angular/core';
import { FriendsApiService } from '../../apis/friends-api.service';
import { Observable } from 'rxjs';
import { IApiAdvancedOptions } from 'src/app/core/interfaces/iapi-advanced-options';
import { IApiParamsObj } from 'src/app/core/interfaces/iapi-params-obj';
import { IFriendApi } from '../../apis/interfaces/ifriend-api';

@Injectable()
export class ViewFriendService {

  constructor(private friendApiService: FriendsApiService) { }

  /**
   * Gets all friends for the user by calling api
   *
   * @param paramsObj - Params Obj
   * @param advancedOptions - Advance options
   *
   * @returns - An observable with frineds details
   */
  getAll(paramsObj?: IApiParamsObj, advancedOptions?: IApiAdvancedOptions): Observable<IFriendApi[]> {
    return this.friendApiService.getAll(paramsObj, advancedOptions);
  }
}
