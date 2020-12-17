import React from 'react'
import '../../App.css'
import '../../Styles/Product.css'

export default function Product(props) {

    return (
        <div className="product">
            <img src="https://tractive.com/static/images/product-images/trnjaca/tractive-gps-dog-4-spare-charger.png" alt=""></img>
            <div className="product-name">Spare Charging Cable</div>
            <div className="product-price">200.000đ</div>
            <button className="product-btn">Thêm vào giỏ</button>
        </div>
    )
}