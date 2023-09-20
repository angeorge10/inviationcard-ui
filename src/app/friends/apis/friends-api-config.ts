import { IApiConfig } from "src/app/core/interfaces/iapi-config";

export class FriendsApiConfig {
    public static readonly friend = {
        endpoint: '/friend',
        id: 'friend'
    } as IApiConfig;
}
