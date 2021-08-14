import React from "react";
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {autorizeMe, setAuthUserData} from "../../redux/auth-reducer";
import {UserApi} from "../../api/api";

type HeaderComponentType = {
    autorizeMe: () => void
}

export class HeaderComponent extends React.Component<HeaderComponentType> {
    componentDidMount() {
        this.props.autorizeMe()
    }

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

export const HeaderContainer = connect(mapStateToProps, {
    autorizeMe
})(HeaderComponent)