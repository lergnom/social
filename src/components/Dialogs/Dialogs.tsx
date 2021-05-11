import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

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

export const Dialogs = () => {

    // type DialogsDataType = {
    //     id: number
    //     name: string
    // }
    //
    // type MessagesDataType = {
    //     id: number,
    //     message: string
    // }
    //
    // let dialogsData: Array<DialogsDataType> = [
    //     {id: 1, name: "Anton"},
    //     {id: 2, name: "Masha"},
    //     {id: 3, name: "Kira"},
    //     {id: 4, name: "Alisa"},
    //     {id: 5, name: "Kirill"},
    //     {id: 6, name: "Yan"},
    // ]
    //
    // let messagesData: Array<MessagesDataType> = [
    //     {id: 1, message: "Hi"},
    //     {id: 2, message: "How are you"},
    //     {id: 3, message: "Fine"},
    //     {id: 4, message: "I'm ok"},
    // ]

    let dialogsElements = dialogsData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)

    let messagesElements = messagesData.map(message => <Message message={message.message}/>)

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
