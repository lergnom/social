import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {UserApi} from "../../api/api";

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