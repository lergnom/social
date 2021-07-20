import React from "react";
import {UserProps} from "../../redux/users-reducer";


export const Users = (props: UserProps) => {
    return <>
        {

            props.users.map(user => <div key={user.id}>
                <span> <div> <img/> </div><div> <button>Follow</button></div></span>
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