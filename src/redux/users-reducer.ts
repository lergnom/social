import {stat} from "fs";
import {DispatchProps, ProfilePageType} from "./store";
import {ExampleUserType} from "../components/Users/Users";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER = 'SET_TOTAL_USER'

type UsersDispatchProps =
    DispatchFollowProps
    | DispatchUnFollowProps
    | DispatchSetUsers
    | DispatchSetCurrentPage
    | DispatchSetTotalUser


type DispatchFollowProps = {
    type: 'FOLLOW'
    userId: string
}
type DispatchUnFollowProps = {
    type: 'UNFOLLOW'
    userId: string
}

type DispatchSetUsers = {
    type: 'SET_USERS'
    users: Array<UserProps>
}

type DispatchSetCurrentPage = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}

type DispatchSetTotalUser = {
    type: 'SET_TOTAL_USER'
    totalCount: number
}


type LocationPropsType = {
    city: string
    country: string
}

export type UsersPropsType = {
    id: string
    ava: string
    fullName: string
    status: string
    followed: boolean
    location: LocationPropsType
}


export type UserProps = {
    users: Array<UsersPropsType>
    pageSize: number
    totalUserCount: number
    currentPage: number
}


const initialState: UserProps = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
}

export const usersReducer = (state = initialState, action: UsersDispatchProps) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: true}
                    }
                    return user
                })
            }
        case UNFOLLOW:
            return {
                ...state, users: state.users.map(user => {
                    if (user.id === action.userId) {
                        return {...user, followed: false}
                    }
                    return user
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case SET_TOTAL_USER:
            return {...state, totalUserCount: action.totalCount}
        default:
            return state
    }
}

export const followAC = (userId: number) => {
    return {type: FOLLOW, userId} as const
}

export const unFollowAC = (userId: number) => ({type: UNFOLLOW, userId})

export const setUsersAC = (users: Array<ExampleUserType>) => ({type: SET_USERS, users})

export const setCurrentPageAC = (currentPage: number): DispatchSetCurrentPage => ({type: SET_CURRENT_PAGE, currentPage})

export const setTotalUserCountAC = (totalCount: number): DispatchSetTotalUser => ({type: SET_TOTAL_USER, totalCount})