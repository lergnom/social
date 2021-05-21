import React from "react";
import s from './BestFriends.module.css'
import {ContactsType} from "../../../redux/state";

type PropsType = {
    arr: Array<ContactsType>
}

const BestFriends = (props: PropsType) => {
    let friendsEl = props.arr.map(friend => {
        return (
            <li>
                <div className={s.friendElement}>
                    <img className={s.friendAvatar} src={friend.avatar} alt={friend.name}/>
                    <span>{friend.name}</span>
                </div>
            </li>
        )
    })
    return (
        <div className={s.friendsWrapper}>
            <div className={s.friendsBlock}>
                <h4>Best Friends: </h4>
                <ul>
                    {friendsEl}
                </ul>
            </div>
        </div>
    )
}

export default BestFriends