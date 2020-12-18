import React, { useEffect, useState } from 'react'
import '../../App.css'
import '../../Styles/News.css'
import NewsBig from './NewsBig' 

export default function NewsListBig(props) {

    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 4;

    const [newsList, setNewsList] = useState([])

    useEffect(()=>{  
        if (window.innerWidth <= 850) { 
            setNewsList(props.bigNews.concat(props.oldestNews))
        } else { 
            setNewsList(props.bigNews)
        }
        function handleResize() { 
            if (window.innerWidth <= 850) { 
                setNewsList(props.bigNews.concat(props.oldestNews))
            } else { 
                setNewsList(props.bigNews)
            }
        }
        window.addEventListener("resize", handleResize);
        return (()=>{
            window.removeEventListener("resize", handleResize);
        })
    }, [props.bigNews, props.oldestNews])

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
    const currentNews = newsList.slice(indexOfFirstNews, indexOfLastNews);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(newsList.length / newsPerPage); i++) {
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
        <div className="newslist-big flex">
        {
            currentNews.map((item, index) => {
                return (
                    <NewsBig
                        key={index}
                        bigNews={item}
                    />
                )
            })
        }
        <div className="newslist-pag flex-center newslist-pag-big">
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
        </div>
    )
}