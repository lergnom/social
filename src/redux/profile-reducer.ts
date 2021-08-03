import {
    DispatchAddPostProps,
    DispatchChangePostProps,
    DispatchProps,
    PostsType,
    ProfilePageType, ProfileType,
    RootStateType
} from './store';

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = 'UPDATE-NEW-POST-TEXT'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState: ProfilePageType = {
    messageForNewPost: "",
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
            instagram: null,
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

    }
}

export const profileReducer = (state = initialState, action: DispatchProps) => {
    switch (action.type) {
        case ADD_POST:
            const newPost: PostsType = {
                id: new Date().getTime(),
                message: state.messageForNewPost,
                likesCount: 0,
                img: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg'
            }
            return {...state, messageForNewPost: '', posts: [...state.posts, newPost]}
        case UPDATE_NEW_POST:
            return {...state, messageForNewPost: action.newText}
        case SET_USER_PROFILE:

            return {...state, profile: action.profile}
        default:
            return state
    }
}

export const addPostActionCreator = (): DispatchAddPostProps => {
    return {type: ADD_POST} as const
}

export const updateNewPostTextActionCreator = (text: string): DispatchChangePostProps => {
    return {type: UPDATE_NEW_POST, newText: text} as const
}

export type DispatSetUserProfileType = {
    type: 'SET_USER_PROFILE'
    profile: ProfileType
}


export const setUserProfile = (profile:ProfileType): DispatSetUserProfileType => ({type: SET_USER_PROFILE, profile})
