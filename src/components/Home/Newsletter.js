import React from 'react'
import '../../App.css'
import '../../Styles/Home.css'

export default function Newsletter(props) {

    return (
        <div>
            <div className="invitejoin">
                <div className="invitejoin-title">
                    <strong>Joining forces for our</strong> four-legged friends
                </div>
                <div className="invitejoin-text">
                    Đây là một số cộng sư tuyện vời mà chúng tôi đang làm việc chung để tạo nên một thế giới tốt đẹp hơn.
                </div>
                <div className="invitejoin-img flex-center">
                    <img src="https://tractive.com/static/images/sections/healthy_pet_guide@2x.png" alt=""></img>
                    <img src="https://tractive.com/static/images/sections/amazon.svg" alt=""></img>
                    <img src="https://tractive.com/static/images/sections/furbo@2x.png" alt=""></img>
                </div>
            </div>
            <div className="Newsletter">
                <div className="newsletter-title">
                    Đăng kí nhận tin tức mới
                </div>
                <div className="newsletter-text">
                    Tham gia gói của chúng tôi để cập nhật tốt. Nhận chiết khấu và tiền boa cho thú cưng!
                </div>
                <form className="newsletter-form">
                    <input type="text"></input>
                    <button>Subscribe</button>  
                </form>
            </div>
        </div>
    )
}