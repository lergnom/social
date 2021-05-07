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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <DialogItem id={1} name={'Anton'}/>
                <DialogItem id={2} name={'Masha'}/>
                <DialogItem id={3} name={'Kira'}/>
                <DialogItem id={4} name={'Alisa'}/>
                <DialogItem id={5} name={'Kirill'}/>
                <DialogItem id={6} name={'Yan'}/>
            </div>
            <div className={s.messages}>
                <Message message={'Hi'}/>
                <Message message={'How are you'}/>
                <Message message={'Fine!'}/>
            </div>
        </div>
    )

}
