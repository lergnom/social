import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {type} from "os";
import {PostsType, ProfilePageType} from "../../../redux/state";



export function MyPosts(props: ProfilePageType) {

    const postsElements = props.posts.map(post => {
        return <Post message={post.message} likeCounts={post.likesCount}/>
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
