import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PropsDataPostType} from "../../index";


export const Profile = (props: PropsDataPostType) => {


    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postData={props.postData}/>
        </div>
    )

}
