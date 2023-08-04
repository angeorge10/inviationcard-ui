import { Injectable } from '@angular/core';
import { IApiAdvancedOptions } from 'src/app/core/interfaces/iapi-advanced-options';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { ILoginReqBody } from './interfaces/ilogin-api';
import { LoginApiConfig } from './login-api-config';
import { cloneDeep } from 'lodash-es';
import { IApiParamsObj } from 'src/app/core/interfaces/iapi-params-obj';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  constructor(private httpApiService: HttpApiService) {   
  }

  authenticate(reqBody: ILoginReqBody, paramsObj?: IApiParamsObj, advancedOptions?: IApiAdvancedOptions): Observable<any> {
    const apiConfig = cloneDeep(LoginApiConfig.login);
    return this.httpApiService.httpPost(apiConfig, reqBody, paramsObj, advancedOptions);
  }
}

