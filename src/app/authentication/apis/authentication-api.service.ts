import { Injectable } from '@angular/core';
import { IApiAdvancedOptions } from 'src/app/core/interfaces/iapi-advanced-options';
import { HttpApiService } from 'src/app/core/services/http-api.service';
import { ILoginReqBody } from './interfaces/ilogin-api';
import { AuthenticationApiConfig } from './authentication-api-config';
import { cloneDeep } from 'lodash-es';
import { IApiParamsObj } from 'src/app/core/interfaces/iapi-params-obj';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationApiService {

  constructor(private httpApiService: HttpApiService) {   
  }

  /**
   * Allows uders to login and generate token if the passed reqBody is valid
   *
   * @param reqBody - Requset Body
   * @param paramsObj - Params Obj
   * @param advancedOptions - Advanced api options
   * 
   * @returns - An observable
   */
  login(reqBody: ILoginReqBody, paramsObj?: IApiParamsObj, advancedOptions?: IApiAdvancedOptions): Observable<any> {
    const apiConfig = cloneDeep(AuthenticationApiConfig.login);
    return this.httpApiService.httpPost(apiConfig, reqBody, paramsObj, advancedOptions);
  }

  /**
   * Creates a new user with details by calling api
   *
   * @param reqBody - User details
   * @param paramsObj - Params Obj
   * @param advancedOptions - Advanced api options
   *
   * @returns An observable
   */
  signup(reqBody: any, paramsObj?: IApiParamsObj, advancedOptions?: IApiAdvancedOptions): Observable<any> {
    const apiConfig = cloneDeep(AuthenticationApiConfig.signup);
    return this.httpApiService.httpPost(apiConfig, reqBody, paramsObj, advancedOptions);
  }

  /**
   * Initiates password recovery by calling api
   *
   * @param reqBody - Usermail address
   * @param paramsObj - params obj
   * @param advancedOptions - Advacned api options
   *
   * @returns An observable
   */
  forgorPassword(reqBody: any, paramsObj?: IApiParamsObj, advancedOptions?: IApiAdvancedOptions): Observable<any> {
    const apiConfig = cloneDeep(AuthenticationApiConfig.forgotpassword);
    return this.httpApiService.httpPost(apiConfig, reqBody, paramsObj, advancedOptions);
  }
}

