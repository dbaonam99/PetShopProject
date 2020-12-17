import React, { useState } from 'react'
import '../../App.css'
import '../../Styles/Home.css'
import axios from 'axios'

export default function Newsletter(props) {

    const [emailInput, setEmailInput] = useState("")

    const handleOnSubmit = (event) => {
        event.preventDefault();
        axios.post('http://pe.heromc.net:4000/email', {
            subscriber: emailInput
        }) 
        .then(res => {
            alert(res.data)
        })
        .catch(err => {
            alert(err.response.data)
        })
        setEmailInput("")
    }

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
                <form className="newsletter-form" onSubmit={handleOnSubmit}>
                    <input type="text" value={emailInput} onChange={(event)=>setEmailInput(event.target.value)}></input>
                    <button>Subscribe</button>  
                </form>
            </div>
        </div>
    )
}