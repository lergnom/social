import React from "react";
import {Dialogs} from "./Dialogs";
import {connect} from "react-redux";
import {addMessageActionCreator} from "../../redux/dialogs-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {AppStateType} from "../../redux/redux-store";


const mapStateToProps = (state: AppStateType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        contacts: state.dialogsPage.contacts,
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onClickHandler: (newMessage: string) => {
            dispatch(addMessageActionCreator(newMessage))
        }

    }
}
// const withAuthRedirectComponent = withAuthRedirect(Dialogs);
// export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(withAuthRedirectComponent);

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)