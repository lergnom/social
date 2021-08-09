const SET_USER_DATA = 'SET_USER_DATA';

type AuthReducerType = {
    id: number | null,
    login: string | null,
    email: string | null,
    isAuth: boolean,
}

let initialState: AuthReducerType = {
    id: null,
    login: null,
    email: null,
    isAuth: false
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

export const authReducer = (state = initialState, action: AuthDispatchProps) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth: true}
        default:
            return {...state}
    }
}

