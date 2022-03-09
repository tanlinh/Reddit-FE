import React from 'react'
import Appheader from '../component/common/header';
import { Row, Col, Button } from 'antd';
import { Layout, } from 'antd';
import AppFooter from '../component/common/footer';
import CopyRight from '../component/common/copyRight';
import image from '../assets/images/products/CRM.jpg';
import { Link } from 'react-router-dom'
 
const { Header, Content, Footer } = Layout;

function pageDetailCRM() {

    window.scrollTo(0, 0);
    const Items = [
        {
            title: <div className="title-pageDetail">
                <h2 style={{ fontSize: 19 }}><b>CRM - Quản lý khách hàng</b></h2>
                <ul>
                    <li> Trong thị trường cạnh tranh, khách hàng là nhân tố tạo nên sự thành công cho doanh nghiệp, do đó các giải pháp CRM ngày càng trở nên quan trọng hơn.</li>
                    <li>Mục tiêu của giải pháp là quản lý các quan hệ khách hàng, một chiến lược kinh doanh mà mọi doanh nghiệp theo đuổi nhằm giảm chi phí và tăng lợi nhuận bằng việc củng cố sự hài lòng của khách hàng, từ đó kết nối doanh nghiệp gần gữi hơn với khách hàng của mình.</li>
                    <li> Giải pháp hổ trợ trên cả hai nền tảng website và ứng dụng di động.</li>
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
            title: 'Quản lý thông tin khách hàng',
        },
        {
            key: <div className="container-iconpageDetail">
                <i class="fas fa-code" ></i>
            </div>,
            title: 'Theo dõi cơ hội bán hàng.',
        },
        {
            key: <div className="container-iconpageDetail">
                <i class="fa fa-paint-brush"></i>
            </div>,
            title: 'Quản lý dịch vụ khách hàng (yêu cầu bảo hàng, hỗ trợ, khiếu nại của khách hàng,lịch gọi,...)',
        },
        {
            key: <div className="container-iconpageDetail">
                <i class="fa fa-rocket"></i>
            </div>,
            title: 'Thống kê, báo cáo',
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

export default pageDetailCRM
