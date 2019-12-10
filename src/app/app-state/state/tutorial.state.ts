import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Tutorial } from '../models/tutorial.model'
import { AddTutorial, RemoveTutorial, GetTutorial } from '../actions/tutorial.actions'

export class TutorialStateModel {
    userState : Tutorial[]
}

@State<TutorialStateModel>({
    name : "tutorial",
    defaults: {
        userState : []
    }
})

export class TutorialState {

    @Selector()
    static getTutorials(state: TutorialStateModel) {
        return state.userState
    }

    @Action(AddTutorial)
    add({getState, patchState }: StateContext<TutorialStateModel>, { payload }:AddTutorial) {
        const state = getState();
        patchState({
            userState: [...state.userState, payload]
        })
    }

    @Action(RemoveTutorial)
    remove({getState, patchState }: StateContext<TutorialStateModel>, { payload }:RemoveTutorial) {
        patchState({
            userState: getState().userState.filter(a => a.email != payload)
        })
    }   
}