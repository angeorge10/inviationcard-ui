import { IApiConfig } from "src/app/core/interfaces/iapi-config";

export class LoginApiConfig {
    public static readonly login = {
        endpoint: '/login',
        id: 'login'
    } as IApiConfig;
}
