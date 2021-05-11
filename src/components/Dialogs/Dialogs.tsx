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

    type dialogsDataType = {
        id: number
        name: string
    }

    let dialogsData: Array<dialogsDataType> = [
        {id: 1, name: "Anton"},
        {id: 2, name: "Masha"},
        {id: 3, name: "Kira"},
        {id: 4, name: "Alisa"},
        {id: 5, name: "Kirill"},
        {id: 6, name: "Yan"},
    ]

    let dialogItem = dialogsData.map((dialog) => {

        return <DialogItem id={dialog.id} name={dialog.name}/>
    })

    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                {dialogItem}
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you'}/>
                <Message message={'Fine!'}/>
            </div>
        </div>
    )

}
