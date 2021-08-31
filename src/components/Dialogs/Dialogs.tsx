import React from "react";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {ContactsType, DialogsType, MessageType} from "../../redux/store";
import {BestFriends} from "./BestFriends/BestFriends";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../../common/FormControls/Textarea";
import {maxLengthCreator, requireField} from "../../common/utils/validators";

type DialogsPropsTypes = {
    dialogs: Array<DialogsType>
    messages: Array<MessageType>
    contacts: Array<ContactsType>
    onClickHandler: (newMessage: string) => void
    onChangeHandler: (value: string) => void
    newMessage: string
}

export const Dialogs = (props: DialogsPropsTypes) => {
    let dialogsElements = props.dialogs.map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name}/>)
    let messagesElements = props.messages.map(message => <Message key={message.id} message={message.message}/>)
    let bestFriends = () => {
        if (props.contacts.length > 0) {
            return (
                <BestFriends contacts={props.contacts}/>
            )
        } else return
    }

    const addNewMessage = (object: AddMessageType) => {
        props.onClickHandler(object.newMessage)
    }

    return (
        <>
            {bestFriends()}
            <div className={s.dialogs}>
                <div className={s.dialogItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>
                        {messagesElements}
                    </div>
                    <AddMessageFormRedux onSubmit={addNewMessage}/>
                </div>
            </div>
        </>
    )

}

type AddMessageType = {
    newMessage: string
}
const maxLength50 = maxLengthCreator(50);


const AddMessageForm = (props: InjectedFormProps<AddMessageType>) => {

    return (
        <form className={s.textBlock} onSubmit={props.handleSubmit}>
            <Field component={Textarea} name='newMessage' placeholder="input your message"
                   validate={[requireField, maxLength50]} typeField={'Textarea'}/>
            <button>send</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageType>({form: 'dialogAddMessageForm'})(AddMessageForm)