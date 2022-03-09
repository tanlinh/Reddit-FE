import React, { Component } from 'react'
import { Menu, Table, Tag, Space, Input, Row, Col } from 'antd'
import { Link } from 'react-router-dom'
import image from '../assets/images/LogoVbiz.jpg';
import 'antd/dist/antd.css';
import { Popconfirm, Button } from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    SolutionOutlined,
    DesktopOutlined,
    UserOutlined,
    LogoutOutlined,
    CustomerServiceOutlined,
    ClusterOutlined,
    ContainerOutlined
} from '@ant-design/icons';
const { Column } = Table;
const { Search } = Input;

const onSearch = value => console.log(value);
const data = [
    {
        key: '1',
        firstName: 'John',
        lastName: 'Brown',
        age: 312321322,
        address: 'New York No. 1 Lake Park',
        tags: ['Hoạt động'],
    },
    {
        key: '2',
        firstName: 'Jim',
        lastName: 'Green',
        age: 4212321321,
        address: 'London No. 1 Lake Park',
        tags: ['Ngưng hoạt động'],
    },
    {
        key: '3',
        firstName: 'Joe',
        lastName: 'Black',
        age: 321232131,
        address: 'Sidney No. 1 Lake Park',
        tags: ['Hoạt động'],
    },
];
function confirm(e) {
    console.log(e);
    //  message.success('Click on Yes');
}

function cancel(e) {
    console.log(e);
    // message.error('Click on No');
}

class homeAdmin extends Component {
    state = {
        collapsed: false,
    };

    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
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
                            <Col span={6} >   <div style={{ width: 280 }} >
                                <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 6 }}>
                                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
                                </Button>
                                <Menu
                                    defaultSelectedKeys={['1']}
                                    defaultOpenKeys={['sub1']}
                                    mode="inline"
                                    theme="dark"
                                    inlineCollapsed={this.state.collapsed}

                                >
                                    <Menu.Item key="1" icon={<SolutionOutlined />} style={{ color: 'white' }}>
                                        <Link to="/admin">Quản lý khách hàng</Link>
                                    </Menu.Item>
                                    <Menu.Item key="2" icon={<ClusterOutlined />} style={{ color: 'white' }}>
                                        <Link to="/productManagement">Quản lý sản phẩm/ dịch vụ</Link >
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
                            <Col span={18} >   <Search placeholder="Nhập nội dung cần tìm kiếm" onSearch={onSearch} enterButton style={{ width: 350, marginBottom: 20, marginLeft: 250 }} />
                                <Table dataSource={data} style={{ marginRight: -70 }}>
                                    <Column title="Tên khách hàng" dataIndex="address" key="address" />
                                    <Column title="Số điện thoại" dataIndex="age" key="age" />
                                    <Column title="Địa chỉ" dataIndex="address" key="address" />
                                    <Column title="Email" dataIndex="address" key="address" />
                                    <Column
                                        title="Active"
                                        dataIndex="tags"
                                        key="tags"
                                        render={tags => (
                                            <>
                                                {tags.map(tag => (
                                                    <Tag color="blue" key={tag}>
                                                        {tag}
                                                    </Tag>
                                                ))}
                                            </>
                                        )}
                                    />
                                    <Column
                                        title="Thao tác"
                                        key="action"
                                        render={(text, record) => (
                                            <Space size="middle">
                                                <a >Update</a>
                                                <Popconfirm
                                                    title="Bạn có muốn tạm ngưng khách hàng này?"
                                                    onConfirm={confirm}
                                                    onCancel={cancel}
                                                    okText="Đồng ý"
                                                    cancelText="Không"
                                                >
                                                    <a href="#">Delete</a>
                                                </Popconfirm>
                                            </Space>
                                        )}
                                    />
                                </Table>,
                          </Col>

                        </Row>


                    </div>
                </div>
            </div>

        )
    }
}

export default homeAdmin
