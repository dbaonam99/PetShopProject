import React from 'react'
import '../../Styles/Home.css'
import '../../App.css'
import Feature from './Feature'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMapMarker, faTint } from '@fortawesome/free-solid-svg-icons'

export default function Features(props) {

    return (
        <div className="Features">
            <Feature
                reverse={true}
                img={"https://tractive.com/static/images/cooperations/the-pack/tractive-the-pack-primary-2560.jpg"}
                color={"linear-gradient(to right, #00a5e1, rgba(0,127,200,0.5)),linear-gradient(#007fc8, #007fc8)"}
            >
                <div className="feature-intro flex">
                    <div className="feature-title" style={{color: '#FFF'}}>
                        Như đã được thấy ở Amazon Original series
                    </div>
                    <div className="feature-text" style={{color: '#FFF'}}> 
                        <p style={{fontSize: '15px', marginTop: '10px'}}>The Pack, một loạt cuộc thi thực tế mới từ Prime Video, tôn vinh mối quan hệ vô song giữa những chú chó và những người bạn đồng hành của chúng. Tractive tham gia cùng các đội khi họ đi khắp thế giới để đảm bảo mọi thí sinh bốn chân đều an toàn, vui vẻ và có thể theo dõi!</p>
                        <br/><br/>
                        <strong style={{fontSize: '18px'}}>Bạn không thể chờ đợi để xem?</strong>
                        <br/>
                        <p style={{fontSize: '15px', marginTop: '10px'}}>The Pack sẽ công chiếu vào ngày 20 tháng 11 tại hơn 240 quốc gia và vùng lãnh thổ, độc quyền trên Prime Video. Truy cập amazon.com/ThePack để tìm hiểu thêm.</p>
                    </div>
                </div>
            </Feature>
            <Feature
                reverse={false}
                img={"https://tractive.com/static/images/sections/tractive-gps-dog-4-and-tractive-gps-cat-tracker-2560.jpg"}
                color={"#f5f6f8"}
            >
                <div className="feature-intro flex">
                    <div className="feature-title">
                        <strong>Sản phẩm Tractive</strong> mạnh mẽ và dễ sử dụng
                    </div>
                    <div className="feature-text">
                        Chúng tôi đã thiết kế Tractive GPS để dễ sử dụng cho mọi người, ở bất kỳ đâu. Nhờ các công nghệ tiên tiến, các thiết bị theo dõi Tractive GPS có thể được định vị chính xác và đáng tin cậy từ hầu hết mọi nơi trên thế giới, cho dù thú cưng của bạn đang ở sân sau hay ở phía bên kia địa cầu.
                    </div>
                    <div className="feature-icon-list flex">
                            <div className="feature-icon-item">
                                <FontAwesomeIcon icon={faMapMarker} style={{fontSize: '40px', color : '#007FC8'}}/>
                                <p>Theo Dõi trực tiếp</p>
                            </div>
                            <div className="feature-icon-item">
                                <FontAwesomeIcon icon={faTint} style={{fontSize: '40px', color : '#007FC8'}}/>
                                <p>100% chống nước</p>
                            </div>
                    </div>
                </div>
            </Feature>
            <Feature
                reverse={true}
                img={"https://tractive.com/static/images/sections/Tractive-DOG-LIVE-Tracking-2560.jpg"}
                color={"linear-gradient(to right, #00a5e1, rgba(0,127,200,0.5)),linear-gradient(#007fc8, #007fc8)"}
            >
                <div className="feature-intro flex">
                    <div className="feature-title" style={{color: '#FFF'}}>
                        <strong>Không bao giờ</strong> bị lạc mất thú cưng nữa
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
                img={"https://tractive.com/static/images/sections/Tractive-DOG-vani-2560.jpg"}
                color={"#f5f6f8"}
            >
            <div className="feature-intro flex">
                <div className="feature-title">
                    <strong>Sản phẩm tốt nhất</strong> cho thú cưng của bạn
                </div>
                <div className="feature-text">
                    <strong style={{fontSize: '18px'}}>Mạnh mẽ và không thấm nước</strong>
                    <br/>
                    <p style={{fontSize: '15px', marginTop: '10px'}}>Nếu thú cưng của bạn thích ở ngoài trời, chúng tôi có sản phẩm phù hợp cho bạn. Nhờ thiết kế tối giản, thiết bị GPS Tractive rất mạnh mẽ, chống thấm nước 100% và hầu như không thể phá vỡ.</p>
                    <br/><br/>
                    <strong style={{fontSize: '18px'}}>Lịch sử VỊ TRÍ</strong>
                    <br/>
                    <p style={{fontSize: '15px', marginTop: '10px'}}>Bạn đã bao giờ tự hỏi thú cưng của mình ở đâu khi không có bạn? Các sản phẩm theo dõi không chỉ hiển thị nơi thú cưng của bạn hiện tại mà còn cho biết chúng đã ở đâu gần đây.</p>
                </div>
            </div>
            </Feature>
        </div>
    )
}