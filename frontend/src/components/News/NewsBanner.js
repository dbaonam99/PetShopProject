import Axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../../App.css'
import '../../Styles/News.css'

export default function NewsBanner(props) {

    const news = props.news
    const [date, setDate] = useState("")
    
    useEffect(()=>{
        Axios.post(`http://localhost:4000/news/update/${news._id}`, {
            countId: news._id
        }) 
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
    },[props.news])

    return (
        <div className="NewsBanner flex">
            {
                news &&
                <div className="newsbanner-info flex-col">
                    <div className="newsbanner-cate">{news.newCate}</div>
                    <div className="newsbanner-title">{news.newTitle}</div>
                    <div className="newsbanner-time">{date}</div>
                    {/* <div className="newsbanner-des">Learn all about microchips for cats and their main uses and limitations when it comes to tracking your favorite feline friend!</div> */}
                </div>
            }
            {
                news &&
                <div className="newsbanner-img">
                    <img src={news.newImg}></img>
                </div>
            }
        </div>
    )
}