import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";

export type PostDataType = {
    id: number
    message: string
    likeCount: number
}

let postData: Array<PostDataType> = [
    {id: 1, message: 'How much is fish', likeCount: 10},
    {id: 2, message: 'The New York bands', likeCount: 10},
    {id: 2, message: 'All my time ', likeCount: 10}
]

export const Profile = () => {


    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts postData={postData}/>
        </div>
    )

}
