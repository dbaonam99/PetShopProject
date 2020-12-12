import React from 'react'
import '../../Styles/Home.css'
import '../../App.css'
import Feature from '../Home/Feature' 
import { withRouter } from 'react-router-dom'

function ShopFeatures(props) { 

    return (
        <div>
            { props.location.pathname === '/dog' &&
                <div className="Features">
                <Feature
                    reverse={true}
                    img={"http://pe.heromc.net:4000/images/cfbe102bcecf88953796934e4cef8421"}
                    color={"linear-gradient(to right, #00a5e1, rgba(0,127,200,0.5)),linear-gradient(#007fc8, #007fc8)"}
                >
                    <div className="feature-intro flex">
                        <div className="feature-title" style={{color: '#FFF'}}>
                            Cảm thấy yên tâm hơn khi sử dụng
                        </div>
                        <div className="feature-text" style={{color: '#FFF'}}>
                            <strong style={{fontSize: '18px'}}>Virtual Fence (Geofence)</strong>
                            <br/>
                            <p style={{fontSize: '15px', marginTop: '10px'}}>Nhận thông báo ngay lập tức khi thú cưng của bạn rời khỏi khu vực an toàn xác định (ví dụ: sân sau hoặc khu vực lân cận).</p>
                            <br/><br/>
                            <strong style={{fontSize: '18px'}}>Theo dõi TRỰC TIẾP</strong>
                            <br/>
                            <p style={{fontSize: '15px', marginTop: '10px'}}>Xác định vị trí thời gian thực của người bạn lông bông của bạn khi nó quan trọng nhất. Ở chế độ Theo dõi TRỰC TIẾP, vị trí sẽ được cập nhật sau mỗi 2-3 giây.</p>
                        </div>
                    </div>
                </Feature>
                <Feature
                    reverse={false}
                    img={"http://pe.heromc.net:4000/images/3a1422567ded62c98857eb374e5d5db9"}
                    color={"#f5f6f8"}
                >
                    <div className="feature-intro flex">
                        <div className="feature-title">
                            <strong>Làm cho chú chó</strong> của bạn luôn hoạt động và khỏe mạnh
                        </div>
                        <div className="feature-text">
                            <strong style={{fontSize: '18px'}}>Kiểm tra hoạt động</strong>
                            <br/>
                            <p style={{fontSize: '15px', marginTop: '10px'}}>Kiểm tra level hoạt động của chú chó và so sánh nó với những con chó khác. Sau đó đặt ra mục tiêu để chú chó có thể đạt được. Bắt đầu chứ?</p>
                            <br/><br/>
                            <strong style={{fontSize: '18px'}}>Lịch sử vị trí</strong>
                            <br/>
                            <p style={{fontSize: '15px', marginTop: '10px'}}>Biết được chú chó đã đi tới đâu, và tìm ra được địa điểm và anh bạn nhiều lông của bạn thích tới.</p>
                        </div>
                    </div>
                </Feature>
            </div>
            }
            { props.location.pathname === '/cat' &&
                <div className="Features">
                <Feature
                    reverse={true}
                    img={"http://pe.heromc.net:4000/images/f3447388493277f92f3351352814f070"}
                    color={"linear-gradient(to right, #00a5e1, rgba(0,127,200,0.5)),linear-gradient(#007fc8, #007fc8)"}
                >
                    <div className="feature-intro flex">
                        <div className="feature-title" style={{color: '#FFF'}}>
                            Không bao giờ mất tín hiệu của chú mèo
                        </div>
                        <div className="feature-text" style={{color: '#FFF'}}>
                            <strong style={{fontSize: '18px'}}>Virtual Fence (Geofence)</strong>
                            <br/>
                            <p style={{fontSize: '15px', marginTop: '10px'}}>Nhận thông báo ngay lập tức khi thú cưng của bạn rời khỏi khu vực an toàn xác định (ví dụ: sân sau hoặc khu vực lân cận).</p>
                            <br/><br/>
                            <strong style={{fontSize: '18px'}}>Theo dõi TRỰC TIẾP</strong>
                            <br/>
                            <p style={{fontSize: '15px', marginTop: '10px'}}>Xác định vị trí thời gian thực của người bạn lông bông của bạn khi nó quan trọng nhất. Ở chế độ Theo dõi TRỰC TIẾP, vị trí sẽ được cập nhật sau mỗi 2-3 giây.</p>
                        </div>
                    </div>
                </Feature>
                <Feature
                    reverse={false}
                    img={"http://pe.heromc.net:4000/images/dd9d8dd2710275aeb19125efd3c15e5a"}
                    color={"#f5f6f8"}
                >
                    <div className="feature-intro flex">
                        <div className="feature-title">
                            <strong>Làm cho chú mèo</strong> của bạn luôn hoạt động và khỏe mạnh
                        </div>
                        <div className="feature-text">
                            <strong style={{fontSize: '18px'}}>Kiểm tra hoạt động</strong>
                            <br/>
                            <p style={{fontSize: '15px', marginTop: '10px'}}>Kiểm tra level hoạt động của chú mèo và so sánh nó với những con mèo khác. Sau đó đặt ra mục tiêu để chú mèo có thể đạt được. Bắt đầu chứ?</p>
                            <br/><br/>
                            <strong style={{fontSize: '18px'}}>Lịch sử vị trí</strong>
                            <br/>
                            <p style={{fontSize: '15px', marginTop: '10px'}}>Biết được chú mèo đã đi tới đâu, và tìm ra được địa điểm và anh bạn nhiều lông của bạn thích tới.</p>
                        </div>
                    </div>
                </Feature>
            </div>
            }
        </div>
    )
}

export default withRouter(ShopFeatures)