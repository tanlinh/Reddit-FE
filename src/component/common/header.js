import React, { useState, Component } from 'react';
import { Button, Menu, Drawer } from 'antd';
import { Link } from 'react-router-dom'
import image from '../../assets/images/LogoVbiz.jpg';
//const { Link } = Anchor;
const { SubMenu } = Menu;
function Appheader() {

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return (
        <div id="header" className="container-fluid">
            <div className="header">
                <Link to="/"><img src={image} style={{ width: 150 }} alt=""></img></Link>
                <div className="mobileHidden">
                    <Menu mode="horizontal" style={{ letterSpacing: 0 }} defaultSelectedKeys={['home']}>
                        <Menu.Item key="home" style={{ fontSize: 20 }}><Link to="/">Trang chủ</Link></Menu.Item>
                        {/* <Menu.Item key="setting:10" style ={{ fontSize: 20 }}><Link to="/pageDetailAI">Trang chủ</Link></Menu.Item> */}
                        <SubMenu title="Giải pháp CNTT" style={{ fontSize: 20, marginBottom: -2 }} mode="horizontal" >
                            <Menu.Item key="setting:3"><Link to="/pageDetailTravel">TRAVEL</Link></Menu.Item>
                            <Menu.Item key="setting:4"><Link to="/pageDetailHealth">HEALTH</Link></Menu.Item>
                            <Menu.Item key="setting:6"><Link to="/pageDetailTransport">TRANSPORT</Link></Menu.Item>
                            <Menu.Item key="setting:7"><Link to="/pageDetailLoyalty">LOYALTY</Link></Menu.Item>
                            <Menu.Item key="setting:8"><Link to="/pageDetailCRM">CRM</Link></Menu.Item>
                            <Menu.Item key="setting:9"><Link to="/pageDetailHRM">HRM</Link></Menu.Item>
                            <Menu.Item key="setting:10"><Link to="/pageDetailEcommerce">ECOMMERCE</Link></Menu.Item>
                        </SubMenu>
                        {/* <SubMenu title="Liên hệ" style={{ fontSize: 20, position: 'relative' }} >
                            </SubMenu> */}
                        <Menu.Item key="setting:9" style={{ fontSize: 20 }}><Link to="/pageContact">Liên hệ</Link></Menu.Item>
                    </Menu>
                </div>
                <div className="mobileVisible">
                    <Button type="primary" onClick={showDrawer}>
                        <i className="fas fa-bars"></i>
                    </Button>
                    <Drawer
                        placement="right"
                        closable={false}
                        onClose={onClose}
                        visible={visible}
                    >
                        <Menu mode="inline" style={{ letterSpacing: 0 }} >
                            {/* <SubMenu key="mail" title="Trang chủ" style={{ fontSize: 20 }} mode="horizontal" to="/">
                                </SubMenu> */}
                            <Menu.Item key="homeReponsive" style={{ fontSize: 20 }}><Link to="/">Trang chủ</Link></Menu.Item>
                            <SubMenu key="setting:9" title="Giải pháp CNTT" style={{ fontSize: 20, marginLeft: 7 }} mode="horizontal" >
                                <Menu.Item key="setting:3"><Link to="/pageDetailTravel">TRAVEL</Link></Menu.Item>
                                <Menu.Item key="setting:4"><Link to="/pageDetailHealth">HEALTH</Link></Menu.Item>
                                <Menu.Item key="setting:5"><Link to="/pageDetailTransport">TRANSPORT</Link></Menu.Item>
                                <Menu.Item key="setting:6"><Link to="/pageDetailLoyalty">LOYALTY</Link></Menu.Item>
                                <Menu.Item key="setting:8"><Link to="/pageDetailCRM">CRM</Link></Menu.Item>
                                <Menu.Item key="setting:9"><Link to="/pageDetailHRM">HRM</Link></Menu.Item>
                                <Menu.Item key="setting:10"><Link to="/pageDetailEcommerce">ECOMMERCE</Link></Menu.Item>
                            </SubMenu>
                            {/* <SubMenu key="contact" title="Liên hệ" style={{ fontSize: 20 }} mode="horizontal" href="/">
                                </SubMenu> */}
                            <Menu.Item key="setting:8" style={{ fontSize: 20 }}><Link to="/pageContact">Liên hệ</Link></Menu.Item>
                        </Menu>
                    </Drawer>
                </div>
            </div>

        </div>

    );

}
export default Appheader;
