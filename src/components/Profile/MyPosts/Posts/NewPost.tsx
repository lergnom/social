import React from "react";

/**
 * PostProfileComponent - add new message {} into state
 * @constructor
 */

export type NewPostProps = {
    addPost: (name: string) => void
    messageForNewPost: string
}

export const NewPost = (props: NewPostProps) => {
    const addNewMessage = () => {
        // if (newPostElement.current) {
        //     props.addPost(newPostElement.current.value)
        // }
        // props.addPost(newPostElement.current ? newPostElement.current.value : '')
    }

    // const newPostElement = React.createRef<HTMLTextAreaElement>()
    return (
        <>
            <textarea value={props.messageForNewPost}/>
            {/*<textarea name="" id="" cols="30" rows="10"></textarea>*/}
            <div>
                <button onClick={addNewMessage}>add
                </button>
            </div>
        </>
    )
}
