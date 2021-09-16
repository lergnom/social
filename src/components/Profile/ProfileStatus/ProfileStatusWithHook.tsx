import React, {useEffect, useState} from "react";


type ProfileStatusType = {
    status: string;
    updateUserStatus: (text: string) => void
}

const ProfileStatusWithHook = (props: ProfileStatusType) => {
    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const toggleStateStatus = (value: boolean) => {
        setEditMode(value);
        !value && props.updateUserStatus(status);
    };

    const onStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value);
    };

    return <>
        {!editMode ?
            <span
                onDoubleClick={() => {
                    toggleStateStatus(true);
                }}>Статус: {props.status || 'no status'}</span> :
            <input onChange={onStatusChange} autoFocus={true} onBlur={() => {
                toggleStateStatus(false);
            }}
                   name={'editStatus'}
                   value={status}/>}
    </>;
};


export default ProfileStatusWithHook;