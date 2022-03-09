import React from 'react'
import Appheader from '../component/common/header';
import { Row, Col, Button } from 'antd';
import { Layout, } from 'antd';
import AppFooter from '../component/common/footer';
import CopyRight from '../component/common/copyRight';
import image from '../assets/images/products/Health.jpg';
import { Link } from 'react-router-dom'

const { Header, Content, Footer } = Layout;

function pageDetailHealth() {

    window.scrollTo(0, 0);
    const Items = [
        {
            title: <div className="title-pageDetail">
                <h2 style={{ fontSize: 19 }}><b>Health - Giải pháp sức khoẻ cộng đồng</b></h2>
                <ul>
                    <li>Giải pháp này ra đời nhằm góp phần rút ngắn các thủ tục hành chính , tránh quá tải trong quá trình khám chữa bệnh nhưng vẫn đảm bảo chất lượng dịch vụ.</li>
                    <li>Giờ đây với bệnh án điện tử bệnh nhân không còn phải mang theo nhiều giấy tờ tất cả đều được lưu lại trong hệ thống.</li>
                    <li>Người dân có mua thuốc ở bất cứ đâu trên lãnh thổ thông qua dịch vụ kê đơn thuốc điện tử.</li>
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
            title: 'Đặt lịch khám bệnh',
        },
        {
            key: <div className="container-iconpageDetail">
                <i class="fas fa-code" ></i>
            </div>,
            title: 'Theo dõi lịch sử khám bệnh',
        },
        {
            key: <div className="container-iconpageDetail">
                <i class="fa fa-paint-brush"></i>
            </div>,
            title: 'Kê đơn thuốc điện tử',
        },
        {
            key: <div className="container-iconpageDetail">
                <i class="fa fa-rocket"></i>
            </div>,
            title: 'Quản lý hồ sơ sức khỏe điện tử',
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

export default pageDetailHealth
