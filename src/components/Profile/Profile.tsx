import React from "react";
import s from './Profile.module.css';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {ProfileContainerType} from "./ProfileContainer";
import {Redirect} from "react-router-dom";

export const Profile = (props: ProfileContainerType) => {
    if (!props.isAuth) {
        return <Redirect to={"/login"}/>

    }

    return (
        <div className={s.content}>
            <img className={s.imgProfileInfo}
                 src="https://static.tildacdn.com/tild3466-6664-4830-b233-653431393864/photo.jpg" alt=""/>
            <div className={s.profileContainer}>
                <ProfileInfo {...props}/>
                <MyPostsContainer/>
            </div>

        </div>
    )
}
