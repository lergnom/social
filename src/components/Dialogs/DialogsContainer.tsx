import React from "react";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";


const mapStateToProps = (state: any) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        contacts: state.dialogsPage.contacts,
        newMessage: state.dialogsPage.newText,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onClickHandler: () => {
            dispatch(addMessageActionCreator())
        },
        onChangeHandler: (text: string) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }

    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
