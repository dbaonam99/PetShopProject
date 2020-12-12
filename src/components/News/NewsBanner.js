import React from 'react'
import '../../App.css'
import '../../Styles/News.css'

export default function NewsBanner(props) {

    return (
        <div className="NewsBanner flex">
            <div className="newsbanner-info flex-col">
                <div className="newsbanner-cate">for cats</div>
                <div className="newsbanner-title">Cat Microchip: How to ID, track, and always find your kitty!</div>
                <div className="newsbanner-time">11 December 2020</div>
                <div className="newsbanner-des">Learn all about microchips for cats and their main uses and limitations when it comes to tracking your favorite feline friend!</div>
            </div>
            <div className="newsbanner-img">
                <img src="https://tractive.com/blog/wp-content/uploads/2018/12/can-I-find-my-cat-with-a-microchip-1024x683.jpg"></img>
            </div>
        </div>
    )
}