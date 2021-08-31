import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {MyField} from "../../common/FormControls/Textarea";
import {requireField} from "../../common/utils/validators";
import {loginTC} from "../../redux/auth-reducer";
import {useDispatch} from "react-redux";

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


export const Login = () => {
    const dispatch = useDispatch();

    const onSubmit = (props: LoginFormDataType) => {
        dispatch(loginTC(props.login, props.password, props.remeberMe));
    }

    return <>
        <h1>Login Form</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </>

}