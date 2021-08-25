import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

type LoginFormDataType = {
    login: string,
    password: string,
    remeberMe: boolean,
}

const LoginForm = (props: InjectedFormProps<LoginFormDataType>) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} type="text" component={"input"} name={'login'}/>
            </div>
            <div>
                <Field placeholder={"password"} type="password" component={"input"} name={'password'}/>
            </div>
            <label>
                <Field component={"input"} name={'remeberMe'} type="checkbox"/> remeberMe
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
        console.log(formData.login);
        console.log(formData.remeberMe);
        console.log(formData)
    }
    return <>
        <h1>Login Form</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>

}