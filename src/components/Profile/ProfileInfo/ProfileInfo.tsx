import React, {useState} from 'react';
import s from './ProfileInfo.module.css';
import {ProfileContainerType} from '../ProfileContainer';
import {Preloader} from "../../../common/Preloader/Preloader";
import ProfileStatusWithHook from "../ProfileStatus/ProfileStatusWithHook";
import userPhoto from "../../../assets/images/unnamed.jpg";
import {ProfileForm} from "./ProfileForm";
import {ProfileType} from "../../../redux/store";

export const ProfileInfo = ({profile, ...props}: ProfileContainerType) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    if (!profile) {
        return <Preloader/>;
    }


    const gotoEditMode = () => {
        setEditMode(true);
    };

    const onMainPhotoSelected = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            alert("file choose");
            props.savePhoto(e.target.files[0]);
        }
    };

    const onSubmit = (formData: any) => {
        props.saveProfile(formData);
    };
    return (
        <>
            <div className={s.aboutMeWrapper}>
                <div className={s.aboutMeDescription} style={{position: "relative"}}>
                    <img className={s.ava} src={profile.photos.large || userPhoto} alt={profile.fullName}/>
                    {props.isOwner && editMode &&
                        <input type={"file"}
                               style={{color: "transparent", position: "absolute", top: "112px", left: "50px"}}
                               onChange={onMainPhotoSelected}/>}
                    {/*//Компонента отображения и изменения статуса*/}


                </div>
                {editMode ? <ProfileForm onSubmit={onSubmit}/> :
                    <ProfileData profile={profile} gotoEditMode={gotoEditMode}
                                 isOwner={props.isOwner} status={props.status} updateStatus={props.updateUserStatus}/>}
            </div>
        </>
    );
};


type ProfileDataType = {
    profile: ProfileType
    isOwner: boolean
    gotoEditMode: () => void
    status: string
    updateStatus: (text: string) => void
}

const ProfileData = ({profile, isOwner, gotoEditMode, status, updateStatus}: ProfileDataType) => {
    return <>
        <div className={s.aboutMeDescription}>
            <h3>{profile.fullName}</h3>
            <em>{profile.aboutMe}</em>
            <ProfileStatusWithHook status={status} updateUserStatus={updateStatus}/>
        </div>
        {isOwner && <button onClick={gotoEditMode}>Редактировать профиль</button>}
        <div className={s.information}>
            {profile.lookingForAJob && <div className={s.workDescription}>
                <h4>Ищу работу: {profile.lookingForAJob ? 'да' : 'нет'}</h4>
                <span>{profile.lookingForAJob && profile.lookingForAJobDescription}</span>
            </div>}
            <div>
                <h4>Контакты</h4>
                <SocialIcons userId={profile.userId} aboutMe={profile.aboutMe} fullName={profile.fullName}
                             contacts={profile.contacts} lookingForAJob={profile.lookingForAJob}
                             lookingForAJobDescription={profile.lookingForAJobDescription}
                             photos={profile.photos}/>
            </div>
        </div>

    </>;
};


const SocialIcons = ({contacts, ...props}: ProfileType) => {
    const result = Object.keys(contacts).map(el => {
        if (contacts[el] === null) {
            return <></>;
        }
        return (
            <>
                <a className={`${s.socialIcon} ${s[el]}`} href={contacts[el]}> </a>
            </>
        );
    });
    return <>{result}</>;
};

