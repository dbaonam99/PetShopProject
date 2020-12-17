import Axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../../App.css'
import '../../Styles/News.css'
import News from './News';

export default function NewsContent(props) {

    const news = props.news
    const [newsList, setNewsList] = useState([])

    useEffect(()=>{ 
        if (news) {
            Axios.get(`http://localhost:4000/news`)
            .then(res => { 
                const arr = []
                for (let i in res.data) { 
                    if (res.data[i]._id !== news._id) { 
                        if (res.data[i].newCate === news.newCate) {
                            arr.push(res.data[i])
                        } else {
                            arr.push(res.data[i])
                        }
                    }
                }
                setNewsList(arr)
            }
        )
        }
    },[props.news])  

    return (
        <div className="NewsContent">
            {
                news && 
                <div className="newscontent-text"
                    dangerouslySetInnerHTML={{__html: news.newContent}}
                >
                </div>
            }
            <div className="invitejoin-title">
                <p>Những blog khác...</p>
            </div>
            <div className="productrecomend-list flex">
                {
                    newsList.slice(0,4).map((item, index) => {
                        return (
                            <News
                                key={index}
                                news={item}
                            />
                        )
                    })
                } 
            </div> 
            <div className="line"></div>
        </div>
    )
}