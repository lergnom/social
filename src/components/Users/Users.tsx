import React from "react";
import {UserProps, UsersPropsType} from "../../redux/users-reducer";
import s from './users.module.css'
import axios from 'axios';

export type ExampleUserType = {
    id: number
    name: string
    uniqueUrlName: string
    photos: {
        small: string,
        large: string
    }
    status: string
    followed: boolean
}

export type UserPropsTypes = {
    // users: Array<UsersPropsType>
    users: Array<ExampleUserType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<ExampleUserType>) => void
}

export const Users = (props: UserPropsTypes) => {

    const getUsers = () => {
        if (props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }


    return <>
        <button onClick={getUsers}>get users</button>
        {

            props.users.map(user => <div key={user.id}>
                <span> <div> <img className={s.avatarWrapper}
                                  src={user.photos.small !== null ? user.photos.small : 'https://yt3.ggpht.com/a/AATXAJxAUfyJiZI71TSYapo526ubX0cPcs2ZUUhOA-5B=s900-c-k-c0xffffffff-no-rj-mo'}/> </div><div> {user.followed ?
                    <button onClick={() => {
                        props.unfollow(user.id)

                    }}>UnFollow</button> :
                    <button onClick={() => {
                        props.follow(user.id)
                    }}>Follow</button>} </div></span>
                <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                <span>
                    {/*<div>{user.name}</div>*/}
                    {/*<div>{user.name}</div>*/}
                </span>
            </div>)
        }
    </>
}