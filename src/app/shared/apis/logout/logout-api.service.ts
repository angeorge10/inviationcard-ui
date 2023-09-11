import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IApiAdvancedOptions } from 'src/app/core/interfaces/iapi-advanced-options';
import { IApiParamsObj } from 'src/app/core/interfaces/iapi-params-obj';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { LogoutApiConfig } from './logout-api-config';

@Injectable({
  providedIn: 'root'
})
export class LogoutApiService {

  constructor(private httpApiService: HttpApiService) {   
  }

  /**
   * Logsout the user by calling api
   *
   * @param paramsObj - Params Obj
   * @param advancedOptions - Advanced api options
   *
   * @returns An observable
   */
  logout(paramsObj?: IApiParamsObj, advancedOptions?: IApiAdvancedOptions): Observable<any> {
    return this.httpApiService.httpGet(LogoutApiConfig.logout, paramsObj, advancedOptions);
  }
}
