import React, {ChangeEvent, KeyboardEvent} from "react";
import {DispatchProps} from "../../../../redux/state";

/**
 * PostProfileComponent - add new message {} into state
 * @constructor
 */

export type NewPostProps = {
    // addPost: (name: string) => void
    messageForNewPost: string
    // changeNewText: (s: string) => void
    dispatch: (props: DispatchProps) => void


}

export const NewPost = (props: NewPostProps) => {
    const addNewMessage = () => {
        // props.addPost(props.messageForNewPost)
        props.dispatch({type: 'ADD-POST', newText: ''})
    }
    const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // props.changeNewText(e.currentTarget.value)
        props.dispatch({type: 'UPDATE-NEW-POST-TEXT', newText: e.currentTarget.value})
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
