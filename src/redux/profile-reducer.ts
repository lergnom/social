import {
    DispatchAddPostProps,
    DispatchChangePostProps,
    DispatchProps,
    PostsType,
    ProfilePageType,
    RootStateType
} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = "UPDATE-NEW-POST-TEXT"

let initialState:ProfilePageType = {
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
        ]
}

export const profileReducer = (state=initialState, action: DispatchProps) => {
    if (action.type === ADD_POST) {
        const newPost: PostsType = {
            id: new Date().getTime(),
            message: state.messageForNewPost,
            likesCount: 0,
            img: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg'
        }
        state.posts.push(newPost)
        state.messageForNewPost = ""
    } else if (action.type === UPDATE_NEW_POST) {
        state.messageForNewPost = action.newText
    }
    return state
}

export const addPostActionCreator = (): DispatchAddPostProps => {
    return {type: ADD_POST} as const
}

export const updateNewPostTextActionCreator = (text: string): DispatchChangePostProps => {
    return {type: UPDATE_NEW_POST, newText: text} as const
}

