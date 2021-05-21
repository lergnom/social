import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {PostsType, ProfilePageType} from "../../redux/state";

type ProfilePropsTypes = {
    posts: Array<PostsType>
    addPost: (name:string)=> void
    messageForNewPost: string
}

export const Profile = (props: ProfilePropsTypes) => {


    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost} messageForNewPost={props.messageForNewPost}/>
        </div>
    )

}
