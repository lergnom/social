import React from "react";
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileContainerType} from "./ProfileContainer";

export const Profile = (props: ProfileContainerType) => {

    return (
        <div className={s.content}>
            <ProfileInfo {...props}/>
            <MyPostsContainer/>
        </div>
    )
}
