import React from 'react'
import '../App.css'
import '../Styles/Newsletter.css'

export default function Newsletter(props) {

    return (
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
    )
}