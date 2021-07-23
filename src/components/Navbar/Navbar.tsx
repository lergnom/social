import React from "react";
import {NavLink} from "react-router-dom";
import s from './Navbar.module.css';


export function Navbar() {
    return (
        <nav className={s.nav}>
                      <div className={s.blockMenu}>
                <NavLink className={s.item} to="/profile" activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.blockMenu}>
                <NavLink className={s.item} to="/dialogs" activeClassName={s.active}>Messages</NavLink>

            </div>
            <div className={s.blockMenu}>
                <NavLink className={s.item} to="/news" activeClassName={s.active}>News</NavLink>

            </div>
            <div className={s.blockMenu}>
                <NavLink className={s.item} to="/music" activeClassName={s.active}>Music</NavLink>

            </div>
            <div className={s.blockMenu}>
                <NavLink className={s.item} to="/settings" activeClassName={s.active}>Settings</NavLink>

            </div>
        </nav>
    )
}
