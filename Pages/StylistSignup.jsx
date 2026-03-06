import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import logo from './assets/logo1.png';
import './style/stylist-signup.css';
import axios from 'axios';

const StylistSignup = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    businessName: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const payload = {
      first_name: formData.firstName,
      last_name: formData.lastName,
      email: formData.email,
      password: formData.password,
      phone: phone,
      business_name: formData.businessName,
    };

    try {
      await axios.post('http://127.0.0.1:8000/api/signup/stylist/', payload);
      navigate('/stylist/verify-otp', { state: { email: formData.email } });
    } catch (err) {
      console.error('Signup error:', err.response?.data || err.message);
      setError('Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="signup-container">
      {/* Back Button */}
      <div className="header-section">
        <div className="back-button" onClick={() => navigate(-1)}>
          <IoArrowBack />
        </div>
      </div>

      {/* Signup Form */}
      <div className="form-wrapper">
        <div className="logo-wrapper">
          <img src={logo} alt="Logo" className="signup-logo" />
          <div className="brand-name">SALON-X</div>
        </div>

        <h2>About you</h2>
        <p>Welcome to our platform! Please tell us about yourself and your business.</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="name-row">
            <input
              type="text"
              name="firstName"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="businessName"
            placeholder="Business Name"
            value={formData.businessName}
            onChange={handleChange}
            required
          />
          <PhoneInput
            country={'us'}
            value={phone}
            onChange={setPhone}
            inputStyle={{ width: '100%' }}
          />
          <input
            type="password"
            name="password"
            placeholder="Create password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          {error && <p style={{ color: 'red' }}>{error}</p>}

          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Submitting...' : 'SIGN IN'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default StylistSignup;
