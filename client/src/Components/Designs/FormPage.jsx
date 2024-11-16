import React, { useState } from 'react';
import './FormPage.css';

const FormPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    item: 'shirt',
    size: '',
    color: '',
    deliveryDays: '',
    customization: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); 
    alert('Form submitted successfully!');
  };

  return (
    <div className="form-container">
      <h2>Customize Your Apparel</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Choose Item:</label>
          <select name="item" value={formData.item} onChange={handleChange}>
            <option value="shirt">Shirt</option>
            <option value="pant">Pant</option>
          </select>
        </div>

        <div className="form-group">
          <label>Size:</label>
          <select name="size" value={formData.size} onChange={handleChange} required>
            <option value="">Select Size</option>
            <option value="S">Small</option>
            <option value="M">Medium</option>
            <option value="L">Large</option>
            <option value="XL">Extra Large</option>
          </select>
        </div>

        <div className="form-group">
          <label>Color:</label>
          <input
            type="text"
            name="color"
            value={formData.color}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Delivery Days:</label>
          <input
            type="number"
            name="deliveryDays"
            value={formData.deliveryDays}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Customization Details:</label>
          <textarea
            name="customization"
            value={formData.customization}
            onChange={handleChange}
            placeholder="Describe your customization preferences"
          />
        </div>

        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default FormPage;