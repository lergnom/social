import React from "react";
import s from './Navbar.module.css';


export function Navbar() {
    return (
        <nav className={s.nav}>
            <div className={s.blockMenu}>
                <a className={s.item} href="/profile">Profile</a>
            </div>
            <div className={s.blockMenu}>
                <a className={`${s.item} ${s.active}`} href="/dialogs">Messages</a>

            </div>
            <div className={s.blockMenu}>
                <a className={s.item} href="#">News</a>

            </div>
            <div className={s.blockMenu}>
                <a className={s.item} href="#">Music</a>

            </div>
            <div className={s.blockMenu}>
                <a className={s.item} href="#">Settings</a>

            </div>
        </nav>
    )
}
