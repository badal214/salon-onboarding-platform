import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { FiUpload } from 'react-icons/fi';
import logo from './assets/logo1.png';
import './style/salon-otp-verification.css';

const SalonAddServicesDetails = () => {
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [formData, setFormData] = useState({
    serviceName: 'Hair Style',
    serviceType: '',
    hours: '0',
    minutes: '30',
    price: '',
    isMobileService: false,
    image: null
  });

  const handleBack = () => navigate(-1);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        setFormData(prev => ({
          ...prev,
          image: file
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const duration = `${formData.hours}h ${formData.minutes}min`;
    const formPayload = new FormData();
    formPayload.append('serviceName', formData.serviceName);
    formPayload.append('serviceType', formData.serviceType);
    formPayload.append('duration', duration);
    formPayload.append('price', formData.price);
    formPayload.append('isMobileService', formData.isMobileService);
    if (formData.image) {
      formPayload.append('image', formData.image);
    }

    console.log('Form data:', Object.fromEntries(formPayload));
  navigate('/add-staff-members');  // ✅ Navigate to Add Staff page
};
  return (
    <div className="salon-otp-container">
      <div className="salon-otp-header">
        <button className="back-btn" onClick={handleBack}>
          <IoArrowBack />
        </button>
      </div>

      <div className="salon-otp-content">
        <div className="salon-brand">
          <img src={logo} alt="Salon X Logo" className="salon-logo" />
          <h1>GlamTech</h1>
        </div>

        <h2>Add service</h2>

        <form onSubmit={handleSubmit}>
          {/* Image Upload Section */}
          <div className="image-upload-container">
            <div 
              className={`image-upload-box ${previewImage ? 'has-image' : ''}`}
              onClick={triggerFileInput}
            >
              {previewImage ? (
                <img src={previewImage} alt="Service preview" className="preview-image" />
              ) : (
                <>
                  <FiUpload className="upload-icon" />
                  <p>Upload Service Image</p>
                </>
              )}
            </div>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              style={{ display: 'none' }}
            />
          </div>

          <div className="form-group">
            <label>Service Name</label>
            <input
              type="text"
              name="serviceName"
              value={formData.serviceName}
              onChange={handleChange}
              className="service-input"
              required
            />
          </div>

          <div className="form-group">
            <label>Service Type</label>
            <select
              name="serviceType"
              value={formData.serviceType}
              onChange={handleChange}
              className="service-input"
              required
            >
              <option value="">Select type</option>
              <option value="Haircut">Haircut</option>
              <option value="Coloring">Coloring</option>
              <option value="Treatment">Treatment</option>
              <option value="Styling">Styling</option>
            </select>
          </div>

          <div className="duration-group">
            <label>Duration</label>
            <div className="duration-inputs">
              <div className="duration-field">
                <input
                  type="number"
                  name="hours"
                  value={formData.hours}
                  onChange={handleChange}
                  min="0"
                  max="24"
                  className="service-input"
                />
                <span>Hours</span>
              </div>
              <div className="duration-field">
                <input
                  type="number"
                  name="minutes"
                  value={formData.minutes}
                  onChange={handleChange}
                  min="0"
                  max="59"
                  className="service-input"
                />
                <span>Minutes</span>
              </div>
            </div>
          </div>

          <div className="form-group">
            <label>Price $</label>
            <input
              type="number"
              name="price"
              value={formData.price}
              onChange={handleChange}
              min="0"
              step="0.01"
              className="service-input"
              required
            />
          </div>

          <div className="checkbox-group">
            <label>
              <input
                type="checkbox"
                name="isMobileService"
                checked={formData.isMobileService}
                onChange={handleChange}
              />
              Mobile Service
            </label>
          </div>

          <button type="submit" className="verify-otp-btn">
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default SalonAddServicesDetails;