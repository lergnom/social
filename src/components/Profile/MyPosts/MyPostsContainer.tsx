import React, {ChangeEvent} from "react";
import {MyPosts} from "./MyPosts";
import {AppStateType, store} from "../../../redux/redux-store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";


export function MyPostsContainer() {
    // let state = store.getState();
    return (
        <StoreContext.Consumer>
            {(store) => {
                const addPost = () => {
                    store.dispatch(addPostActionCreator())
                }
                const onChangeMessage = (text: string) => {
                    store.dispatch(updateNewPostTextActionCreator(text))
                }
                return (
                    <MyPosts addPost={addPost} changeNewText={onChangeMessage}
                             posts={store.getState().profilePage.posts}
                             messageForNewPost={store.getState().profilePage.messageForNewPost}/>
                )
            }
            }
        </StoreContext.Consumer>

    )
}
