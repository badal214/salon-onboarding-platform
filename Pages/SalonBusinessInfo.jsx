import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import logo from './assets/logo1.png';
import './style/salon-otp-verification.css';

const SalonBusinessInfo = () => {
  const navigate = useNavigate();
  const [selectedGender, setSelectedGender] = useState('');
  const [aboutBusiness, setAboutBusiness] = useState('');
  const [businessImage, setBusinessImage] = useState(null);
  const [menuImages, setMenuImages] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [errors, setErrors] = useState({});

  const handleImageUpload = (e, type) => {
    const files = Array.from(e.target.files);
    if (type === 'business') {
      setBusinessImage(files[0]);
      setErrors({...errors, businessImage: null});
    } else if (type === 'menu') {
      setMenuImages([...menuImages, ...files]);
      setErrors({...errors, menuImages: null});
    } else if (type === 'certificates') {
      setCertificates([...certificates, ...files]);
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!businessImage) newErrors.businessImage = 'Business image is required';
    if (menuImages.length === 0) newErrors.menuImages = 'At least one menu image is required';
    if (!selectedGender) newErrors.selectedGender = 'Please select a gender option';
    if (!aboutBusiness.trim()) newErrors.aboutBusiness = 'About business is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    const businessData = {
      selectedGender,
      aboutBusiness,
      businessImage,
      menuImages,
      certificates
    };

    console.log('Business Info:', businessData);
    navigate('/service-location', { state: { businessData } });
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
          <h1>GlamTech</h1>
        </div>

        <h2>Add business info</h2>
        <p className="subtitle">Please enter business details, images and your expert certificates.</p>

        <form onSubmit={handleSubmit}>
          {/* Business Image Upload */}
          <div className="form-group">
            <label>Upload Business Image *</label>
            <div className={`upload-area ${errors.businessImage ? 'error' : ''}`}>
              <p>Drag image here to upload</p>
              <input 
                type="file" 
                id="business-image" 
                accept="image/*" 
                onChange={(e) => handleImageUpload(e, 'business')}
              />
              <label htmlFor="business-image" className="browse-btn">Browse</label>
            </div>
            {errors.businessImage && <p className="error-message">{errors.businessImage}</p>}
          </div>

          {/* Menu Images Upload */}
          <div className="form-group">
            <label>Upload Menu Images *</label>
            <div className={`upload-area ${errors.menuImages ? 'error' : ''}`}>
              <input 
                type="file" 
                id="menu-images" 
                accept="image/*" 
                multiple
                onChange={(e) => handleImageUpload(e, 'menu')}
              />
              <label htmlFor="menu-images" className="browse-btn">Upload Menu Images</label>
            </div>
            {errors.menuImages && <p className="error-message">{errors.menuImages}</p>}
          </div>

          {/* Certificates Upload */}
          <div className="form-group">
            <label>Upload Certificates</label>
            <div className="upload-area">
              <input 
                type="file" 
                id="certificates" 
                accept="image/*,.pdf" 
                multiple
                onChange={(e) => handleImageUpload(e, 'certificates')}
              />
              <label htmlFor="certificates" className="browse-btn">Add Certificates</label>
            </div>
          </div>

          {/* Gender Selection */}
          <div className="form-group">
            <label>Service provided for *</label>
            <div className="gender-options">
              <button 
                type="button"
                className={`gender-btn ${selectedGender === 'male' ? 'selected' : ''}`}
                onClick={() => {
                  setSelectedGender('male');
                  setErrors({...errors, selectedGender: null});
                }}
              >
                Male
              </button>
              <button 
                type="button"
                className={`gender-btn ${selectedGender === 'female' ? 'selected' : ''}`}
                onClick={() => {
                  setSelectedGender('female');
                  setErrors({...errors, selectedGender: null});
                }}
              >
                Female
              </button>
              <button 
                type="button"
                className={`gender-btn ${selectedGender === 'unisex' ? 'selected' : ''}`}
                onClick={() => {
                  setSelectedGender('unisex');
                  setErrors({...errors, selectedGender: null});
                }}
              >
                Unisex
              </button>
            </div>
            {errors.selectedGender && <p className="error-message">{errors.selectedGender}</p>}
          </div>

          {/* About Business */}
          <div className="form-group">
            <label>About the business *</label>
            <textarea 
              className={`about-textarea ${errors.aboutBusiness ? 'error' : ''}`}
              placeholder="Write here..."
              value={aboutBusiness}
              onChange={(e) => {
                setAboutBusiness(e.target.value);
                setErrors({...errors, aboutBusiness: null});
              }}
            />
            {errors.aboutBusiness && <p className="error-message">{errors.aboutBusiness}</p>}
          </div>

          <button type="submit" className="verify-otp-btn">
            CONTINUE
          </button>
        </form>
      </div>
    </div>
  );
};

export default SalonBusinessInfo;