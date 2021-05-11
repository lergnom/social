import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css';

type DialogItemType = {
    id: number
    name: string
}

type MessageType = {
    message: string
}

const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessageType) => {
    return <div className={s.message}>{props.message}</div>

}

export const Dialogs = () => {

    type DialogsDataType = {
        id: number
        name: string
    }

    type MessagesDataType = {
        id: number,
        message: string
    }

    let dialogsData: Array<DialogsDataType> = [
        {id: 1, name: "Anton"},
        {id: 2, name: "Masha"},
        {id: 3, name: "Kira"},
        {id: 4, name: "Alisa"},
        {id: 5, name: "Kirill"},
        {id: 6, name: "Yan"},
    ]

    let messagesData: Array<MessagesDataType> = [
        {id: 1, message: "Hi"},
        {id: 2, message: "How are you"},
        {id: 3, message: "Fine"},
        {id: 4, message: "I'm ok"},
    ]

    let dialogItem = dialogsData.map((dialog) => {

        return <DialogItem id={dialog.id} name={dialog.name}/>
    })

    const messageItem = messagesData.map(message => {
        return <Message message={message.message}/>
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogItem}
            </div>
            <div className={s.messages}>
                {messageItem}
                {/*<Message message={'Fine!'}/>*/}
            </div>
        </div>
    )

}
