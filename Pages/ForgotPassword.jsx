import React from "react";
import { useNavigate } from "react-router-dom";
import "./forgot-reset.css";
import lockIcon from "./assets/lock.png";
import salonImage from "./assets/salon1.jpg";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // (Optionally validate email here)
    navigate("/reset-password");
  };

  return (
    <div className="forgot-container">
      <div className="left-side">
        <img src={salonImage} alt="Salon" className="side-image" />
        <div className="logo">SALON-X</div>
      </div>
      <div className="right-side">
        <div className="form-box">
          <img src={lockIcon} alt="Lock Icon" className="icon" />
          <h2>Forgot password?</h2>
          <p>
            All good. Enter your account's email address and we'll send you a link to reset your password.
          </p>
          <form onSubmit={handleSubmit}>
            <input type="email" placeholder="Email address" required />
            <button type="submit">SIGN IN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;


