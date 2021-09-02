import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {MyField} from "../../common/FormControls/Textarea";
import {requireField} from "../../common/utils/validators";
// import {loginTC} from "../../redux/auth-reducer";
import {connect} from "react-redux";
import {loginTC} from "../../redux/auth-reducer";

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
                <Field component={MyField} name={'remeberMe'} type="checkbox" fieldChange="Input"/> remeberMe
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


const Login = (props: any) => {
    const onSubmit = (form: LoginFormDataType) => {
        props.loginTC(form.login, form.password, form.remeberMe);
    }

    return <>
        <h1>Login Form</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>

}

export default connect(null, {loginTC})(Login)