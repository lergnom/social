import {UserApi} from "../api/api";
import {Dispatch} from "redux";

const SET_USER_DATA = 'SET_USER_DATA';

type AuthReducerType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean,
}

let initialState: AuthReducerType = {
    id: 666,
    login: 'Agent007',
    email: 'agent@007.com',
    isAuth: true
}

type DispatchSetUserData = {
    type: 'SET_USER_DATA'
    data: { id: number, login: string, email: string }
}

export const setAuthUserData = (id: number, login: string, email: string): DispatchSetUserData => ({
    type: SET_USER_DATA,
    data: {id, login, email}
})

type AuthDispatchProps = DispatchSetUserData


export const authReducer = (state: AuthReducerType = initialState, action: AuthDispatchProps): AuthReducerType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        default:
            return {...state}
    }
}

export const autorizeMe = () => {
    return (dispatch: Dispatch<AuthDispatchProps>) => {
        UserApi.autorized()
            .then(response => {
                    if (response.resultCode === 0) {
                        let {id, login, email} = response.data
                        dispatch(setAuthUserData(id, login, email))
                    }
                }
            )
    }
}
