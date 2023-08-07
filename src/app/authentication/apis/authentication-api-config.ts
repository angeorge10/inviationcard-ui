import { IApiConfig } from "src/app/core/interfaces/iapi-config";

export class AuthenticationApiConfig {
    public static readonly login = {
        endpoint: '/login',
        id: 'login'
    } as IApiConfig;
    public static readonly signup = {
        endpoint: '/signup',
        id: 'signup'
    } as IApiConfig;
    public static readonly forgotpassword = {
        endpoint: '/forgotpassword',
        id: 'forgotpassowrd'
    } as IApiConfig;
}
