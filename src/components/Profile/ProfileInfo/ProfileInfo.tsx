import React from "react";
import s from './ProfileInfo.module.css';


export const ProfileInfo = () => {
    return (
        <>
            <div>
                <img className={s.imgProfileInfo}
                     src="https://static.tildacdn.com/tild3466-6664-4830-b233-653431393864/photo.jpg" alt=""/>
            </div>
            <div>
                ava +descriptopn
            </div>
        </>
    )
}
