import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false
    };

    toggleStateStatus() {
        console.log(this)
        this.setState({
            editMode: arguments[0]
        });
    };


    render() {
        return <>
            {!this.state.editMode ?
                <span
                    onDoubleClick={this.toggleStateStatus.bind(this, true)}>Это статус {this.state.editMode}</span> :
                <input autoFocus={true} onBlur={this.toggleStateStatus.bind(this, false)} name={'editStatus'}
                       value={'Это Статус'}/>}
        </>
    };
}

export default ProfileStatus;