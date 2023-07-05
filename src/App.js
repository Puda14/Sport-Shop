// import logo from './logo.svg';
import './App.css';
import "react-toastify/dist/ReactToastify.css";
import {BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import { ToastContainer } from "react-toastify";
// import {Routes} from "react-router";
import NavBar from './components/NavBar';
import Cart from './components/Cart';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ToastContainer/>
        <NavBar/>
        <Switch>
          <Route path = "/Cart" component={Cart}/> 
          <Route path = "/not-found" component={NotFound}/>
          <Route path = "/" exact component={Home}/> 
          <Redirect to = "/not-found"/>
        </Switch>  
      </BrowserRouter>
    </div>
  );
}

export default App;
