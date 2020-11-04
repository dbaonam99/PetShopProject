import React from 'react'
import '../Styles/Banner.css'
import '../App.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Banner12 from '../assets/banner1.2.png'
import Banner22 from '../assets/banner2.2.png'

export default function Banner(props) {

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    }

    return (
        <div className="Banner flex">
            <div className="left-banner">
                <Slider {...settings}>
                    <div className="slider-item banner1">
                        <img src={Banner12} alt="" className="slider-img-child"></img>
                    </div>
                    <div className="slider-item banner2">
                        <img src={Banner22} alt="" className="slider-img-child"></img>
                    </div>
                </Slider>
            </div>
            <div className="right-banner">
                <div className="banner-title">
                    <strong>GPS theo dõi</strong> dành cho mèo và chó
                </div>
                <div className="banner-text">
                    Sản phẩm vòng cổ GPS cho phép bạn xác định vị trí của chó và mèo của mình mọi lúc, mọi nơi. Sử dụng phần đính kèm vòng đeo cổ GPS để xem vị trí chính xác của thú cưng của bạn trực tiếp trên điện thoại thông minh hoặc trong bất kỳ trình duyệt nào
                </div>
                <div className="banner-btn-list flex">
                    <div className="banner-btn">Vòng cho chó</div>
                    <div className="banner-btn">Vòng cho mèo</div>
                </div>
            </div>
        </div>
    )
}