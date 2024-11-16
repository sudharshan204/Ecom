import React from 'react';
import './Cart.css';
import {useNavigate} from "react-router-dom"


const Cart = () => {
  const navi = useNavigate();
  const handleClick = () => {
    navi("/LoginPage");
  }
  return (
    <div className="container-fluid">
      <div className="main-content">
        <img src="https://img.icons8.com/color/96/000000/empty-box.png" alt="Empty Cart" className="cart-image"/>
        <h5 className="missing-items">Missing Cart items?</h5>
        <p className="login-prompt">Login to see the items you added previously</p>
        <button className="login-button-main"   onClick={handleClick}>Login</button>
      </div>
    </div>
  );
};

export default Cart;
