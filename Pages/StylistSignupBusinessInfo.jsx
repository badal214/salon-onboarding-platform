import React, { useRef } from 'react';
import { IoArrowBack } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';
import './style/stylist-signup-business-info.css';

const StylistSignupBusinessInfo = () => {
  const navigate = useNavigate();

  const businessImageRef = useRef();
  const moreImagesRef = useRef();
  const certificatesRef = useRef();

  const handleBusinessImageClick = () => {
    businessImageRef.current.click();
  };

  const handleMoreImagesClick = () => {
    moreImagesRef.current.click();
  };

  const handleCertificatesClick = () => {
    certificatesRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/signup/service-location');
 // Your next page
  };

  return (
    <div className="business-info-container">
      <div className="header-section">
        <div className="back-button" onClick={() => navigate(-1)}>
          <IoArrowBack />
        </div>
        <h2>Add business info</h2>
        <p>Please enter business details, images and your expert certificates.</p>
      </div>

      <form className="business-info-form" onSubmit={handleSubmit}>
        {/* Business Image Upload */}
        <div className="upload-section">
  <label>
    Upload Business Image<span className="required-star">*</span>
  </label>
  <div className="upload-box large-upload" onClick={handleBusinessImageClick}>
    <input type="file" ref={businessImageRef} style={{ display: 'none' }} />
    <p>Drag image here to upload</p>
    <button type="button">Browse</button>
  </div>
</div>

{/* More Images */}
<div className="upload-section">
  <label>
    Upload Menu Images<span className="required-star">*</span>
  </label>
  <div className="upload-box small-upload" onClick={handleMoreImagesClick}>
    <input type="file" ref={moreImagesRef} style={{ display: 'none' }} />
    <span>+</span>
  </div>
</div>

        {/* Upload Certificates */}
        <div className="upload-section">
          <label>Upload Certificates</label>
          <div className="upload-box small-upload" onClick={handleCertificatesClick}>
            <input type="file" ref={certificatesRef} style={{ display: 'none' }} />
            <span>Add Certificates</span>
          </div>
        </div>

        {/* Service Provided For */}
        <div className="checkbox-section">
          <label>Service provided for</label>
          <div className="checkbox-row">
            <label><input type="checkbox" /> Male</label>
            <label><input type="checkbox" /> Female</label>
            <label><input type="checkbox" /> Unisex</label>
          </div>
        </div>

        {/* About Business */}
        <div className="textarea-section">
          <label>About the business</label>
          <textarea placeholder="Write here..." rows="4"></textarea>
        </div>

        <button type="submit" className="continue-btn">CONTINUE</button>
      </form>
    </div>
  );
};

export default StylistSignupBusinessInfo;
