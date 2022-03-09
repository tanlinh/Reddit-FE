import React, { Component } from 'react'
import Appheader from '../component/common/header';
import { Row, Col, Button } from 'antd';
import { Layout, } from 'antd';
import AppFooter from '../component/common/footer';
import CopyRight from '../component/common/copyRight';
import image from '../assets/images/products/AI.jpg';
import axios from 'axios'
const { Header, Content, Footer } = Layout;

const Items = [
    {
        title: <div className="title-pageDetail">
            <h2 style={{ fontSize: 19 }}><b>AI - Nhận diện giọng nói </b></h2>
            <ul>
                <li><b>AI</b>  là một công nghệ trí tuệ nhân tạo hỗ trợ người dùng thông qua quá trình nghe, hiểu và phản hồi giọng nói một cách tự động.</li>
                <li>Thay thế cho những hệ thống IVR lỗi thời hoặc kết hợp cùng lúc.</li>
                <li>Khai thác thông tin từ những giây liên hệ đầu tiên của khách hàng để phân loại nhu cầu và nhận dạng khách hàng.</li>
                <li>Thực hiện cuộc gọi đi bán hàng tự động. (Chỉ nên sử dụng để khai thác xem khách hàng có nhu cầu thực sự hay không, tuy nhiên quá trình đàm phán phải chịu trách nhiệm bởi nhân viên bán hàng)</li>
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

        iconService: <div className="container-iconpageDetail">
            <i className="fas fa-chart-pie"></i>
        </div>,
        title: 'AI chăm sóc khách hàng (BulkSMS)',
    },
    {
        iconService: <div className="container-iconpageDetail">
            <i className="fas fa-code" ></i>
        </div>,
        title: 'AI quảng cáo (AMS)',
    },
    {
        iconService: <div className="container-iconpageDetail">
            <i className="fa fa-paint-brush"></i>
        </div>,
        title: 'Dịch vụ Quảng cáo khác',
    },
    {
        iconService: <div className="container-iconpageDetail">
            <i className="fa fa-rocket"></i>
        </div>,
        title: 'Đăng ký để nhận tin quảng cáo',
    },
]
class pageDetailAI extends Component {
    state = {
        pagedetails: []
    }

    componentDidMount() {
        const code = this.props.match.params.code;
        axios.get(`http://localhost:8080/products/${code}`, {
            headers: { "Access-Control-Allow-Origin": "*" }
        })
            .then(res => {
                const pagedetails = res.data;
                this.setState({ pagedetails });
                console.log(this.state.pagedetails);
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <Layout className="mainLayout">
                <Header>
                    <Appheader />
                </Header>
                <Content>
                    <div className="container-pageDetail ">
                        <div className="container-fluid ">
                            <Row gutter={[48, 6]} >
                                {/* {this.state.pagedetails.map(icon => { */}
                                {/* return ( */}
                                <Col sm={{ span: 12 }} md={{ span: 12 }}>
                                    <div className="title-pageDetail">
                                        <h2 style={{ fontSize: 19 }}><b>{this.state.pagedetails.name} - {this.state.pagedetails.content}</b></h2>
                                        {/* <ul>
                                            <li><b>AI</b>  là một công nghệ trí tuệ nhân tạo hỗ trợ người dùng thông qua quá trình nghe, hiểu và phản hồi giọng nói một cách tự động.</li>
                                            <li>{this.state.pagedetails.content}</li>
                                        </ul> */}
                                        <ul> <li><b>{this.state.pagedetails.name}</b>{this.state.pagedetails.shortDecription}</li></ul>
                                    </div>

                                </Col>
                                <Col sm={{ span: 12 }} md={{ span: 12 }}>
                                    <img src={process.env.PUBLIC_URL + this.state.pagedetails.image} style={{ width: '100%', height: 'auto' }} alt=""></img>
                                </Col>
                                {/* ); */}
                                {/* })} */}
                            </Row>
                            <Button type="primary" href="/" size="large">Đăng kí</Button>
                        </div>
                        <br></br>

                        <div id="gird" className="block aboutBlock ">
                            <div className="container-fluid function">
                                <h2 style={{ fontSize: 20, marginTop: -10, marginBottom: 50, fontWeight: 700 }}>CHỨC NĂNG</h2>
                                <Row gutter={[16, 16]}>
                                    {ItemsFunction.map(item => {
                                        return (
                                            <Col xs={{ span: 6 }} md={{ span: 6 }} xs={12} xl={6} >
                                                <div className="content" >
                                                    <div className="icon">
                                                        {item.iconService}
                                                    </div>
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
}

export default pageDetailAI
