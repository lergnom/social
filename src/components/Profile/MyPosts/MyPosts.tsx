import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {type} from "os";

export function MyPosts() {

    type PostDataType = {
        id: number
        message: string
        likeCount: number
    }

    let postData: Array<PostDataType> = [
        {id: 1, message: 'How much is fish', likeCount: 10},
        {id: 2, message: 'The New York bands', likeCount: 10},
        {id: 2, message: 'All my time ', likeCount: 10}
    ]

    const postMessage = postData.map(post => {
        return <Post message={post.message} likeCounts={post.likeCount}/>
    })

    return (
        <div>
            My posts
            <div>New post</div>
            <div>
                {postMessage}
                {/*<Post message="Hi " likeCounts={10}/>*/}
                {/*<Post message="How are you" likeCounts={20}/>*/}
                {/*<Post message="I'm fine" likeCounts={5}/>*/}
            </div>


        </div>
    )

}
