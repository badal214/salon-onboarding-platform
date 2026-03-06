import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import Select from 'react-select';
import { getNames } from 'country-list';
import logo from './assets/logo1.png';
import './style/salon-otp-verification.css';

const SalonEnterAddress = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState({
    search: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: null
  });
  const [errors, setErrors] = useState({});

  const countryOptions = Object.entries(getNames()).map(([code, name]) => ({
    value: code,
    label: name
  }));

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const handleCountryChange = (selectedOption) => {
    setAddress(prev => ({ ...prev, country: selectedOption }));
    if (errors.country) setErrors(prev => ({ ...prev, country: null }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/business-hours', {
      state: {
        // Pass any necessary data from previous steps
      }
    });
  };

  return (
    <div className="salon-otp-container">
      <div className="salon-otp-header">
        <button className="back-btn" onClick={() => navigate(-1)}>
          <IoArrowBack />
        </button>
      </div>

      <div className="salon-otp-content">
        <div className="salon-brand">
          <img src={logo} alt="Salon X Logo" className="salon-logo" />
          <h1>SALON-X</h1>
        </div>

        <h2>Enter your address</h2>
        <p className="subtitle">Where can clients find you?</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="search"
              placeholder="Search"
              value={address.search}
              onChange={handleChange}
              className="address-input"
            />
            <p className="or-divider">OR-</p>
          </div>

          <div className="form-group">
            <label>Address</label>
            <input
              type="text"
              name="street"
              placeholder="Street"
              value={address.street}
              onChange={handleChange}
              className="address-input"
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={address.city}
                onChange={handleChange}
                className="address-input"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="state"
                placeholder="State/Province"
                value={address.state}
                onChange={handleChange}
                className="address-input"
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <input
                type="text"
                name="zip"
                placeholder="ZIP/Postal Code"
                value={address.zip}
                onChange={handleChange}
                className="address-input"
              />
            </div>
            <div className="form-group">
              <label>Select Country</label>
              <Select
                options={countryOptions}
                value={address.country}
                onChange={handleCountryChange}
                placeholder="Choose your country"
                className="country-select"
                classNamePrefix="select"
              />
            </div>
          </div>

          <button type="submit" className="verify-otp-btn">
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default SalonEnterAddress;