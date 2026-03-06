import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import logo from './assets/logo1.png';
import './style/salon-otp-verification.css';

const SalonAddServices = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([
    { id: 1, name: 'Male National', duration: '30 min', price: '$45' },
    { id: 2, name: 'Board Shopping', duration: '20 min', price: '$55' },
    { id: 3, name: 'Head Share', duration: '30 min', price: '$25' },
    { id: 4, name: 'National and Board', duration: '1 hr', price: '$75' },
    { id: 5, name: 'Hair Order', duration: '45 min', price: '$85' }
  ]);
  const [newService, setNewService] = useState({ name: '', duration: '', price: '' });
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({ name: '', duration: '', price: '' });

  const handleAddService = () => {
    if (newService.name && newService.duration && newService.price) {
      setServices([...services, {
        id: Date.now(),
        ...newService
      }]);
      setNewService({ name: '', duration: '', price: '' });
    }
  };

  const startEditing = (service) => {
    setEditingId(service.id);
    setEditData({
      name: service.name,
      duration: service.duration,
      price: service.price
    });
  };

  const saveEdit = (id) => {
    setServices(services.map(service => 
      service.id === id ? { ...service, ...editData } : service
    ));
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  const handleSubmit = () => {
    navigate('/add-service-details');
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

        <h2>Add Services</h2>
        <p className="subtitle">
          It is the basic information for this service now. You'll be able to add a facebutton and adjust the advanced settings for this service later on.
        </p>

        <table className="services-table">
          <thead>
            <tr>
              <th>Service</th>
              <th>Duration</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {services.map((service) => (
              <tr key={service.id}>
                {editingId === service.id ? (
                  <>
                    <td>
                      <input
                        type="text"
                        value={editData.name}
                        onChange={(e) => setEditData({...editData, name: e.target.value})}
                        className="table-input"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={editData.duration}
                        onChange={(e) => setEditData({...editData, duration: e.target.value})}
                        className="table-input"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={editData.price}
                        onChange={(e) => setEditData({...editData, price: e.target.value})}
                        className="table-input"
                      />
                    </td>
                    <td className="action-cell">
                      <button onClick={() => saveEdit(service.id)} className="table-btn save">
                        ✓
                      </button>
                      <button onClick={cancelEdit} className="table-btn cancel">
                        ✕
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td>{service.name}</td>
                    <td>{service.duration}</td>
                    <td>{service.price}</td>
                    <td className="action-cell">
                      <button 
                        onClick={() => startEditing(service)} 
                        className="table-btn edit"
                      >
                        Edit
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>

        <div className="add-service-section">
          <h3>+ ADD NEW SERVICES</h3>
          <div className="add-service-form">
            <input
              type="text"
              placeholder="Service Name"
              value={newService.name}
              onChange={(e) => setNewService({...newService, name: e.target.value})}
              className="table-input"
            />
            <input
              type="text"
              placeholder="Duration"
              value={newService.duration}
              onChange={(e) => setNewService({...newService, duration: e.target.value})}
              className="table-input"
            />
            <input
              type="text"
              placeholder="Price"
              value={newService.price}
              onChange={(e) => setNewService({...newService, price: e.target.value})}
              className="table-input"
            />
            <button 
              type="button" 
              className="add-service-btn"
              onClick={handleAddService}
              disabled={!newService.name || !newService.duration || !newService.price}
            >
              Add
            </button>
          </div>
        </div>

        <div className="divider"></div>

        <button className="verify-otp-btn" onClick={handleSubmit}>
          CONTINUE
        </button>
      </div>
    </div>
  );
};

export default SalonAddServices;