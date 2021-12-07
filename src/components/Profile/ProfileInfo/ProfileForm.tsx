import React from "react";
import {MyField} from "../../../common/FormControls/Textarea";
import {Field, reduxForm} from "redux-form";

const ProfileFormCont = () => {
    return <form>
        <button onClick={() => {
            alert("update");
        }}>Обновить профиль
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
            <Field component={MyField} name={'lookJob'} type="checkbox" fieldChange="Input"/> В поиске работы:
        </label>
        <label style={{
            display: "flex",
            flexDirection: "column-reverse"
        }}>
            <Field component={MyField} name={'mySkills'} type="input" fieldChange="Textarea"/> Мои скиллы:
        </label>
    </form>;
};

export const ProfileForm = reduxForm({form: 'editProfile'})(ProfileFormCont);