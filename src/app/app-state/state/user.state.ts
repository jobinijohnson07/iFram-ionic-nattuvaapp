import { State, Action, StateContext, Selector } from '@ngxs/store';
import { UserModel } from '../models/user.model';
import { AddUser } from '../actions/user.actio';

export class UserStateModel {
    userState : UserModel[];
}

@State<UserModel>({
    name : 'usermodel',
    defaults : {
        userState : []
    }
})

export class AppState {
    @Selector()
    static getState(state: UserStateModel) {
        return state.userState
    }

    @Action(AddUser)
    add({getState, patchState }: StateContext<UserStateModel>, { payload }: AddUser) {
        const state = getState();
        patchState({
            userState: [...state.userState, payload]
        })
     }
}