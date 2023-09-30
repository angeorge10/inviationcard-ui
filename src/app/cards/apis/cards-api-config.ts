import { IApiConfig } from "src/app/core/interfaces/iapi-config";

export class CardsApiConfig {
    public static readonly card = {
        endpoint: '/card',
        id: 'card'
    } as IApiConfig;
}
