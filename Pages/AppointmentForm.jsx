import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import './AppointmentForm.css'; // We'll create this CSS file
import axios from 'axios';

function AppointmentForm() {
  const navigate = useNavigate();
  const [serviceLocation, setServiceLocation] = useState('');
  const [formData, setFormData] = useState({
    address: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  });

 const handleSubmit = async (e) => {
  e.preventDefault();

  const payload = {
    service_location: serviceLocation,
    address: formData.address,
    street: formData.street,
    city: formData.city,
    state: formData.state,
    zip: formData.zip,
    country: formData.country,
  };

  try {
    const response = await axios.post('http://127.0.0.1:8000/appointments/create/', payload, {
      headers: {
        'Content-Type': 'application/json',
      }
    });

    console.log('Appointment created:', response.data);
    alert('Appointment submitted successfully!');
     navigate('/service-success'); // if needed
  } catch (error) {
    console.error('Error submitting appointment:', error.response?.data || error.message);
    alert('Error submitting appointment. Please try again.');
  }
};
  return (
    <div className="appointment-container">
      <div className="appointment-form-wrapper">
        {/* Back button */}
        <button 
          onClick={() => navigate(-1)}
          className="back-button"
        >
          <FaArrowLeft className="back-icon" />
          <span>Back</span>
        </button>

        {/* Form content */}
        <h1 className="form-title">Book Appointment</h1>
        
        <form onSubmit={handleSubmit} className="appointment-form">
          {/* Service Location Selection */}
<div className="form-section">
  <h2 className="section-title">Where you need service?</h2>
  <div className="radio-options">
    <label className={`radio-option ${serviceLocation === 'myPlace' ? 'selected' : ''}`}>
      <div className="checkbox-container">
        <input
          type="radio"
          name="serviceLocation"
          value="myPlace"
          checked={serviceLocation === 'myPlace'}
          onChange={() => setServiceLocation('myPlace')}
          className="radio-input"
        />
        <span className="checkmark"></span>
      </div>
      <div className="option-content">
        <p className="option-title">At my place</p>
        <p className="option-description">
          My clients come to me, loving the place or work in a salon/suite alongside other professionals.
        </p>
      </div>
    </label>
    
    <label className={`radio-option ${serviceLocation === 'salon' ? 'selected' : ''}`}>
      <div className="checkbox-container">
        <input
          type="radio"
          name="serviceLocation"
          value="salon"
          checked={serviceLocation === 'salon'}
          onChange={() => setServiceLocation('salon')}
          className="radio-input"
        />
        <span className="checkmark"></span>
      </div>
      <div className="option-content">
        <p className="option-title">At Salon</p>
        <p className="option-description">
          I'm on the go. My services are performed at the client's location.
        </p>
      </div>
    </label>
  </div>
</div>
          {/* Address Form */}
          <div className="form-section">
            <h2 className="section-title">Please enter your address</h2>
            
            <div className="form-group">
              <input
                type="text"
                placeholder="Address"
                className="form-input"
                value={formData.address}
                onChange={(e) => setFormData({...formData, address: e.target.value})}
                required
              />
            </div>
            
            <div className="form-group">
              <input
                type="text"
                placeholder="Street"
                className="form-input"
                value={formData.street}
                onChange={(e) => setFormData({...formData, street: e.target.value})}
                required
              />
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="City"
                  className="form-input"
                  value={formData.city}
                  onChange={(e) => setFormData({...formData, city: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="State/Province"
                  className="form-input"
                  value={formData.state}
                  onChange={(e) => setFormData({...formData, state: e.target.value})}
                  required
                />
              </div>
            </div>
            
            <div className="form-row">
              <div className="form-group">
                <input
                  type="text"
                  placeholder="ZIP/Postal Code"
                  className="form-input"
                  value={formData.zip}
                  onChange={(e) => setFormData({...formData, zip: e.target.value})}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Country"
                  className="form-input"
                  value={formData.country}
                  onChange={(e) => setFormData({...formData, country: e.target.value})}
                  required
                />
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="form-actions">
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="cancel-button"
            >
              Cancel
            </button>
            
            <button
              type="submit"
              className="submit-button"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AppointmentForm;