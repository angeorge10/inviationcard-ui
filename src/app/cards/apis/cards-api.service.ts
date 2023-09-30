import { Injectable } from '@angular/core';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { CardsApiConfig } from './cards-api-config';
import { IApiAdvancedOptions } from 'src/app/core/interfaces/iapi-advanced-options';
import { Observable } from 'rxjs';
import { IApiParamsObj } from 'src/app/core/interfaces/iapi-params-obj';
import { IMessageResponseApi } from 'src/app/shared/interfaces/imessage-response-api';
import { ICardApi, ICardRequest } from './interfaces/icard-api';

@Injectable()
export class CardsApiService {

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
  add(reqBody: ICardRequest, paramsObj?: IApiParamsObj, advancedOptions?: IApiAdvancedOptions): Observable<IMessageResponseApi> {
    return this.httpApiService.httpPost(CardsApiConfig.card, reqBody, paramsObj, advancedOptions);
  }

  /**
   * Gets all cards created by the user by calling api
   *
   * @param paramsObj - Params Obj
   * @param advancedOptions - Advance options
   *
   * @returns - An observable with frineds details
   */
  getAll(paramsObj?: IApiParamsObj, advancedOptions?: IApiAdvancedOptions): Observable<ICardApi[]> {
    return this.httpApiService.httpGet(CardsApiConfig.card, paramsObj, advancedOptions);
  }
}
