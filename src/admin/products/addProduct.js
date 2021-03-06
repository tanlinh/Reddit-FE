import React, { Component } from 'react'
import { Menu, Form, Input, Select, DatePicker, InputNumber, Upload, Button, Row, Col, message } from 'antd'
import { Link } from 'react-router-dom'
import image from '../../assets/images/LogoVbiz.jpg';
import 'antd/dist/antd.css';
import axios from 'axios';
import { Router } from 'react-router'
import {
    UserOutlined,
    LogoutOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SolutionOutlined,
    DesktopOutlined,
    CustomerServiceOutlined,
    ClusterOutlined,
    ContainerOutlined
} from '@ant-design/icons';
const myCurrentDate = new Date();
const date = (myCurrentDate.getFullYear() + '-' + (myCurrentDate.getMonth() + 1) + '-' + myCurrentDate.getDate() + ' ' + myCurrentDate.getHours() + ':' + myCurrentDate.getMinutes() + ':' + myCurrentDate.getSeconds());
const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
        return e;
    }

    return e && e.fileList;
};
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
class addProduct extends Component {
    state = {
        collapsed: false,
        username: '',
        content: '',
        shortDecription: '',
        createDate: '',
        date: date,
        image: [],
        submited: false
    };
    handleChange = e => {
        this.setState({ username: e.target.value });
    }
    handleChangeContent = e => {
        this.setState({ content: e.target.value });
    }
    handleChangeshortDecription = e => {
        this.setState({ shortDecription: e.target.value });
    }
    handleChangeDate = e => {
        this.setState({ date: e.target.value });
    }

    handleChangeImage = ({ fileList }) => {
        console.log('fileList', fileList);
        this.setState({ image: fileList });
    }
    handleSubmit = () => {

        let formData = new FormData();
        formData.append("file", this.state.image[0].originFileObj);
        formData.append("name", this.state.username);
        formData.append("content", this.state.content);
        formData.append("status", "Ho???t ?????ng");
        formData.append("shortDescription", this.state.shortDecription);
        formData.append("createDate", this.state.date);
        axios
            .post("http://localhost:8080/addproduct", formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(res => {
                message.info('Th??m s???n ph???m/d???ch v??? th??nh c??ng');
                setTimeout(() => {
                    this.props.history.push('/productManagement')
                }, 3000);
            })
            .catch(err => {
                console.log("err", err);
            })

        // handleSubmit = () => {
        //     const product = {
        //         name: this.state.username,
        //         content: this.state.content,
        //         shortDecription: this.state.shortDecription,
        //         createDate: this.state.date,
        //         status: 'Ho???t ?????ng',
        //         image: this.state.image

        //     }
        //     console.log(this.state.image)
        //     axios.post(`http://localhost:8080/addproduct`, product, {
        //         headers: {
        //             "Content-type": "application/json",
        //             "Access-Control-Allow-Origin": "*"

        //         },
        //         responseType: 'json'
        //     }
        //     ).then(res => {
        //         message.info('Th??m s???n ph???m/d???ch v??? th??nh c??ng');
        //         setTimeout(() => {
        //             this.props.history.push('/productManagement')
        //         }, 3000);
        //         console.log(res);
        //     }).catch(err => {
        //         console.log(err);
        //     })

    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return (
            <div className="block admin" style={{ background: '#fff' }}>
                <div className="container-fluid" >
                    <div className="header">
                        <Link to="/admin"><img src={image} style={{ width: 80 }} alt=""></img></Link>
                        <Menu mode="horizontal">
                            <Menu.Item key="home" style={{ fontSize: 20, color: 'white' }}><Link to="/admin"><UserOutlined style={{ fontSize: 25 }} />Admin@admin.com </Link></Menu.Item>
                            <Menu.Item key="setting:9" style={{ fontSize: 20, color: 'white' }}><Link to="/login">LOGOUT <LogoutOutlined style={{ fontSize: 25 }} /></Link></Menu.Item>
                        </Menu>
                    </div>
                </div>
                <div className="container-pageDetail ">
                    <div className="container-fluid ">

                        <Row gutter={[16, 16]}>
                            <Col sm={{ span: 6 }} md={{ span: 6.5 }}>   <div style={{ width: 280 }} >
                                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 6 }}>
                                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                                </Button>
                                <Menu
                                    defaultSelectedKeys={['2']}
                                    defaultOpenKeys={['sub1']}
                                    mode="inline"
                                    theme="dark"
                                    inlineCollapsed={this.state.collapsed}

                                >
                                    <Menu.Item key="1" icon={<SolutionOutlined />} style={{ color: 'white' }}>
                                        <Link to="/admin"> Qu???n l?? kh??ch h??ng</Link>
                                    </Menu.Item>
                                    <Menu.Item key="2" icon={<ClusterOutlined />} style={{ color: 'white' }}>
                                        <Link to="/productManagement"> Qu???n l?? s???n ph???m/ d???ch v???</Link>
                                    </Menu.Item>
                                    <Menu.Item key="3" icon={<DesktopOutlined />} style={{ color: 'white' }}>
                                        Qu???n l?? tin t???c/ s??? ki???n
                                     </Menu.Item>
                                    <Menu.Item key="4" icon={<ContainerOutlined />} style={{ color: 'white' }}>
                                        Qu???n l?? ????nh gi?? c???a kh??ch h??ng
                                     </Menu.Item>
                                    <Menu.Item key="5" icon={<CustomerServiceOutlined />} style={{ color: 'white' }}>
                                        Qu???n l?? h??? tr???/ t?? v???n kh??ch h??ng
                                     </Menu.Item>
                                </Menu>

                            </div></Col>
                            <Col sm={{ span: 18 }}  >
                                <h2 style={{ textAlign: 'center', }}>TH??M M???I D???CH V???/S???N PH???M</h2>
                                <Form {...layout}
                                    labelCol={{
                                        span: 4
                                    }}
                                    wrapperCol={{
                                        span: 14
                                    }}
                                    layout="horizontal"
                                    onFinish={this.handleSubmit}
                                >
                                    <Form.Item
                                        label="Nh???p t??n"
                                        name="username"
                                        rules={[{ required: true, message: 'Vui l??ng nh???p t??n s???n ph???m/d???ch v???' }]}
                                    >
                                        <Input placeholder="s???n ph???m/d???ch v???"
                                            onChange={this.handleChange}
                                        />
                                    </Form.Item>
                                    <Form.Item label="Nh???p ti??u ?????"
                                        name="content"
                                        rules={[{ required: true, message: 'Vui l??ng nh???p ti??u ????? s???n ph???m/d???ch v???' }]}
                                    >

                                        <Input placeholder="s???n ph???m/d???ch v???"
                                            onChange={this.handleChangeContent}
                                        />
                                    </Form.Item>
                                    <Form.Item label="Nh???p m?? t???"
                                        name="shortDecription"
                                        rules={[{ required: true, message: 'Vui l??ng nh???p th??ng tin m?? t??? s???n ph???m/d???ch v???' }]}
                                    >

                                        <Input.TextArea placeholder="s???n ph???m/d???ch v???"
                                            onChange={this.handleChangeshortDecription} />
                                    </Form.Item>

                                    <Form.Item label="Ng??y t???o"
                                        name="createDate"
                                    >
                                        {/* <DatePicker
                                        defaultValue = {this.state.date}
                                        disabled
                                       /> */}
                                        <Input style={{ width: 148 }} defaultValue={this.state.date}
                                            onChange={this.handleChangeDate} disabled />
                                    </Form.Item>
                                    <Form.Item
                                        name="image"
                                        label="Upload Image"
                                        valuePropName="fileList"
                                        getValueFromEvent={normFile}
                                    // extra="longgggggggggggggggggggggggggggggggggg"
                                    >
                                        <Upload name="logo" action="/upload.do" listType="picture" onChange={this.handleChangeImage}>
                                            <Button icon={<UploadOutlined />}>Click to upload</Button>

                                        </Upload>
                                    </Form.Item>
                                    <Form.Item
                                        wrapperCol={{
                                            span: 12,
                                            offset: 6,
                                        }}
                                    >
                                        <Button type="primary" htmlType="submit" >
                                            L??u s???n ph???m/d???ch v???
                                       </Button>
                                    </Form.Item>
                                </Form>
                            </Col>

                        </Row>


                    </div>
                </div>
            </div >
        )
    }
}

export default addProduct
