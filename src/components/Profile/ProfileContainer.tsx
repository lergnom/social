import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {ProfileType} from "../../redux/store";
import {setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {withRouter} from "react-router-dom";

export type ProfileContainerType = {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType

}

class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        // @ts-ignore
        const userId = this.props.match.params.userId
        userId && axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return <Profile {...this.props}/>;
    }
}

const mapStateToprops = (state: AppStateType) => {
    return {
        profile: state.profilePage.profile
    }

}

const ProfileRouter = withRouter<any, any>(ProfileContainer)

export default connect(mapStateToprops, {setUserProfile})(ProfileRouter)