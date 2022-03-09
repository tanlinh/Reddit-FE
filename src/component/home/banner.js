import React from 'react';
import { Carousel } from 'antd';
function AppHero() {
    const Items = [
        {
            key: '1',
            title: <h1>NHÓM GIẢI PHÁP</h1>,
            content: <h2>GIẢI PHÁP DOANH NGHIỆP</h2>,
            
        },
        {
            key: '2',
            title: <h1>NHÓM GIẢI PHÁP</h1>,
            content: <h2>GIẢI PHÁP DU LỊCH - SỨC KHỎE - VẬN TẢI</h2>, 
        },
    ]

    return (
        <div id = "carousel" className="heroBlock">
            <Carousel autoplay>
                {Items.map(item => {
                    return (
                        <div key={item.key} className="container-fluid">
                            <div className="content">
                                <h3>{item.title}</h3>
                                <p>{item.content}</p>
                                <div className = "btnHolder">
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Carousel>,
        </div>

    );
}

export default AppHero;