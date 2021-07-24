import React from "react";
import s from './users.module.css'
import axios from 'axios';
import {UserPropsTypes} from "./Users";

// Функциональная компонента
export class UsersClass extends React.Component<UserPropsTypes> {
    constructor(props: UserPropsTypes) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    getUsers = () => {
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                this.props.setUsers(response.data.items)
            })
        }
    }

    render() {
        return <>
            <button onClick={this.getUsers}>get users</button>
            {
                this.props.users.map(user => <div key={user.id}>
                <span> <div> <img className={s.avatarWrapper}
                                  src={user.photos.small !== null ? user.photos.small : 'https://yt3.ggpht.com/a/AATXAJxAUfyJiZI71TSYapo526ubX0cPcs2ZUUhOA-5B=s900-c-k-c0xffffffff-no-rj-mo'}/> </div><div> {user.followed ?
                    <button onClick={() => {
                        this.props.unfollow(user.id)

                    }}>UnFollow</button> :
                    <button onClick={() => {
                        this.props.follow(user.id)
                    }}>Follow</button>} </div></span>
                    <span>
                        <div>{user.name}</div>
                        <div>{user.status}</div>
                    </span>
                    <span>
                </span>
                </div>)
            }
        </>
    }
}
