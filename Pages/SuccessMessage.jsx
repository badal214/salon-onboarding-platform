import React, { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./forgot-reset.css"; // Assuming styles for layout
import salonImage from "./assets/salon1.jpg";
import lockIcon from "./assets/lock.png";

const SuccessMessage = () => {
  useEffect(() => {
    toast.success("Your Password has been successfully reset. Please login your account.", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  }, []);

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
          <p>Your new password must be different password.</p>
          <input type="password" placeholder="Set New Password" disabled />
          <input type="password" placeholder="Confirm Password" disabled />
          <button disabled>SIGN IN</button>
        </div>
      </div>

      {/* Toast container here */}
      <ToastContainer />
    </div>
  );
};

export default SuccessMessage;


