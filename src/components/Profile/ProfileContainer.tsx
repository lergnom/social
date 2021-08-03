import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {ProfileType} from "../../redux/store";
import {setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";

export type ProfileContainerType = {
    setUserProfile: (profile: ProfileType) => void
    profile: ProfileType
}

class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(response => {
            this.props.setUserProfile(response.data)
        })
        //query to server
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


export default connect(mapStateToprops, {setUserProfile})(ProfileContainer)