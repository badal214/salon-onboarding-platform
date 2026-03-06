import React from "react";
import { useNavigate } from "react-router-dom";
import "./style/signup.css";
import logo from "./assets/logo.jpg";
import { IoArrowBack } from "react-icons/io5";


const SignupSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="signup-page">
      {/* Left Image Section */}
      <div className="signup-image">
        <img src="/salon1.jpg" alt="Salon Tools" />
        <div className="logo">GlamTech</div>
      </div>

      {/* Right Signup Section */}
      <div className="signup-box">
      <div className="back-button" onClick={() => navigate(-1)}>
  ← Back
</div>

      <img src={logo} alt="Salon X Logo" className="signup-logo" />
        <h2>How would you like to continue?</h2>

        <div className="signup-option" onClick={() => navigate("/signup/client")}>
          <h3>I'm a Client</h3>
          <p>Streamlining Your Salon Experience, One Click at a Time.</p>
          <div><img src="/meeting.png" alt="Client" width="50" /></div>
        </div>

        <div className="signup-option" onClick={() => navigate("/signup/stylist")}>
          <h3>I'm a Stylist</h3>
          <p>Empowering Stylists to Showcase Their Talent and Grow Their Business.</p>
          <div><img src="/hairdresser.png" alt="Stylist" width="50" /></div>
        </div>
        

        <div className="signup-option" onClick={() => navigate("/signup/salon")}>
          <h3>We're a Salon</h3>
          <p>Register Your Salon Today and Simplify Bookings for Your Clients.</p>
          <div><img src="/hair-salon.png" alt="Stylist" width="50" /></div>
        </div>

        <p className="login-link">
          Already have an account? <span onClick={() => navigate("/")}>Sign in</span>
        </p>

        <p className="footer">
            By proceeding, you agree to the <a href="#">Terms</a> and{" "}
            <a href="#">Privacy Policy</a>
          </p>
      </div>
    </div>
  );
};

export default SignupSelection;

