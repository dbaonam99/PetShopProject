import '../App.css';
import Header from '../components/Home/Header';
import Banner from '../components/Home/Banner';
import Intro from '../components/Home/Intro';
import Features from '../components/Home/Features';
import Newsletter from '../components/Home/Newsletter';
import Footer from '../components/Home/Footer';
import Feedback from '../components/Home/Feedback';
import { useEffect } from 'react';

function Home() {

  useEffect(()=>{
    window.scrollTo(0,0)
  })
  
  return (
    <div className="Home">
      <Header/>
      <Banner/>
      <Intro/>
      <Features/>
      <Feedback/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default Home;
