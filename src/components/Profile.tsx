import React from "react";
import s from './Profile.module.css';


export const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src="https://static.tildacdn.com/tild3466-6664-4830-b233-653431393864/photo.jpg" alt=""/>
            </div>
            <div>
                ava +descriptopn
            </div>
            <div>
                My posts
                <div>New post</div>
                <div>
                    <div>post 1</div>
                    <div>post 2</div>
                </div>
            </div>


        </div>
    )

}
