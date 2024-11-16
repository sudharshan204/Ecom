import React, { useState, useEffect } from 'react';
import './Products.css';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div className="product-pagee">
      <div className="product-list">
        {products.map((product) => (
          <div className="product-container" key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details">
              <h1>{product.title}</h1>
              <p className="price">${product.price}</p>
              <p className="description">{product.description}</p>
              <button className="add-to-cart">Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
