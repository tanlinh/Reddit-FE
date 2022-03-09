import React, { Component } from 'react'
import { Menu, Table, Tag, Space, Input, Row, Col, Upload, message, Modal, Form } from 'antd'
import { Link } from 'react-router-dom'
import image from '../assets/images/LogoVbiz.jpg';
import 'antd/dist/antd.css';
import { Popconfirm, Button } from 'antd';
import axios from 'axios';
import { Redirect } from 'react-router';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SolutionOutlined,
    UploadOutlined,
    DesktopOutlined,
    UserOutlined,
    LogoutOutlined,
    CustomerServiceOutlined,
    ClusterOutlined,
    ContainerOutlined
} from '@ant-design/icons';
const { Column } = Table;
const { Search } = Input;
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
        return e;
    }

    return e && e.fileList;
};


const onSearch = value => console.log(value);

function cancel(e) {
    console.log(e);
    // message.error('Click on No');
}

const myCurrentDate = new Date();
const date = (myCurrentDate.getFullYear() + '-' + (myCurrentDate.getMonth() + 1) + '-' + myCurrentDate.getDate() + ' ' + myCurrentDate.getHours() + ':' + myCurrentDate.getMinutes() + ':' + myCurrentDate.getSeconds());
class homeProductManagement extends Component {
    state = {
        collapsed: false,
        persons: [],
        data: [],
        id: '',
        content: '',
        title: '',
        shortDecription: '',
        nameModal: '',
        contentModal: '',
        shortDecriptionModal: '',
        createDateUpdate: date,
        image: '',
        fields: {},
    };
    handleChange = e => {
        this.setState({ nameModal: e.target.value });
    }
    handleChangeContent = e => {
        this.setState({ contentModal: e.target.value });
    }
    handleChangeshortDecription = e => {
        this.setState({ shortDecriptionModal: e.target.value });
    }
    handleChangeDate = e => {
        this.setState({ date: e.target.value });
    }
    handleChangeImage = e => {
        this.setState({ image: e });
    }
    handleOkHa = (id) => {
        const updateProduct = {
            id: id,
            name: this.state.nameModal,
            content: this.state.contentModal,
            createDate: this.state.createDateUpdate,
            shortDecription: this.state.shortDecriptionModal
        }
        let formData = new FormData();
        console.log(this.state.nameModal)
        formData.append("name", this.state.nameModal);
        formData.append("content", this.state.contentModal);
        formData.append("file", this.state.image);
        formData.append("shortDescription", this.state.shortDecriptionModal);
        formData.append("createDate", this.state.createDateUpdate);

        axios.put(`http://192.168.1.9:8080/update/${id}`, formData, {
            headers: {
                "Access-Control-Allow-Origin": "*",
                'Content-Type': 'multipart/form-data'
            },
            responseType: 'json'
        }).then(res => {
            message.info('Cập nhật sản phẩm dịch vụ thành công');
            setTimeout(() => {
                window.location.reload();
            }, 2000);
            console.log(res);
        }).catch(err => {
            console.log(err);
        });
    };

    handleCancel = () => {
        setTimeout(() => {
            window.location.reload();
        }, 0.0121)
        this.forceUpdate();
        this.setState({
            visible: false,

        });
    };
    setStateValue(id, nameModal, contentModal, titleModal, shortDecriptionModal, image) {
        this.setState({
            id, nameModal, contentModal, titleModal, shortDecriptionModal, image,
            visible: true,
        })
    }
    confirm(id) {
        const persons = [...this.state.persons];
        console.log(persons);
        console.log(id);
        setTimeout(() => {
            axios.put(`http://192.168.1.9:8080/updateStatus/${id}`, {
                headers: {
                    "Content-type": "application/json",
                    "Access-Control-Allow-Origin": "*"
                },
                responseType: 'json'
            }).then(res => {
                message.info('Tạm ngưng sản phẩm/dịch vụ thành công');
                window.location.reload();
                console.log(res);
            }).catch(err => {
                console.log(err);
            });
            // this.setState({
            //     persons: persons.filter(item => item.id !== id),
            // })
        }, 2000);

    }

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    componentDidMount() {
        axios.get(`http://192.168.1.9:8080/productsStatus`, {
            headers: { "Access-Control-Allow-Origin": "*" }, responseType: 'json'
        })
            .then(res => {
                this.setState({ persons: res.data });
            })
            .catch(error => console.log(error));
    }

    render() {
        const { visible, loading } = this.state;
        const { persons } = this.state;
        return (
            <div className="block admin" style={{ background: '#fff' }}>
                <div id="header" className="container-fluid" >
                    <div className="header">
                        <Link to="/admin"><img src={image} style={{ width: 80 }} alt=""></img></Link>
                        <Menu mode="horizontal">
                            <Menu.Item key="admin" style={{ fontSize: 20, color: 'white' }}><Link to="/admin"><UserOutlined style={{ fontSize: 25 }} />Admin@admin.com </Link></Menu.Item>
                            <Menu.Item key="setting:9" style={{ fontSize: 20, color: 'white' }}><Link to="/login">LOGOUT <LogoutOutlined style={{ fontSize: 25 }} /></Link></Menu.Item>
                        </Menu>
                    </div>
                </div>
                <div className="container-pageDetail ">
                    <div className="container-fluid ">
                        <Row gutter={[16, 16]}>
                            <Col sm={{ span: 6 }}  >   <div style={{ width: 280 }} >
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
                                    <Menu.Item key="1" icon={<SolutionOutlined />} >
                                        <Link to="/admin">Quản lý khách hàng</Link>
                                    </Menu.Item>
                                    <Menu.Item key="2" icon={<ClusterOutlined />} style={{ color: 'white' }}>
                                        <Link to="/productManagement">Quản lý sản phẩm/ dịch vụ</Link>
                                    </Menu.Item>
                                    <Menu.Item key="3" icon={<DesktopOutlined />} style={{ color: 'white' }}>
                                        Quản lý tin tức/ sự kiện
                                 </Menu.Item>
                                    <Menu.Item key="4" icon={<ContainerOutlined />} style={{ color: 'white' }}>
                                        Quản lý đánh giá của khách hàng
                                 </Menu.Item>
                                    <Menu.Item key="5" icon={<CustomerServiceOutlined />} style={{ color: 'white' }}>
                                        Quản lý hổ trợ/ tư vấn khách hàng
                                 </Menu.Item>
                                </Menu>

                            </div></Col>
                            <Col sm={{ span: 18 }} >
                                {/* <Search placeholder="Nhập nội dung cần tìm kiếm" onSearch={onSearch} enterButton style={{ width: 350, marginBottom: 20, marginLeft: 250 }} /> */}
                                <Table dataSource={persons} style={{ marginRight: -70 }} pagination={{ defaultPageSize: 2 }}>
                                    <Column title="id" dataIndex="id" key="address" />
                                    <Column title="Tên sản phẩm/dịch vụ" dataIndex="name" key="address" />
                                    <Column title="Tiêu đề" dataIndex="content" key="age" />
                                    <Column title="Mô tả" dataIndex="shortDecription" key="address" />
                                    <Column title="Ngày tạo sản phẩm/dịch vụ" dataIndex="createDate" key="address" />
                                    <Column

                                        title="Trạng thái"
                                        dataIndex="status"
                                        key="tags"

                                    />
                                    <Column
                                        title="Thao tác"
                                        key="action"
                                        render={(text, record) => this.state.persons.length >= 1 ? (
                                            <Space size="middle">
                                                <Button type="primary"
                                                    onClick={e => {
                                                        this.setStateValue(record.id, record.name, record.content, record.title, record.shortDecription, record.image);
                                                    }}
                                                >Update</Button>
                                                <Modal
                                                    width={1000}
                                                    visible={visible}
                                                    title="Cập nhật thông tin sản phẩm/dịch vụ"
                                                    onOk={this.handleOk}
                                                    onCancel={this.handleCancel}

                                                    footer={[
                                                        <Button key="back" style={{ marginLeft: 10 }}
                                                            onClick={this.handleCancel
                                                            }
                                                        >
                                                            Trở về
            </Button>,
                                                        <Button type="primary" htmlType="submit"
                                                            Form="myForm"
                                                            onClick={e => {
                                                                this.handleOkHa(this.state.id, this.state.nameModal, this.state.contentModal, this.state.shortDecriptionModal);
                                                            }}

                                                        >
                                                            Cập nhật
            </Button>,
                                                    ]}
                                                >
                                                    <Form
                                                        id="myForm"
                                                        {...layout}
                                                        labelCol={{
                                                            span: 4
                                                        }}
                                                        wrapperCol={{
                                                            span: 14
                                                        }}
                                                        layout="horizontal"
                                                        onFinish={this.handleOk}
                                                    >
                                                        <Form.Item
                                                            label="Tên sản phẩm/dịch vụ"
                                                            name="nameModal"

                                                        >
                                                            <Input
                                                                onChange={this.handleChange}
                                                                defaultValue={this.state.nameModal}
                                                            />
                                                        </Form.Item>
                                                        <Form.Item label="Tên tiêu đề"
                                                            name="contentModal"
                                                        >

                                                            <Input
                                                                value={this.state.fields["contentModal"]}
                                                                defaultValue={this.state.contentModal}
                                                                onChange={this.handleChangeContent}
                                                            />
                                                        </Form.Item>
                                                        <Form.Item label="Tên mô tả"
                                                            name="shortDecriptionModal"
                                                        >

                                                            <Input.TextArea
                                                                defaultValue={this.state.shortDecriptionModal}
                                                                onChange={this.handleChangeshortDecription}
                                                            />
                                                        </Form.Item>

                                                        <Form.Item label="Ngày cập nhật"
                                                            name={this.state.createDateUpdate}
                                                        >
                                                            <Input style={{ width: 148 }} defaultValue={this.state.createDateUpdate}
                                                                onChange={this.handleChangeDate} disabled />
                                                        </Form.Item>
                                                        <Form.Item
                                                            name="imageModal"
                                                            label="Upload Image"
                                                            valuePropName="fileList"
                                                            getValueFromEvent={normFile}
                                                        >
                                                            <Input
                                                                style={{ width: 350 }}
                                                                defaultValue={this.state.image}
                                                            />
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
                                                        </Form.Item>
                                                    </Form>
                                                </Modal>
                                                <Popconfirm
                                                    title="Bạn có muốn tạm ngưng sản phẩm/dịch vụ này?"

                                                    onConfirm={e => {
                                                        this.confirm(record.id, e)
                                                    }}
                                                    onCancel={cancel}
                                                    okText="Đồng ý"
                                                    cancelText="Không"
                                                    dataIndex="id"
                                                >
                                                    <Button type="danger">Delete</Button>
                                                </Popconfirm>
                                            </Space>
                                        ) : null}
                                    />

                                </Table>,
                          <Link to="/addProduct"> <Button type="primary" style={{ height: 40 }}><p style={{ fontSize: 17 }}>Thêm mới sản phẩm/ dịch vụ</p></Button></Link></Col>

                        </Row>


                    </div>
                </div>
            </div>

        )
    }
}

export default homeProductManagement
