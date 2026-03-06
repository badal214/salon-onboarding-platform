import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack, IoChevronForward } from 'react-icons/io5';
import logo from './assets/logo1.png';
import './style/salon-otp-verification.css';

const SalonBusinessHours = () => {
  const navigate = useNavigate();
  const [hours, setHours] = useState([
    { day: 'Sunday', open: false, start: '', end: '' },
    { day: 'Monday', open: true, start: '10:00 AM', end: '8:00 PM' },
    { day: 'Tuesday', open: true, start: '10:00 AM', end: '8:00 PM' },
    { day: 'Wednesday', open: true, start: '10:00 AM', end: '8:00 PM' },
    { day: 'Thursday', open: true, start: '10:00 AM', end: '8:00 PM' },
    { day: 'Friday', open: true, start: '10:00 AM', end: '8:00 PM' },
    { day: 'Saturday', open: true, start: '10:00 AM', end: '8:00 PM' }
  ]);
  const [editingIndex, setEditingIndex] = useState(null);

  const toggleDay = (index) => {
    const newHours = [...hours];
    newHours[index].open = !newHours[index].open;
    if (!newHours[index].open) {
      newHours[index].start = '';
      newHours[index].end = '';
    } else {
      newHours[index].start = '10:00 AM';
      newHours[index].end = '8:00 PM';
    }
    setHours(newHours);
  };

  const handleTimeChange = (index, field, value) => {
    const newHours = [...hours];
    newHours[index][field] = value;
    setHours(newHours);
  };

  const handleSubmit = () => {
    navigate('/add-services');
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

        <h2>Your business hours</h2>
        <p className="subtitle">When can clients book with you?</p>

        <div className="business-hours-list">
          {hours.map((item, index) => (
            <div key={index} className="business-hours-item">
              <div className="day-toggle">
                <span className="day-name">{item.day}</span>
                <label className="switch">
                  <input
                    type="checkbox"
                    checked={item.open}
                    onChange={() => toggleDay(index)}
                  />
                  <span className="slider"></span>
                </label>
              </div>

              <div className="time-section">
                {item.open ? (
                  <div className="time-inputs">
                    <input
                      type="text"
                      value={item.start}
                      onChange={(e) => handleTimeChange(index, 'start', e.target.value)}
                      className="time-input"
                      placeholder="Start time"
                    />
                    <span>to</span>
                    <input
                      type="text"
                      value={item.end}
                      onChange={(e) => handleTimeChange(index, 'end', e.target.value)}
                      className="time-input"
                      placeholder="End time"
                    />
                  </div>
                ) : (
                  <span className="closed-text">Closed</span>
                )}
                <IoChevronForward className="edit-icon" />
              </div>
            </div>
          ))}
        </div>

        <div className="divider"></div>

        <button className="verify-otp-btn" onClick={handleSubmit}>
          SIGN IN
        </button>
      </div>
    </div>
  );
};

export default SalonBusinessHours;