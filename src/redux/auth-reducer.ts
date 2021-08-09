const SET_USER_DATA = 'SET_USER_DATA';

type AuthReducerType = {
    id: number | null,
    login: string | null,
    email: string | null,
}

let initialState: AuthReducerType = {
    id: null,
    login: null,
    email: null,
}

type DispatchSetUserData = {
    type: 'SET_USER_DATA'
    data: AuthReducerType
}

const setUserData = (id: number, login: string, email: string): DispatchSetUserData => ({
    type: SET_USER_DATA,
    data: {id, login, email}
})

type AuthDispatchProps = DispatchSetUserData

export const authReducer = (state = initialState, action: AuthDispatchProps) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {...state, ...action.data}
    }

}