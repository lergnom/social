import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

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
    // const addNewMessage = () => {
    //     props.addPost(props.messageForNewPost)
    //     // props.dispatch(addPostActionCreator())
    // }
    // const onChangeMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
    //     // let text = e.currentTarget.value
    //     props.changeNewText(e.currentTarget.value)
    //     // props.dispatch(updateNewPostTextActionCreator(text))
    // }
    //
    // const onKeyPressMessage = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    //     if (e.ctrlKey && e.key === "Enter") {
    //         addNewMessage()
    //     }
    // }
    const addPost = (object: NewPostReduxFormType) => {
        console.log(object.postText);
        props.addPost(object.postText);
    }

    return (

        <>
            <NewPostReduxForm onSubmit={addPost}/>
        </>
    )
}

const newPost = (props: InjectedFormProps<NewPostReduxFormType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component='textarea' name='postText'/>
            <div>
                <button>add</button>
            </div>

        </form>
    )
}

type NewPostReduxFormType = {
    postText: string
}

const NewPostReduxForm = reduxForm<NewPostReduxFormType>({form: "newPostForm"})(newPost)