import {UserApi} from "../api/api";
import {Dispatch} from "redux";
import {stopSubmit} from "redux-form";

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


type  DispatchSetUserData = ReturnType<typeof setAuthUserData>;

export const setAuthUserData = (id: number, login: string, email: string, isAuth: boolean) => ({
    type: SET_USER_DATA,
    payload: {id, login, email, isAuth}
});

type AuthDispatchProps = DispatchSetUserData


export const authReducer = (state: AuthReducerType = initialState, action: AuthDispatchProps): AuthReducerType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.payload};
        default:
            return {...state};
    }
}

export const autorizeMe = () => (dispatch: Dispatch) => {
   return UserApi.autorized()
        .then(response => {
            if (response.resultCode === 0) {
                let {id, login, email} = response.data
                dispatch(setAuthUserData(id, login, email, true))
            }
        });
}


export const loginTC = (email: string, password: string, rememberMe: boolean) => (dispatch: Dispatch<any>) => {

    UserApi.login(email, password, rememberMe)
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(autorizeMe());
            } else {
                const message = res.data.messages.length > 0 ? res.data.messages[0] : 'some error';
                dispatch(stopSubmit('loginForm', {_error: message}));
            }
        })
}

export const logoutTc = () => (dispatch: Dispatch) => {
    UserApi.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setAuthUserData(7, '', '', false));
            }
        })

}