import React from "react";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


const mapStateToProps = (state: any) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        contacts: state.dialogsPage.contacts,
        newMessage: state.dialogsPage.newText,
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
const withAuthRedirectComponent = withAuthRedirect(Dialogs);
export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirectComponent);
