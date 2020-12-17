import React from 'react'
import { withRouter } from 'react-router-dom'
import '../../App.css'
import '../../Styles/News.css'

function NewsBig(props) {

    const bigNews = props.bigNews

    return (
        <div 
            className="newsbig"
            onClick={()=>{ 
                props.history.push(`/news/${bigNews._id}`)
            }}>  
            <img src={bigNews.newImg} alt=""></img>
            <div className="newslastest-tag">{bigNews.newCate}</div>
            <div className="news-title">{bigNews.newTitle}</div>
            <div className="news-content news-content-big">{bigNews.newContent.replace(/<[^>]+>/g, '')}</div>
            <div className="news-readmore">read more...</div>
        </div>
    )
}
export default withRouter(NewsBig)