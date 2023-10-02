export interface ICardApi extends ICardRequest {
    id: number;
}

export interface ICardRequest {
    title: string; 
    description: string; 
    date: string;
    time: string; 
    location: string;
    email: string[];
    templateId: number;
}
