type DialogsType = {
    id: number
    name: string
}

type MessageType = {
    id: number
    message: string
}

type PostsType = {
    id: number
    message: string
    likesCount: number
}

type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
}

type ProfilePageType = {
    posts: Array<PostsType>
}
type SidebarType = {}

type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    sideBar: SidebarType
}

let state: RootStateType = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi', likesCount: 12},
            {id: 2, message: 'It\'s my first post', likesCount: 5},
            {id: 3, message: 'Ok I\'m fine', likesCount: 8},
            {id: 4, message: 'Oki doki', likesCount: 8},
        ]
    },
    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Andrey'},
            {id: 2, name: 'Sveta'},
            {id: 3, name: 'Egor'},
            {id: 4, name: 'Anny'},
            {id: 5, name: 'Valera'},
            {id: 6, name: 'Lena'}
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How yor it-incubator?'},
            {id: 3, message: 'ok'},
            {id: 4, message: 'yo'},
            {id: 5, message: 'yo'}
        ]
    },
    sideBar: {}

}

export default state;