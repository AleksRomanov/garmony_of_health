import {MainLayout} from '../../components/MainLayout';
import React, {useEffect, useState} from 'react';
import Router from 'next/router';
import {FormEvent} from 'react';
import {saveEmail} from '../../services/token';
import {Button, Form, Input, Checkbox, Col, Row} from 'antd';
import Text from 'antd/lib/typography/Text';
import {EyeInvisibleOutlined} from '@ant-design/icons';
import {EyeTwoTone} from '@ant-design/icons';
import Link from 'next/link';
import {useAppSelector} from '../../services/useAppSelector';
import {AuthorizationStatus} from '../../constants';
import {reduxWrapper} from '../../store/store';
import {getData, getRunningOperationPromises} from '../../store/api-reducer';
import {nanoid} from 'nanoid';

export default function Login({initialData}) {
    // const dispatch = useAppDispatch();
    // const [submitLogin] = useLoginMutation();
    // const authStatus = useAppSelector(state => state.appReducer.authorizationStatus)
    const [loginInput, setLoginInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    // const loginData = {
    //     email: loginInput,
    //     password: passwordInput,
    // };

    useEffect(() => {
        console.log(initialData)
        if (initialData.authStatus) {
            Router.push('/').then(r => console.log(r));

            // dispatch(redirectToRoute(AppRoute.Main));
        }
    }, [initialData]);


    // const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    //     evt.preventDefault();
    //     saveEmail(loginData.email);
    //     submitLogin(loginData);
    //     // dispatch(setAuthStatus(AuthorizationStatus.Auth));
    //     // dispatch(redirectToRoute(AppRoute.Main));
    // };

    const onFinish = (values) => {
        localStorage.key_auth = nanoid();
        console.log(values.userMail)
        localStorage.userMail = values.userMail;
        Router.push('/').then(r => console.log(r));

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <MainLayout title={'Login Page'}>
            <nav>
                <div>
                    <Link href={'/'}><a>To Book List</a></Link>
                </div>
            </nav>
            <Row>
                <Col span={12}>
                    <div>
                        {initialData.authStatus ? <span>{localStorage.userMail}</span> : <Link href={'/login'}><a>Login Page</a></Link>}
                    </div>
                    {/*<Text style={{display: 'flex', justifyContent: 'center', fontSize: '4.2em', marginBottom: '30px'}} mark>Login Page</Text>*/}
                    <Form
                        name="basic"
                        labelCol={{
                            span: 4,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="on"
                    >
                        <Form.Item
                            label="E-mail"
                            name="userMail"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your E-mail!',
                                    type: 'email'
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your password!',
                                },
                            ]}
                        >
                            <Input.Password/>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 1,
                                span: 16,
                            }}
                        >
                            <button className="login__submit form__submit button" type="submit">Sign in</button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>

        </MainLayout>
    )
}

export const getServerSideProps = reduxWrapper.getServerSideProps(
    (store) => async (context) => {
        return {props: {initialData: {authStatus: false}}};
    }
);
