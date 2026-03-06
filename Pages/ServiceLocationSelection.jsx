import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import logo from './assets/logo1.png';
import './style/salon-otp-verification.css';

const ServiceLocationSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedOption) return;
    
    // Always navigate to SalonEnterAddress but pass the selected option type
    navigate('/salon-enter-address', { 
      state: {
        ...location.state,
        serviceType: selectedOption // 'my-place' or 'client-location'
      }
    });
  };

  return (
    <div className="salon-otp-container">
      <div className="salon-otp-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <IoArrowBack size={20} />
        </button>
      </div>

      <div className="salon-otp-content">
        <div className="salon-brand">
          <img 
            src={logo} 
            alt="Salon X Logo" 
            className="salon-logo" 
            onError={(e) => {
              console.error('Error loading logo:', e);
              e.target.style.display = 'none';
            }}
          />
          <h1>SALON-X</h1>
        </div>

        <h2>Where do you want to provide services?</h2>

        <form onSubmit={handleSubmit}>
          <div className="location-options">
            <div 
              className={`location-option ${selectedOption === 'my-place' ? 'selected' : ''}`}
              onClick={() => handleOptionChange('my-place')}
            >
              <div className="radio-option">
                <div className={`radio-circle ${selectedOption === 'my-place' ? 'selected' : ''}`}>
                  {selectedOption === 'my-place' && <div className="radio-dot"></div>}
                </div>
                <span>At my place</span>
              </div>
              <p className="option-description">Work at a salon or your own place.</p>
            </div>

            <div 
              className={`location-option ${selectedOption === 'client-location' ? 'selected' : ''}`}
              onClick={() => handleOptionChange('client-location')}
            >
              <div className="radio-option">
                <div className={`radio-circle ${selectedOption === 'client-location' ? 'selected' : ''}`}>
                  {selectedOption === 'client-location' && <div className="radio-dot"></div>}
                </div>
                <span>At the client's location</span>
              </div>
              <p className="option-description">Provide services at the client's address.</p>
            </div>
          </div>

          <button 
            type="submit" 
            className="verify-otp-btn"
            disabled={!selectedOption}
          >
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceLocationSelection;