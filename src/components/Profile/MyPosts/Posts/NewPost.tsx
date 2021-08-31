import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {requireField} from "../../../../common/utils/validators";

/**
 * PostProfileComponent - add new message {} into state
 * @constructor
 */

export type NewPostProps = {
    addPost: (name: string) => void
}


export const NewPost = (props: NewPostProps) => {
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
            <Field component='textarea' name='postText' validate={[requireField]}/>
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