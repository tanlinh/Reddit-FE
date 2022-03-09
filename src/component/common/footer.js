import React, { Component } from 'react';
import { BackTop, Row, Col } from 'antd';
import { Link } from 'react-router-dom'
import { UpCircleTwoTone } from '@ant-design/icons';
import axios from 'axios';
const Items = [
    {
        title:
            <div style={{ color: 'white', marginTop: '-35px', textAlign: 'left', fontFamily: 'Arial' }}>
                {/* <span style={{ color: '#3498db' }}><Link to={{pathname:`/products/${this.state.code}`}}></Link></span><br /> */}
                <span style={{ color: '#3498db' }}><Link to="/pageDetailTravel">Travel</Link></span><br />
                <span style={{ color: '#3498db' }}><Link to="/pageDetailHealth">Health</Link></span><br />
                <span style={{ color: '#3498db' }}><Link to="/pageDetailTransport">Transport</Link></span><br />
                <span style={{ color: '#3498db' }}><Link to="/pageDetailLoyalty">Loyalty</Link></span><br />
                <span style={{ color: '#3498db' }}><Link to="/pageDetailCRM">CRM</Link></span><br />
                <span style={{ color: '#3498db' }}><Link to="/pageDetailHRM">HRM</Link></span><br />
                <span style={{ color: '#3498db' }}><Link to="/pageDetailEcommerce">ECOMMERCE</Link></span><br />

            </div>,
        key: <p style={{ color: 'white', fontSize: 25, marginTop: -30, textAlign: 'left', marginBottom: 35 }}>GIẢI PHÁP DOANH NGHIỆP</p>,
    },
    {
        title:
            <div style={{ color: 'white', marginTop: '-20px', textAlign: 'right' }}>
                <span style={{ color: '#3498db', fontSize: '16px' }}><strong>Trụ Sở Chính</strong> </span><br />
                <span>55-57 đường Bàu Cát 4, phường 14, quận Tân Bình </span><br />
                <span style={{ color: '#3498db', fontSize: '16px' }}><strong>Chi Nhánh</strong> </span><br />
                <span>Công viên phần mềm Mekong (Mekong ITP) - Xã Tân Mỹ Chánh, Tân Mỹ Chánh, Thành phố Mỹ Tho, Tiền Giang </span><br />
                <span>+84 28 3811 7742 </span><br />
                <span>contact@upsharework.com </span>
            </div>,
        key: <p style={{ color: 'white', fontSize: 25, marginTop: -25, textAlign: 'right' }}>LIÊN HỆ VỚI CHÚNG TÔI</p>,
    },
]
class AppFooter extends Component {
    state = {
        persons: []
    }
    componentDidMount() {
        axios.get(`http://localhost:8080/products/`, {
            headers: { "Access-Control-Allow-Origin": "*" }
        })
            .then(res => {
                const persons = res.data;
                console.log(persons);
                this.setState({ persons });
            })
            .catch(error => console.log(error));
    }
    render() {
        return (
            <div id="footer" className="container-fluid" style={{ backgroundColor: '#312A2A', marginTop: -20 }}>
                {/* <div className="footer"> */}
                <Row gutter={[16, 16]}>
                    {/* {this.state.persons.map(item => {
                        return (
                            <Col md={{ span: 16 }}  >
                                <div style={{ color: 'white', marginTop: '-20px', textAlign: 'left', fontFamily: 'Arial' }}>
                                    <span style={{ color: '#3498db' }}><Link to={`/products/${item.code}`}>{item.name}</Link> </span><br />
                                </div>
                            </Col>
                        );
                    })} */}
                    <Col md={{ span: 8 }}  >
                        {Items[0].key}
                        {Items[0].title}
                    </Col>
                    <Col md={{ span: 16 }}>
                        <div className="title-footer">{Items[1].key}</div>
                        <div className="content1">{Items[1].title}</div>
                    </Col>
                    {/* <Col md={{ span: 16 }}>
                        <div className="title-footer">{Items[0].key}</div>
                        {this.state.persons.map(item => {
                            return (
                                <div className="content1"><Link to={{ pathname: `/products/${item.code}` }}>{item.name}</Link></div>
                            )
                        })}
                    </Col>
                    <Col md={{ span: 8 }}>
                        <div className="title-footer">{Items[1].key}</div>
                        {Items[1].title}
                    </Col> */}
                </Row>
                <BackTop>
                    <div className="back-top">
                        <UpCircleTwoTone />
                    </div>
                </BackTop>
                {/* </div> */}
            </div>

        );
    }
}

export default AppFooter;