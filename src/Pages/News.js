import '../App.css';
import Header from '../components/Home/Header'; 
import Newsletter from '../components/Home/Newsletter';
import Footer from '../components/Home/Footer'; 
import NewsLastest from '../components/News/NewsLastest'
import NewsList from '../components/News/NewsList';
import { useEffect } from 'react';

function Home() {
  useEffect(()=>{
    window.scrollTo(0,0)
  })
  return (
    <div className="Home">
      <Header/>
      <NewsLastest/>
      <NewsList/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default Home;
