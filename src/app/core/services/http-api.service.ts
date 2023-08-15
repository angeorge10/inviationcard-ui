import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { map, catchError, throwError, reduce, finalize } from 'rxjs';
import { IApiConfig } from '../interfaces/iapi-config';
import { IApiParamsObj } from '../interfaces/iapi-params-obj';
import { IApiAdvancedOptions } from '../interfaces/iapi-advanced-options';
import { IApiHttpSettings } from '../interfaces/iapi-http-settings';
import { HttpApiConstant } from '../constants/http-api-constant';
import { UtilityService } from 'src/app/shared/services/utility.service';

@Injectable({
  providedIn: 'root'
})
export class HttpApiService {

  constructor(private httpClient: HttpClient, 
    private utilityService: UtilityService) { }

  /**
   * Setting the request headers
   * @returns - Http Headers
   */
  private setHeaders(advanceOptions: IApiAdvancedOptions): HttpHeaders {
    const headers = advanceOptions.header ? advanceOptions.header : {};
    return new HttpHeaders(headers);
  }

  /**
   * setting up the url params
   * @param paramObj
   * @param responseOnly
   */
  private setParamsOptions(paramObj?: IApiParamsObj, responseOnly?: boolean): any {
    const options: any = {};
    if (!responseOnly) {
      options.observe = 'response';
    }

    options.params = new HttpParams();

    if (paramObj) {
      // tslint:disable-next-line: forin
      for (const paramNm in paramObj) {
        options.params = options.params.append(paramNm, paramObj[paramNm]);
      }
    }
    return options;
  }

  /**
   * Get url
   * @param apiConfig
   * @param advanceOptions
   */
  private getUrl(apiConfig: IApiConfig): any {
    let baseUrlFromReq = HttpApiConstant.BASE_URL
      ? HttpApiConstant.BASE_URL
      : '';

    // overriding defaults
    if (
      apiConfig?.id &&
      HttpApiConstant.OVERIRIDES &&
      HttpApiConstant.OVERIRIDES[apiConfig.id]
    ) {
      if (HttpApiConstant.OVERIRIDES[apiConfig.id].baseUrl) {
        baseUrlFromReq = HttpApiConstant.OVERIRIDES[apiConfig.id].baseUrl;
      }
    } else if (
      apiConfig?.group &&
      HttpApiConstant.OVERIRIDES &&
      HttpApiConstant.OVERIRIDES[apiConfig.group]
    ) {
      if (HttpApiConstant.OVERIRIDES[apiConfig.group].baseUrl) {
        baseUrlFromReq =
        HttpApiConstant.OVERIRIDES[apiConfig.group].baseUrl;
      }
    }
    baseUrlFromReq = baseUrlFromReq + apiConfig.endpoint;
    return baseUrlFromReq;
  }

  /**
   * toggle loader/spinner
   *
   * @param advanceOptions
   * @param showLoader
   */
  private toggleLoader(advanceOptions: IApiAdvancedOptions, showLoader: boolean) {
    if (!advanceOptions || !advanceOptions.hideLoader) {
      if (showLoader) {
        this.utilityService.showLoader();
      } else {
        this.utilityService.hideLoader();
      }
    }
  }

  /**
   * http method
   * @param httpSetting
   */
  private httpMethod(httpSetting: IApiHttpSettings) {
    const method = httpSetting.method;
    const advOptions = httpSetting.advanceOptions
      ? httpSetting.advanceOptions
      : {};
    const options = this.setParamsOptions(
      httpSetting.params,
      advOptions.setParamsOptions
    );
    const url = this.getUrl(httpSetting.apiConfig);
    const headers = this.setHeaders(advOptions);
    options.headers = headers;

    if (httpSetting.advanceOptions && httpSetting.advanceOptions.responseType) {
      options.responseType = httpSetting.advanceOptions.responseType;
    }
    const http =
      method === 'get' || method === 'delete'
        ? this.httpClient[method](url, options)
        : this.httpClient[method](url, httpSetting.body, options);

    this.toggleLoader(advOptions, true);

    return http.pipe(
      map((response: any) => {
        return response.body;
      }),
      catchError((err) => {
        return throwError(() => this.handleError(err, advOptions.muteNotifyError));
      }),
      finalize(() => {
        this.toggleLoader(advOptions, false);
      })
    );
  }

  /**
   * Http Get api call
   *
   * @param apiConfig
   * @param paramObj
   * @param advanceOptions
   */
  public httpGet(
    apiConfig: IApiConfig,
    paramObj?: IApiParamsObj,
    advanceOptions?: IApiAdvancedOptions
  ) {
    const httpSetting = {
      method: 'get',
      apiConfig,
      params: paramObj,
      advanceOptions
    } as IApiHttpSettings;
    return this.httpMethod(httpSetting);
  }

  /**
   * HTTP POST api call
   *
   * @param apiConfig
   * @param body
   * @param paramObj
   * @param advanceOptions
   */
  httpPost(
    apiConfig: IApiConfig,
    body: any,
    paramObj?: IApiParamsObj,
    advanceOptions?: IApiAdvancedOptions
  ) {
    const httpSetting = {
      method: 'post',
      apiConfig,
      body,
      params: paramObj,
      advanceOptions
    } as IApiHttpSettings;
    return this.httpMethod(httpSetting);
  }

  /**
   * Http PUT api call
   *
   * @param apiConfig
   * @param body
   * @param paramObj
   * @param advanceOptions
   */
  httpPut(
    apiConfig: IApiConfig,
    body: any,
    paramObj?: IApiParamsObj,
    advanceOptions?: IApiAdvancedOptions
  ) {
    const httpSetting = {
      method: 'put',
      apiConfig,
      body,
      params: paramObj,
      advanceOptions
    } as IApiHttpSettings;
    return this.httpMethod(httpSetting);
  }

  /**
   * HTTP PATCH api call
   *
   * @param apiConfig
   * @param body
   * @param paramObj
   * @param advanceOptions
   */
  httpPatch(
    apiConfig: IApiConfig,
    body: any,
    paramObj?: IApiParamsObj,
    advanceOptions?: IApiAdvancedOptions
  ) {
    const httpSetting = {
      method: 'patch',
      apiConfig,
      body,
      params: paramObj,
      advanceOptions
    } as IApiHttpSettings;
    return this.httpMethod(httpSetting);
  }

  /**
   * HTTP DELETE api call
   *
   * @param apiConfig
   * @param paramObj
   * @param mapper
   * @param advanceOptions
   */
  httpDelete(
    apiConfig: IApiConfig,
    paramObj?: IApiParamsObj,
    advanceOptions?: IApiAdvancedOptions
  ) {
    const httpSetting = {
      method: 'delete',
      apiConfig,
      params: paramObj,
      advanceOptions
    } as IApiHttpSettings;
    return this.httpMethod(httpSetting);
  }

  /**
   * handle Errors
   *
   * @param error
   * @param muteNotifyError
   *
   * @return Error details
   */
  private handleError(error: Response | any, muteNotifyError?: boolean) {
    const errMsg = 'An error occurred; please try again later.';
    const errObject = this.getErrorObject(error);
    const response = {
      status: error.status,
      error: errObject,
      message: errObject.message || errObject.Message || error.message || errMsg
    };

    if (!muteNotifyError) {
      //TODO: Show error alert messages
      console.log(response.message);
    }
    return response;
  }

  /**
   * get Error object
   * @param err
   */
  private getErrorObject(err: { error: any; }): any {
    if (err && err.error) {
      return this.getErrorObject(err.error);
    } else {
      return err;
    }
  }
}
