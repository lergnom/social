import React, {ChangeEvent, ChangeEventHandler, useState} from "react";
import {Dialogs} from "./Dialogs";
import {store} from "../../redux/redux-store";
import StoreContext from "../../StoreContext";

export const DialogsContainer = () => {
//не забыть убрать useState не использовать store напрямую - перенести все функции ниже в компонету StoreContext
    const [message, setMessage] = useState('')

    const onChangeHandler = (value: string) => {
        setMessage(value)
    }

    const onClickHandler = () => {
        store.dispatch({type: 'ADD-MESSAGE', text: message})
        setMessage("")
    }

    return (
        <StoreContext.Consumer>
            {store => {

                return (
                    <Dialogs dialogs={store.getState().dialogsPage.dialogs}
                             messages={store.getState().dialogsPage.messages}
                             contacts={store.getState().dialogsPage.contacts} onClickHandler={onClickHandler}
                             onChangeHandler={onChangeHandler} newMessage={message}/>
                )
            }
            }
        </StoreContext.Consumer>
    )
}
