import React from "react";
import {NavLink} from "react-router-dom";
import s from './users.module.css'

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
    users: Array<ExampleUserType>
    pageSize: number
    totalUserCount: number
    currentPage: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    onPageChanged: (p: number) => void
}

export const Users = (props: UserPropsTypes) => {

    let pageCount: number = Math.ceil(props.totalUserCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }
    return <>
        <div className={s.pagination}>
            {pages.map(p => {
                return <span onClick={() => {
                    props.onPageChanged(p)

                }} className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>
            })
            }
        </div>
        <div className={s.usersWrapper}>
            {
                props.users.map(user => <div className={s.userContainer} key={user.id}>
                    <span>
                        <NavLink to={'profile/' + user.id}>
                        <img className={s.avatarWrapper}
                             src={user.photos.small !== null ? user.photos.small : 'https://yt3.ggpht.com/a/AATXAJxAUfyJiZI71TSYapo526ubX0cPcs2ZUUhOA-5B=s900-c-k-c0xffffffff-no-rj-mo'}/>
                        </NavLink>
                        <div> {user.followed ?
                            <button onClick={() => {
                                props.unfollow(user.id)

                            }}>UnFollow</button> :
                            <button onClick={() => {
                                props.follow(user.id)
                            }}>Follow</button>} </div></span>
                    <span>
                    <div>{user.name}</div>
                    {/*<div>{user.status}</div>*/}
                    </span>
                    <span>
                    </span>
                </div>)
            }
        </div>

    </>

}