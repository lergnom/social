import React from "react";
import {Header} from "./Header";
import {connect} from "react-redux";


export class HeaderComponent extends React.Component {

    render() {
        return <Header {...this.props}/>
    }
}

const mapStateToProps = (state: any) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
    }
}

export const HeaderContainer = connect(mapStateToProps, {})(HeaderComponent)