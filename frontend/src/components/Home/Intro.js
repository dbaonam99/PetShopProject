import React from 'react'
import '../../Styles/Home.css'
import '../../App.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowRight, faShoppingCart, faEdit, faMobile } from '@fortawesome/free-solid-svg-icons'

export default function Intro(props) {

    return (
        <div className="Intro">
            <div className="top-intro flex-col">
                <div className="intro-title">
                    <strong>Real-Time</strong> GPS LIVE Tracking
                </div>
                <div className="intro-text">
                    Bất kể khi nào hoặc ở đâu, hãy luôn kết nối với chó hoặc mèo của bạn. Với vòng cổ GPS, bạn có thể thấy dấu vết chính xác của người bạn bốn chân của mình. Nhờ hàng rào ảo tích hợp (geofence), Tractive sẽ thông báo cho bạn ngay lập tức trong trường hợp con mèo hoặc con chó của bạn rời khỏi khu vực an toàn được xác định trước. Chỉ cần gắn thiết bị theo dõi thú cưng GPS vào cổ áo và yên tâm.
                </div>
            </div>
            {/* <div className="bottom-intro flex-col">
                <div className="intro-title">
                    <strong>Tìm thú cưng của bạn </strong> chưa bao giờ là dễ hơn
                </div>
                <div className="flex">
                    <div className="intro-step flex">
                        <div className="intro-step-item flex-col">
                            <div className="intro-step-icon">
                                <FontAwesomeIcon icon={faShoppingCart} className="icon"/>
                            </div>
                            <div className="intro-step-title">
                                Đặt mua vòng cổ GPS
                            </div>  
                            <div className="intro-step-text">
                                Đặt mua vòng cổ GPS cho chó và mèo của bạn
                            </div>
                            <div className="intro-step-btn">
                                Đặt ngay
                            </div>
                        </div>
                    </div>
                    <div className="intro-next">
                        <FontAwesomeIcon icon={faArrowRight} className="icon"/>
                    </div>
                    <div className="intro-step flex">
                        <div className="intro-step-item flex-col">
                            <div className="intro-step-icon">
                                <FontAwesomeIcon icon={faEdit} className="icon"/>
                            </div>
                            <div className="intro-step-title">
                                Chọn gói đăng ký
                            </div>  
                            <div className="intro-step-text">
                                Sau khi đặt mua, hãy chọn gói đăng ký trong quá trình kích hoạt thiết bị
                            </div>
                            <div className="intro-step-btn">
                                Xem gói
                            </div>
                        </div>
                    </div>
                    <div className="intro-next">
                        <FontAwesomeIcon icon={faArrowRight} className="icon"/>
                    </div>
                    <div className="intro-step flex">
                        <div className="intro-step-item flex-col">
                            <div className="intro-step-icon">
                                <FontAwesomeIcon icon={faMobile} className="icon"/>
                            </div>
                            <div className="intro-step-title">
                                Ready to go!
                            </div>  
                            <div className="intro-step-text">
                                Tải xuống ứng dụng Tractive GPS miễn phí cho iOS hoặc Android hoặc truy cập ứng dụng từ bất kỳ trình duyệt web nào.
                            </div>
                            <div className="intro-step-btn">
                                Tải ngay
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    )
}