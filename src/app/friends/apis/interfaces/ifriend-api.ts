export interface IFriendApi extends IFriendRequest {
    id: number;
    userId: number;
    createdAt: string;
    updatedAt: string;
}

export interface IFriendRequest {
    name: string;
    email: string;
}
