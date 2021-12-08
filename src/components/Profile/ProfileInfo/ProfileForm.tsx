import React from "react";
import {MyField} from "../../../common/FormControls/Textarea";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

const ProfileFormCont = (props: InjectedFormProps) => {
    return <form onSubmit={props.handleSubmit}>
        <button>Обновить профиль
        </button>

        <label style={{
            display: "flex",
            flexDirection: "column-reverse"
        }}>
            <Field component={MyField} name={'fullName'} type="input" fieldChange="Input"/> Имя
        </label>
        <label style={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "flex-end"
        }}>
            <Field component={MyField} name={'LookingForAJobDescription'} type="checkbox" fieldChange="Input"/> В поиске работы:
        </label>
        <label style={{
            display: "flex",
            flexDirection: "column-reverse"
        }}>
            <Field component={MyField} name={'mySkills'} type="input" fieldChange="Textarea"/> Мои скиллы:
        </label>
        <label style={{
            display: "flex",
            flexDirection: "column-reverse"
        }}>
            <Field component={MyField} name={'aboutMe'} type="input" fieldChange="Textarea"/> Обо мне:
        </label>
    </form>;
};

export const ProfileForm = reduxForm({form: 'editProfile'})(ProfileFormCont);