import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import logo from './assets/logo1.png';
import './style/category.css';

const categories = [
  'Aesthetic Medicine', 'Barbershop', 'Braids & Locs',
  'Dental & Orthodontics', 'Hair Removal', 'Hair Salon',
  'Health & Fitness', 'Home Services', 'Makeup'
];

const StylistCategorySelection = () => {
  const navigate = useNavigate();
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleCheckboxChange = (category) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      user_id: 1,
      categories: selectedCategories,
    };

    try {
      const response = await fetch('http://127.0.0.1:8000/api/category/select/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Success:', data);
        navigate('/signup/business-info');
      } else {
        console.error('Failed:', data);
        alert('Failed to save categories');
      }
    } catch (err) {
      console.error('Error:', err);
    }
  };

  return (
    <div className="category-container">
      <div className="header-section">
        <div className="back-button" onClick={() => window.history.back()}>
          <IoArrowBack />
        </div>
      </div>

      <div className="form-wrapper">
        <img src={logo} alt="Logo" className="signup-logo" />
        <div className="brand-name">SALON-X</div>

        <h2>Tell us about your business</h2>

        <form className="category-form" onSubmit={handleSubmit}>
          {categories.map((category, idx) => (
            <label key={idx} className="checkbox-label">
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => handleCheckboxChange(category)}
              />
              {category}
            </label>
          ))}

          <button type="submit" className="submit-btn">CONTINUE</button>
        </form>
      </div>
    </div>
  );
};

export default StylistCategorySelection;


