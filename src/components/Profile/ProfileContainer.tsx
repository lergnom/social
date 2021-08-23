import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfileType} from "../../redux/store";
import {getUserProfile, setUserProfile} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void,
    getUserProfile: (id: number) => void

}
type OwnProps = MapStatePropsType & MapDispatchPropsType

export type ProfileContainerType = RouteComponentProps<PathParamType> & OwnProps

class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        let userId = this.props.match.params.userId
        console.log(userId)
        if (!userId) {
            userId = '2'
        }
        this.props.getUserProfile(+userId)

        // userId && UserApi.getProfile(+userId).then(data => {
        //     this.props.setUserProfile(data)
        // })
    }

    render() {
        return <Profile {...this.props}/>;
    }
}

const mapStateToprops = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
    }
}

// const withAuthRedirectComponent = withAuthRedirect(ProfileContainer);

// const ProfileRouter = withRouter<any, any>(ProfileContainer)
//
// export default connect(mapStateToprops, {setUserProfile, getUserProfile})(ProfileRouter)

// const ProfileRouter = withRouter(connect(mapStateToprops, {setUserProfile, getUserProfile})(withAuthRedirectComponent))

export default compose<React.ComponentType>(connect(mapStateToprops, {setUserProfile, getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)