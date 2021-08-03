import React from "react";
import {Post} from "./Posts/Post";
import {PostsType} from "../../../redux/store";
import {NewPost} from "./Posts/NewPost";
import s from './MyPosts.module.css'

type MyPostsPorps = {
    posts: Array<PostsType>
    addPost: (name: string) => void
    messageForNewPost: string
    changeNewText: (s: string) => void
}

export function MyPosts(props: MyPostsPorps) {

    const postsElements = props.posts.map(post => {
        return <Post key={post.id} message={post.message} likeCounts={post.likesCount} img={post.img}/>
    })

    return (
        <div className={s.postsContainer}>
            <div>
                <NewPost
                    addPost={props.addPost}
                    messageForNewPost={props.messageForNewPost}
                    changeNewText={props.changeNewText}/>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    )
}
