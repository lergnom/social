import React from "react";
import {MyPosts} from "./MyPosts";
import {addPostActionCreator} from "../../../redux/profile-reducer";
import {connect} from "react-redux";


export const mapStateToProps = (state: any) => {
    return {
        posts: state.profilePage.posts,
    }
}

export const mapDispatchToProps = (dispatch: any) => {
    return {
        addPost: (text:string) => {
            dispatch(addPostActionCreator(text))
        }
    }
}

export const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)