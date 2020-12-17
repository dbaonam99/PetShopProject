import './App.css';
import Home from './Pages/Home';
import Product from './Pages/Product';
import News from './Pages/News';
import NewsDetail from './Pages/NewsDetail';
import Login from './Pages/Login';
import Checkout from './Pages/Checkout';
import AdminLogin from './components/Admin/Login/Login'
import Dashboard from './components/Admin/Dashboard/Dashboard'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom"; 
import Toast from './components/Toast';
import { CartProvider } from './contexts/Cart';
import { UserProvider } from './contexts/User';
import OpenChatBtn from './components/OpenChatBtn';
import Account from './components/Account/Account';

function App(props) { 
  
  return (  
    <UserProvider>
    <CartProvider>
      <Router>
        <div className="App"> 
          <Toast/>
          <Route path="/" exact component={Home}></Route> 
          <Route path="/dog" exact component={Product}></Route> 
          <Route path="/cat" exact component={Product}></Route> 
          <Route path="/news" exact component={News}></Route> 
          <Route path="/news/:id" exact component={NewsDetail}></Route> 
          <Route path="/login" exact component={Login}></Route> 
          <Route path="/admin" exact component={AdminLogin}></Route> 
          <Route path="/account" exact component={Account}></Route> 
          <Route path="/checkout" exact component={Checkout}></Route> 
          <Route path="/admin/dashboard" exact component={Dashboard}></Route> 
        </div> 
        <OpenChatBtn/>
      </Router> 
    </CartProvider>
    </UserProvider>
  );
}
export default App;
