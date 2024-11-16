import React from 'react';
import './Customer.css';

function Customer() {
  return (
    <div className="Customer">
      <header className="Customer-header">
        <h1>Customer Service</h1>
        <nav>
          <ul>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#returns">Returns</a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section id="faq">
          <h2>Frequently Asked Questions</h2>
          <p>Here you'll find answers to the most common questions.</p>
        </section>
        <section id="contact">
          <h2>Contact Us</h2>
          <p>If you need further assistance, please reach out to our customer support team.</p>
        </section>
        <section id="returns">
          <h2>Returns</h2>
          <p>Learn about our return policy and how to return items.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Customer;
