import React from 'react';
import { Row, Col } from 'antd';
const Items = [
    {

        key: <div className="container-icon">
            <i className="fas fa-chart-pie"></i>
        </div>,
        title: 'Giải pháp tốt và toàn diện',
        content: 'Cung cấp những giải pháp doanh nghiệp tốt và toàn diện nhất',
        // readmore: <u><a href = "/purchase" style={{color:'#67666A', fontWeight: 400}}>READ MORE</a></u>
    },
    {
        key: <div className="container-icon">
            <i className="fas fa-code" ></i>
        </div>,
        title: 'Tiết kiệm chi phí',
        content: "Giải quyết các bài toán mà doanh nghiệp gặp phải dễ dàng, giúp tiết kiệm chi phí lên đến hàng trăm triệu đồng",
        // readmore: <u><a href = "/purchase" style={{color:'#67666A', fontWeight: 400}}>READ MORE</a></u>
    },
    {
        key: <div className="container-icon">
            <i className="fa fa-rocket" ></i>
        </div>,
        title: 'Hiệu quả cao',
        content: "Các dịch vụ luôn mang lại hiệu quả cao, thúc đẩy sự phát triển của doanh nghiệp",
        // readmore: <u><a href = "/purchase" style={{color:'#67666A', fontWeight: 400}}>READ MORE</a></u>
    },
]

function About() {

    return (
        <div id="gird" className="block aboutBlock">
            <div className="container-fluid">
                <Row gutter={[16, 16]}>
                    {Items.map(item => {
                        return (
                            <Col md={{span:8}} xs={24} >    
                                <div className="content">
                                    <div className="icon">
                                        {item.key}
                                    </div>
                                </div>
                                <div className="content">
                                    <h2>{item.title}</h2>
                                    <p style={{ fontFamily: 'inherit', fontWeight: 450 }}>  {item.content} </p>
                                </div>
                            </Col>

                        );
                    })}
                </Row>


            </div>
        </div>
    );
}
export default About;