import React from "react";
import {connect} from "react-redux";
import {ExampleUserType, Users} from "./Users";
import {followAC, setCurrentPageAC, setUsersAC, unFollowAC, UserProps, UsersPropsType} from "../../redux/users-reducer";
import {UsersClass} from "./UsersC";


const mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage

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
        },
        setCurrentPage: (currentPage: number) => {
            dispatch(setCurrentPageAC(currentPage))
        },
    }
}


export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersClass)