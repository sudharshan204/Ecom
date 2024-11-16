import React from 'react';
import "../Designs/Designs.css";
import img from "../../assets/Images/image 2.png";
import img1 from "../../assets/Images/image 3.png";

import { useNavigate } from 'react-router-dom';

const Design = () => {
    const navi = useNavigate();
    const handleClick = () => {
        navi("/FormPage");
    }
  return (
    <div className='total'>
      <div className='img1'>
        <img src={img} height="550px" width="350px" />
      </div>
      <div className='text-container'>
        <div className='centertxt'>
          SUBSCRIBE TO OUR DESIGNERS
        </div>
        <div className='centertxt2'>
          "Subscribe to our Premium service and discover emerging designers who offer you the exclusive opportunity to customize your own attire. Enjoy unparalleled support and a host of additional benefits."
        </div>
        <button className='sub' onClick={handleClick}>Subcribe Now</button>
      </div>
      <div className='img2'>
        <img src={img1} height="550px" width="350px" />
      </div>
    </div>
  )
}

export default Design;