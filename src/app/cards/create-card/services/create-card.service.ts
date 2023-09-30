import { Injectable } from '@angular/core';
import { ICardRequest } from '../../apis/interfaces/icard-api';
import { CardsApiService } from '../../apis/cards-api.service';
import { Observable } from 'rxjs';
import { IApiAdvancedOptions } from 'src/app/core/interfaces/iapi-advanced-options';
import { IApiParamsObj } from 'src/app/core/interfaces/iapi-params-obj';
import { IMessageResponseApi } from 'src/app/shared/interfaces/imessage-response-api';
import { FriendsApiService } from 'src/app/friends/apis/friends-api.service';
import { IFriendApi } from 'src/app/friends/apis/interfaces/ifriend-api';

@Injectable()
export class CreateCardService {

  constructor(private cardsApiServive: CardsApiService,
    private friendsApiService: FriendsApiService) { }

  /**
   * Creates a new card for the logged in user with details by calling api
   *
   * @param reqBody - Card details
   * @param paramsObj - Params Obj
   * @param advancedOptions - Advanced api options
   *
   * @returns An observable
   */
  createCard(reqBody: ICardRequest, paramsObj?: IApiParamsObj, advancedOptions?: IApiAdvancedOptions): Observable<IMessageResponseApi> {
    return this.cardsApiServive.add(reqBody, paramsObj, advancedOptions);
  }

  /**
   * Gets all friends for the user by calling api
   *
   * @param paramsObj - Params Obj
   * @param advancedOptions - Advance options
   *
   * @returns - An observable with frineds details
   */
  getAllFriends(paramsObj?: IApiParamsObj, advancedOptions?: IApiAdvancedOptions): Observable<IFriendApi[]> {
    return this.friendsApiService.getAll(paramsObj, advancedOptions);
  }
}
