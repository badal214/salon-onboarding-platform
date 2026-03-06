import React, { useState } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';
import { getNames } from 'country-list';
import './style/enter-address.css';

const EnterAddress = () => {
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);

  const handleBack = () => navigate(-1);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Address submitted:', country?.value);
    // You can send the country value and address data here
    navigate('/signup/business-hours');
  };

  const countries = getNames().map((name) => ({
    label: name,
    value: name,
  }));

  return (
    <div className="address-container">
      <div className="back-icon" onClick={handleBack}>
        <IoArrowBack />
      </div>

      <h2>Enter your address</h2>
      <p className="subtitle">Where can clients find you?</p>

      <form className="address-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="🔍 Search" className="search-input" />

        <div className="or-divider">— OR —</div>

        <input type="text" placeholder="Address" required />
        <input type="text" placeholder="Street" required />
        <div className="city-row">
          <input type="text" placeholder="City" required />
          <input type="text" placeholder="State/Province" required />
        </div>
        <input type="text" placeholder="ZIP/Postal Code" required />

        <div className="country-select">
          <label>Select Country</label>
          <Select
            options={countries}
            value={country}
            onChange={setCountry}
            placeholder="Choose your country"
          />
        </div>

        <button type="submit" className="submit-btn" disabled={!country}>
          SIGN IN
        </button>
      </form>
    </div>
  );
};

export default EnterAddress;

