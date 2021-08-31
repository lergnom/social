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
    isAuth: false
}

type DispatchSetUserData = {
    type: 'SET_USER_DATA'
    payload: { id: number, login: string, email: string, isAuth: boolean }
}

export const setAuthUserData = (id: number, login: string, email: string, isAuth: boolean): DispatchSetUserData => ({
    type: SET_USER_DATA,
    payload: {id, login, email, isAuth}
})

type AuthDispatchProps = DispatchSetUserData


export const authReducer = (state: AuthReducerType = initialState, action: AuthDispatchProps): AuthReducerType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload}
        default:
            return {...state}
    }
}

export const autorizeMe = () => {
    return (dispatch: Dispatch) => {
        UserApi.autorized()
            .then(response => {
                    if (response.resultCode === 0) {
                        let {id, login, email} = response.data
                        dispatch(setAuthUserData(id, login, email, true))
                    }
                }
            )
    }
}

export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<any>) => {
    UserApi.login(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(autorizeMe());

            }
        })
}

export const logoutTc = () => (dispatch: Dispatch) => {
    UserApi.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                console.log("go out");
                dispatch(setAuthUserData(7, '', '', false));
            }
        })

}