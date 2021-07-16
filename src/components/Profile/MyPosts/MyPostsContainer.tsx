import React, {ChangeEvent} from "react";
import {MyPosts} from "./MyPosts";
// import {AppStateType, store} from "../../../redux/redux-store";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
// import StoreContext from "../../../StoreContext";
import {connect} from "react-redux";


// export function MyPostsContainer() {
//     // let state = store.getState();
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 const addPost = () => {
//                     store.dispatch(addPostActionCreator())
//                 }
//                 const onChangeMessage = (text: string) => {
//                     store.dispatch(updateNewPostTextActionCreator(text))
//                 }
//                 return (
//                     <MyPosts addPost={addPost} changeNewText={onChangeMessage}
//                              posts={store.getState().profilePage.posts}
//                              messageForNewPost={store.getState().profilePage.messageForNewPost}/>
//                 )
//             }
//             }
//         </StoreContext.Consumer>
//
//     )
// }

export const mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
    }
}

export const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator())
        },
        onChangeMessage: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)