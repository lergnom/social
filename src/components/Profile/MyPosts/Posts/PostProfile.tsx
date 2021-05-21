import React from "react";

/**
 * PostProfileComponent - add new message {} into state
 * @constructor
 */


// @ts-ignore
export const PostProfile = () => {
    const addPost = () => {
        alert(newPostElement.current.value)
    }

    const newPostElement = React.createRef()
    return (
        <>
            <textarea ref={newPostElement}/>
            {/*<textarea name="" id="" cols="30" rows="10"></textarea>*/}
            <div>
                <button onClick={addPost}>add
                </button>
            </div>
        </>
    )
}
