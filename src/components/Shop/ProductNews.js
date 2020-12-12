import React from 'react'
import '../../Styles/Home.css'
import '../../App.css' 
import News from '../News/News'

export default function ProductNews() { 
    return (
        <div className="Ask">
            <div className="invitejoin">
                <div className="invitejoin-title">
                    <strong>Blog thú cưng</strong>
                </div>
                <div className="productrecomend-list flex">
                    <News/>
                    <News/> 
                    <News/> 
                    <News/> 
                </div>
            </div>
        </div>
    )
}