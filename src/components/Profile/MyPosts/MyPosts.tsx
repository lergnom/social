import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";


export const MyPosts = () => {
    return (
        <div>
            My posts
            <div>New post</div>
            <div>
                <Post />
                <Post />
                <Post />
            </div>


        </div>
    )

}
