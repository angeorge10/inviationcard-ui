import { AlertType } from "../enums/alert-type.enum";

export interface IAlert {
    type: AlertType;
    message: string;    
}
