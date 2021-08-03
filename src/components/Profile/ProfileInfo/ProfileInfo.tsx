import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileContainerType} from '../ProfileContainer';


export const ProfileInfo = ({profile}: ProfileContainerType) => {
    const socialIcons = Object.keys(profile.contacts).map(el => {
        console.log(el)
        if (profile.contacts[el] === null) {
            return <></>
        }
        return (
            <>
                <a className={`${s.socialIcon} ${s[el]}`} href={el}> </a>
            </>
        )

    })

    return (
        <>

            <div className={s.aboutMeWrapper}>
                <div className={s.aboutMeDescription}>
                    <img className={s.ava} src={profile.photos.large} alt={profile.fullName}/>
                    <h3>{profile.fullName}</h3>
                    <em>{profile.aboutMe}</em>
                </div>
                <div className={s.information}>
                    <div className={s.workDescription}>
                        <h4>Ищу работу: {profile.lookingForAJob ? 'да' : 'нет'}</h4>
                        <span>{profile.lookingForAJob && profile.lookingForAJobDescription}</span>
                    </div>
                    <div>
                        <h4>Контакты</h4>
                        {socialIcons}
                    </div>
                </div>


            </div>
        </>
    )
}
