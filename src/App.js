import './App.css';
import Home from './Pages/Home';
import Product from './Pages/Product';
import News from './Pages/News';
import NewsDetail from './Pages/NewsDetail';
import Login from './Pages/Login';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"; 
function App(props) {

  return (  
    <Router>
      <div className="App"> 
        <Route path="/" exact component={Home}></Route> 
        <Route path="/dog" exact component={Product}></Route> 
        <Route path="/cat" exact component={Product}></Route> 
        <Route path="/news" exact component={News}></Route> 
        <Route path="/news/1" exact component={NewsDetail}></Route> 
        <Route path="/login" exact component={Login}></Route> 
      </div> 
    </Router> 
  );
}
export default App;
