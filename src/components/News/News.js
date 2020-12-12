import React from 'react'
import '../../App.css'
import '../../Styles/News.css'

export default function News(props) {

    return (
        <div className="news">
            <div className="news-img">
                <img src="https://tractive.com/blog/wp-content/uploads/2017/12/dog-jackets-for-winter-all-you-need-to-know.jpg" alt=""></img>
                <div className="news-tag">For cat</div>
            </div>
            <div className="news-time">11 November 2020</div>
            <div className="news-title">How to Find the Perfect Dog Jackets for Winter</div>
            <div className="news-content">How can you tell if a dog jacket is the right one for your furry friend</div>
            <div className="news-readmore">read more...</div>
        </div>
    )
}