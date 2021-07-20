import {stat} from "fs";
import {DispatchProps, ProfilePageType} from "./store";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

type UsersDispatchProps = DispatchFollowProps | DispatchUnFollowProps | DispatchSetUsers


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
}


const initialState: UserProps = {
    users: [
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
    ]
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

        default:
            return state
    }
}

export const followAC = (userId: string) => {
    return {type: FOLLOW, userId} as const
}

export const unFollowAC = (userId: string) => ({type: UNFOLLOW, userId})

export const setUsersAC = (users: UserProps) => ({type: SET_USERS, users})

