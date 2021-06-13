import React from "react";
import {AppStateType, store} from "./redux/redux-store";
import {StoreType} from "./redux/store";

const StoreContext = React.createContext({} as any)

type ProviderType = {
    store: any,
    children: any
}

export const Provider = (props: ProviderType) => {
    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}


export default StoreContext