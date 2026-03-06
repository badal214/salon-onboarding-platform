import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style/add-staff-member.css';
import AddStaffMemberForm from './AddStaffMemberForm';

const initialStaff = [
  
  { id: 1, name: 'Marvin McKinney', role: 'Hair Stylist', avatar: 'https://randomuser.me/api/portraits/men/75.jpg' },
  { id: 2, name: 'Darlene Robertson', role: 'Hair Stylist', avatar: 'https://randomuser.me/api/portraits/women/75.jpg' },
  
];

const AddStaffMembers = () => {
  const [staffList, setStaffList] = useState(initialStaff);
  const [selectedMember, setSelectedMember] = useState(null);
  const [addingNew, setAddingNew] = useState(false);
  const navigate = useNavigate();

  const handleDelete = (id) => {
    setStaffList(staffList.filter(member => member.id !== id));
  };

  const handleAdd = () => {
    setSelectedMember({ id: Date.now(), name: '', role: '', avatar: '', email: '', phone: '' });
    setAddingNew(true);
  };

  const handleInfoClick = (member) => {
    setSelectedMember(member);
    setAddingNew(false);
  };

  const handleFormClose = () => {
    setSelectedMember(null);
  };

  const handleFormSubmit = (updatedMember) => {
    if (addingNew) {
      setStaffList([...staffList, updatedMember]);
    } else {
      setStaffList(prev => prev.map(m => (m.id === updatedMember.id ? updatedMember : m)));
    }
    setSelectedMember(null);
    setAddingNew(false);
  };

  return (
    <div className="staff-container">
      <button className="back-button" onClick={() => navigate(-1)}>← Back</button>

      

      <div className="staff-header">
        <h2>Add more staff members</h2>
        <p>Add basic information about your team. You’ll be able to complete their profiles, assign services, and adjust working hours later.</p>
      </div>

      <div className="owner-header">
        <h4>Jason Mann</h4>
        <p>Owner</p>
      </div>

      <div className="staff-list">
        {staffList.map((member) => (
          <div className="staff-item" key={member.id}>
            <button className="delete-btn" onClick={() => handleDelete(member.id)}>×</button>
            <img
              src={member.avatar || '/default-avatar.png'}
              alt={member.name}
              className="staff-avatar"
            />
            <div className="staff-info">
              <div className="staff-name">{member.name}</div>
              <div className="staff-role">{member.role}</div>
            </div>
            <div className="staff-info-link" onClick={() => handleInfoClick(member)}>Info &gt;</div>
          </div>
        ))}
      </div>

      <div className="staff-actions">
        <button className="add-btn" onClick={handleAdd}>+ ADD NEW MEMBER</button>
        <button className="continue-btn" onClick={() => navigate('/success')}>
  CONTINUE
</button>
      </div>

      {selectedMember && (
        <AddStaffMemberForm
          member={selectedMember}
          onClose={handleFormClose}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  );
};

export default AddStaffMembers;





