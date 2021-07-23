import React from "react";
import {connect} from "react-redux";
import {ExampleUserType, Users} from "./Users";
import {followAC, setUsersAC, unFollowAC, UserProps, UsersPropsType} from "../../redux/users-reducer";
import {UsersClass} from "./UsersC";


const mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users
    }

}

const mapDispatchToProps = (dispatch: any) => {
    return {
        follow: (userId: number) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId: number) => {
            dispatch(unFollowAC(userId))
        },
        setUsers: (users: Array<ExampleUserType>) => {
            dispatch(setUsersAC(users))
        }
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)