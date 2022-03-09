import { Form, Input, Button, Checkbox, Row, message } from 'antd';
import { Component } from 'react';
import logo from '../assets/images/logoLogin.png';
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

class Demo extends Component {
    state = {
        username: '',
        password: ''
    }
    handleUsername = e => {
        this.setState({
            username: e.target.value
        });
    }
    handlePassword = e => {
        this.setState({
            password: e.target.value
        });
    }
    handeLogin(username, password) {
        console.log(username);
        console.log(password);
        if (username == "" || password == "") {

            this.props.history.push('/login')
        }
        else if (username == "admin" && password == "admin") {
            message.info("Đăng nhập thành công");
            setTimeout(() => {
                this.props.history.push('/admin')
            }, 2000)
        }
        else {
            message.info("Tài khoản và mật khẩu không chính xác");
            setTimeout(() => {
                window.location.reload();
            }, 1000)


        }

    }
    //    onFinish = (values) => {
    //     console.log('Success:', values);
    //   };

    //    onFinishFailed = (errorInfo) => {
    //     console.log('Failed:', errorInfo);
    //   };
    render() {
        return (
            <div className='divlogin'>

                <Form className='formLogin'
                    {...layout}
                    ref={(el) => this.myFormRef = el}
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                //   onFinish={onFinish}
                //   onFinishFailed={onFinishFailed}
                >
                    <img className='logoLogin' src={logo}></img>
                    <div className='divItemLogin'>
                        <Form.Item className='formItem'
                            label="Username"
                            name="username"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập username!',
                                },
                            ]}
                        >
                            <Input
                                onChange={this.handleUsername}

                            />
                        </Form.Item>

                        <Form.Item className="formItem"
                            label="Password"
                            name="password"
                            rules={[
                                {
                                    required: true,
                                    message: 'Vui lòng nhập password!',
                                },
                            ]}
                        >
                            <Input.Password
                                onChange={this.handlePassword}

                            />
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" style={{ background: "#a0d911", borderColor: "white" }} htmlType="submit" onClick={e => {
                                this.handeLogin(this.state.username, this.state.password);
                            }}>
                                Login
            </Button>
                        </Form.Item>

                    </div>
                </Form>
            </div>

        );
    };
};



export default Demo