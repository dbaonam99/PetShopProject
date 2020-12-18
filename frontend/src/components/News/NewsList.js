import React, { useEffect, useState } from 'react'
import '../../App.css'
import '../../Styles/News.css'
import NewsBig from './NewsBig'
import News from './News'
import NewsListBig from './NewsListBig'

export default function NewsList(props) {
     
    const oldestNews = props.oldestNews  

    const [currentPage, setCurrentPage] = useState(1);
    const [newsPerPage, setNewsPerPage] = useState(4); 


    useEffect(()=>{ 
        if (window.innerWidth <= 1150) { 
            setNewsPerPage(3)
        } else {
            setNewsPerPage(4)
        }
        if (window.innerWidth <= 850) { 
            
        }
        function handleResize() {
            if (window.innerWidth <= 1150) { 
                setNewsPerPage(3)
            } else {
                setNewsPerPage(4)
            }
        }
        window.addEventListener("resize", handleResize);
        return (()=>{
            window.removeEventListener("resize", handleResize);
        })
    }, [])

    const choosePage = (event) => {
        if (Number(event.target.id) === 0) {
            setCurrentPage(currentPage)
        } else if (Number(event.target.id) === -1) {
            if (currentPage > 1) {
                setCurrentPage(currentPage - 1)
            } else {
                setCurrentPage(1);
            }
        } else if (Number(event.target.id) === 999) {
            setCurrentPage(currentPage + 1)
        } else {
            setCurrentPage(Number(event.target.id))
        }
    }

    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = oldestNews.slice(indexOfFirstNews, indexOfLastNews);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(oldestNews.length / newsPerPage); i++) {
        pageNumbers.push(i);
    }

    const pages = [];

    if (currentPage === 2) {
        pages.push(currentPage - 1, currentPage, currentPage + 1);
    } else {
        if (currentPage === 1) {
            pages.push(currentPage, currentPage + 1, currentPage + 2 );
        } else if (currentPage === 2) {
            pages.push(currentPage - 1, currentPage, currentPage + 1);
        } else if (currentPage > 2 && currentPage < pageNumbers.length - 1) {
            pages.push(currentPage -1, currentPage, currentPage + 1);
        } else if (currentPage === pageNumbers.length - 1) {
            pages.push(currentPage - 1, currentPage, currentPage + 1);
        } else {
            pages.push(currentPage - 2, currentPage - 1, currentPage);
        }
    }

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
            <NewsListBig 
                bigNews = {props.bigNews}
                oldestNews = {props.oldestNews}
            />
            <div className="newslist-small flex"> 
                {
                    currentNews.map((item, index) => {
                        return (
                            <News
                                key={index}
                                news={item}
                            />
                        )
                    })
                }
            </div>
            {currentNews.length > 0 &&
                <div className="newslist-pag flex-center">
                    <div className="pagination-container flex-center">
                        <div className="pagnigation flex-center" onClick={choosePage}>
                            <div id="-1" className={currentPage === 1 ? "pagnigation_disable" : ""}>←</div>
                            { pages.map(function(number, index) { 
                                if (currentPage === number) {
                                    return (
                                        <div key={number} id={number} className="pagnigation-active">
                                            {number}
                                        </div>
                                    )
                                } else {
                                    return (
                                    <div 
                                        key={number}
                                        id={number}
                                        >
                                            {number}
                                    </div>
                                    )
                                } 
                            })}
                        <div id="999" 
                            className={currentPage === pageNumbers.length ? "pagnigation_disable" : ""}
                        >→</div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}