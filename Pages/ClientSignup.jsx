import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import 'react-phone-input-2/lib/style.css';
import PhoneInput from 'react-phone-input-2';
import axios from 'axios';
import logo from './assets/logo1.png';
import './style/signup-client.css';

const ClientSignup = () => {
  const navigate = useNavigate();
  const [phone, setPhone] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ 
      ...formData, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const payload = {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        password: formData.password,
        phone: phone, // Keeping phone in the payload
      };

      // First, send signup request
      const response = await axios.post('http://127.0.0.1:8000/client_signup/signup/client', payload);
      
      // Then navigate to OTP verification with the email
      navigate('/service-success', { 
        state: { 
          email: formData.email,
          phone: phone, // Passing phone to next screen if needed
          tempToken: response.data.temp_token
        } 
      });

    } catch (err) {
      console.error('Signup Error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Signup failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="client-signup-container">
      <div className="header-section">
        <div className="back-button" onClick={() => navigate(-1)}>
          <IoArrowBack />
        </div>
      </div>

      <div className="signup-container">
        <div className="logo-wrapper">
          <img src={logo} alt="Logo" className="signup-logo" />
          <div className="brand-name">GLAMTECH</div>
        </div>

        <h2>Personal information</h2>
        <p>Welcome to our platform! Please fill out the form below to create your account.</p>

        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="name-row">
            <input 
              type="text" 
              placeholder="First name" 
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required 
            />
            <input 
              type="text" 
              placeholder="Last name" 
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required 
            />
          </div>
          <input 
            type="email" 
            placeholder="Email address"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <PhoneInput
            country={'us'}
            value={phone}
            onChange={setPhone}
            inputStyle={{ width: '100%' }}
            containerStyle={{ marginBottom: '15px' }}
          />
          <input 
            type="password" 
            placeholder="Create password" 
            name="password"
            value={formData.password}
            onChange={handleChange}
            required 
          />
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="submit-btn" disabled={loading}>
            {loading ? 'Signing up...' : 'CONTINUE'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ClientSignup;



