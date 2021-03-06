import React from "react";
import {NavLink} from "react-router-dom";
import s from './Header.module.css'

export function Header(props: any) {
    return (
        <header className={s.header}>
            <div className={s.headerWrapper}>
                <img
                    src="data:image/png;base64,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"
                    alt="logo"/>
                <div className={s.siteMenu}>

                    <div className={s.menuBlock}>
                        <NavLink to={'/profile'} activeClassName={s.menuBlockActive}>Profile</NavLink>
                    </div>
                    <div className={s.menuBlock}>
                        <NavLink to={'/dialogs'} activeClassName={s.menuBlockActive}>Messages</NavLink>
                    </div>
                    <div className={s.menuBlock}>
                        <NavLink className={s.item} to="/users" activeClassName={s.menuBlockActive}>Users</NavLink>
                    </div>
                    <div className={s.menuBlock}>
                        <NavLink to={'/news'} activeClassName={s.menuBlockActive}>News</NavLink>
                    </div>
                    <div className={s.menuBlock}>
                        <NavLink to={"/music"} activeClassName={s.menuBlockActive}>Music</NavLink>
                    </div>
                    <div className={s.menuBlock}>
                        <NavLink to={"/settings"} activeClassName={s.menuBlockActive}>Settings</NavLink>
                    </div>
                </div>
                {props.isAuth ?
                    <div className={s.menuBlock}>{props.login}</div> :
                    <NavLink className={s.logButton} to={"/login"}>LOGIN</NavLink>}


            </div>


        </header>
    )
}
