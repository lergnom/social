import React, {ChangeEvent, ChangeEventHandler, useState} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ContactsType, DialogsPageType, DialogsType, DispatchProps, MessageType, PostsType} from "../../redux/store";
import {BestFriends} from "./BestFriends/BestFriends";
import {Dialogs} from "./Dialogs";
import {store} from "../../redux/redux-store";

// type DialogsPropsTypes = {
//     dialogs: Array<DialogsType>
//     messages: Array<MessageType>
//     contacts: Array<ContactsType>
//     dispatch: (action: DispatchProps) => void
// }

export const DialogsContainer = (/*props: DialogsPropsTypes*/) => {
    let state = store.getState()


    // let dialogsElements = state.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    // let messagesElements = props.messages.map(message => <Message message={message.message}/>)
    // let bestFriends = () => {
    //     if (props.contacts.length > 0) {
    //         console.log(props.contacts.length)
    //         return (
    //             <BestFriends contacts={props.contacts}/>
    //         )
    //     } else return
    // }

    const [message, setMessage] = useState('')

    const onChangeHandler = (value: string) => {
        setMessage(value)
    }

    const onClickHandler = () => {
        store.dispatch({type: 'ADD-MESSAGE', text: message})
        setMessage("")
    }


    return (
        <>
            <Dialogs dialogs={state.dialogsPage.dialogs} messages={state.dialogsPage.messages}
                     contacts={state.dialogsPage.contacts} onClickHandler={onClickHandler}
                     onChangeHandler={onChangeHandler} newMessage={message}/>
        </>
    )

}
