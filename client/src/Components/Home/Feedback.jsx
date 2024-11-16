
import React from "react";
import "./Feedback.css";

import profile1 from "../../assets/Images/feedback.png";
import profile2 from "../../assets/Images/feedback2.png";
import profile3 from "../../assets/Images/feedback.png";

const Feedback = () => {
  return (
    <div className="feedback-container">
      <h1 className="feedback-heading">This is what our customer says</h1>
      <div className="feedback-cards">
        <div className="card">
          <img src={profile1} alt="Profile 1" className="profile-img" />
          <p>""You won't regret it. I would like to personally thank you for your outstanding product. Absolutely wonderful!""</p>
        </div>
        <div className="card">
          <img src={profile2} alt="Profile 2" className="profile-img" />
          <p>“Just what I was looking for. Thank you for making it painless, pleasant and most of all hassle free! All products are great.”</p>
        </div>
        <div className="card">
          <img src={profile3} alt="Profile 3" className="profile-img" />
          <p>"I would like to personally thank you for your outstanding product, All products are great."</p>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
