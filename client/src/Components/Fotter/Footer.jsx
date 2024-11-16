import React from 'react';
import './Footer.css'; // Importing the CSS for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about-us">
          <h2>About Us</h2>
          <p>We are a leading e-commerce platform offering a wide range of products for men and women. Our mission is to provide the best shopping experience with quality products and exceptional customer service.</p>
        </div>
        <div className="footer-section contact-us">
          <h2>Contact Us</h2>
          <p>Email: sukumarcrush@gmail.com</p>
          <p>Phone: 8838457680</p>
          <p>Address: 123 Shopping St, Shopville, SH 12345</p>
        </div>
        <div className="footer-section menu">
          <h2>INFO</h2>
          <ul>
            <li><a href="/men">Customer Servise</a></li>
            <li><a href="/women">Find a store</a></li>
            <li><a href="/about">report</a></li>
            <li><a href="/contact">Designers</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
         ShoppingSite. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
