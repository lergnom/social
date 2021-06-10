import React from "react";
import s from './MyPosts.module.css';
import {Post} from "./Posts/Post";
import {type} from "os";
import {
    DispatchAddPostProps,
    DispatchChangePostProps,
    DispatchProps,
    PostsType,
    ProfilePageType
} from "../../../redux/store";
import {NewPost} from "./Posts/NewPost";

type MyPostsPorps = {
    posts: Array<PostsType>
    dispatch: (props: DispatchChangePostProps | DispatchAddPostProps) => void
    // addPost: (name: string) => void
    messageForNewPost: string
    // changeNewText: (s: string) => void
}

export function MyPosts(props: MyPostsPorps) {

    const postsElements = props.posts.map(post => {
        return <Post key={post.id} message={post.message} likeCounts={post.likesCount} img={post.img}/>
    })

    return (
        <div>
            <div>
                <NewPost
                    // addPost={props.addPost}
                    messageForNewPost={props.messageForNewPost}
                    // changeNewText={props.changeNewText}/>
                    dispatch={props.dispatch}/>
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
