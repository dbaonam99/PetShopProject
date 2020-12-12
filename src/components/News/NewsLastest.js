import React from 'react'
import '../../App.css'
import '../../Styles/News.css'

export default function NewsLastest(props) {

    return (
        <div className="NewsLastest">
            <div className="newslastest-title">
                Blog chó và mèo
            </div>
            <div className="newslastest-list flex">
                <div className="news newslastest-item">
                    <img src="https://tractive.com/blog/wp-content/uploads/2018/12/can-I-find-my-cat-with-a-microchip-370x247.jpg" alt=""></img>
                    <div className="newslastest-tag">For dog</div>
                    <div className="news-title">How to Find the Perfect Dog Jackets for Winter</div>
                    <div className="news-content">How can you tell if a dog jacket is the right one for your furry friend</div>
                    <div className="news-readmore">read more...</div>
                </div>
                <div className="news newslastest-item">
                    <img src="https://tractive.com/blog/wp-content/uploads/2018/12/can-I-find-my-cat-with-a-microchip-370x247.jpg" alt=""></img>
                    <div className="newslastest-tag">For dog</div>
                    <div className="news-title">How to Find the Perfect Dog Jackets for Winter</div>
                    <div className="news-content">How can you tell if a dog jacket is the right one for your furry friend</div>
                    <div className="news-readmore">read more...</div>
                </div>
                <div className="news newslastest-item">
                    <img src="https://tractive.com/blog/wp-content/uploads/2018/12/can-I-find-my-cat-with-a-microchip-370x247.jpg" alt=""></img>
                    <div className="newslastest-tag">For dog</div>
                    <div className="news-title">How to Find the Perfect Dog Jackets for Winter</div>
                    <div className="news-content">How can you tell if a dog jacket is the right one for your furry friend</div>
                    <div className="news-readmore">read more...</div>
                </div>
            </div>
        </div>
    )
}