import { React, useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { fetchLogin } from '../../services/restaurant_services';
function Login() {
    const [userName, setUserName] = useState();
    const [passWord, setPassWord] = useState();
    useEffect(() => {}, []);
    const dangNhap = async () => {
        const loginData = {
            userName: userName,
            passWord: passWord,
        };
        try {
            const response = await fetchLogin();
            lo
        } catch (error) {
            console.log('Lỗi');
        }
    };
    return (
        <div>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                wrapperCol={{
                    span: 16,
                }}
                style={{
                    maxWidth: 600,
                }}
                initialValues={{
                    remember: true,
                }}
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
                    <Input
                        onChange={(e) => {
                            setUserName(e.target.value);
                        }}
                    />
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
                    <Input.Password
                        onChange={(e) => {
                            setPassWord(e.target.value);
                        }}
                    />
                </Form.Item>

                <Form.Item
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit" onClick={dangNhap}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default Login;