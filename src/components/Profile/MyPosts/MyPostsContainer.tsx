import React, {ChangeEvent} from "react";
import {MyPosts} from "./MyPosts";
import {AppStateType, store} from "../../../redux/redux-store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";


export function MyPostsContainer() {
    let state = store.getState();

    const addPost = () => {
        store.dispatch(addPostActionCreator())
    }
    const onChangeMessage = (text: string) => {
        store.dispatch(updateNewPostTextActionCreator(text))
    }

    return (
        <>
            <MyPosts addPost={addPost} changeNewText={onChangeMessage} posts={state.profilePage.posts}
                     messageForNewPost={state.profilePage.messageForNewPost}/>
        </>
    )
}
