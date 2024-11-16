import React, { useState, useEffect } from "react";
import "./Deals.css";
import { useNavigate } from "react-router-dom";
const images = [
  "/images/image1.jpg",
  "/images/image2.jpg",
  "/images/image3.jpg",
];

const GridDisplay = () => {
  return (
    <div className="grid-container">
      <div className="grid-item">Item 1</div>
      <div className="grid-item">Item 2</div>
      <div className="grid-item">Item 3</div>
      <div className="grid-item">Item 4</div>
    </div>
  );
};

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-12-31") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [showGrids, setShowGrids] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const navi = useNavigate();
  const handleButtonClick = () => {
    navi("/products");
    setShowGrids(true);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="full">
      <div className="countdown-slider-container">
        <div className="countdown-timer">
          <div className="header">
            <h1>Deals of the Month</h1>
          </div>

          <div className="sub-header">
            <p>Shirts are flat 40% off. Don't miss the opportunity!</p>
          </div>
          <button onClick={handleButtonClick}>Buy Now</button>
          <div className="timer">
            <div className="time-box">
              <div className="time">
                {String(timeLeft.hours).padStart(2, "0")}
              </div>
              <div className="label">Hours</div>
            </div>
            <div className="colon">:</div>
            <div className="time-box">
              <div className="time">
                {String(timeLeft.minutes).padStart(2, "0")}
              </div>
              <div className="label">Minutes</div>
            </div>
            <div className="colon">:</div>
            <div className="time-box">
              <div className="time">
                {String(timeLeft.seconds).padStart(2, "0")}
              </div>
              <div className="label">Seconds</div>
            </div>
          </div>
        </div>
        <div className="image-slider">
          <div className="image-container">
            {images.map((item, index) => (
              <img src={item} />
            ))}
          </div>
        </div>
        {showGrids && <GridDisplay />}
      </div>
    </div>
  );
};

export default CountdownTimer;
