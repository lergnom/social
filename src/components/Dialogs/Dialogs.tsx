import React from "react";
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css';


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/1'} activeClassName={s.active}>Anton</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink activeClassName={s.active} to={'/dialogs/2'}>Masha</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/3'} activeClassName={s.active} >Kira</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/4'} activeClassName={s.active}>Alisa</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/5'} activeClassName={s.active}>Kirill</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to={'/dialogs/6'} activeClassName={s.active}>Yan</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}> HI</div>
                <div className={s.message}> How are you</div>
                <div className={s.message}> Fine!</div>
            </div>
        </div>
    )

}
