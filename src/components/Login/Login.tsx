import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {UserApi} from "../../api/api";
import {MyField} from "../../common/FormControls/Textarea";
import {requireField} from "../../common/utils/validators";

type LoginFormDataType = {
    login: string,
    password: string,
    remeberMe: boolean,
}

const LoginForm = (props: InjectedFormProps<LoginFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} type="text" component={MyField} name={'login'} validate={[requireField]}
                       fieldChange="Input"/>
            </div>
            <div>
                <Field placeholder={"password"} type="password" component={MyField} name={'password'}
                       validate={[requireField]} fieldChange="Input"/>
            </div>
            <label>
                <Field component={MyField} name={'remeberMe'} type="checkbox" fieldChange="Input" /> remeberMe
            </label>
            <div>
                <button>LogIn</button>
            </div>
        </form>
    )
}
const LoginReduxForm = reduxForm<LoginFormDataType>({
    form: 'loginForm'
})(LoginForm)

export const Login = () => {
    const onSubmit = (formData: LoginFormDataType) => {
        UserApi.login(formData)
            .then(res => {
                if (res.data.resultCode === 1) {
                    console.log(res.data)

                }
            })
    }
    return <>
        <h1>Login Form</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>

}