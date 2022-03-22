
import {MainLayout} from "../../components/MainLayout";
import React, {useEffect, useState} from "react";
import Router from "next/router";
import {FormEvent} from "react";
import {saveEmail} from "../../services/token";

function Login(): JSX.Element {
    // const dispatch = useAppDispatch();
    // const [submitLogin] = useLoginMutation();
    // const authStatus = useAppSelector(state => state.appReducer.authorizationStatus)
    const [loginInput, setLoginInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const loginData = {
        email: loginInput,
        password: passwordInput,
    };

    // useEffect(() => {
    //     if (authStatus === AuthorizationStatus.Auth) {
    //         dispatch(redirectToRoute(AppRoute.Main));
    //     }
    // }, [authStatus, dispatch]);

    const linkClickHandler = () => {
        Router.push('/')
    }

    const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        saveEmail(loginData.email);
        // submitLogin(loginData);
        // dispatch(setAuthStatus(AuthorizationStatus.Auth));
        // dispatch(redirectToRoute(AppRoute.Main));
    };

    return (
        <MainLayout title={'Login Page'}>
            <h1>Login Page</h1>

            <button onClick={linkClickHandler}>To Books List</button>
        </MainLayout>
    )

}

export default Login;
