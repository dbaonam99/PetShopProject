import '../App.css';
import Header from '../components/Home/Header'; 
import Newsletter from '../components/Home/Newsletter';
import Footer from '../components/Home/Footer'; 
import NewsLastest from '../components/News/NewsLastest'
import NewsList from '../components/News/NewsList';
import { useEffect, useState } from 'react';
import Axios from 'axios';

function News() {

    const [news, setNews] = useState([]);
    const [constNews, setConstNews] = useState([]);
    const [lastestNews, setLastestNews] = useState([]);
    const [bigNews, setBigNews] = useState([]);
    const [oldestNews, setOldestNews] = useState([]);
    const [cateTab, setCateTab] = useState("all")

    useEffect(()=>{
        window.scrollTo(0,0)
        Axios.get(`http://localhost:4000/news`)
            .then(res => {  
                const arr = [...res.data]
                setConstNews(arr)
                setNews(arr)
                setLastestNews(res.data.splice(0,3))  
                if (cateTab === "all") {
                    setBigNews(res.data.splice(0,4))  
                    setOldestNews(res.data.splice(0,res.data.length)) 
                } else { 
                    var a = arr.filter((item) => {return item.newCate === cateTab})
                    setBigNews(a.splice(0,4))  
                    setOldestNews(a.splice(0,a.length)) 
                }
            }
        )
    },[cateTab]) 

    const cate = Object.values(constNews.reduce((a, {newCate}) => {
        a[newCate] = a[newCate] || {newCate, count: 0};
        a[newCate].count++;
        return a;
    }, Object.create(null)));  

    return (
        <div className="News">
        <Header/>
        <NewsLastest
            news={lastestNews}
        /> 
        <NewsList
            cate={cate}
            cateTab={cateTab}
            setCateTab={setCateTab}
            news={news}
            bigNews={bigNews}
            oldestNews={oldestNews}
        />
        <Newsletter/>
        <Footer/>
        </div>
    );
}

export default News;
