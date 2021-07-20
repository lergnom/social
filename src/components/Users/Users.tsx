import React from "react";
import {UserProps, UsersPropsType} from "../../redux/users-reducer";
import s from './users.module.css'

type UserPropsTypes = {
    users: Array<UsersPropsType>
    follow: (id: string) => void
    unfollow: (id: string) => void
}

export const Users = (props: UserPropsTypes) => {
    return <>
        {

            props.users.map(user => <div key={user.id}>
                <span> <div> <img className={s.avatarWrapper} src={user.ava}/> </div><div> {user.followed ?
                    <button onClick={() => {
                        props.unfollow(user.id)

                    }}>UnFollow</button> :
                    <button onClick={() => {
                        props.follow(user.id)
                    }}>Follow</button>} </div></span>
                <span>
                        <div>{user.fullName}</div>
                        <div>{user.status}</div>
                    </span>
                <span>
                    <div>{user.location.country}</div>
                    <div>{user.location.city}</div>
                </span>
            </div>)
        }
    </>
}