import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaBell, 
  FaUserCircle, 
  FaChartLine, 
  FaCalendarAlt, 
  FaStore, 
  FaCut, 
  FaUsers, 
  FaBlog, 
  FaCog,
  FaSignOutAlt,
  FaUser
} from 'react-icons/fa';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import './style/Dashboard.css';

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Dashboard = () => {
  const navigate = useNavigate();
  // State for active tab
  const [activeTab, setActiveTab] = useState('dashboard');
  const [businessData] = useState({
    revenue: 24500,
    appointments: 15,
    satisfaction: 4.8,
    staff: 9,
    onLeave: 2
  });

  // Profile dropdown state
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const profileRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setShowProfileDropdown(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleProfileClick = () => {
    setActiveTab('profile');
    setShowProfileDropdown(false);
  };

  const handleSettingsClick = () => {
    setActiveTab('settings');
    setShowProfileDropdown(false);
  };

  const handleLogout = () => {
    // Clear authentication tokens or user data
    localStorage.removeItem('authToken');
    // Redirect to signin page
    navigate('/');
  };

  // Sample data for different sections
  const [salons] = useState([
    { id: 1, name: 'Downtown Salon', location: 'Main Street', staff: 5 },
    { id: 2, name: 'Uptown Salon', location: 'Central Avenue', staff: 4 },
    { id: 3, name: 'Beachside Salon', location: 'Coastal Road', staff: 6 }
  ]);

  const [services] = useState([
    { id: 1, name: 'Haircut', price: 40, duration: '45 min' },
    { id: 2, name: 'Coloring', price: 80, duration: '2 hours' },
    { id: 3, name: 'Manicure', price: 25, duration: '30 min' }
  ]);

  const [staff] = useState([
    { id: 1, name: 'Sarah Johnson', position: 'Senior Stylist', salary: 3200 },
    { id: 2, name: 'Mike Chen', position: 'Color Specialist', salary: 2800 },
    { id: 3, name: 'Emma Wilson', position: 'Nail Technician', salary: 2500 }
  ]);

  const [blogs] = useState([
    { id: 1, title: 'Summer Hair Trends', date: '2024-05-15', views: 1245 },
    { id: 2, title: 'Beard Care Guide', date: '2024-04-22', views: 892 },
    { id: 3, title: 'Color Protection Tips', date: '2024-03-10', views: 1532 }
  ]);

  // Chart data configuration
  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
      label: 'Monthly Revenue ($)',
      data: [6500, 5900, 8000, 8100, 5600, 5500],
      backgroundColor: '#60a5fa',
      borderWidth: 0,
    }]
  };

  // Chart options
  const chartOptions = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: { 
      legend: { position: 'bottom' }
    }
  };

  // Sample appointments data
  const appointments = [
    { id: 1, client: 'Theresa Webb', date: '2024-06-05', time: '15:00', type: 'Salon', amount: 220 },
    { id: 2, client: 'Ronald Richards', date: '2024-05-12', time: '14:00', type: 'Home', amount: 180 },
    { id: 3, client: 'Bessie Cooper', date: '2024-04-27', time: '12:00', type: 'Salon', amount: 200 },
  ];

  // Render different sections based on active tab
  const renderContent = () => {
    switch(activeTab) {
      case 'appointments':
        return (
          <section className="content-section">
            <h2>Appointments</h2>
            <div className="data-list">
              {appointments.map(appt => (
                <div key={appt.id} className="data-card">
                  <h4>{appt.client}</h4>
                  <p>{new Date(appt.date).toLocaleDateString()} at {appt.time}</p>
                  <p>{appt.type} - ${appt.amount}</p>
                </div>
              ))}
            </div>
          </section>
        );
      case 'salons':
        return (
          <section className="content-section">
            <h2>My Salons</h2>
            <div className="data-list">
              {salons.map(salon => (
                <div key={salon.id} className="data-card">
                  <h4>{salon.name}</h4>
                  <p>Location: {salon.location}</p>
                  <p>Staff: {salon.staff}</p>
                </div>
              ))}
            </div>
          </section>
        );
      case 'services':
        return (
          <section className="content-section">
            <h2>My Services</h2>
            <div className="data-list">
              {services.map(service => (
                <div key={service.id} className="data-card">
                  <h4>{service.name}</h4>
                  <p>Price: ${service.price}</p>
                  <p>Duration: {service.duration}</p>
                </div>
              ))}
            </div>
          </section>
        );
      case 'staff':
        return (
          <section className="content-section">
            <h2>Staff Members</h2>
            <div className="data-list">
              {staff.map(employee => (
                <div key={employee.id} className="data-card">
                  <h4>{employee.name}</h4>
                  <p>Position: {employee.position}</p>
                  <p>Salary: ${employee.salary}</p>
                </div>
              ))}
            </div>
          </section>
        );
      case 'blogs':
        return (
          <section className="content-section">
            <h2>Blog Posts</h2>
            <div className="data-list">
              {blogs.map(blog => (
                <div key={blog.id} className="data-card">
                  <h4>{blog.title}</h4>
                  <p>Published: {new Date(blog.date).toLocaleDateString()}</p>
                  <p>Views: {blog.views}</p>
                </div>
              ))}
            </div>
          </section>
        );
      case 'settings':
        return (
          <section className="content-section">
            <h2>Settings</h2>
            <div className="settings-form">
              <div className="form-group">
                <label>Business Name</label>
                <input type="text" defaultValue="GlamTech" />
              </div>
              <div className="form-group">
                <label>Notification Preferences</label>
                <select defaultValue="Email">
                  <option>Email</option>
                  <option>SMS</option>
                  <option>Both</option>
                </select>
              </div>
              <button className="save-btn">Save Changes</button>
            </div>
          </section>
        );
      case 'profile':
        return (
          <section className="content-section">
            <h2>My Profile</h2>
            <div className="profile-form">
              <div className="form-group">
                <label>Name</label>
                <input type="text" defaultValue="Salon Owner" readOnly />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type="email" defaultValue="owner@glamtech.com" readOnly />
              </div>
              <div className="form-group">
                <label>Account Type</label>
                <input type="text" defaultValue="Business Owner" readOnly />
              </div>
            </div>
          </section>
        );
      default:
        return (
          <>
            <div className="metrics-grid">
              <div className="metric-card">
                <h3>Total Revenue</h3>
                <p>${businessData.revenue.toLocaleString()}</p>
                <span className="metric-trend positive">↑ 12% from last month</span>
              </div>
              <div className="metric-card">
                <h3>Upcoming Appointments</h3>
                <p>{businessData.appointments}</p>
                <span className="metric-trend">Next 7 days</span>
              </div>
              <div className="metric-card">
                <h3>Customer Satisfaction</h3>
                <p>{businessData.satisfaction}/5</p>
                <span className="metric-trend positive">↑ 0.2 points</span>
              </div>
              <div className="metric-card">
                <h3>Active Staff Members</h3>
                <p>{businessData.staff}</p>
                <span className="metric-trend negative">↓ {businessData.onLeave} on leave</span>
              </div>
            </div>

            <section className="analytics-section">
              <h2 className="section-title">Revenue Overview</h2>
              <div className="chart-container">
                <Bar data={chartData} options={chartOptions} />
              </div>
            </section>

            <section className="appointments-section">
              <div className="section-header">
                <h2 className="section-title">Recent Appointments</h2>
                <button 
                  className="view-all" 
                  onClick={() => setActiveTab('appointments')}
                >
                  View All →
                </button>
              </div>
              <div className="appointments-list">
                {appointments.slice(0, 3).map(appt => (
                  <div key={appt.id} className="appointment-card">
                    <div className="appt-main">
                      <h4>{appt.client}</h4>
                      <span className="appt-type">{appt.type} Service</span>
                    </div>
                    <div className="appt-details">
                      <p>{new Date(appt.date).toLocaleDateString()} at {appt.time}</p>
                      <div className="appt-amount">${appt.amount}</div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="dashboard-container">
      <aside className="dashboard-sidebar">
        <h2 className="brand">GlamTech</h2>
        <nav>
          <ul className="nav-menu">
            <li 
              className={activeTab === 'dashboard' ? 'active' : ''}
              onClick={() => setActiveTab('dashboard')}
            >
              <FaChartLine /> Dashboard
            </li>
            <li 
              className={activeTab === 'appointments' ? 'active' : ''}
              onClick={() => setActiveTab('appointments')}
            >
              <FaCalendarAlt /> Appointments
            </li>
            <li 
              className={activeTab === 'salons' ? 'active' : ''}
              onClick={() => setActiveTab('salons')}
            >
              <FaStore /> My Salons
            </li>
            <li 
              className={activeTab === 'services' ? 'active' : ''}
              onClick={() => setActiveTab('services')}
            >
              <FaCut /> My Services
            </li>
            <li 
              className={activeTab === 'staff' ? 'active' : ''}
              onClick={() => setActiveTab('staff')}
            >
              <FaUsers /> Staff
            </li>
            <li 
              className={activeTab === 'blogs' ? 'active' : ''}
              onClick={() => setActiveTab('blogs')}
            >
              <FaBlog /> Blogs
            </li>
            <li 
              className={activeTab === 'settings' ? 'active' : ''}
              onClick={() => setActiveTab('settings')}
            >
              <FaCog /> Settings
            </li>
          </ul>
        </nav>
      </aside>

      <main className="dashboard-main">
        <header className="dashboard-header">
          <div>
            <h1>{activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}</h1>
            <p className="welcome-text">Welcome back, Salon Owner!</p>
          </div>
          <div className="header-controls">
            <FaBell className="icon notification" />
            <div 
              className="user-profile" 
              ref={profileRef}
              onClick={() => setShowProfileDropdown(!showProfileDropdown)}
            >
              <FaUserCircle className="icon" />
              <span>Owner Account</span>
              {showProfileDropdown && (
                <div className="profile-dropdown">
                  <div className="dropdown-item" onClick={handleProfileClick}>
                    <FaUser className="dropdown-icon" />
                    <span>Profile</span>
                  </div>
                  <div className="dropdown-item" onClick={handleSettingsClick}>
                    <FaCog className="dropdown-icon" />
                    <span>Settings</span>
                  </div>
                  <div className="dropdown-divider"></div>
                  <div className="dropdown-item" onClick={handleLogout}>
                    <FaSignOutAlt className="dropdown-icon" />
                    <span>Logout</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </header>

        {renderContent()}
      </main>
    </div>
  );
};

export default Dashboard;
