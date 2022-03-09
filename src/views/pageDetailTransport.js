import React from 'react'
import Appheader from '../component/common/header';
import { Row, Col, Button } from 'antd';
import { Layout, } from 'antd';
import AppFooter from '../component/common/footer';
import CopyRight from '../component/common/copyRight';
import image from '../assets/images/products/Transport.jpg';
import { Link } from 'react-router-dom'

const { Header, Content, Footer } = Layout;

const Items = [
    {
        title: <div className="title-pageDetail">
            <h2 style={{ fontSize: 19 }}><b>TRANSPORTS - Tiên phong trong việc đi lại và vận chuyển </b></h2>
            <ul>
                <li>Một trong những ngành đang hot nhất trên thị trường kinh tế ngày nay chính là ngành vận chuyển Logistics, cung cấp chuỗi cung ứng, giao nhận hàng hoá.Tuy nhiên để doanh nghiệp vận tải của bạn nổi bật và chiếm ưu thế trên thương trường này thì điều đầu tiên và quan trọng nhất chính là cách quản lý vận chuyển – vận tải của doanh nghiệp mình, và một trong số công cụ có thể hỗ trợ và tối ưu hoá hiệu quả cho doanh nghiệp vận tải chính là phần mềm quản lý vận tải – vận chuyển.</li>
                <li>Giải pháp quản lý vận tải giúp tối ưu hoá khả năng quản lý thực hiện các khâu vận chuyển bằng một cách tiết kiệm và hiệu quả nhất, thay vì đầu tư nhiều thời gian và nhân công cho việc quản lý các hoạt động này.</li>
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
        title: 'Quản lý đơn hàng',
    },
    {
        key: <div className="container-iconpageDetail">
            <i class="fas fa-code" ></i>
        </div>,
        title: 'Điều phối phương tiện giao hàng',
    },
    {
        key: <div className="container-iconpageDetail">
            <i class="fa fa-paint-brush"></i>
        </div>,
        title: 'Quản lý chi phí',
    },
    {
        key: <div className="container-iconpageDetail">
            <i class="fa fa-rocket"></i>
        </div>,
        title: 'Theo dõi tình trạng đơn hàng',
    },
]

function pageDetailTransport() {

    window.scrollTo(0, 0);
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

export default pageDetailTransport;
