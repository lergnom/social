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
        console.log(this.state.status)
        this.setState({
            editMode: value
        });
        value && this.props.updateUserStatus(this.state.status);

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

    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<{}>, snapshot?: any) {
        if (prevProps.status !== this.props.status) {

            console.log('UPDATE STATUS')
            this.setState({
                status: this.props.status
            });
        }
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