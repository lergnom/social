import React from "react";
import {UserProps, UsersPropsType} from "../../redux/users-reducer";
import s from './users.module.css'
import axios from 'axios';

type UserPropsTypes = {
    users: Array<UsersPropsType>
    follow: (id: string) => void
    unfollow: (id: string) => void
    setUsers: (users: Array<UsersPropsType>) => void
}

export const Users = (props: UserPropsTypes) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
        props.setUsers([
            {
                id: '1',
                ava: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%91%D0%B5%D0%BD%D0%B4%D0%B5%D1%80-%D1%84%D0%BE%D1%82%D0%BE-%D0%BD%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D1%83-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-014.jpg',
                followed: false,
                fullName: 'Dmitriy',
                status: 'I boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: '2',
                ava: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%91%D0%B5%D0%BD%D0%B4%D0%B5%D1%80-%D1%84%D0%BE%D1%82%D0%BE-%D0%BD%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D1%83-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-014.jpg',
                followed: true,
                fullName: 'Zoe',
                status: 'dark princess',
                location: {city: 'Anapa', country: 'Russia'}
            },
            {
                id: '3',
                ava: 'https://drasler.ru/wp-content/uploads/2019/05/%D0%91%D0%B5%D0%BD%D0%B4%D0%B5%D1%80-%D1%84%D0%BE%D1%82%D0%BE-%D0%BD%D0%B0-%D0%B0%D0%B2%D0%B0%D1%82%D0%B0%D1%80%D0%BA%D1%83-%D0%BF%D0%BE%D0%B4%D0%B1%D0%BE%D1%80%D0%BA%D0%B0-014.jpg',
                followed: true, fullName: 'Ivan', status: 'wild doom', location: {city: 'Kiev', country: 'Ukraine'}
            },
        ])
    }
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