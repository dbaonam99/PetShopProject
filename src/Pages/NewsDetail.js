import '../App.css';
import Header from '../components/Home/Header'; 
import Newsletter from '../components/Home/Newsletter';
import Footer from '../components/Home/Footer'; 
import NewsBanner from '../components/News/NewsBanner'
import NewsContent from '../components/News/NewsContent';
import { useEffect } from 'react';

function Home() {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <div className="Home">
      <Header/>
      <NewsBanner/>
      <NewsContent/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default Home;
