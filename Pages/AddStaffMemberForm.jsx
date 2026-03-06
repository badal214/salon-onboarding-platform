import React, { useState, useRef } from 'react';
import './style/add-staff-member-form.css';

const AddStaffMemberForm = ({ member, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    id: member.id,
    firstName: member.firstName || '',
    lastName: member.lastName || '',
    email: member.email || '',
    phone: member.phone || '',
    position: member.position || '',
    avatar: member.avatar || '',
  });

  const fileInputRef = useRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData({ ...formData, avatar: reader.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSave = () => {
    const fullName = `${formData.firstName} ${formData.lastName}`;
    onSubmit({ ...formData, name: fullName });
  };

  return (
    <div className="form-overlay">
      <div className="form-card">
        <button className="close-btn" onClick={onClose}>×</button>
        <h2>Add staff member</h2>

        <div
          className="photo-upload"
          onClick={() => fileInputRef.current.click()}
        >
          {formData.avatar ? (
            <img src={formData.avatar} alt="avatar" className="avatar-preview" />
          ) : (
            <>
              <div className="circle">+</div>
              <span>Add Photo</span>
            </>
          )}
          <input
            type="file"
            accept="image/*"
            ref={fileInputRef}
            style={{ display: 'none' }}
            onChange={handleImageChange}
          />
        </div>

        <div className="form-row">
          <input name="firstName" placeholder="First name" onChange={handleChange} value={formData.firstName} />
          <input name="lastName" placeholder="Last name" onChange={handleChange} value={formData.lastName} />
        </div>
        <input name="email" placeholder="Email address" onChange={handleChange} value={formData.email} />
        
        <div className="form-row">
          <select className="country-code">
            <option value="+1">+1</option>
          </select>
          <input name="phone" placeholder="Phone number" onChange={handleChange} value={formData.phone} />
        </div>

        <select name="position" onChange={handleChange} value={formData.position}>
          <option value="">Position</option>
          <option value="Hair Stylist">Hair Stylist</option>
          <option value="Nail Artist">Nail Artist</option>
        </select>

        <button className="submit-btn" onClick={handleSave}>SIGN IN</button>
      </div>
    </div>
  );
};

export default AddStaffMemberForm;




