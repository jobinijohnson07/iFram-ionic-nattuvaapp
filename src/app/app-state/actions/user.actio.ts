import { UserModel } from '../models/user.model';

export class AddUser {
    static readonly type = '[USER] Add';
    constructor(public payload: UserModel) {}
}