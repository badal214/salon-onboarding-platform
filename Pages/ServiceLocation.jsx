import React, { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import './style/service-location.css';

const ServiceLocation = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (value) => {
    setSelectedOption(value);
  };

  return (
    <div className="service-location-container">
      {/* Back button */}
      <div className="back-button" onClick={() => navigate(-1)}>
        <IoArrowBack size={24} />
      </div>

      <div className="form-card">
        <h2 className="title">Where do you want to provide services?</h2>

        <div
          className={`option-container ${
            selectedOption === 'myPlace' ? 'selected' : ''
          }`}
          onClick={() => handleOptionChange('myPlace')}
        >
          <label>
            <input
              type="radio"
              name="serviceLocation"
              checked={selectedOption === 'myPlace'}
              onChange={() => handleOptionChange('myPlace')}
            />
            <span>At my place</span>
          </label>
          <p className="option-description">
            Work at a salon or your own place.
          </p>
        </div>

        <div
          className={`option-container ${
            selectedOption === 'clientLocation' ? 'selected' : ''
          }`}
          onClick={() => handleOptionChange('clientLocation')}
        >
          <label>
            <input
              type="radio"
              name="serviceLocation"
              checked={selectedOption === 'clientLocation'}
              onChange={() => handleOptionChange('clientLocation')}
            />
            <span>At the client’s location</span>
          </label>
          <p className="option-description">
            Provide services at the client’s address.
          </p>
        </div>

        <button
          className="continue-btn"
          onClick={() => navigate('/signup/address')}
          disabled={!selectedOption}
        >
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default ServiceLocation;





