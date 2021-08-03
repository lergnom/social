import React from "react";
import s from './ProfileInfo.module.css';
import {ProfileContainerType} from "../ProfileContainer";


export const ProfileInfo = ({profile}: ProfileContainerType) => {
    console.log(profile)
    return (
        <>

            <div className={s.aboutMeWrapper}>
                <div className={s.aboutMeDescription}>
                    <img className={s.ava} src={profile.photos.large} alt={profile.fullName}/>
                    <h3>{profile.fullName}</h3>
                    <em>{profile.aboutMe}</em>
                </div>


            </div>
        </>
    )
}
