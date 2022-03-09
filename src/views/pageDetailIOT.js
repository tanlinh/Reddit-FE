import React from 'react'
import Appheader from '../component/common/header';
import { Row, Col, Button } from 'antd';
import { Layout, } from 'antd';
import AppFooter from '../component/common/footer';
import CopyRight from '../component/common/copyRight';
import image from '../assets/images/products/IOT.jpg';
import { Link } from 'react-router-dom'

const { Header, Content, Footer } = Layout;

function pageDetailIOT() {

    window.scrollTo(0, 0);
    const Items = [
        {
            title: <div className="title-pageDetail">
                <h2 style={{ fontSize: 19 }}><b>HỆ THỐNG GIÁM SÁT CÂY XANH </b></h2>
                <ul>
                    <li><b>Hệ thống giám sát cây xanh</b> là một hệ thống đọc dữ liệu đo được nhận từ thiết bị mỗi giờ, Lọc bộ dữ liệu theo một loạt các tiêu chí: vị trí, khu vực, tên loại cây...</li>
                    <li>Cho phép chụp hình cây xanh: đưa ra các thông số chiều cao, độ nghiêng (có thể sửa lại giá trị chiều cao, độ nghiêng).</li>
                    <li>Cho phép người triển khai xác định quanh vị trí đang đứng có các cây xanh nào đã được gắn cảm biến hay không, và khi chọn 1 cây đã được gắn cảm biến sẽ hiển thị thông tin về cây đó như: tình trạng, độ nghiêng, hướng nghiêng, điện áp pin, giá trị các thông số cảm biến môi trường…</li>
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
            title: 'AI chăm sóc khách hàng (BulkSMS)',
        },
        {
            key: <div className="container-iconpageDetail">
                <i class="fas fa-code" ></i>
            </div>,
            title: 'AI quảng cáo (AMS)',
        },
        {
            key: <div className="container-iconpageDetail">
                <i class="fa fa-paint-brush"></i>
            </div>,
            title: 'Dịch vụ Quảng cáo khác',
        },
        {
            key: <div className="container-iconpageDetail">
                <i class="fa fa-rocket"></i>
            </div>,
            title: 'Đăng ký để nhận tin quảng cáo',
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
                        <Button type="primary" href="/" size="large">Đăng kí</Button>
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

export default pageDetailIOT
