import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {ProfileType} from "../../redux/store";
import {getUserProfile, getUserStatus, setUserProfile, updateUserStatus} from "../../redux/profile-reducer";
import {AppStateType} from "../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type PathParamType = {
    userId: string
}

type MapStatePropsType = {
    profile: ProfileType
    status: string
}

type MapDispatchPropsType = {
    setUserProfile: (profile: ProfileType) => void,
    getUserProfile: (id: number) => void,
    getUserStatus: (id: number) => void,
    updateUserStatus: (status: string) => void,

}
type OwnProps = MapStatePropsType & MapDispatchPropsType

export type ProfileContainerType = RouteComponentProps<PathParamType> & OwnProps

class ProfileContainer extends React.Component<ProfileContainerType> {
    profileRefresh() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = '18340'; //this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login");
            }
        }
        this.props.getUserStatus(+userId);
        this.props.getUserProfile(+userId);


        // userId && UserApi.getProfile(+userId).then(data => {
        //     this.props.setUserProfile(data)
        // })
    }

    componentDidMount() {
        this.profileRefresh();
    }

    componentDidUpdate(prevProps: Readonly<ProfileContainerType>, prevState: Readonly<{}>) {
        this.profileRefresh();
    }

    render() {
        return <Profile {...this.props} />;
    }
}

const mapStateToprops = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status
    };
};

// const withAuthRedirectComponent = withAuthRedirect(ProfileContainer);

// const ProfileRouter = withRouter<any, any>(ProfileContainer)

// export default connect(mapStateToprops, {setUserProfile, getUserProfile})(ProfileRouter)

// const ProfileRouter = withRouter(connect(mapStateToprops, {setUserProfile, getUserProfile})(withAuthRedirectComponent))

export default compose<React.ComponentType>(connect(mapStateToprops, {
        setUserProfile,
        getUserProfile,
        getUserStatus,
        updateUserStatus
    }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);