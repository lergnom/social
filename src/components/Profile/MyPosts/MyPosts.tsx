import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {type} from "os";

import {PropsDataPostType} from "../../../index";


export function MyPosts(props: PropsDataPostType) {

    const postsElements = props.postData.map(post => {
        return <Post message={post.message} likeCounts={post.likeCount}/>
    })

    return (
        <div>
            My posts
            <div>New post</div>
            <div>
                {postsElements}
                {/*<Post message="Hi " likeCounts={10}/>*/}
                {/*<Post message="How are you" likeCounts={20}/>*/}
                {/*<Post message="I'm fine" likeCounts={5}/>*/}
            </div>


        </div>
    )

}
