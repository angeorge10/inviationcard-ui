import { Injectable } from '@angular/core';
import { cloneDeep } from 'lodash-es';
import { Observable } from 'rxjs';
import { IApiAdvancedOptions } from 'src/app/core/interfaces/iapi-advanced-options';
import { IApiParamsObj } from 'src/app/core/interfaces/iapi-params-obj';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { IFriendApi, IFriendRequest } from './interfaces/ifriend-api';
import { FriendsApiConfig } from './friends-api-config';
import { IMessageResponseApi } from 'src/app/shared/interfaces/imessage-response-api';

@Injectable()
export class FriendsApiService {

  constructor(private httpApiService: HttpApiService) { }

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
    return this.httpApiService.httpPost(FriendsApiConfig.friend, reqBody, paramsObj, advancedOptions);
  }

  /**
   * Gets all friends for the user by calling api
   *
   * @param paramsObj - Params Obj
   * @param advancedOptions - Advance options
   *
   * @returns - An observable with frineds details
   */
  getAll(paramsObj?: IApiParamsObj, advancedOptions?: IApiAdvancedOptions): Observable<IFriendApi[]> {
    return this.httpApiService.httpGet(FriendsApiConfig.friend, paramsObj, advancedOptions);
  }
}
