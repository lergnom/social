import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setUserProfile} from "../../redux/profile-reducer";

type ProfileContainerType = {
    setUserProfile: (id: number) => void


}

class ProfileContainer extends React.Component<ProfileContainerType> {
    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2').then(response => {
            this.props.setUserProfile(response.data)
        })
        //query to server
    }

    render() {
        console.log()
        return <Profile/>;
    }
}

const mapStateToprops = (state: any) => {

}


export default connect(mapStateToprops, {setUserProfile})(ProfileContainer)