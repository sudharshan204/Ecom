import React from "react";
import { useLocation } from "react-router-dom";
import "./PaymentPage.css"; 
import payy from "../../assets/Images/pay.jpg";
import Master from "../../assets/Images/master.jpg";
import visa from "../../assets/Images/visa.jpg";

const PaymentForm = () => {
  const location = useLocation();
  const { product } = location.state;

  return (
    <div className="payment-container">
      <div className="product-summary">
        <img src={product.image} alt={product.Brand} className="summary-image" />
        <div className="summary-details">
          <h2>{product.Brand}</h2>
          <p>{product.Category}</p>
          <p className="summary-price">{product.Price}</p>
        </div>
      </div>
      <form className="payment-form">
        <div className="form-section billing-address">
          <h2>Billing Address</h2>
          <label>Full Name:</label>
          <input type="text" name="fullname" placeholder="Enter your Name" />

          <label>Email:</label>
          <input type="email" name="email" placeholder="hello@example.com" />

          <label>Address:</label>
          <input type="text" name="address" placeholder="Type your Address" />

          <label>City:</label>
          <input type="text" name="city" placeholder="" />

          <div className="row">
            <div className="column">
              <label>State:</label>
              <input type="text" name="state" placeholder="" />
            </div>
            <div className="column">
              <label>Zip Code:</label>
              <input type="text" name="zipcode" placeholder="123 456" />
            </div>
          </div>
        </div>

        <div className="form-section payment-details">
          <h2>Payment</h2>
          <label>Cards Accepted:</label>
          <div className="card-icons">
            <img src={payy} alt="PayPal" />
            <img src={Master} alt="MasterCard" />
            <img src={visa} alt="Visa" />
          </div>

          <label>Name on Card:</label>
          <input type="text" name="cardname" placeholder="Enter your name as on card" />

          <label>Credit Card Number:</label>
          <input
            type="text"
            name="cardnumber"
            placeholder="1111 2222 3333 4444"
          />

          <label>Exp. Month:</label>
          <input type="text" name="expmonth" placeholder="August" />

          <div className="row">
            <div className="column">
              <label>Exp. Year:</label>
              <input type="text" name="expyear" placeholder="2025" />
            </div>
            <div className="column">
              <label>CVV:</label>
              <input type="text" name="cvv" placeholder="123" />
            </div>
          </div>
        </div>

        <div className="submit-container">
          <button type="submit" className="submit-button">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default PaymentForm;
