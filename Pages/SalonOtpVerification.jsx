import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import logo from './assets/logo1.png';
import './style/salon-otp-verification.css';

const SalonOtpVerification = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [email, setEmail] = useState('');
  const [resendDisabled, setResendDisabled] = useState(false);
  const [countdown, setCountdown] = useState(30);

  // Get email from location state
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    } else {
      // Redirect back if no email provided
      navigate('/salon-signup');
    }
  }, [location, navigate]);

  // Resend countdown timer
  useEffect(() => {
    let timer;
    if (resendDisabled && countdown > 0) {
      timer = setTimeout(() => setCountdown(countdown - 1), 1000);
    } else if (countdown === 0) {
      setResendDisabled(false);
      setCountdown(30);
    }
    return () => clearTimeout(timer);
  }, [resendDisabled, countdown]);

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      
      // Auto focus to next input
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredOtp = otp.join('');
    console.log('Verifying OTP:', enteredOtp, 'for email:', email);
    navigate('/salon-business-type', { 
      state: { 
        email: email 
      } 
    });
  };

  const handleResendOtp = () => {
    console.log('Resending OTP to:', email);
    setResendDisabled(true);
    setCountdown(30);
    // Add your OTP resend logic here
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

        <h2>We just sent you a 6-digit code</h2>
        <p className="email-display">
          {email} <span className="change-email" onClick={() => navigate('/update-email')}>Change</span>
        </p>

        <form onSubmit={handleSubmit}>
          <div className="otp-input-group">
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleOtpChange(e, index)}
                required
                autoFocus={index === 0}
              />
            ))}
          </div>

          <button type="submit" className="verify-otp-btn">
            VERIFY
          </button>
        </form>

        <p className="resend-otp">
          Didn't receive code?{' '}
          <button
            type="button"
            className="resend-link"
            onClick={handleResendOtp}
            disabled={resendDisabled}
          >
            {resendDisabled ? `Resend in ${countdown}s` : 'Resend'}
          </button>
        </p>
      </div>
    </div>
  );
};

export default SalonOtpVerification;