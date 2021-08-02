import {stat} from "fs";
import {DispatchProps, ProfilePageType} from "./store";
import {ExampleUserType} from "../components/Users/Users";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USER = 'SET_TOTAL_USER'
const SET_PRELOADER_ACTIVE = 'SET_PRELOADER_ACTIVE'

type UsersDispatchProps =
    DispatchFollowProps
    | DispatchUnFollowProps
    | DispatchSetUsers
    | DispatchSetCurrentPage
    | DispatchSetTotalUser
    | DispatchSetPreloaderType


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

type DispatchSetPreloaderType = {
    type: 'SET_PRELOADER_ACTIVE',
    isFetching: boolean
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
    users: Array<UsersPropsType>,
    pageSize: number,
    totalUserCount: number,
    currentPage: number,
    isFetching: boolean,
}


const initialState: UserProps = {
    users: [],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
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
        case SET_PRELOADER_ACTIVE:
            return {...state, isFetching: action.isFetching}
        default:
            return state
    }
}

export const follow = (userId: number) => {
    return {type: FOLLOW, userId} as const
}

export const unFollow = (userId: number) => ({type: UNFOLLOW, userId})

export const setUsers = (users: Array<ExampleUserType>) => ({type: SET_USERS, users})

export const setCurrentPage = (currentPage: number): DispatchSetCurrentPage => ({type: SET_CURRENT_PAGE, currentPage})

export const setTotalUserCount = (totalCount: number): DispatchSetTotalUser => ({type: SET_TOTAL_USER, totalCount})
export const setPreloader = (isFetching: boolean): DispatchSetPreloaderType => ({
    type: SET_PRELOADER_ACTIVE,
    isFetching
})