import React from "react";
import Home from './Components/Home/Home'
import Products from './Components/Products/Products'
import Nav from './Components/navbar/nav';
import Deals from './Components/Deals/Deals';
import Newarrival from './Components/NewArrival/Newarrival.jsx'
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom'
import Cart from './Components/Cart/Cart.jsx';
import Footer from './Components/Fotter/Footer.jsx';
import LoginPage from './Components/Login/LoginPage.jsx';
import ShoppingPage from "./Components/NewArrival/ProductDetail.jsx";
import ProductDetail from "./Components/NewArrival/ProductDetail.jsx"
import Signup from "./Components/Signuo/Signup.jsx";
import PaymentPage from "./Components/NewArrival/PaymentPage.jsx";
import Designs from "./Components/Designs/Designs.jsx";
import FormPage from "./Components/Designs/FormPage.jsx";

const App = () => {
  return (
    <div>
      <Router>
      <Nav/>
          <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/Deals' element={<Deals/>}></Route>
          <Route path='/Newarrival' element={<Newarrival/>}></Route>
          <Route path='/Cart' element={<Cart/>}></Route>
          <Route path='/LoginPage' element={<LoginPage/>}></Route>
          <Route path='/shopping' element={<ShoppingPage/>}></Route>
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/register" element={<Signup/>} />
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/Designs" element={<Designs />} />
          <Route path="/FormPage" element={<FormPage />} />
          
          




        </Routes>
        <Footer/>
      </Router>

    </div>
  );
};

export default App;
