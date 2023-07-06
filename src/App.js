import './App.css';
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import CheckoutSuccess from './components/CheckoutSuccess'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
        <NavBar/>
        <div className="content-container">
        <Routes>
          <Route path = "/" exact element={<Home/>}/> 
          <Route path = "/Cart" element={<Cart/>}/> 
          <Route path = "/checkout-success" element={<CheckoutSuccess/>}/> 
          <Route path = "/Register" element={<Register/>}/> 
          <Route path = "/Login" element={<Login/>}/> 
          <Route path = "*" element={<NotFound/>}/>
        </Routes>  
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
