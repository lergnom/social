import React from "react";

/**
 * PostProfileComponent - add new message {} into state
 * @constructor
 */

export type NewPostProps = {
    addPost: (name: string) => void
}

export const NewPost = (props: NewPostProps) => {
    const addNewMessage = () => {
        alert('yo')

        if (newPostElement.current) {
            props.addPost(newPostElement.current.value)
        }
        // props.addPost(newPostElement.current ? newPostElement.current.value : '')
    }

    const newPostElement = React.createRef<HTMLTextAreaElement>()
    return (
        <>
            <textarea ref={newPostElement}/>
            {/*<textarea name="" id="" cols="30" rows="10"></textarea>*/}
            <div>
                <button onClick={addNewMessage}>add
                </button>
            </div>
        </>
    )
}
