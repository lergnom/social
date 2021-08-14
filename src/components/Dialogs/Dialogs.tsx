import React, {ChangeEvent} from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ContactsType, DialogsType, MessageType} from "../../redux/store";
import {BestFriends} from "./BestFriends/BestFriends";

type DialogsPropsTypes = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    contacts: Array<ContactsType>
    onClickHandler: () => void
    onChangeHandler: (value: string) => void
    newMessage: string
}

export const Dialogs = (props: DialogsPropsTypes) => {
    let dialogsElements = props.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)
    let messagesElements = props.messages.map(message => <Message key={message.id} message={message.message}/>)
    let bestFriends = () => {
        if (props.contacts.length > 0) {
            return (
                <BestFriends contacts={props.contacts}/>
            )
        } else return
    }

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onChangeHandler(e.currentTarget.value)
    }

    const onClickHandler = () => {
        props.onClickHandler()
    }
    return (
        <>
            {bestFriends()}
            <div className={s.dialogs}>
                <div className={s.dialogItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>
                        {messagesElements}
                    </div>

                    <div className={s.textBlock}>
                        <textarea value={props.newMessage} onChange={onChangeHandler}></textarea>
                        <button onClick={onClickHandler}>send</button>
                    </div>
                </div>
            </div>
        </>
    )

}
