import React from 'react'
import { withRouter } from 'react-router-dom'
import '../../App.css'
import '../../Styles/News.css'

function NewsLastest(props) {

    const news = props.news

    return (
        <div className="NewsLastest">
            <div className="newslastest-title">
                Blog chó và mèo
            </div>
            { news &&
                <div className="newslastest-list flex">
                    { news[0] &&
                        <div 
                            className="news newslastest-item"
                            onClick={()=>{ 
                                props.history.push(`/news/${news[0]._id}`)
                            }}
                        >
                            <img src={news[0].newImg} alt=""></img>
                            <div className="newslastest-tag">{news[0].newCate}</div>
                            <div className="news-title">{news[0].newTitle}</div> 
                            <div className="news-content">{news[0].newContent.replace(/<[^>]+>/g, '')}</div>
                            <div className="news-readmore">read more...</div>
                        </div>
                    }
                    { news[1] &&
                        <div 
                            className="news newslastest-item"
                            onClick={()=>{ 
                                props.history.push(`/news/${news[1]._id}`)
                            }}
                        >
                            <img src={news[1].newImg} alt=""></img>
                            <div className="newslastest-tag">{news[1].newCate}</div>
                            <div className="news-title">{news[1].newTitle}</div>
                            <div className="news-content">{news[1].newContent.replace(/<[^>]+>/g, '')}</div>
                            <div className="news-readmore">read more...</div>
                        </div>
                    }
                    { news[2] &&
                        <div 
                            className="news newslastest-item"
                            onClick={()=>{ 
                                props.history.push(`/news/${news[2]._id}`)
                            }}
                        >
                            <img src={news[2].newImg} alt=""></img>
                            <div className="newslastest-tag">{news[2].newCate}</div>
                            <div className="news-title">{news[2].newTitle}</div>
                            <div className="news-content">{news[2].newContent.replace(/<[^>]+>/g, '')}</div>
                            <div className="news-readmore">read more...</div>
                        </div>
                    }
                </div>
            }
        </div>
    )
}
export default withRouter(NewsLastest)