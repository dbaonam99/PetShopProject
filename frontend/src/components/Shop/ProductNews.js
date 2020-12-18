import React, { useEffect, useState } from 'react'
import '../../Styles/Home.css'
import '../../App.css' 
import News from '../News/News'

export default function ProductNews(props) {  
 
    // const [news, setNews] = useState([])

    // useEffect(()=>{
    //     if (props.news) {  
    //         if (window.innerWidth <= 1150) { 
    //             setNews(props.news.splice(0,3))
    //         } else {
    //             setNews(props.news.splice(0,4))
    //         }
    //     }
    //     function handleResize() { 
    //         if (window.innerWidth <= 1150) { 
    //             setNews(props.news.splice(0,3))
    //         } else {
    //             setNews(props.news.splice(0,4))
    //         } 
    //     }
    //     window.addEventListener("resize", handleResize);
    //     return (()=>{
    //         window.removeEventListener("resize", handleResize);
    //     })
    // },[props.news])
 

    return (
        <div className="Ask">
            <div className="invitejoin" style={{paddingBottom: '0'}}>
                <div className="invitejoin-title">
                    <strong>Blog thú cưng</strong>
                </div>
                { props.news &&
                    <div className="productrecomend-list flex">
                        { props.news.splice(0,4).map((item, index) => { 
                            return ( 
                                <News
                                    key={index}
                                    news={item}
                                /> 
                            )
                        })}
                    </div>
                }
            </div>
        </div>
    )
}