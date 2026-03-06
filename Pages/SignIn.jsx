import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './SignIn.css';
import salonImage from './salon-image.jpg'; // Replace with your image

const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  const handleForgotPasswordClick = () => {
    navigate('/forgot-password');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/login/', {
        email,
        password,
      });

      const { access, refresh, user } = response.data;

      // Store tokens and user info in localStorage
      localStorage.setItem('accessToken', access);
      localStorage.setItem('refreshToken', refresh);
      localStorage.setItem('user', JSON.stringify(user));
      console.log("User from localStorage:", user);

      console.log('Login success:', user);
      navigate('/Home'); // Navigate to your app’s main page
      window.location.reload();
    } catch (err) {
      console.error('Login failed:', err.response?.data || err.message);
      setError('Invalid email or password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page-container">
      <div className="auth-image-panel">
        <img src={salonImage} alt="Salon Interior" className="auth-panel-image" />
      </div>

      <div className="auth-form-panel">

        <div className="auth-form-content">
          <h1 className="brand-title">SALON-X<span className="brand-subtitle"> – The Future Of Salon Booking Technology</span></h1>
          <h2 className="welcome-title">Welcome back!</h2>
          <p className="subtext">Get your campaign up and running in just minutes.</p>

          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <input 
                type="email" 
                className="form-input" 
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="input-group">
              <input 
                type="password" 
                className="form-input" 
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="remember-forgot-row">
              <div className="remember-me">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember Me</label>
              </div>
              <button 
                type="button" 
                className="forgot-password-btn"
                onClick={handleForgotPasswordClick}
              >
                Forgot password?
              </button>
            </div>

            {error && <p style={{ color: 'red' }}>{error}</p>}
            <div className="divider"></div>

            <button type="submit" className="signin-button" disabled={loading}>
              {loading ? 'Signing in...' : 'SIGN IN'}
            </button>
          </form>

          <p className="signup-text">Don't have an account? 
            <span className="signup-link" onClick={handleSignUpClick}>Sign up</span>
          </p>

          <div className="footer-links">
            <p className="terms-text">By proceeding, you agree to the Terms and Conditions and Privacy Policy</p>
            <div className="legal-links">
              <a href="#">Help</a>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
