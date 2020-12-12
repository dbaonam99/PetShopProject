import React from 'react'
import '../../Styles/Home.css'
import '../../App.css' 
import Product from './Product'

export default function ProductRecomend() { 
    return (
        <div className="Ask">
            <div className="invitejoin">
                <div className="invitejoin-title">
                    <strong>Phụ kiện liên quan</strong>
                </div>
                <div className="productrecomend-list flex">
                    <Product/>
                    <Product/>
                    <Product/> 
                    <Product/> 
                </div>
            </div>
        </div>
    )
}