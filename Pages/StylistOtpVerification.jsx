import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import logo from './assets/logo1.png';
import './style/otp.css';

const StylistOtpVerification = () => {
  const navigate = useNavigate();

  const handleVerify = () => {
    navigate('/stylist/select-category');
  };

  return (
    <div className="otp-container">
      <div className="header-section">
        <div className="back-button" onClick={() => navigate(-1)}>
          <IoArrowBack />
        </div>
      </div>

      <div className="form-wrapper">
        <img src={logo} alt="Logo" className="signup-logo" />
        <div className="brand-name">SALON-X</div>

        <h2>We just sent you 6-digit code</h2>
        <p>+00 123 123 1234 <span className="change">Change</span></p>

        <div className="otp-inputs">
          {[...Array(6)].map((_, index) => (
            <input key={index} type="text" maxLength="1" />
          ))}
        </div>

        <div className="timer">01:23</div>

        <button className="submit-btn" onClick={handleVerify}>VERIFY</button>
      </div>
    </div>
  );
};

export default StylistOtpVerification;
