import React from "react";
import s from './Post.module.css';


type MessageType = {
    message: string
}


export function Post (props:MessageType) {
    return (
        <div>
            <img src="#" alt=""/>
            {props.message}
            <div>
                <span>like</span>
            </div>
        </div>
    )

}
