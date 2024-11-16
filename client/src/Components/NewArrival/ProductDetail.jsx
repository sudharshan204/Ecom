import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../NewArrival/ProductDetail.css";

const ProductDetail = () => {
  const location = useLocation();
  const { product } = location.state;
  const navigate=useNavigate();

  const handleBuyNow = () => {
    console.log("asdfghjkl");
    navigate("/payment", { state: { product } });
  };

  return (
    <div>
    <div className="product-page">
      <div className="add">

      </div>
      <div className="image-gallery">
        <img src={product.image} alt={product.Brand} className="main-image" />
      </div>
      <div className="product-info">
        <h1 className="brand">{product.Brand}</h1>
        <h2 className="brand">{product.Category}</h2>
        <div className="des">
        <h3><p>The timeless design features a crisp collar, button-down front, and tailored cut that complements all body types. Whether you're heading to the office, out for a casual day, or dressing up for an evening event, this shirt effortlessly blends style and function. Available in a variety of colors and patterns, it's a staple piece you'll reach for time and time again.</p></h3></div>
        <p className="ratings">⭐⭐⭐⭐⭐ (45 ratings)</p>
        <p className="price">
          <span className="discount-price">{product.Price}</span>{" "}
          
        </p>
        <div className="offers">
          <p>Offers:</p>
          <ul>
            <li>Bank Offer: Up to ₹500 discount</li>
            <li>Cashback: ₹2,000 welcome rewards</li>
          </ul>
        </div>
        <div className="availability">
          <p>In Stock</p>
          <p>Ships from: Amazon</p>
        </div>
        <div className="quantity">
          <label>Quantity:</label>
          <input type="number" min="1" defaultValue="1" />
        </div>
    </div>
      </div>
      <div className="carrt">
        <button className="add-to-cart">Add to Cart</button>
        <button className="buy-now" onClick={handleBuyNow}>
        Buy Now
        </button>
      </div>
      </div>
  );
};

export default ProductDetail;
