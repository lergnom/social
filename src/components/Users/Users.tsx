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

type UserPropsTypes = {
    // users: Array<UsersPropsType>
    users: Array<ExampleUserType>
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (users: Array<ExampleUserType>) => void
}

export const Users = (props: UserPropsTypes) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            props.setUsers(response.data.items)
        })
        // props.setUsers([
        //     {
        //         id: '1',
        //         ava: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%91%D0%B5%D0%BD%D0%B4%D0%B5%D1%80-%D1%84%D0%BE%D1%82%D0%BE-%D0%BD%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D1%83-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-014.jpg',
        //         followed: false,
        //         fullName: 'Dmitriy',
        //         status: 'I boss',
        //         location: {city: 'Minsk', country: 'Belarus'}
        //     },
        //     {
        {/*        id: '2',*/
        }
        {/*        ava: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%91%D0%B5%D0%BD%D0%B4%D0%B5%D1%80-%D1%84%D0%BE%D1%82%D0%BE-%D0%BD%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D1%83-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-014.jpg',*/
        }
        //         followed: true,
        //         fullName: 'Zoe',
        //         status: 'dark princess',
        //         location: {city: 'Anapa', country: 'Russia'}
        //     },
        //     {
        //         id: '3',
        //         ava: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%91%D0%B5%D0%BD%D0%B4%D0%B5%D1%80-%D1%84%D0%BE%D1%82%D0%BE-%D0%BD%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D1%83-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-014.jpg',
        //         followed: true, fullName: 'Ivan', status: 'wild doom', location: {city: 'Kiev', country: 'Ukraine'}
        //     },
        // ])
    }

    return <>
        {

            props.users.map(user => <div key={user.id}>
                <span> <div> <img className={s.avatarWrapper} src={user.photos.small !== null ? user.photos.small :'https://yt3.ggpht.com/a/AATXAJxAUfyJiZI71TSYapo526ubX0cPcs2ZUUhOA-5B=s900-c-k-c0xffffffff-no-rj-mo'}/> </div><div> {user.followed ?
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