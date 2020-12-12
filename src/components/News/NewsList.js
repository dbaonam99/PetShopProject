import React from 'react'
import '../../App.css'
import '../../Styles/News.css'
import NewsBig from './NewsBig'
import News from './News'

export default function NewsList(props) {

    return (
        <div className="newslist">
            <div className="newslist-tab flex">
                <div className="newslist-box flex newslist-box-active">
                    All 
                    <div className="news-count flex-center">23</div>
                </div>
                <div className="newslist-box flex">
                    All 
                    <div className="news-count flex-center">23</div>
                </div>
            </div>
            <div className="newslist-big flex">
                <NewsBig/>
                <NewsBig/>
                <NewsBig/>
                <NewsBig/>
            </div>
            <div className="newslist-small flex">
                <News/>
                <News/>
                <News/> 
                <News/> 
                <News/>
                <News/>
                <News/> 
                <News/> 
            </div>
            <div className="newslist-pag flex">

            </div>
        </div>
    )
}