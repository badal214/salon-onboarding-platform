import React, { useState, useEffect } from 'react'; // Added useEffect to imports
import { useNavigate, useLocation } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import logo from './assets/logo1.png';
import './style/salon-otp-verification.css'; // Reusing your existing CSS

const SalonBusinessTypeSelection = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedTypes, setSelectedTypes] = useState([]);

  // Business types from your screenshot
  const businessTypes = [
    'Aerthoto Machine',
    'Barkenhoe',
    'Brido & Loca',
    'Derrick & Chłodowicta',
    'Hair Removal',
    'Hair Salon',
    'Health & Fitness',
    'Home Services',
    'Makeup'
  ];

  // Get email from location state if needed
  useEffect(() => {
    if (!location.state?.email) {
      // Redirect back if no email provided (optional)
      navigate('/salon-signup');
    }
  }, [location, navigate]);

  const handleTypeToggle = (type) => {
    setSelectedTypes(prev => 
      prev.includes(type) 
        ? prev.filter(t => t !== type) 
        : [...prev, type]
    );
  };

  const handleSubmit = () => {
    console.log('Selected business types:', selectedTypes);
    navigate('/salon-business-info', { 
      state: { 
        email: location.state?.email,
        businessTypes: selectedTypes 
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
          <h1>GlamTech</h1>
        </div>

        <h2>Tell us about your business</h2>

        <div className="business-types-container">
          {businessTypes.map((type) => (
            <div key={type} className="business-type-option">
              <input
                type="checkbox"
                id={`business-type-${type}`}
                checked={selectedTypes.includes(type)}
                onChange={() => handleTypeToggle(type)}
              />
              <label htmlFor={`business-type-${type}`}>{type}</label>
            </div>
          ))}
        </div>

        <div className="divider"></div>

        <button 
          className="verify-otp-btn" 
          onClick={handleSubmit}
          disabled={selectedTypes.length === 0}
        >
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default SalonBusinessTypeSelection;