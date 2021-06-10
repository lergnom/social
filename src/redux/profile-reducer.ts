import {DispatchAddPostProps, DispatchChangePostProps, DispatchProps, PostsType, RootStateType} from "./store";

const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST = "UPDATE-NEW-POST-TEXT"

export const profileReducer = (state: RootStateType, action: DispatchProps) => {
    if (action.type === ADD_POST) {
        const newPost: PostsType = {
            id: new Date().getTime(),
            message: state.profilePage.messageForNewPost,
            likesCount: 0,
            img: 'https://avatarko.ru/img/kartinka/2/Gubka_Bob.jpg'
        }
        state.profilePage.posts.push(newPost)
        state.profilePage.messageForNewPost = ""
    } else if (action.type === UPDATE_NEW_POST) {
        state.profilePage.messageForNewPost = action.newText
    }
    return state
}

export const addPostActionCreator = (): DispatchAddPostProps => {
    return {type: ADD_POST} as const
}

export const updateNewPostTextActionCreator = (text: string): DispatchChangePostProps => {
    return {type: UPDATE_NEW_POST, newText: text} as const
}
