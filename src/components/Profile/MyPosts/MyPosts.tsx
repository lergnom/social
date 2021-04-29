import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {type} from "os";

export function MyPosts() {
    return (
        <div>
            My posts
            <div>New post</div>
            <div>
                <Post message="Hi " />
                <Post message="How are you" />
                <Post message="I'm fine" />
            </div>


        </div>
    )

}
