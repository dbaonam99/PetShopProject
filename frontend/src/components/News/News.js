import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import '../../App.css'
import '../../Styles/News.css'

function News(props) {

    const news = props.news 

    const [date, setDate] = useState("")
    
    useEffect(()=>{
        const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];
        if (news) {
            const date = new Date(news.newTime)
            const day = date.getDate()
            const month = date.getMonth()
            const year = date.getFullYear()
            setDate(`${day} ${monthNames[month]} ${year}`)
        }
    },[])

    return (
        <div 
            className="news"
            onClick={()=>{ 
                props.history.push(`/news/${news._id}`)
            }}
        >
            {news &&
                <div className="news-img">
                    <img src={news.newImg} alt=""></img>
                    <div className="news-cate">{news.newCate}</div>
                </div>
            }
            {news &&
                <div className="news-time">{date}</div>
            }
            {news &&
                <div className="news-title">{news.newTitle}</div>
            }
            {news &&
                <div className="news-content">{news.newContent.replace(/<[^>]+>/g, '')}</div>
            }
            {news &&
                <div className="news-readmore">read more...</div>
            }
        </div>
    )
}
export default withRouter(News);