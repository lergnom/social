import {DispatchProps, MessageType, PostsType, RootStateType} from "./state";

const ADD_MESSAGE = 'ADD-MESSAGE'


export const dialogsReducer = (state: RootStateType, action: DispatchProps) => {
    if (action.type === ADD_MESSAGE) {
        const newMessage: MessageType = {
            id: new Date().getTime(),
            message: action.text
        }
        state.dialogsPage.messages.push(newMessage)
    }
    return state
}


