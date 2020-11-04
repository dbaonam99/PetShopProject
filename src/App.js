import './App.css';
import Header from './components/Header';
import Banner from './components/Banner';
import Intro from './components/Intro';
import Features from './components/Features';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Intro/>
      <Features/>
      <Newsletter/>
      <Footer/>
    </div>
  );
}

export default App;
