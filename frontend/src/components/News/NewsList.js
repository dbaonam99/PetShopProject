import React, { useState } from 'react'
import '../../App.css'
import '../../Styles/News.css'
import NewsBig from './NewsBig'
import News from './News'

export default function NewsList(props) {

    const bigNews = props.bigNews
    const oldestNews = props.oldestNews  

    return (
        <div className="newslist">
            <div className="newslist-tab flex">
                <div 
                    onClick={()=>{
                        props.setCateTab("all")
                    }} 
                    className={props.cateTab === "all" ? "newslist-box flex newslist-box-active" : "newslist-box flex"}>
                    All
                    <div className="news-count flex-center">{props.news.length}</div>
                </div>
                { props.cate &&
                    props.cate.map((item, index) => {
                        return (
                            <div 
                                onClick={()=>{
                                    props.setCateTab(item.newCate)
                                }}
                                key={index}
                                className={props.cateTab === item.newCate? "newslist-box flex newslist-box-active" : "newslist-box flex"}>
                                {item.newCate} 
                                <div className="news-count flex-center">{item.count}</div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="newslist-big flex">
                {
                    bigNews.map((item, index) => {
                        return (
                            <NewsBig
                                key={index}
                                bigNews={item}
                            />
                        )
                    })
                }
            </div>
            <div className="newslist-small flex"> 
                {
                    oldestNews.map((item, index) => {
                        return (
                            <News
                                key={index}
                                news={item}
                            />
                        )
                    })
                }
            </div>
            <div className="newslist-pag flex">

            </div>
        </div>
    )
}