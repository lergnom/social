import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {ProfileType} from "../../redux/store";
import {setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";

// export type ProfileContainerType = {
//     setUserProfile: (profile: ProfileType) => void
//     profile: ProfileType
//
// }

type PathParamType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void

}
type OwnProps = MapStatePropsType & MapDispatchPropsType

export type ProfileContainerType = RouteComponentProps<PathParamType> & OwnProps

class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        const userId = this.props.match.params.userId
        userId && axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId).then(response => {
            this.props.setUserProfile(response.data)
        })
    }

    render() {
        return <Profile {...this.props}/>;
    }
}

const mapStateToprops = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile
    }
}

const ProfileRouter = withRouter(ProfileContainer)

export default connect(mapStateToprops, {setUserProfile})(ProfileRouter)