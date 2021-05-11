import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogsPropsType} from "../../index";


export const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    let messagesElements = props.messagesData.map(message => <Message message={message.message}/>)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                {/*<Message message={'Fine!'}/>*/}
            </div>
        </div>
    )

}
