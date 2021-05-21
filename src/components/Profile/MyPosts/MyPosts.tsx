import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {type} from "os";
import {PostsType, ProfilePageType} from "../../../redux/state";
import {NewPost} from "./Posts/NewPost";

type MyPostsPorps = {
    posts: Array<PostsType>
    addPost: (name: string) => void
}

export function MyPosts(props: MyPostsPorps) {

    const postsElements = props.posts.map(post => {
        return <Post message={post.message} likeCounts={post.likesCount}/>
    })

    return (
        <div>
            <div>
                <NewPost addPost={props.addPost}/>
            </div>
            <div>
                {postsElements}
                {/*<Post message="Hi " likeCounts={10}/>*/}
                {/*<Post message="How are you" likeCounts={20}/>*/}
                {/*<Post message="I'm fine" likeCounts={5}/>*/}
            </div>


        </div>
    )

}
