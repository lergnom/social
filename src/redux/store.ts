import {DispatSetUserProfileType} from "./profile-reducer";

export type DialogsType = {
    id: number
    name: string
}

export type MessageType = {
    id: number
    message: string
}

export type PostsType = {
    id: number
    message: string
    likesCount: number
    img: string
}

export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    contacts: Array<ContactsType>
}


export type ProfileType = {
    aboutMe: string,
    contacts: {
        [key: string]: string | undefined
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string | null,
    fullName: string,
    userId: number,
    photos: {
        small: string,
        large: string
    }
}


export type ProfilePageType = {
    posts: Array<PostsType>
    profile: ProfileType
    status: string

}
export type ContactsType = {
    id: number
    avatar: string
    name: string
}

export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType

}

export type DispatchProps =
    DispatchAddPostProps
    | DispatchAddMessageProps
    | DispatchChangePostProps
    | DispatchCangeMessageProps
    | DispatSetUserProfileType


export type DispatchAddPostProps = {
    type: 'ADD-POST'
    text: string
}

export type DispatchAddMessageProps = {
    type: 'ADD-MESSAGE'
    newMessage: string
}


export type DispatchChangePostProps = {
    type: 'UPDATE-NEW-POST-TEXT'
    newText: string
}

export type DispatchCangeMessageProps = {
    type: 'UPDATE_NEW_MESSAGE_BODY'
    text: string
}

export type StoreType = {
    _state: RootStateType
    _renderTree: (state: RootStateType) => void
    subscriber: (callback: () => void) => void
    getState: () => RootStateType
    dispatch: (action: DispatchProps) => void
}



