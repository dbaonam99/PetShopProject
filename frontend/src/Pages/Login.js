import '../App.css';
import Header from '../components/Home/Header'; 
import Login from '../components/Account/Login'
import { useEffect } from 'react';

function Home() {

  useEffect(()=>{
    window.scrollTo(0,0)
  })

  return (
    <div className="Home">
      <Header/>
      <Login/>
    </div>
  );
}

export default Home;
