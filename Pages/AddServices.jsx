import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import './style/add-services.css';

const AddServices = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([
    { id: 1, name: 'Male Network', duration: '30 min', price: '$45' },
    { id: 2, name: 'Recent Shaping', duration: '20 min', price: '$55' },
    { id: 3, name: 'Neural Shows', duration: '30 min', price: '$25' },
    { id: 4, name: 'National and Board', duration: '1hr', price: '$75' },
    { id: 5, name: 'Hair Order', duration: '45 min', price: '$85' }
  ]);

  const handleBack = () => navigate(-1);
  const handleContinue = () => navigate('/add-service'); // Updated to navigate to AddingaService

  const addNewService = () => {
    const newId = services.length > 0 ? Math.max(...services.map(s => s.id)) + 1 : 1;
    setServices([...services, { 
      id: newId, 
      name: '', 
      duration: '', 
      price: '', 
      isEditing: true 
    }]);
  };

  const handleServiceChange = (id, field, value) => {
    setServices(services.map(service => 
      service.id === id ? { ...service, [field]: value } : service
    ));
  };

  const saveService = (id) => {
    setServices(services.map(service => 
      service.id === id ? { ...service, isEditing: false } : service
    ));
  };

  return (
    <div className="add-services-container">
      <div className="back-icon" onClick={handleBack}>
        <IoArrowBack />
      </div>

      <h1>Add Services</h1>
      <p className="subtitle">
        List the basic information for this service now. You'll be able to add a description 
        and adjust the advanced settings for this service later on.
      </p>

      <div className="services-list">
        {services.map(service => (
          <div key={service.id} className="service-item">
            {service.isEditing ? (
              <div className="service-edit-form">
                <input
                  type="text"
                  value={service.name}
                  onChange={(e) => handleServiceChange(service.id, 'name', e.target.value)}
                  placeholder="Service name"
                />
                <input
                  type="text"
                  value={service.duration}
                  onChange={(e) => handleServiceChange(service.id, 'duration', e.target.value)}
                  placeholder="Duration"
                />
                <input
                  type="text"
                  value={service.price}
                  onChange={(e) => handleServiceChange(service.id, 'price', e.target.value)}
                  placeholder="Price"
                />
                <button 
                  className="save-btn"
                  onClick={() => saveService(service.id)}
                >
                  Save
                </button>
              </div>
            ) : (
              <>
                <div className="service-info">
                  <span className="service-name">{service.name}</span>
                  <span className="service-duration">{service.duration}</span>
                  <span className="service-price">{service.price}</span>
                </div>
                <button 
                  className="edit-btn"
                  onClick={() => handleServiceChange(service.id, 'isEditing', true)}
                >
                  Edit
                </button>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="actions">
        <button className="add-service-btn" onClick={addNewService}>
          + ADD NEW SERVICES
        </button>
        <button className="continue-btn" onClick={handleContinue}>
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default AddServices;