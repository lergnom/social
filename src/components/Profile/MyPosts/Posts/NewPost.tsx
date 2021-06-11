import React, {ChangeEvent, KeyboardEvent} from "react";
import {
    addPostActionCreator,
     updateNewPostTextActionCreator
} from "../../../../redux/profile-reducer";

import {
    DispatchAddPostProps,
    DispatchChangePostProps,
    DispatchProps
} from "../../../../redux/store";

/**
 * PostProfileComponent - add new message {} into state
 * @constructor
 */

export type NewPostProps = {
    addPost: (name: string) => void
    messageForNewPost: string
    changeNewText: (s: string) => void
    // dispatch: (props: DispatchChangePostProps | DispatchAddPostProps) => void
}


export const NewPost = (props: NewPostProps) => {
    const addNewMessage = () => {
        props.addPost(props.messageForNewPost)
        // props.dispatch(addPostActionCreator())
    }
    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.changeNewText(e.currentTarget.value)
        // props.dispatch(updateNewPostTextActionCreator(text))
    }

    const onKeyPressMessage = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.ctrlKey && e.key === "Enter") {
            addNewMessage()
        }
    }

    return (

        <>
            <textarea onKeyPress={onKeyPressMessage} onChange={onChangeMessage} value={props.messageForNewPost}/>
            <div>
                <button onClick={addNewMessage}>add
                </button>
            </div>
        </>
    )
}
