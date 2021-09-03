import {DispatchAddPostProps, DispatchChangePostProps, PostsType, ProfilePageType, ProfileType} from './store';
import {UserApi} from "../api/api";
import {Dispatch} from "redux";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'
const GET_STATUS = 'GET_STATUS'

let initialState: ProfilePageType = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 12, img: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg'},
        {
            id: 2,
            message: 'It\'s my first post',
            likesCount: 5,
            img: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg'
        },
        {
            id: 3,
            message: 'Ok I\'m fine',
            likesCount: 8,
            img: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg'
        },
        {id: 4, message: 'Oki doki', likesCount: 8, img: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg'},
    ],
    profile: {
        aboutMe: 'Обычный человек, каких много но со своими тараканами в голове.',
        contacts: {
            github: 'lergnom',
            facebook: 'lergnom',
            instagram: 'das',
            vk: 'lergnom',
            mainLink: 'null',
            twitter: 'null',
            website: 'lergnom',
            youtube: 'null',
        },
        photos: {
            small: 'https://media-exp1.licdn.com/dms/image/C4D03AQHXUqbwn1857g/profile-displayphoto-shrink_200_200/0/1588873529425?e=1628726400&v=beta&t=c39J43oUkrS9PBdTzqktUE6484BtVdFZASKxReCJTfU',
            large: 'https://media-exp1.licdn.com/dms/image/C4D03AQHXUqbwn1857g/profile-displayphoto-shrink_200_200/0/1588873529425?e=1628726400&v=beta&t=c39J43oUkrS9PBdTzqktUE6484BtVdFZASKxReCJTfU',
        },
        lookingForAJob: false,
        lookingForAJobDescription: 'Интересную работу с достойной оплатой',
        userId: 4,
        fullName: 'Антон Асмоловский'

    },
    status: 'Статус'
}

export const profileReducer = (state = initialState, action: DispatchPropsType) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: action.text,
                likesCount: 0,
                img: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg'
            }
            return {...state, messageForNewPost: '', posts: [...state.posts, newPost]}
        case UPDATE_NEW_POST:
            return {...state, messageForNewPost: action.newText}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case GET_STATUS:
            return {...state, status: action.status}
        default:
            return state
    }
}

export const addPostActionCreator = (text: string): DispatchAddPostProps => {
    return {type: ADD_POST, text} as const
}


// export type DispatSetUserProfileType = {
//     type: 'SET_USER_PROFILE'
//     profile: ProfileType
// }

export type DispatSetUserProfileType = ReturnType<typeof setUserProfile>

export type DispatchPropsType =
    DispatchAddPostProps
    | DispatchChangePostProps
    | DispatSetUserProfileType
    | DispatchGetUserStatusType

export const setUserProfile = (profile: ProfileType) => ({type: SET_USER_PROFILE, profile}) as const

export const getUserProfile = (id: number) => {
    return (dispatch: Dispatch<DispatchPropsType>) => {
        UserApi.getProfile(id)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}
// export type DispatchGetUserStatusType = {
//     type: 'GET_STATUS'
//     status: string
// }

export type DispatchGetUserStatusType = ReturnType<typeof getStatus>

const getStatus = (status: string) => ({type: GET_STATUS, status}) as const


export const getUserStatus = (userId: number) => {
    return (dispatch: Dispatch<DispatchPropsType>) => {
        UserApi.getStatus(userId)
            .then(response => {
                dispatch(getStatus(response.data))
            })
    }
}

export const updateUserStatus = (status: string) => {
    return (dispatch: Dispatch<DispatchPropsType>) => {
        UserApi.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(getStatus(status))
                }
            })
    }
}
