import { Injectable } from '@angular/core';
import { CardsApiService } from '../../apis/cards-api.service';
import { ICardApi } from '../../apis/interfaces/icard-api';
import { Observable } from 'rxjs';
import { IApiAdvancedOptions } from 'src/app/core/interfaces/iapi-advanced-options';
import { IApiParamsObj } from 'src/app/core/interfaces/iapi-params-obj';

@Injectable()
export class ViewCardsService {

  constructor(private cardsApiService: CardsApiService) { }

  /**
   * Gets all friends for the user by calling api
   *
   * @param paramsObj - Params Obj
   * @param advancedOptions - Advance options
   *
   * @returns - An observable with frineds details
   */
  getAll(paramsObj?: IApiParamsObj, advancedOptions?: IApiAdvancedOptions): Observable<ICardApi[]> {
    return this.cardsApiService.getAll(paramsObj, advancedOptions);
  }
}
