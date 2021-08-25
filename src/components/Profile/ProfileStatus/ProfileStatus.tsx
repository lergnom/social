import React from "react";


type ProfileStatusType = {
    status: string;
    updateUserStatus: (text: string) => void
}

class ProfileStatus extends React.Component<ProfileStatusType> {

    state = {
        editMode: false,
        status: this.props.status
    };

    toggleStateStatus() {
        this.setState({
            editMode: arguments[0]
        });
    };

    //на стрелочную функцию
    toggleStateStatusArrow = (value: boolean) => {
        value && this.props.updateUserStatus(this.state.status);
        this.setState({
            editMode: value
        });
    };

    changeStatusText = (newText: String) => {
        this.setState({
            status: newText
        })
    }
    onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return <>
            {!this.state.editMode ?
                <span
                    onDoubleClick={() => {
                        this.toggleStateStatusArrow(true)
                    }}>Статус: {this.props.status || 'no status'}</span> :
                <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.toggleStateStatus.bind(this, false)}
                       name={'editStatus'}
                       value={this.state.status}/>}
        </>
    };
}

export default ProfileStatus;