import React from "react";
import "../Home/Home.css";
import Feedback from "./Feedback";
import img from "../../assets/Images/home1.png";
import img1 from "../../assets/Images/home2.png";
import img2 from "../../assets/Images/images.png";
import img3 from "../../assets/Images/home4.png";
import img4 from "../../assets/Images/home5.png";
import {useNavigate} from "react-router-dom"

const Home = () => {
  const navi = useNavigate();
  const handleClick = () => {
    navi("/products");
  }
  return (
    <div>
      
      <main className="imgtotal">
        <div className="img1">
          <img src={img} alt="Home Image 1" />
        </div>
        <div className="img-center-elements">
          <div className="center-img1">
            <img src={img2} alt="Center Image 1" />
          </div>
          <div className="center-heading">
            ULTIMATE SALE<br />
          </div>
          <button className="butt" onClick={handleClick}>SHOP NOW</button>
          <div className="center-img2">
            <img src={img2} alt="Center Image 2" />
          </div>
        </div>
        <div className="img2">
          <img src={img1} alt="Home Image 2" />
        </div>
        
      </main>
      <div className="logs">
        <img src={img3} alt="Logs Image" />
      </div>
      <section className="fullfollow">
        <h1 className="follow">Follow Us On Instagram</h1>
        <div className="insta">
          <img src={img4} alt="Instagram Promotion" />
        </div>
        <div className="promotional-text">
          Get the latest updates and exclusive offers!
        </div>
<br></br>        <a href="#" className="call-to-action">  <b4></b4>Join Now</a>
      </section>
      <Feedback />
    </div>
  );
};

export default Home;
