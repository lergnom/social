import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileContainerType} from '../ProfileContainer';
import {Preloader} from "../../../common/Preloader/Preloader";
import ProfileStatus from "../ProfileStatus/ProfileStatus";


export const ProfileInfo = ({profile}: ProfileContainerType) => {
    if (!profile) {
        return <Preloader/>
    }

    const socialIcons = Object.keys(profile.contacts).map(el => {
        if (profile.contacts[el] === null) {
            return <></>
        }
        return (
            <>
                <a className={`${s.socialIcon} ${s[el]}`} href={profile.contacts[el]}> </a>
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
                    <ProfileStatus/>
                </div>
                <div className={s.information}>
                    {profile.lookingForAJob && <div className={s.workDescription}>
                        <h4>Ищу работу: {profile.lookingForAJob ? 'да' : 'нет'}</h4>
                        <span>{profile.lookingForAJob && profile.lookingForAJobDescription}</span>
                    </div>}
                    {/*<div className={s.workDescription}>*/}
                    {/*    <h4>Ищу работу: {profile.lookingForAJob ? 'да' : 'нет'}</h4>*/}
                    {/*    <span>{profile.lookingForAJob && profile.lookingForAJobDescription}</span>*/}
                    {/*</div>*/}
                    <div>
                        <h4>Контакты</h4>
                        {socialIcons}
                    </div>
                </div>


            </div>
        </>
    )
}
