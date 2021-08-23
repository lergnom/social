import React from "react";


type ProfileStatusType = {
    status: string;
}

class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false
    };

    toggleStateStatus() {
        this.setState({
            editMode: arguments[0]
        });
    };

    //на стрелочную функцию
    toggleStateStatusArrow = (value: boolean) => {
        this.setState({
            editMode: value
        });
    };


    render() {
        return <>
            {!this.state.editMode ?
                <span
                    onDoubleClick={() => {
                        this.toggleStateStatusArrow(true)
                    }}>{this.props.status}</span> :
                <input autoFocus={true} onBlur={this.toggleStateStatus.bind(this, false)} name={'editStatus'}
                       value={this.props.status}/>}
        </>
    };
}

export default ProfileStatus;