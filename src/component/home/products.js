import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import {
    Row, Col
} from 'antd'
import ImageTravel from '../../assets/images/products/Travel.jpg';
import ImageHealth from '../../assets/images/products/Health.jpg';
import ImageTransport from '../../assets/images/products/Transport.jpg';
import ImageLoyalty from '../../assets/images/products/Loyalty.jpg';
import ImageCRM from '../../assets/images/products/CRM.jpg';
import ImageHRM from '../../assets/images/products/HRM.jpg';
import ImageEcommerce from '../../assets/images/products/Ecommerce.jpg';


const Items = [
    {
        key: ImageTravel,
        title: <Link to="/pageDetailTravel">Giải pháp kết nối du lịch</Link>,
        content: <Link to="/pageDetailTravel"><b>TRAVEL</b></Link>
    },
    {
        key: ImageHealth,
        title: <Link to="/pageDetailHealth">Giải pháp sức khoẻ cộng đồng</Link>,
        content: <Link to="/pageDetailHealth"><b>HEALTH</b></Link>,
    },
    {
        key: ImageTransport,
        title: <Link to="/pageDetailTransport">Giải pháp kết nối vận tải</Link>,
        content: <Link to="/pageDetailTransport"><b>TRANSPORT</b></Link>
    },
    {
        key: ImageLoyalty,
        title: <Link to="/pageDetailLoyalty">Chăm sóc khách hàng thân thiết</Link>,
        content: <Link to="/pageDetailLoyalty"><b>LOYALTY</b></Link>
    },
    {
        key: ImageCRM,
        title: <Link to="/pageDetailCRM">Quản lý khách hàng</Link>,
        content: <Link to="/pageDetailCRM"><b>CRM</b></Link>
    },
    {
        key: ImageHRM,
        title: <Link to="/pageDetailHRM">Quản lý nhân sự</Link>,
        content: <Link to="/pageDetailHRM"><b>HRM</b></Link>
    },
    {
        key: ImageEcommerce,
        title: <Link to="/pageDetailEcommerce">Thương mại điện tử</Link>,
        content: <Link to="/pageDetailEcommerce"><b>ECOMMERCE</b></Link>
    },

]

class AppForm extends Component {
    state = {
        persons: []
    }
    componentDidMount() {
        axios.get(`http://localhost:8080/productsStatus/`, {
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
            <div className="listproduct">
                <div id="form" className="block aboutBlock">
                    <div className="container-fluid">
                        <div className="contentHolder">
                            <h1 style={{ fontSize: 30 }}>
                                DANH MỤC SẢN PHẨM/DỊCH VỤ
                            </h1>
                            <Row gutter={[32, 8]}>
                                {Items.map(item => {
                                    return (
                                        <Col sm={{ span: 12 }} md={{ span: 6 }} >
                                            <div id="gridform" class="grid" style={{ marginLeft: 20 }}>
                                                {/* <Row gutter={[32, 8]}>
                                {this.state.persons.map(item => {
                                    return (
                                        <Col sm={{ span: 12 }} md={{ span: 6 }} >
                                            <div id="gridform" className="grid" style={{ marginLeft: 20 }}>

                                                <figure className="effect-julia">
                                                    <Link to={{ pathname: `/products/${item.code}` }}>
                                                        <img src={process.env.PUBLIC_URL + item.image} alt="" />
                                                        <figcaption >
                                                            <h3><span style={{ color: '#1890ff', backgroundColor: 'white', fontWeight: 200 }}>{item.name}</span></h3>
                                                            <div>
                                                                <p>{item.content}</p>
                                                            </div>
                                                        </figcaption>
                                                    </Link>
                                                </figure> */}
                                                <figure class="effect-julia">
                                                    <img src={item.key} />
                                                    <figcaption >
                                                        <h3><span style={{ color: '#1890ff', backgroundColor: 'white', fontWeight: 200 }}>{item.content}</span></h3>
                                                        <div>
                                                            <p>{item.title}</p>
                                                        </div>
                                                    </figcaption>
                                                </figure>
                                            </div>
                                        </Col>
                                    );
                                })}
                            </Row>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}
export default AppForm;