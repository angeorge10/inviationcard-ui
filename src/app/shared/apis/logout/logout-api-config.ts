import { IApiConfig } from "../../../core/interfaces/iapi-config";
export class LogoutApiConfig {
    public static readonly logout = {
        endpoint: '/logout',
        id: 'logout'
    } as IApiConfig;
}
