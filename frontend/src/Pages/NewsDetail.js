import '../App.css';
import Header from '../components/Home/Header'; 
import Newsletter from '../components/Home/Newsletter';
import Footer from '../components/Home/Footer'; 
import NewsBanner from '../components/News/NewsBanner'
import NewsContent from '../components/News/NewsContent';
import { useEffect, useState } from 'react';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';

function NewsDetail(props) {

    const [news, setNews] = useState({})

    useEffect(()=>{
        window.scrollTo(0,0) 
        Axios.get(`http://localhost:4000/news/` + props.match.params.id)
            .then(res => { 
                setNews(res.data)
            }
        )
    },[props.match.params.id])  
    
    return (
        <div className="Home">
        <Header/>
        <NewsBanner
            news={news}
        />
        <NewsContent
            news={news}
        />
        <Newsletter/>
        <Footer/>
        </div>
    );
}

export default withRouter(NewsDetail);
