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
                <Post message="Hi " likeCounts={10} />
                <Post message="How are you" likeCounts={20} />
                <Post message="I'm fine" likeCounts={5} />
            </div>


        </div>
    )

}
