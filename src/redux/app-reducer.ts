type AppReducerType = {
    initialized: boolean,
}

let initialState: AppReducerType = {
    initialized: false,
}

export const authReducer = (state: AppReducerType = initialState, action: any): AppReducerType => {
    switch (action.type) {
        default:
            return {...state};
    }
}


