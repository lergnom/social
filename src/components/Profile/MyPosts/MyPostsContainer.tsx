import React  from "react";
import {MyPosts} from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";


export const mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
        messageForNewPost: state.profilePage.messageForNewPost
    }
}

export const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (text:string) => {
            dispatch(addPostActionCreator(text))
        },
        changeNewText: (text: string) => {
            dispatch(updateNewPostTextActionCreator(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)