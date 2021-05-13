import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPageType} from "../../redux/state";
import BestFriends from "./BestFriends/BestFriends";


export const Dialogs = (props: DialogsPageType) => {


    let dialogsElements = props.dialogs.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    let messagesElements = props.messages.map(message => <Message message={message.message}/>)

    let bestFriends = () => {
        if (props.contacts.length > 0) {
            console.log(props.contacts.length)
            return (
                <BestFriends arr={props.contacts}/>

            )
        } else return
    }


    return (
        <>
            {bestFriends()}
            <div className={s.dialogs}>
                <div className={s.dialogItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </>
    )

}
