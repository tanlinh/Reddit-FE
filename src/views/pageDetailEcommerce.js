import React from 'react'
import Appheader from '../component/common/header';
import { Row, Col, Button } from 'antd';
import { Layout, } from 'antd';
import AppFooter from '../component/common/footer';
import CopyRight from '../component/common/copyRight';
import image from '../assets/images/products/Ecommerce.jpg';
import { Link } from 'react-router-dom'

const { Header, Content, Footer } = Layout;

function pageDetailEcommerce() {

    window.scrollTo(0, 0);
    const Items = [
        {
            title: <div className="title-pageDetail">
                <h2 style={{ fontSize: 19 }}><b>Ecommerce - thương mại điện tử</b></h2>
                <ul>
                    <li>Hiện nay trên thị trường tràn lan các phần mềm quản lý bán hàng không có thương hiệu khiến cho các doanh nghiệp vừa và nhỏ dễ mắc sai lầm trong việc đưa ra quyết định lựa chọn sản phẩm.</li>
                    <li>Chi phí thấp nhưng hiệu quả lớn là những gì mà giải pháp Ecommerce hướng đến nhằm giúp các doanh nghiệp vừa và nhỏ có được một giải pháp quản lý bán hàng toàn diện bên cạnh một nguồn ngân sách có hạn.</li>
                    <li>Giải pháp được hỗ trợ trên cả hai nền tảng web và ứng dụng di động.</li>
                </ul>

            </div>
        },
        {
            content: <div className="content1">
                <img src={image} style={{ width: '100%', height: 'auto' }} alt=""></img>
            </div>
        },
    ]

    const ItemsFunction = [
        {

            key: <div className="container-iconpageDetail">
                <i class="fas fa-chart-pie"></i>
            </div>,
            title: 'Quản lý sản phẩm',
        },
        {
            key: <div className="container-iconpageDetail">
                <i class="fas fa-code" ></i>
            </div>,
            title: 'Quản lý bán hàng tại của hàng',
        },
        {
            key: <div className="container-iconpageDetail">
                <i class="fa fa-paint-brush"></i>
            </div>,
            title: 'Quản lý đơn hàng online',
        },
        {
            key: <div className="container-iconpageDetail">
                <i class="fa fa-rocket"></i>
            </div>,
            title: 'Quản lý chăm sóc khách hàng',
        },
    ]
    return (
        <Layout className="mainLayout">
            <Header>
                <Appheader />
            </Header>
            <Content>

                <div className="container-pageDetail ">

                    <div className="container-fluid ">
                        <Row gutter={[48, 6]}>
                            {Items.map(item => {
                                return (
                                    <Col sm={{ span: 12 }} md={{ span: 12 }}>
                                        {item.title}
                                        {item.content}
                                    </Col>

                                );
                            })}
                        </Row>
                      

                        <Button className="demoButton" type="primary" href="/" size="large" ><Link to="/pageContact" >Demo</Link></Button>
                    </div>
                    <br></br>

                    <div id="gird" className="block aboutBlock pageDetail-fucntion">
                        <div className="container-fluid function">
                            <h2 style={{ fontSize: 20, marginTop: -10, marginBottom: 50, fontWeight: 700 }}>CHỨC NĂNG</h2>
                            <Row gutter={[16, 16]}>
                                {ItemsFunction.map(item => {
                                    return (
                                        <Col xs={{ span: 6 }} md={{ span: 6 }} xs={12} xl={6} >
                                            <div className="content">
                                                <div className="icon">
                                                    {item.key}
                                                </div>
                                            </div>
                                            <div className="content">
                                                <p>{item.title}</p>
                                            </div>
                                        </Col>
                                    );
                                })}
                            </Row>

                        </div>
                    </div>

                    <div id="gird" className="block aboutBlock">
                        <div className="container-fluid function">
                            <h2>BẢNG BÁO GIÁ</h2>
                            <p>LIÊN HỆ VỚI CHÚNG TÔI</p>

                        </div>
                    </div>
                </div>
            </Content>
            <Footer>
                <AppFooter />
                <CopyRight />
            </Footer>
        </Layout>
    )
}

export default pageDetailEcommerce
