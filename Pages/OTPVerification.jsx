import React from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import './style/otp-verification.css'; // optional for styling
import logo from './assets/logo1.png';

const OTPVerification = () => {
  const navigate = useNavigate();

  return (
    <div className="otp-container">
      <div className="otp-header">
      <img src={logo} alt="Salon X Logo" className="otp-logo" />
      <span className="otp-brand">SALON-X</span>
        <span className="otp-back" onClick={() => navigate(-1)}><IoArrowBack /></span>
        <h2>We just sent you 6-digit code</h2>
        <p>+00 123 123 1234 <span className="otp-change">Change</span></p>
      </div>

      <div className="otp-boxes">
        {[...Array(6)].map((_, idx) => (
          <input key={idx} type="text" maxLength="1" className="otp-input" />
        ))}
      </div>

      <div className="otp-actions">
        <label>
          <input type="radio" /> Get new code
        </label>
        <button className="otp-verify">VERIFY</button>
      </div>
    </div>
  );
};

export default OTPVerification;
