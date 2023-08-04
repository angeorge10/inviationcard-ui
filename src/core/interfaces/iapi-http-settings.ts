import { IApiAdvancedOptions } from "./iapi-advanced-options";
import { IApiConfig } from "./iapi-config";
import { IApiParamsObj } from "./iapi-params-obj";

export interface IApiHttpSettings {
    method: 'get' | 'post' | 'delete' | 'put' | 'patch';
    apiConfig: IApiConfig;
    params: IApiParamsObj;
    advanceOptions: IApiAdvancedOptions;
    body?: any;
}
