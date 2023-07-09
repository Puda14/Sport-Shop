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
import Dashboard from './components/admin/Dashboard';
import Products from './components/admin/Products';
import Summary from './components/admin/Summary';
import CreateProduct from './components/admin/CreateProduct';
import ProductsList from './components/admin/list/ProductsList';
import Users from './components/admin/Users';
import Orders from './components/admin/Orders';

import Product from './components/Details/Product';
import Order from './components/Details/Order';
import UserProfile from './components/Details/UserProfile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
        <NavBar/>
        <div className="content-container">
        <Routes>
          <Route path = "/" element={<Home/>}/> 
          <Route path = "/Cart" element={<Cart/>}/> 
          <Route path = "/checkout-success" element={<CheckoutSuccess/>}/> 
          <Route path = "/Register" element={<Register/>}/> 
          <Route path = "/Login" element={<Login/>}/> 
          <Route path = "/Product/:id" element={<Product/>}/>
          <Route path = "/Order/:id" element={<Order/>}/> 
          <Route path = "/User/:id" element={<UserProfile/>}/> 
          
          <Route path = "/Admin" element={<Dashboard/>}> 
            <Route path = "Products" element={<Products/>}>
              <Route index element = {<ProductsList/>} />
              <Route path = "Create-product" element={<CreateProduct/>}/> 
            </Route>
            <Route path = "Summary" element={<Summary/>}/>
            <Route path = "Users" element={<Users/>}/>
            <Route path = "Orders" element={<Orders/>}/>
          </Route>
          <Route path = "*" element={<NotFound/>}/>
        </Routes>  
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
