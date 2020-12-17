import React, { useContext, useEffect, useState } from 'react'
import '../../Styles/Home.css'
import '../../App.css' 
import ReactStars from "react-rating-stars-component";
import { UserContext } from '../../contexts/User';
import axios from 'axios'

export default function ProductReview(props) { 

    const [reviewStar, setReviewStar] = useState(0)
    const [reviewName, setReviewName] = useState("")
    const [reviewContent, setReviewContent] = useState("")
    const [productVote, setProductVote] = useState([])
    const [product, setProduct] = useState(null)
    const [limitReview, setLimitReview] = useState(3)
    const { 
        userInfo
    } = useContext(UserContext);

    useEffect(()=>{
        if (userInfo) {
            setReviewName(userInfo.userEmail)
        }
        if (props.product) { 
            setProduct(props.product)
            const arr = props.product.productVote.sort((a,b)=> new Date(b.ratingDate) - new Date(a.ratingDate));
            setProductVote(arr);  
        }
    },[userInfo])  

    const reviewStarConfig = {
        size: 24,
        value: reviewStar,
        activeColor: "#fc2754",
        color: "#ddd",
        isHalf: true,
        edit: true,
        onChange: newValue => {
            setReviewStar(newValue)
        }
    }

    const sendReview = (event) => {
        event.preventDefault() 
        if (userInfo) {
            const data = {
                ratingName: reviewName,
                ratingDate: new Date().toString(),
                ratingContent: reviewContent, 
                ratingStart: reviewStar,
                ratingAvt: userInfo.userAvt
            }
            axios.post(`http://localhost:4000/products/review/${product._id}`, data)
            .then((res)=>{
                console.log(res)
                setProductVote(productVote=>[data, ...productVote])
                setReviewName("")
                setReviewContent("") 
            })
        } else {
            const data = {
                ratingName: reviewName,
                ratingDate: new Date().toString(),
                ratingContent: reviewContent, 
                ratingStart: reviewStar, 
                ratingAvt: "https://icon-library.com/images/avatar-icon-png/avatar-icon-png-8.jpg"
            }
            axios.post(`http://localhost:4000/products/review/${product._id}`, data)
            .then((res)=>{ 
                setProductVote(productVote=>[data, ...productVote])
                setReviewName("")
                setReviewContent("") 
            })
        }
    }  

    return (
        <div className="ProductReview" id="review">
            <div className="invitejoin">
                <div className="invitejoin-title">
                    <strong>Đánh giá của người dùng</strong>
                </div>
                <div className="productreview-list flex-col">
                    {
                        productVote && 
                        productVote.slice(0,limitReview).map((item, index) => {  
                            const ratingStar = {
                                size: 14,
                                value: item.ratingStart,
                                edit: false,
                                activeColor: "#fc2754",
                                color: "#ddd",
                                isHalf: true
                            }
                            const date = new Date(item.ratingDate)
                            const day = date.getDate()
                            const month = date.getMonth() + 1
                            const year = date.getFullYear()
                            return (
                                <div 
                                    key={index}
                                    className="productreview-item flex"
                                > 
                                    <img className="productreview-avt" src={item.ratingAvt || "https://icon-library.com/images/avatar-icon-png/avatar-icon-png-8.jpg"} alt=""></img>
                                    <div className="productreview-body flex-col">
                                        <div className="productreview-first flex">
                                            <div className="productreview-name">
                                                {item.ratingName}
                                            </div>
                                            <div className="productreview-time">
                                                {`${day}/${month}/${year}`}
                                            </div>
                                        </div>
                                        <div className="productreview-second">
                                            <div className="productreview-star">
                                                <ReactStars {...ratingStar} />
                                            </div>
                                            <div className="productreview-content">
                                                {item.ratingContent}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
                {
                    productVote.length > 3 && productVote.length !== productVote.slice(0,limitReview).length &&
                    <div className="flex-center">
                        <div 
                            onClick={()=>{
                                setLimitReview(limitReview=>limitReview+3)
                            }}
                            className="productreview-loadmore-btn"
                        >load more...</div>
                    </div>
                }
                <div className="productreview-post flex-center">
                    <div className="productreview-post-box">
                        <h3>Cảm nghĩ của bạn về sản phẩm:</h3>
                        <ReactStars {...reviewStarConfig}/>
                        <form className="flex-col" onSubmit={sendReview}>
                            <label>Tên</label>
                            <input 
                                value={reviewName}
                                onChange={(event)=>{
                                    setReviewName(event.target.value)
                                }}
                            ></input>
                            <label>Nội dung</label>
                            <input 
                                value={reviewContent}
                                onChange={(event)=>{
                                    setReviewContent(event.target.value)
                                }}
                            ></input>
                            <button>Xác nhận</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}