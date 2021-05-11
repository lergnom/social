import React from "react";
import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css';

type DialogItemType = {
    id: number
    name: string
}


const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id} activeClassName={s.active}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem