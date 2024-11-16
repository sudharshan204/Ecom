import React from "react";
import "./nav.css";
import { useNavigate } from "react-router-dom";

const Nav = () => {
  const navi = useNavigate();
  const handleClick = () => {
    navi("/LoginPage");
  };

  return (
    <div>
      <header className="navigation-bar">
        <div className="nav-header">
          <h1>CRUSH</h1>
        </div>
        <nav className="nav-elements">
          <ul>
            <li>
              <a href="/">HOME</a>
            </li>
            <li>
              <a href="/Deals">DEALS</a>
            </li>
           
            <li>
              <a href="/Newarrival">NEW ARRIVAL</a>
            </li>
            <li>
              <a href="/Designs">DESIGNER</a>
            </li>
            <li>
              <a href="/Cart">CART</a>
            </li>
          </ul>
        </nav>
        <div className="nav-btn">
          <button onClick={handleClick}>LOGIN</button>
        </div>
      </header>
    </div>
  );
};

export default Nav;
