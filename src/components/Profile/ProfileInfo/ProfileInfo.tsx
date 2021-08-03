import React from "react";
import s from './ProfileInfo.module.css';
import {ProfileContainerType} from "../ProfileContainer";


export const ProfileInfo = ({profile}: ProfileContainerType) => {
    console.log(profile)
    return (
        <>
            <div>
                <img className={s.imgProfileInfo}
                     src="https://static.tildacdn.com/tild3466-6664-4830-b233-653431393864/photo.jpg" alt=""/>
            </div>
            <div>
                {profile.aboutMe}

            </div>
        </>
    )
}
