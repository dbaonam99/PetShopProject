import React from 'react'
import '../../App.css'
import '../../Styles/Home.css'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

export default function Feedback(props) { 

    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 2000, 
        dots: true,
    }

    return ( 
        <div className="Feedback"> 
            <Slider {...settings}>
                <div className="feedback-box flex">
                    <div className="feedback-image">
                        <img src="https://tractive.com/static/images/customer-story/customer-story-image-jimmy-2560.jpg" alt=""></img>
                    </div>
                    <div className="feedback-text flex-col">
                        <span><strong>“Con chó Beagle 15 tuổi của tôi </strong> đã được cứu sống.”</span>
                        <br></br>
                        “Nó bị mắc kẹt ở một cái hố nhỏ và lạnh. Nhờ vào âm thanh của thiết bị đã giúp tôi phát hiện ra nó. Cảm ơn thiết bị đã giúp tôi tìm ra nó!”
                        <br></br>
                        <br></br>
                        <strong>Henryk</strong>
                    </div>
                </div> 
                <div className="feedback-box flex">
                    <div className="feedback-image">
                        <img src="https://tractive.com/static/images/customer-story/customer-story-image-marley-2560.jpg" alt=""></img>
                    </div>
                    <div className="feedback-text flex-col">
                        <span><strong>“Khi chú chó của bạn bị động kinh</strong>, bạn sẽ cảm thấy bất lực.”</span>
                        <br></br>
                        “Tôi tìm kiếm mọi thứ có thể và Tractive came đã xuất hiện. Một chú chó có lịch trình điều trị nghiêm ngặt, việc có thể tìm thấy anh ta nhanh chóng đã làm cho thiết bị theo dõi này trở thành hữu ích”
                        <br></br>
                        <br></br>
                        <strong>Katja</strong>
                    </div>
                </div> 
                <div className="feedback-box flex">
                    <div className="feedback-image">
                        <img src="https://tractive.com/static/images/customer-story/customer-story-image-rottweiler-2560.jpg" alt=""></img>
                    </div>
                    <div className="feedback-text flex-col"> 
                        <span><strong>“Thiết bị này</strong> đã cứu chú chó của tôi.”</span>
                        <br></br>
                        “Chú chó đang chơi bên ngoài, nhưng tôi nhận ra nó không di chuyển trong 15 phút. Tôi lần theo vị trí của thiết bị, nó dẫn đến một cái hồ, con chó của tôi rơi xuống và không thể trèo lên. Cảm ơn bạn đã giúp tôi tìm và giải cứu nó!”
                        <br></br>
                        <br></br>
                        <strong>Angela</strong>
                    </div>
                </div> 
            </Slider>
        </div>
    )
}