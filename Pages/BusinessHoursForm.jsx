import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/BusinessHoursForm.css'; 

const BusinessHoursForm = () => {
  const navigate = useNavigate();
  
  // Initial state for business hours
  const [businessHours, setBusinessHours] = useState({
    sunday: { open: false, hours: 'Closed' },
    monday: { open: true, hours: '10:00 AM - 8:00 PM' },
    tuesday: { open: true, hours: '10:00 AM - 8:00 PM' },
    wednesday: { open: true, hours: '10:00 AM - 8:00 PM' },
    thursday: { open: true, hours: '10:00 AM - 8:00 PM' },
    friday: { open: true, hours: '10:00 AM - 8:00 PM' },
    saturday: { open: true, hours: '10:00 AM - 8:00 PM' },
  });

  const days = [
    { id: 'sunday', name: 'Sunday' },
    { id: 'monday', name: 'Monday' },
    { id: 'tuesday', name: 'Tuesday' },
    { id: 'wednesday', name: 'Wednesday' },
    { id: 'thursday', name: 'Thursday' },
    { id: 'friday', name: 'Friday' },
    { id: 'saturday', name: 'Saturday' },
  ];

  const handleDayToggle = (day) => {
    setBusinessHours(prev => ({
      ...prev,
      [day]: {
        open: !prev[day].open,
        hours: prev[day].open ? 'Closed' : '10:00 AM - 8:00 PM'
      }
    }));
  };

  const handleHoursChange = (day, newHours) => {
    setBusinessHours(prev => ({
      ...prev,
      [day]: {
        ...prev[day],
        hours: newHours
      }
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can save the business hours data if needed
    console.log('Business hours submitted:', businessHours);
    // Navigate to Add Services page
    navigate('/signup/add-services');
  };

  return (
    <div className="business-hours-container">
      <h1>SALON-X</h1>
      <h2>Your business hours</h2>
      <p>When can clients book with you?</p>
      
      <form onSubmit={handleSubmit}>
        <table className="hours-table">
          <thead>
            <tr>
              <th>Day</th>
              <th>Hours</th>
            </tr>
          </thead>
          <tbody>
            {days.map((day) => (
              <tr key={day.id}>
                <td>{day.name}</td>
                <td>
                  {day.id === 'sunday' ? (
                    <span>Closed</span>
                  ) : (
                    <div className="hours-control">
                      <label className="switch">
                        <input
                          type="checkbox"
                          checked={businessHours[day.id].open}
                          onChange={() => handleDayToggle(day.id)}
                        />
                        <span className="slider"></span>
                      </label>
                      {businessHours[day.id].open && (
                        <input
                          type="text"
                          value={businessHours[day.id].hours}
                          onChange={(e) => handleHoursChange(day.id, e.target.value)}
                          className="hours-input"
                        />
                      )}
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
        <button type="submit" className="submit-button">SIGN IN</button>
      </form>
    </div>
  );
};

export default BusinessHoursForm;