import {combineReducers, createStore} from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>


export let store = createStore(rootReducer)
// @ts-ignore
window.store = store


