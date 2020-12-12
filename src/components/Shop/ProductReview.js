import React, { useState } from 'react'
import '../../Styles/Home.css'
import '../../App.css' 
import ReactStars from "react-rating-stars-component";

export default function ProductReview() { 

    const ratingStar = {
        size: 14,
        value: 5,
        edit: false,
        activeColor: "#fc2754",
        color: "#ddd",
        isHalf: true
    }

    const [ratingValue, setRatingValue] = useState(0)
    
    const defaultStar = {
        size: 24,
        value: 0,
        activeColor: "#fc2754",
        color: "#ddd",
        isHalf: true,
        edit: true,
        onChange: newValue => {
            setRatingValue(newValue)
        }
    }

    return (
        <div className="ProductReview">
            <div className="invitejoin">
                <div className="invitejoin-title">
                    <strong>Đánh giá của người dùng</strong>
                </div>
                <div className="productreview-list flex-col">
                    <div className="productreview-item flex"> 
                        <img className="productreview-avt" src="https://icon-library.com/images/avatar-icon-png/avatar-icon-png-8.jpg" alt=""></img>
                        <div className="productreview-body flex-col">
                            <div className="productreview-first flex">
                                <div className="productreview-name">
                                    Dương Bảo nam
                                </div>
                                <div className="productreview-time">
                                    12.23.2020
                                </div>
                            </div>
                            <div className="productreview-second">
                                <div className="productreview-star">
                                    <ReactStars {...ratingStar} />
                                </div>
                                <div className="productreview-content">
                                    jdgsah jhasd agshdf asdgimg elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
  Line 35:25:  img elements mustimg elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
  Line 35:25:  img elements mustimg elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
  Line 35:25:  img elements mustimg elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
  Line 35:25:  img elements mustimg elements must have an alt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
  Line 35:25:  img elements must
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="productreview-item flex"> 
                        <img className="productreview-avt" src="https://icon-library.com/images/avatar-icon-png/avatar-icon-png-8.jpg" alt=""></img>
                        <div className="productreview-body flex-col">
                            <div className="productreview-first flex">
                                <div className="productreview-name">
                                    Dương Bảo nam
                                </div>
                                <div className="productreview-time">
                                    12.23.2020
                                </div>
                            </div>
                            <div className="productreview-second">
                                <div className="productreview-star">
                                    <ReactStars {...ratingStar} />
                                </div>
                                <div className="productreview-content">
                                    jdgsah jhasd agshdf asdgimg elements lt prop, either with meaningful text, or an empty string for decorative images  jsx-a11y/alt-text
  Line 35:25:  img elements mustimg elements must hav
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="productreview-item flex"> 
                        <img className="productreview-avt" src="https://icon-library.com/images/avatar-icon-png/avatar-icon-png-8.jpg" alt=""></img>
                        <div className="productreview-body flex-col">
                            <div className="productreview-first flex">
                                <div className="productreview-name">
                                    Dương Bảo nam
                                </div>
                                <div className="productreview-time">
                                    12.23.2020
                                </div>
                            </div>
                            <div className="productreview-second">
                                <div className="productreview-star">
                                    <ReactStars {...ratingStar} />
                                </div>
                                <div className="productreview-content">
                                    jdgsah jhasd agshdf asdgimg elements must ha
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-center">
                    <div className="productreview-loadmore-btn">load more...</div>
                </div>
                <div className="productreview-post flex-center">
                    <div className="productreview-post-box">
                        <h3>Cảm nghĩ của bạn về sản phẩm:</h3>
                        <ReactStars {...defaultStar}/>
                        <form className="flex-col">
                            <label>Tên</label>
                            <input></input>
                            <label>Nội dung</label>
                            <input></input>
                            <button>Xác nhận</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}