import React from "react";
import s from './Dialogs.module.css';


export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogItem}>
                <div className={s.dialog  + ' '+ s.active}>
                    Anton
                </div>
                <div className={s.dialog}>
                    Masha
                </div>
                <div className={s.dialog}>
                    Kira
                </div>
                <div className={s.dialog}>
                    Alisa
                </div>
                <div className={s.dialog}>
                    Kirill
                </div>
                <div className={s.dialog}>
                    Yan
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
