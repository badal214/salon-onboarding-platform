import React from "react";
import { useNavigate } from "react-router-dom";
import "./forgot-reset.css";
import lockIcon from "./assets/lock.png";
import salonImage from "./assets/salon1.jpg";

const ResetPassword = () => {
  const navigate = useNavigate();

  const handleReset = (e) => {
    e.preventDefault();
    // (Optional: Add password validation here)
    navigate("/success");
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
          <h2>Reset Password</h2>
          <p>Your new password must be different from the previous password.</p>
          <form onSubmit={handleReset}>
            <input type="password" placeholder="Set New Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <button type="submit">SIGN IN</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

