import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import {
    DispatchAddPostProps,
    DispatchChangePostProps,
    DispatchProps,
    PostsType,
    ProfilePageType
} from "../../redux/state";

type ProfilePropsTypes = {
    posts: Array<PostsType>
    // addPost: (name: string) => void
    dispatch: (props: DispatchChangePostProps | DispatchAddPostProps) => void
    messageForNewPost: string
    // changeNewText: (s: string) => void
}

export const Profile = (props: ProfilePropsTypes) => {


    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts}
                // addPost={props.addPost}
                // changeNewText={props.changeNewText}/>

                     messageForNewPost={props.messageForNewPost}
                     dispatch={props.dispatch} />
        </div>
    )
}
