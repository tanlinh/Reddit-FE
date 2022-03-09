import React from 'react'
import Appheader from '../component/common/header';
import { Row, Col } from 'antd';
import { Layout } from 'antd';
import { Link } from 'react-router-dom'
import AppFooter from '../component/common/footer';
import CopyRight from '../component/common/copyRight';
import image from '../assets/images/LogoContact.jpg';
import { InfoWindow } from 'google-maps-react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { HomeOutlined } from '@ant-design/icons';
const { Header, Content, Footer } = Layout;

function pageContact() {

    window.scrollTo(0, 0);
    const containerStyle = {
        //  width: '860px',
        width: '105%',
        height: '430px',
        marginTop: '30px',

    };

    const center = {
        lat: 10.79278,
        lng: 106.64107
    };
    const Items = [

        {
            title:
                <LoadScript googleMapsApiKey="AIzaSyCkQNvtFaKydZ-pss5pI54Ujxnqr8hFHbA">
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={16}
                    >
                        <Marker
                            key=''
                            title="55-57 đường Bàu Cát 4, phường 14, quận Tân Bình, Thành phố Hồ Chí Minh"
                            name="aaaa"
                            position={{
                                lat: 10.79248,
                                lng: 106.64115
                            }}  >
                            <InfoWindow
                                key=""
                                visible={true}>
                                <div>55-57 đường Bàu Cát 4, phường 14, quận Tân Bình, Thành phố Hồ Chí Minh</div>
                            </InfoWindow>
                        </Marker>
                        <>
                        </>
                    </GoogleMap>
                </LoadScript>

        },
        {
            content:
                <div className="container-fluid" style={{ backgroundColor: '#3498db', marginTop: 30, borderRadius: '5px', padding: '25px' }}>
                    <Link to="/"><img src={image} style={{ maxWidth: '80%', marginLeft: '20px', marginBottom: 40, marginTop: -20, height: 'auto' }} alt=""></img></Link>
                    <div style={{ fontSize: 14, color: 'white', marginTop: '-30px', textAlign: 'center', fontFamily: 'Open Sans,sans-serif', fontWeight: '300px' }}>
                        <span style={{ color: 'black', fontSize: '16px' }}><strong>Trụ Sở Chính</strong> </span><br />
                        <span>55-57 đường Bàu Cát 4, phường 14, quận Tân Bình </span><br />
                        <span style={{ color: 'black', fontSize: '16px' }}><strong>Chi Nhánh</strong> </span><br />
                        <span>Công viên phần mềm Mekong (Mekong ITP) - Xã Tân Mỹ Chánh, Tân Mỹ Chánh, Thành phố Mỹ Tho, Tiền Giang </span><br />
                        <span>+84 28 3811 7742 </span><br />
                        <span>contact@upsharework.com </span>
                        <hr></hr>
                    </div>
                </div>

        },
        {
            // contentMap:
            //     <div className="container-fluid" style={{ backgroundColor: 'white', marginTop: 35, marginLeft: -580, marginRight: 600 }}>
            //         <div style={{ color: 'black', marginTop: '50px', textAlign: 'center', fontFamily: 'Open Sans,sans-serif', fontWeight: '300px' }}>
            //             <HomeOutlined /> &nbsp;
            //             <span style={{ marginTop: 120, fontSize: 11 }}>55-57 đường Bàu Cát 4, phường 14, quận Tân Bình, Thành phố Hồ Chí Minh </span><br />
            //             <a href="https://www.google.com/maps/dir//10.7923581,106.6410771/@10.792358,106.641077,16z?hl=vi" style={{ marginLeft: 160, fontSize: 11 }}>Chỉ đường</a><br></br>
            //             <a href="https://www.google.com/maps/place/55+B%C3%A0u+C%C3%A1t+4,+Ph%C6%B0%E1%BB%9Dng+13,+T%C3%A2n+B%C3%ACnh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.792358,106.641077,16z/data=!4m5!3m4!1s0x31752eb2aad07965:0x2a62c4fb9e71c32b!8m2!3d10.7923581!4d106.6410771?hl=vi" style={{ fontSize: 11, marginLeft: -120 }}>Xem bản đồ lớn hơn</a>
            //         </div>
            //    </div>
            contentMap:
                <div class="title-googleMap">
                    <div style={{ color: 'black', marginTop: '50px', textAlign: 'center', fontFamily: 'Open Sans,sans-serif', fontWeight: '300px' }}>
                        <HomeOutlined /> &nbsp;
                    <span style={{ marginTop: 120, fontSize: 11 }}>55-57 đường Bàu Cát 4, phường 14, quận Tân Bình, Thành phố Hồ Chí Minh </span><br />
                        <a href="https://www.google.com/maps/dir//10.7923581,106.6410771/@10.792358,106.641077,16z?hl=vi" style={{ marginLeft: 40, fontSize: 11 }}>Chỉ đường</a>
                        <a href="https://www.google.com/maps/place/55+B%C3%A0u+C%C3%A1t+4,+Ph%C6%B0%E1%BB%9Dng+13,+T%C3%A2n+B%C3%ACnh,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.792358,106.641077,16z/data=!4m5!3m4!1s0x31752eb2aad07965:0x2a62c4fb9e71c32b!8m2!3d10.7923581!4d106.6410771?hl=vi" style={{ fontSize: 11, marginLeft: -280 }}>Xem bản đồ lớn hơn</a>
                    </div>
                </div>
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
                        <h1 style={{ fontSize: 24, textAlign: 'center', color: '#8f9aa8' }}>LIÊN HỆ VỚI CHÚNG TÔI</h1>
                        <Row gutter={[16, 16]}>
                            <Col sm={{ span: 16 }} md={{ span: 17 }} xs={24} >
                                {Items[0].title}
                                {Items[0].content}
                            </Col>
                            <Col md={{ span: 1 }}>
                                {Items[2].contentMap}
                            </Col>
                            <Col sm={{ span: 16 }} md={{ span: 6 }} >
                                {Items[1].title}
                                {Items[1].content}
                            </Col>
                        </Row>
                    </div>
                </div>
                <br></br>
            </Content>
            <Footer>
                <AppFooter />
                <CopyRight />
            </Footer>
        </Layout>
    )
}

export default pageContact
