import React, {ChangeEvent, ChangeEventHandler, useState} from "react";
import {Dialogs} from "./Dialogs";
import {store} from "../../redux/redux-store";
// import StoreContext from "../../StoreContext";
import {connect} from "react-redux";
import {updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

// export const DialogsContainer = () => {
// //не забыть убрать useState не использовать store напрямую - перенести все функции ниже в компонету StoreContext
//     const [message, setMessage] = useState('')
//
//     const onChangeHandler = (value: string) => {
//         setMessage(value)
//     }
//
//     const onClickHandler = () => {
//         store.dispatch({type: 'ADD-MESSAGE', text: message})
//         setMessage("")
//     }
//
//     return (
//         <StoreContext.Consumer>
//             {store => {
//
//                 return (
//                     <Dialogs dialogs={store.getState().dialogsPage.dialogs}
//                              messages={store.getState().dialogsPage.messages}
//                              contacts={store.getState().dialogsPage.contacts} onClickHandler={onClickHandler}
//                              onChangeHandler={onChangeHandler} newMessage={message}/>
//                 )
//             }
//             }
//         </StoreContext.Consumer>
//     )
// }

const mapStateToProps = (state: any) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        contacts: state.dialogsPage.contacts,
        newMessage: state.dialogsPage.message

    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onClickHandler: () => {
        },
        onChangeHandler: () => {
        }

    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
