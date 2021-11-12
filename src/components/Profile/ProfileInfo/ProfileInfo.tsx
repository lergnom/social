import React from 'react';
import s from './ProfileInfo.module.css';
import {ProfileContainerType} from '../ProfileContainer';
import {Preloader} from "../../../common/Preloader/Preloader";
import ProfileStatusWithHook from "../ProfileStatus/ProfileStatusWithHook";
// import userPhoto from "../../../assets/images/Gubka_Bob.jpg";
import userPhoto from "../../../assets/images/unnamed.jpg";


export const ProfileInfo = ({profile, ...props}: ProfileContainerType) => {
    if (!profile) {
        return <Preloader/>;
    }
    const socialIcons = Object.keys(profile.contacts).map(el => {
        if (profile.contacts[el] === null) {
            return <></>;
        }
        return (
            <>
                <a className={`${s.socialIcon} ${s[el]}`} href={profile.contacts[el]}> </a>
            </>
        );
    });

    const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            alert("file choose");
            props.savePhoto(e.target.files[0])
        }
    };
    return (
        <>

            <div className={s.aboutMeWrapper}>
                <div className={s.aboutMeDescription}>
                    <img className={s.ava} src={profile.photos.large || userPhoto} alt={profile.fullName}/>
                    {props.isOwner && <input type={"file"} onChange={onMainPhotoSelected}/>}
                    <h3>{profile.fullName}</h3>
                    <em>{profile.aboutMe}</em>

                    {/*//Компонента отображения и изменения статуса*/}
                    <ProfileStatusWithHook status={props.status} updateUserStatus={props.updateUserStatus}/>
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
    );
};
