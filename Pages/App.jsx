import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./SignIn";
import './index.css';
import SignupSelection from "./SignupSelection";
import ForgotPassword from "./ForgotPassword";
import ResetPassword from "./ResetPassword";
import SuccessMessage from "./SuccessMessage";
import ClientSignup from './ClientSignup';
// import OTPVerification from './OTPVerification';
import StylistSignup from './StylistSignup';
import SalonSignup from './SalonSignup';
import SalonOtpVerification from './SalonOtpVerification';
import SalonBusinessTypeSelection from './SalonBusinessTypeSelection';
import SalonBusinessInfo from './SalonBusinessInfo';
import SalonEnterAddress from './SalonEnterAddress';
import SalonBusinessHours from './SalonBusinessHours';
import SalonAddServices from './SalonAddServices';
import SalonAddServicesDetails from './SalonAddServicesDetails';
import AddStaffMembers from './AddStaffMembers';
import AddStaffMemberForm from './AddStaffMemberForm';
import SalonSuccess from './SalonSuccess';
import ServiceLocationSelection from './ServiceLocationSelection';
import StylistOtpVerification from './StylistOtpVerification';
import StylistCategorySelection from './StylistCategorySelection';
import StylistSignupBusinessInfo from './StylistSignupBusinessInfo';
import ServiceLocation from './ServiceLocation'; // ✅ Add this import
import EnterAddress from './EnterAddress'; // ✅ Add this import
import BusinessHoursForm from './BusinessHoursForm'; 
import AddServices from './AddServices';
import AddingService from './AddingService';
import ServiceSuccess from './ServiceSuccess';
import Home from "./Home";
import HomeServices from './HomeServices';
import SalonDetails from './SalonDetails';
import Dashboard from './Dashboard';
import AppointmentForm from './AppointmentForm';
// import EmailOTPVerification from "./OTPVerification";


function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignupSelection />} />
        <Route path="/signup/client" element={<ClientSignup />} />
        <Route path="/signup/stylist" element={<StylistSignup />} />
        <Route path="/signup/salon" element={<SalonSignup />} />
        <Route path="/salon/verify-otp" element={<SalonOtpVerification />} />
        <Route path="/salon-business-type" element={<SalonBusinessTypeSelection />} />
        <Route path="/salon-business-info" element={<SalonBusinessInfo />} />
        <Route path="/salon-enter-address" element={<SalonEnterAddress />} />
        <Route path="/business-hours" element={<SalonBusinessHours />} />
        <Route path="/add-services" element={<SalonAddServices />} />
        <Route path="/add-service-details" element={<SalonAddServicesDetails />} />
        <Route path="/add-staff-members" element={<AddStaffMembers />} />
        <Route path="/add-staff-member" element={<AddStaffMemberForm />} />
        <Route path="/success" element={<SalonSuccess />} />
        <Route path="/service-location" element={<ServiceLocationSelection />} />
        <Route path="/stylist/verify-otp" element={<StylistOtpVerification />} />
<Route path="/stylist/select-category" element={<StylistCategorySelection />} />
<Route path="/signup/business-info" element={<StylistSignupBusinessInfo />} />
<Route path="/signup/service-location" element={<ServiceLocation />} />
<Route path="/signup/address" element={<EnterAddress />} />
<Route path="/signup/business-hours" element={<BusinessHoursForm />} />
<Route path="/signup/add-services" element={<AddServices />} />
<Route path="/add-service" element={<AddingService />} />
<Route path="/service-success" element={<ServiceSuccess />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
  <Route path="/reset-password" element={<ResetPassword />} />
  <Route path="/success" element={<SuccessMessage />} />
  {/* <Route path="/signup/verify-otp" element={<OTPVerification />} /> */}
  <Route path="/Home" element={<Home/>} />
  <Route path="/HomeServices" element={<HomeServices/>} />
  <Route path="/SalonDetails" element={<SalonDetails/>} />
  <Route path="/dashboard" element={<Dashboard />} />
   <Route path="/appointment" element={<AppointmentForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

