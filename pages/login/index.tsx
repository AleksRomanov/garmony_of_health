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

export default function Login() {
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

    const onFinish = (values) => {
        console.log('Success:', values);
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
                <Col span={24}>
                    <Text style={{display: "flex", justifyContent: "center", fontSize: "4.2em", marginBottom: "30px"}} mark>Login Page</Text>
                    {/*<Input.Password placeholder="input password" />*/}
                    {/*<Input.Password*/}
                    {/*    placeholder="input password"*/}
                    {/*    iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)}*/}
                    {/*/>*/}
                    <Form
                        name="basic"
                        labelCol={{
                            span: 2,
                        }}
                        wrapperCol={{
                            span: 22,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input your username!',
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
                            name="remember"
                            valuePropName="checked"
                            wrapperCol={{
                                offset: 1,
                                span: 16,
                            }}
                        >
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item
                            wrapperCol={{
                                offset: 1,
                                span: 16,
                            }}
                        >
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Col>
            </Row>

            <button onClick={linkClickHandler}>To Books List</button>
        </MainLayout>
    )

}
