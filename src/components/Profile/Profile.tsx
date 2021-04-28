import React from "react";
import s from './Profile.module.css';
import {MyPosts} from "./MyPosts/MyPosts";


export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://static.tildacdn.com/tild3466-6664-4830-b233-653431393864/photo.jpg" alt=""/>
            </div>
            <div>
                ava +descriptopn
            </div>
            <MyPosts />


        </div>
    )

}
