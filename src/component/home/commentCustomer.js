import React from 'react';
import { Carousel } from 'antd';
import ImageCustomer1 from '../../assets/images/customers/customer1.jpg';
import ImageCustomer2 from '../../assets/images/customers/customer2.jpg';
function AppAskQuestion() {

    const Items = [
        {
            image: ImageCustomer1,
            comment: 'We are impressed with modern and large technology solutions with a good quality score. Moreover, The management team is attentive, responsive to feedback and demonstrates initiative in continually improving effectiveness.',
            title: 'David Bauer',
            //  contentcomment: 'Khách hàng',
        },
        {
            image: ImageCustomer2,
            comment: 'The technology solutions provided by V-biz have helped automate many business processes, thereby reducing the number of employees but still bringing business efficiency.',
            title: 'Loren Robinson',
            //contentcomment: 'Khách hàng',
        },
    ]
    return (
        <div className="comment">
            <div id="collapse" className="block aboutBlock ">
                <div className="container-fluid">
                    <div className="contentHolder">
                        <h1 style={{ fontSize: 30 }}>ĐÁNH GIÁ CỦA KHÁCH HÀNG</h1>

                    </div>
                    <Carousel autoplay>
                        {Items.map(item => {
                            return (
                                <div className="aboutBlock">
                                    <div className="container-fluid">
                                        <div className="contentHolder">
                                            <img className="comment-customercoment" src={item.image} alt="" />
                                            {/* <img className="comment-customercoment" src={process.env.PUBLIC_URL + '/advanced-option.jpg'}  alt = ""/> */}
                                            <br></br>
                                            <p>{item.comment}</p>
                                            <h3>{item.title}</h3>
                                            <p>{item.contentcomment}</p>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </Carousel>
                </div>
            </div>
        </div>
    );
}
export default AppAskQuestion;