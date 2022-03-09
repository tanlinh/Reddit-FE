import React from 'react'
import Appheader from '../component/common/header';
import { Row, Col, Button } from 'antd';
import { Layout, } from 'antd';
import AppFooter from '../component/common/footer';
import CopyRight from '../component/common/copyRight';
import image from '../assets/images/products/Travel.jpg';
import { Link } from 'react-router-dom'

const { Header, Content, Footer } = Layout;

function pageDetailTravel() {

    window.scrollTo(0, 0);
    const Items = [
        {
            title: <div className="title-pageDetail">
                <h2 style={{ fontSize: 19 }}><b>TRAVEL - Giải pháp kết nối du lịch </b></h2>
                <ul>
                    <li>Giải pháp này ra đời với sứ mệnh đặt phòng khách sạn trực tuyến thông qua vài tham tác đơn giản, linh hoạt và bảo mật. Từ đây khách hàng có thể đặt phòng bất cứ khi nào và bất cứ đâu thông qua website hoặc ứng dụng di động.</li>
                    <li>Ngoài ra, chúng tôi đã cung cấp trãi nhiệm trân thực với công nghệ ảnh 360 độ làm xóa đi nỗi lo về ảnh phòng khách sạn không giống thực tế, từ đó giúp khách hàng an tâm đặt phòng.</li>
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
            title: 'Đặt phòng khách sạn, homestay',
        },
        // {
        //     key: <div className="container-iconpageDetail">
        //         <i class="fas fa-code" ></i>
        //     </div>,
        //     title: 'Quản lý khách hàng',
        // },
        {
            key: <div className="container-iconpageDetail">
                <i class="fa fa-paint-brush"></i>
            </div>,
            title: 'Quản lý các chương trình khuyến mãi,chăm sóc khách hàng',
        },
        {
            key: <div className="container-iconpageDetail">
                <i class="fa fa-rocket"></i>
            </div>,
            title: 'Quản lý cơ sở lưu trú',
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

export default pageDetailTravel
