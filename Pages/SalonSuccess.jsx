import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style/salon-success.css'; // ✅ Updated CSS import

const SalonSuccess = () => {
  const navigate = useNavigate();
  const backgroundImage = '/sucessmsg.jpeg'; // ✅ Make sure image is in public/

  return (
    <div 
      className="success-container" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="success-overlay">
        <div className="success-content">
          <h1>You're all set!</h1>
          <p>Congratulations! Your account has been successfully created. Let's explore it.</p>

          <div className="success-icon">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path 
                d="M20 6L9 17L4 12" 
                stroke="#4CAF50" 
                strokeWidth="3" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </div>     

          <button className="success-btn" onClick={() => navigate('/')}>
            GREAT
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalonSuccess;
