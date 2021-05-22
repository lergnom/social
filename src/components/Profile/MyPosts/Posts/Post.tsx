import React from "react";
import s from './Post.module.css';


type MessageType = {
    message: string
    likeCounts: number
    img: string
}


export function Post(props: MessageType) {
    return (
        <div className={s.postWrapper}>
            <img className={s.friendAvatar + ' ' + s.ava} src={props.img} alt=""/>
            <span className={s.message}>{props.message}</span>
            <div className={s.message}>
                <span><strong>like:</strong></span> {props.likeCounts}
            </div>
        </div>
    )

}
