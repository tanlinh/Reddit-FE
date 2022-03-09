import React from 'react'
import Appheader from '../component/common/header';
import { Row, Col, Button } from 'antd';
import { Layout, } from 'antd';
import AppFooter from '../component/common/footer';
import CopyRight from '../component/common/copyRight';
import image from '../assets/images/products/HRM.jpg';
import { Link } from 'react-router-dom'

const { Header, Content, Footer } = Layout;

function pageDetailHRM() {


    window.scrollTo(0, 0);


    const Items = [
        {
            title: <div className="title-pageDetail">
                <h2 style={{ fontSize: 19 }}><b>HRM - Quản lý nhân sự</b></h2>
                <ul>
                    <li>Ngày nay, vai trò của quản trị nhân lực ngày càng được chú trọng. Bởi một trong những nhân tố quyết định thành công của doanh nghiệp chính là chất xám, kinh nghiệm lao động, vì thế nhà quản lý cần tổ chức, sắp xếp và tạo điều kiện môi trường thuận lợi để đội ngũ nhân sự phát triển, cống hiến tốt nhất.</li>
                    <li>Giải pháp HRM giúp tạo ra môi trường làm việc chuyên nghiệp và có được sự phân chia rõ ràng về quy trình xứ lý công việc một cách khoa học đồng thời giúp giảm thiểu số lượng nhân sự trong phòng nhân sự mà hiệu quả công việc vẫn được đảm bảo.</li>
                    <li>Giải pháp được hỗ trợ trên cả hai nền tảng web và ứng dụng di động</li>
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
            title: 'Quản lý tuyển dụng',
        },
        {
            key: <div className="container-iconpageDetail">
                <i class="fas fa-code" ></i>
            </div>,
            title: 'Quản lý đào tạo',
        },
        {
            key: <div className="container-iconpageDetail">
                <i class="fa fa-paint-brush"></i>
            </div>,
            title: ' Quản lý hồ sơ',
        },
        {
            key: <div className="container-iconpageDetail">
                <i class="fa fa-rocket"></i>
            </div>,
            title: ' Quản lý chấm công',
        },
        {
            key: <div className="container-iconpageDetail">
                <i class="fa fa-rocket"></i>
            </div>,
            title: 'Quản lý tiền lương',
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

export default pageDetailHRM
