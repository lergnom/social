import {stat} from "fs";
import {DispatchProps, ProfilePageType} from "./store";
import {ExampleUserType} from "../components/Users/Users";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

type UsersDispatchProps = DispatchFollowProps | DispatchUnFollowProps | DispatchSetUsers | DispatchSetCurrentPage


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
    totalUserCount: 20,
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
            return {...state, users: [...state.users, ...action.users]}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}

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