import React, { useEffect, useState } from 'react'
import '../../Styles/Product.css' 
import '../../App.css'  
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faShip, faUndo } from '@fortawesome/free-solid-svg-icons'
import ReactStars from "react-rating-stars-component";

export default function ProductDetail(props) {  
 
    const [imgIndex, setImgIndex] = useState(0)
    const [hover, setHover] = useState(false)
    const [colorTab, setColorTab] = useState(0)

    useEffect(()=>{   
        if (!hover) {
            var slide = setInterval(() => {
                setImgIndex(imgIndex => imgIndex + 1);
            }, 2000);  
        }
        return (()=>{
            clearInterval(slide)
        })
    },[hover]) 


    const product = props.product

    if (imgIndex === product.productColor[colorTab].productImg.length) {
        setImgIndex(0);
    }  
    
    let width = 0;
  
    if (imgIndex === 1 || imgIndex === 2) {
        width = 0
    } 
    if (imgIndex >= 3) {
        width = 54
    }  
    if (imgIndex >= 4 && imgIndex) {
        width = (imgIndex - 2) * 54
    } 
    if (imgIndex === product.productColor[0].productImg.length - 2) {
        width = (imgIndex - 3) * 54 
    }
    if (imgIndex === product.productColor[0].productImg.length - 1) {
        width = (imgIndex - 4) * 54 
    } 
    
    const ratingStar = {
        size: 14,
        value: 5,
        edit: false,
        activeColor: "#fc2754",
        color: "#ddd",
        isHalf: true
    }

    return (
        <div className="ProductDetail flex">   
            <div className="productdetail-image-box">
                <div 
                    className="productdetail-image flex"
                    onMouseEnter={()=>{
                        setHover(true)   
                    }}
                    onMouseLeave={()=>{
                        setHover(false) 
                    }} 
                >
                    {
                        product.productColor[colorTab].productImg.map((item, index) => {
                            return (
                                <div  
                                    key={index}
                                    className="productdetail-image-item"
                                    style={{
                                        transform: `translateX(-${320 * imgIndex}px)`
                                    }}
                                >
                                    <img src={item} alt=""/>
                                </div>
                            )
                        })
                    } 
                </div>
                <div className="productdetail-image-small flex">
                    <div 
                        onMouseEnter={()=>{
                            setHover(true)   
                        }}
                        onMouseLeave={()=>{
                            setHover(false) 
                        }} 
                        className="productdetail-image-small-btn"
                        onClick={()=>{
                            if (imgIndex > 0) {
                                setImgIndex(imgIndex => imgIndex - 1);
                            }
                        }}>
                        <img src="https://tractive.com/static/images/arrow-slide-left.svg" alt=""></img>
                    </div>
                    <div className="productdetail-image-small-list flex">
                        {
                            product.productColor[colorTab].productImg.map((item, index) => {
                                return (
                                    <img 
                                        src={item} 
                                        alt=""
                                        key={index}
                                        onClick={()=>{
                                            setImgIndex(index)
                                        }} 
                                        style={{
                                            transform: `translateX(-${width}px)`
                                        }}
                                        className={imgIndex === index ? 'outline' : ''}
                                    />
                                )
                            })
                        }
                    </div>
                    <div 
                        className="productdetail-image-small-btn"
                        onClick={()=>{
                            setImgIndex(imgIndex => imgIndex + 1);
                        }}>
                        <img src="https://tractive.com/static/images/arrow-slide-right.svg" alt=""></img>
                    </div>
                </div>
            </div>  
            <div className="productdetail-info"> 
                <h1>{product.productName}</h1>
                <div className="productdetail-start flex">
                    <ReactStars {...ratingStar} />
                    <p>{product.productRating.length} đánh giá</p>
                </div> 
                <div className="productdetail-color">
                    <div className="productdetail-color-color flex">
                        {
                            product.productColor.map((item, index) => {
                                return (
                                    <div 
                                        key={index}
                                        onClick={()=>{
                                            setColorTab(index)
                                            setImgIndex(0)
                                        }}>
                                        <img 
                                            className={colorTab === index ? 'outline' : ''}
                                            src={item.productImg[0]} 
                                            alt=""
                                        ></img>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <span>
                        {/* <strong style={{color: '#007FC8'}}>Color: </strong> */}
                        <strong>Color: </strong>
                        {product.productColor[colorTab].name}
                    </span>
                </div> 
                <ul>
                    {
                        product.productFeature.map((item, index) => {
                            return (
                                <li key={index}>{item}</li>
                            )
                        })
                    }
                </ul>
                <p>{product.productDes}</p>
            </div>
            <div className="productdetail-addtocart flex-col">
                <ul className="productdetail-flag-info">
                    <ul className="productdetail-flag-info-list">
                        <li><FontAwesomeIcon icon={faCheckCircle} className="icon"/>Chấp nhận mọi thẻ thanh toán</li>
                        <li><FontAwesomeIcon icon={faShip} className="icon"/>Ships toàn quốc</li>
                        <li><FontAwesomeIcon icon={faUndo} className="icon"/>Đổi trả trong vòng 14 ngày</li>
                    </ul>
                    <div className="triangle"></div>
                </ul>
                <p className="productdetail-price">{product.productPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")}đ</p>
                <div className="productdetail-addtocart-btn">
                    Thêm vào giỏ hàng
                </div>
            </div> 
        </div>
    )
}