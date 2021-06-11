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
} from "../../redux/store";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";
import {AppStateType} from "../../redux/redux-store";

/*type ProfilePropsTypes = {
    state:AppStateType
    // posts: Array<PostsType>
    // addPost: (name: string) => void
    // dispatch: (props: DispatchProps) => void
    // messageForNewPost: string
    // changeNewText: (s: string) => void
}*/

export const Profile = (/*props: ProfilePropsTypes)*/) => {


    return (
        <div className={s.content}>
            <ProfileInfo/>
            {/*<MyPosts posts={props.posts}*/}
            {/*    // addPost={props.addPost}*/}
            {/*    // changeNewText={props.changeNewText}/>*/}

            {/*         messageForNewPost={props.messageForNewPost}*/}
            {/*         dispatch={props.dispatch} />*/}
            <MyPostsContainer />
        </div>
    )
}
