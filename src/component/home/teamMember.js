import React from 'react';
import { Row, Col } from 'antd'
import ImageMsDung from '../../assets/images/leaderTeam/MsDung.jpg';
import ImageMrTri from '../../assets/images/leaderTeam/MrTri.jpg';
import ImageMrMinh from '../../assets/images/leaderTeam/MrMinh.jpg';
import ImageMrLinh from '../../assets/images/leaderTeam/MrLinh.jpg';
const Items = [
    {
        image: ImageMrTri,
        title: <h3 style={{ color: '#3498db', fontWeight: 700 }}>TRI HANG</h3>,
        content: <p>Giám đốc Kỹ thuật</p>
    },
    {
        image: ImageMrLinh,
        title: <h3 style={{ color: '#3498db', fontWeight: 700 }}>LINH TAN</h3>,
        content: <p>Software Developer</p>
    },
    {
        image: ImageMrMinh,
        title: <h3 style={{ color: '#3498db', fontWeight: 700 }}>MINH VAN</h3>,
        content: <p>Software Developer</p>
    },
    {
        image: ImageMsDung,
        title: <h3 style={{ color: '#3498db', fontWeight: 700 }}>Dung Pham</h3>,
        content: <p>Kỹ sư QC</p>
    },
]
function AppFeature() {

    return (
        <div id="gird" className="block aboutBlock">
            <div className="container-fluid">
                <div className="contentHolder">
                    <h1 style={{ fontSize: 30 }}>ĐỘI NGŨ PHÁT TRIỂN TIÊU BIỂU</h1>

                </div>
                {/* <div className="leaderTeam"> */}
                <Row gutter={[8, 8]}>

                    {Items.map(item => {
                        return (
                              <Col xs={{ span: 6 }} md={{ span: 6 }} xs={24} xl={6} >
                                <div className="contentHolder">
                                    <img className="comment-customer" src={item.image} alt = ""/>
                                    <br></br>
                                    <br></br>
                                    <h2>{item.title}</h2>
                                    <p>{item.content}</p>
                                </div>

                            </Col>
                        );
                    })}

                </Row>
                {/* </div> */}

            </div>
        </div>
    );
}

export default AppFeature;