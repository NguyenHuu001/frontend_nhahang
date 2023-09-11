import { React, useEffect, useState } from 'react';
import { Button, Form, Input, notification } from 'antd';
import { fetchLogin } from '../../services/restaurant_services';
import './login.scss';
import CryptoJS from 'crypto-js';
function Login() {
    //AES
    const key = '1234567890123456';
    const iv = '1234567890123456';
    const [userName, setUserName] = useState();
    const [passWord, setPassWord] = useState();
    useEffect(() => {}, []);
    function encrypt(data) {
        const encryptedData = CryptoJS.AES.encrypt(data, key, {
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7,
        });
        return encryptedData.toString();
    }
    const dangNhap = async () => {
        const newpass = encrypt(passWord);
        console.log(newpass);
        try {
            const loginData = {
                username: userName,
                password: newpass,
            };
            const config = {
                withCredentials: true,
            };
            if (userName && passWord) {
                const response = await fetchLogin(loginData, config).then((res) => {
                    const da = res.data[0];
                    if (da[1]) {
                        localStorage.setItem('userName', da[1]);
                        notification.open({
                            type: 'success',
                            message: 'Đăng nhập thành công',
                            description: '',
                            duration: 2,
                        });
                    }
                });
            } else {
                notification.open({
                    type: 'error',
                    message: 'Thông Báo Lỗi',
                    description: 'Vui lòng điền UserName hoặc PassWord',
                    duration: 2,
                });
            }
        } catch (error) {
            notification.open({
                type: 'error',
                message: 'Đăng nhập thất bại',
                description: '',
                duration: 2,
            });
        }
    };
    return (
        <div className='d-flex'>
            <div className='login'>
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
        </div>
    );
}

export default Login;
