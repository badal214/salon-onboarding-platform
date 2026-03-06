import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { FaClock } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { GoPlus } from "react-icons/go";
import { FaArrowRight } from "react-icons/fa";
import { FaMapPin, FaScissors } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';
import Salon1 from "./assets/Saloon1.jpg";
import Salon2 from "./assets/Salon2.jpg";
import Salon3 from "./assets/Salon3.jpg";
import Salon4 from "./assets/Salon4.jpg";
import Salon5 from "./assets/Salon5.jpg";
import Salon6 from "./assets/Salon6.jpg";
import Salon7 from "./assets/Salon7.jpg";
import Salon8 from "./assets/Salon8.jpg";
import Salon9 from "./assets/Salon9.jpg";
import TRS1 from "./assets/TRS1.jpg";
import TRS2 from "./assets/TRS2.jpg";
import TRS3 from "./assets/TRS3.jpg";
import TRS4 from "./assets/TRS4.jpg";
import HRS1 from "./assets/HRS1.jpg";
import HRS2 from "./assets/HRS2.jpg";
import HRS3 from "./assets/HRS3.jpg";
import HRS4 from "./assets/HRS4.jpg";
import HRS5 from "./assets/HRS5.jpg";
import HRS6 from "./assets/HRS6.jpg";
import PR1 from "./assets/PR1.jpg";
import PR2 from "./assets/PR2.jpg";
import Banner1 from "./assets/Banner1.jpg";
import PartnerIcon from "./assets/partner.png";

import './style/Home.css';



function Home() {
  const [location, setLocation] = useState('Banglore');
const [openFaqIndex, setOpenFaqIndex] = useState(null);
  const [visibleFaqs, setVisibleFaqs] = useState(3);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredSalons, setFilteredSalons] = useState([]);
  const [selectedSalon, setSelectedSalon] = useState(null);
const navigate = useNavigate();
  




  // Initialize with salons array
  
  
// Add search handler
const handleSearch = (query) => {
  setSearchQuery(query);
  const results = salons.filter(salon =>
    salon.name.toLowerCase().includes(query.toLowerCase()) ||
    salon.location.toLowerCase().includes(query.toLowerCase())
  );
  setFilteredSalons(results);
};
  
  const services = [
    { name: 'Hair Services', image: HRS1 },
    { name: 'Nail Services', image: HRS2 },
    { name: 'Skincare', image: HRS3 },
    { name: 'Waxing and Hair Removal', image: HRS4 },
    { name: 'Makeup Services', image: HRS5 },
    { name: 'Spa Services', image: HRS6 },
  ];


  const SalonDetailModal = ({ salon, onClose }) => {
    if (!salon) return null;

    
    
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
        <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="p-8">
            {/* Header */}
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold mb-4">{salon.name}</h1>
              <div className="flex items-center justify-center gap-2">
                <FaStar className="text-yellow-400" />
                <span>{salon.rating} ({salon.reviews || 245} reviews)</span>
              </div>
            </div>

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Contact</h2>
                <p className="mb-2">📧 {salon.email || 'Not provided'}</p>
                <p>📞 {salon.phone || 'Not provided'}</p>
              </div>

              {/* Business Hours */}
              <div>
                <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
                {salon.businessHours ? (
                  salon.businessHours.map((hour, index) => (
                    <div key={index} className="flex justify-between mb-2">
                      <span>{hour.day}</span>
                      <span>{hour.time}</span>
                    </div>
                  ))
                ) : (
                  <p>{salon.hours || 'Not specified'}</p>
                )}
              </div>
            </div>

            {/* Services */}
            {salon.services && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Services Menu</h2>
                <div className="grid grid-cols-2 gap-4">
                  {salon.services.map((service, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h3 className="font-medium">{service.name}</h3>
                      <p className="text-gray-600">₹{service.price}</p>
                      <p className="text-sm text-gray-500">{service.duration}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Location */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-4">Location</h2>
              <div className="h-48 bg-gray-100 rounded-lg flex items-center justify-center">
                <FaMapPin className="text-2xl text-red-500" />
                <span className="ml-2">{salon.location || salon.address || 'Location not specified'}</span>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={onClose}
              className="w-full py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  const salons = [
    {
    id: 1,
    name: 'Velvet Vibe Salon Lounge',
    rating: 4.8,
    location: '2018 Township Co. Systems, Construction 36061',
    hours: '9:00 am - 7:00 pm',
    distance: '4.5 km',
    image: TRS1,
    tag: 'Popular',
    email: 'sales@gmail.com',
    phone: '+60 244 544 2233',
    businessHours: [
      { day: 'Monday', time: '9:00 AM - 8:00 PM' },
      { day: 'Saturday', time: '7:30 PM' },
      { day: 'Sunday', time: '6:30 PM' },
      { day: 'Friday', time: '5:30 PM' },
      { day: 'Thursday', time: '4:30 PM' }
    ],
    services: [
      { name: 'Hair Cut', price: 1500, duration: '45 mins' },
      { name: 'Spa Treatment', price: 3000, duration: '2 hrs' }
    ]
  },
    {
      name: 'LuxeLocks Salon & Spa',
      rating: 4.8,
      location: '2095 Springhill Dr, Delaware (DE)',
      hours: '9:00 am - 7:00 pm',
      distance: '4.5 km',
      image: TRS1,
      tag: 'Popular'
    },
    {
      name: 'Serenity Streets Salon',
      rating: 4.7,
      location: '500 Terrance Dr, Miami Beach',
      hours: '10:00 am - 8:00 pm',
      distance: '5 km',
      image: TRS2,
      tag: 'New'
    },
    {
      name: 'Serenity Streets Salon',
      rating: 4.7,
      location: '500 Terrance Dr, Miami Beach',
      hours: '10:00 am - 8:00 pm',
      distance: '5 km',
      image: TRS3,
      tag: 'New'
    },
    {
      name: 'Serenity Streets Salon',
      rating: 4.7,
      location: '500 Terrance Dr, Miami Beach',
      hours: '10:00 am - 8:00 pm',
      distance: '5 km',
      image: TRS4,
      tag: 'New'
    },
  ];

  const nearbySalons = [
    {
      name: 'LuxeLocks Salon & Spa',
      type: 'Unisex',
      rating: 4.25,
      address: '6391 Elgin St, Delaware 10299',
      hours: '9:00 am - 7:00 pm',
      distance: '6.5 km',
      image: Salon1
    },
    {
      name: 'LuxeLocks Salon & Spa',
      type: 'Male',
      rating: 4.25,
      address: '6391 Elgin St, Delaware 10299',
      hours: '9:00 am - 7:00 pm',
      distance: '6.5 km',
      image: Salon2
    },
    {
      name: 'LuxeLocks Salon & Spa',
      type: 'Female',
      rating: 4.25,
      address: '6391 Elgin St, Delaware 10299',
      hours: '9:00 am - 7:00 pm',
      distance: '6.5 km',
      image: Salon3
    },
    {
      name: 'LuxeLocks Salon & Spa',
      type: 'Unisex',
      rating: 4.25,
      address: '6391 Elgin St, Delaware 10299',
      hours: '9:00 am - 7:00 pm',
      distance: '6.5 km',
      image: Salon4
    },
    {
      name: 'LuxeLocks Salon & Spa',
      type: 'Female',
      rating: 4.25,
      address: '6391 Elgin St, Delaware 10299',
      hours: '9:00 am - 7:00 pm',
      distance: '6.5 km',
      image: Salon5
    },
    {
      name: 'LuxeLocks Salon & Spa',
      type: 'Unisex',
      rating: 4.25,
      address: '6391 Elgin St, Delaware 10299',
      hours: '9:00 am - 7:00 pm',
      distance: '6.5 km',
      image: Salon6
    },
    {
      name: 'LuxeLocks Salon & Spa',
      type: 'Male',
      rating: 4.25,
      address: '6391 Elgin St, Delaware 10299',
      hours: '9:00 am - 7:00 pm',
      distance: '6.5 km',
      image: Salon7
    },
    {
      name: 'LuxeLocks Salon & Spa',
      type: 'Female',
      rating: 4.25,
      address: '6391 Elgin St, Delaware 10299',
      hours: '9:00 am - 7:00 pm',
      distance: '6.5 km',
      image: Salon8
    },
    {
      name: 'LuxeLocks Salon & Spa',
      type: 'Male',
      rating: 4.25,
      address: '6391 Elgin St, Delaware 10299',
      hours: '9:00 am - 7:00 pm',
      distance: '6.5 km',
      image: Salon9
    }
  ];

  const promoCodes = [
    { code: 'NEWOFF', discount: '30% OFF', expiry: '20 Aug 2023', color: 'bg-pink-500' },
    { code: 'FLAT50', discount: '50% OFF', expiry: '25 Aug 2023', color: 'bg-blue-500' },
    { code: 'SAVE40', discount: '$40', expiry: '27 Aug 2023', color: 'bg-orange-500' },
    { code: 'BIG80', discount: '80% OFF', expiry: '30 Aug 2023', color: 'bg-green-500' },
  ];

  const recommendedSalons = [
    {
      name: 'LuxeLocks Salon & Spa',
      type: 'Unisex',
      rating: 4.25,
      address: '6391 Elgin St, Delaware 10299',
      hours: '9:00 am - 7:00 pm',
      distance: '6.5 km',
      image: TRS1
    },
    {
      name: 'Serenity Strands Salon',
      type: 'Male',
      rating: 4.25,
      address: '1901 Thornridge Cir, Shiloh, Hawaii',
      hours: '9:00 am - 7:00 pm',
      distance: '9 km',
      image: TRS2
    },
    {
      name: 'VelvetVibe Salon Lounge',
      type: 'Female',
      rating: 4.25,
      address: '6391 Elgin St, Celina, Delaware',
      hours: '9:00 am - 7:00 pm',
      distance: '12 km',
      image: TRS3
    },
    {
      name: 'Lumina Lux',
      type: 'Female',
      rating: 4.25,
      address: '2972 Westheimer Rd, Santa Ana',
      hours: '9:00 am - 7:00 pm',
      distance: '15 km',
      image: TRS4
    }
  ];


  function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSalon, setSelectedSalon] = useState(null);

  // Search functionality
  const filteredSalons = salons.filter(salon =>
    salon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    salon.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  

  return (
    <div className="min-h-screen bg-white">
      {/* Header (keep your existing header) */}

      <main>
        {/* Add onClick to all salon cards */}
        {['Top Rated Salons', 'Near by your area', 'Recommended'].map((section) => (
          <section key={section} className="section">
            <div className="section-container">
              <h2 className="section-title mb-6">{section}</h2>
              <div className="salons-grid">
                {filteredSalons.map((salon) => (
                  <div 
                    key={salon.id} 
                    className="salon-card cursor-pointer hover:shadow-lg"
                    onClick={() => setSelectedSalon(salon)}
                  >
                    {/* Your existing salon card content */}
                    <div className="salon-image-container">
                      <img src={salon.image} alt={salon.name} />
                      {/* ... rest of card content ... */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        {selectedSalon && <SalonDetailModal salon={selectedSalon} />}
      </main>
    </div>
  );
}

  const faqs = [
  {
    question: 'How long will it take to build the application?',
    answer: 'The time required varies based on complexity, but most projects take between 3-6 months from initial consultation to launch.'
  },
  { 
    question: 'Will you be hiring developers or using an internal team?',
    answer: 'We have a dedicated in-house team of experienced developers, supplemented by trusted specialists when needed for specific technologies.' 
  },
  { 
    question: 'What are the benefits of mobile app development for businesses?',
    answer: 'Mobile apps can increase customer engagement by 40%, improve brand loyalty, and provide valuable data insights to drive business decisions.' 
  },
  { 
    question: 'How much does it cost to develop a mobile application?',
    answer: 'Costs typically range from $20,000 to $150,000 depending on features and complexity. We offer free consultations to provide accurate estimates.' 
  },
  { 
    question: 'How do I choose the right mobile app development service provider?',
    answer: 'Look for experience in your industry, check their portfolio, read client testimonials, and ensure they have a clear development process.' 
  },
  {
    question: 'What platforms do you develop for?',
    answer: 'We develop for both iOS and Android platforms, as well as cross-platform solutions when appropriate.'
  },
  {
    question: 'Do you provide maintenance after launch?',
    answer: 'Yes, we offer various maintenance packages to keep your app updated and running smoothly.'
  }
];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="header bg-white shadow-sm">
  <div className="header-container max-w-7xl mx-auto px-4">
    <div className="header-content py-4 flex flex-col md:flex-row items-center justify-between gap-4">
      {/* Left side - Logo and Location */}
      <div className="header-left flex items-center space-x-6 w-full md:w-auto">
        <Link to="/" className="header-logo flex items-center">
          <FaScissors className="text-orange-600 text-2xl" />
          <span className="header-logo-text ml-2 text-xl font-bold">GLAMTECH</span>
        </Link>
        
        <div className="header-location flex items-center">
          <FiMapPin className="text-gray-500" />
          <select 
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="ml-2 bg-transparent border-none focus:ring-0"
          >
            <option>Banglore</option>
            <option>Mumbai</option>
            <option>Delhi</option>
          </select>
        </div>
      </div>

      {/* Center - Search - Now takes remaining space */}
      <div className="header-search w-full md:flex-1 md:px-4">
        <div className="search-container relative w-full">
          <IoIosSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search for salon, services..."
            className="search-input w-full"
            value={searchQuery}
            onChange={(e) => handleSearch(e.target.value)}
          />
          {searchQuery && (
            <div className="search-results absolute bg-white w-full mt-2 shadow-lg rounded-lg z-50">
              {filteredSalons.map(salon => (
                <div 
                  key={salon.id}
                  className="p-4 hover:bg-gray-50 cursor-pointer"
                  onClick={() => setSelectedSalon(salon)}
                >
                  <h3 className="font-medium">{salon.name}</h3>
                  <p className="text-sm text-gray-500">{salon.location}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Right side - Appointment, Partner, Sign In */}
      <div className="header-right flex items-center gap-4 w-full md:w-auto justify-end">
        <button
          onClick={() => navigate('/appointment')}
          className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 whitespace-nowrap"
        >
          Appointment
        </button>
        <Link to="/signup/salon" className="partner-link whitespace-nowrap">
          <img 
            src={PartnerIcon} 
            alt="Partner with Us" 
            className="partner-icon"
          />
          <span>Partner with Us</span>
        </Link>
        <Link to="/" className="signin-link whitespace-nowrap">
          <FaRegUserCircle className="signin-icon" />
          Sign In
        </Link>
      </div>
    </div>
  </div>
</header>

      <main>
        {/* Services Section */}
        <section className="section bg-gray-50">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">What are you looking for?</h2>
              <Link to="/HomeServices" className="explore-link">
                Explore all
                <FaArrowRight className="explore-icon" />
              </Link>
            </div>
            
            <div className="services-grid">
              {services.map((service, index) => (
                <div key={index} className="service-item">
                  <div className="service-image-container">
                    <img
                      src={service.image}
                      alt={service.name}
                      className="service-image"
                    />
                  </div>
                  <p className="service-name">{service.name}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promotion Banner */}
        <section className="section">
          <div className="section-container">
            <div className="promotion-banner">
              <img
                src={Banner1}
                alt="Promotion"
                className="promotion-image"
              />
              <div className="promotion-overlay">
                <div className="promotion-content">
                  <h2 className="promotion-subtitle">Get up to</h2>
                  <div className="promotion-title">50% OFF</div>
                  <p className="promotion-text">
                    here is a distinction between a beauty salon and a hair salon and although many small.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Top Rated Salons */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Top Rated Salons</h2>
              <div className="flex gap-2">
                <button className="p-2 rounded-full border hover:bg-gray-50">
                  <FaChevronLeft className="h-5 w-5" />
                </button>
                <button className="p-2 rounded-full border hover:bg-gray-50">
                  <FaChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="salons-grid">
              {salons.map((salon, index) => (
                <div key={index}  className="salon-card cursor-pointer"
                  onClick={() => setSelectedSalon(salon)}
                >
                  <div className="salon-image-container">
                    <img
                      src={salon.image}
                      alt={salon.name}
                      className="salon-image"
                    />
                    <span className={`salon-tag ${salon.tag === 'Popular' ? 'salon-tag-popular' : 'salon-tag-new'}`}>
                      {salon.tag}
                    </span>
                    <button className="salon-add-button">
                      <GoPlus className="salon-add-icon" />
                    </button>
                  </div>
                  <div className="salon-details">
                    <div className="salon-header">
                      <h3 className="salon-name">{salon.name}</h3>
                      <div className="salon-rating">
                        <FaStar className="salon-star" />
                        <span className="salon-rating-text">{salon.rating}</span>
                      </div>
                    </div>
                    <div className="salon-info">
                      <FiMapPin className="salon-info-icon" />
                      {salon.location}
                    </div>
                    <div className="salon-info">
                      <FaClock className="salon-info-icon" />
                      {salon.hours}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nearby Salons Section */}
        <section className="section">
          <div className="section-container">
            <h2 className="section-title mb-6">Near by your area</h2>
            <div className="nearby-salons-grid">
              {nearbySalons.map((salon, index) => (
                <div key={index} className="nearby-salon-card cursor-pointer"
                  onClick={() => setSelectedSalon(salon)}
                >
                  <div className="nearby-salon-image-container">
                    <img
                      src={salon.image}
                      alt={salon.name}
                      className="nearby-salon-image"
                    />
                    <span className={`nearby-salon-type ${salon.type === 'Unisex' ? 'nearby-salon-type-unisex' : salon.type === 'Male' ? 'nearby-salon-type-male' : 'nearby-salon-type-female'}`}>
                      {salon.type}
                    </span>
                    <div className="nearby-salon-rating">
                      <FaStar className="nearby-salon-star" />
                      <span className="nearby-salon-rating-text">{salon.rating}</span>
                    </div>
                  </div>
                  <div className="nearby-salon-content">
                    <h3 className="nearby-salon-name">{salon.name}</h3>
                    <div className="nearby-salon-info">
                      <div className="nearby-salon-info-item">
                        <FiMapPin className="nearby-salon-info-icon" />
                        <span>{salon.address}</span>
                      </div>
                      <div className="nearby-salon-info-item">
                        <FaClock className="nearby-salon-info-icon" />
                        <span>{salon.hours}</span>
                      </div>
                      <div className="nearby-salon-info-item">
                        <span className="nearby-salon-distance">{salon.distance}</span>
                        <span>•</span>
                        <span className="nearby-salon-status">Open</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="view-more-button">
              <button className="view-more-btn">
                VIEW MORE
              </button>
            </div>
          </div>
        </section>

        {/* Promo Codes Section */}
        <section className="section bg-gray-50">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Promo Codes For More Savings</h2>
              <div className="flex gap-2">
                <button className="p-2 rounded-full border hover:bg-gray-50">
                  <FaChevronLeft className="h-5 w-5" />
                </button>
                <button className="p-2 rounded-full border hover:bg-gray-50">
                  <FaChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="promo-codes-grid">
              {promoCodes.map((promo, index) => (
                <div key={index} className={`promo-card ${promo.color}`}>
                  <div className="promo-discount">{promo.discount}</div>
                  <div className="promo-text">On your first booking</div>
                  <div className="promo-footer">
                    <div className="promo-code">
                      Code: {promo.code}
                    </div>
                    <button className="copy-button">
                      Copy Code
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recommended Section */}
        <section className="section">
          <div className="section-container">
            <div className="section-header">
              <h2 className="section-title">Recommended</h2>
              <div className="flex gap-2">
                <button className="p-2 rounded-full border hover:bg-gray-50">
                  <FaChevronLeft className="h-5 w-5" />
                </button>
                <button className="p-2 rounded-full border hover:bg-gray-50">
                  <FaChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="recommended-salons-grid">
              {recommendedSalons.map((salon, index) => (
                <div key={index}  className="nearby-salon-card cursor-pointer"
                  onClick={() => setSelectedSalon(salon)}
                >
                  <div className="nearby-salon-image-container">
                    <img
                      src={salon.image}
                      alt={salon.name}
                      className="nearby-salon-image"
                    />
                    <span className={`nearby-salon-type ${salon.type === 'Unisex' ? 'nearby-salon-type-unisex' : salon.type === 'Male' ? 'nearby-salon-type-male' : 'nearby-salon-type-female'}`}>
                      {salon.type}
                    </span>
                    <div className="nearby-salon-rating">
                      <FaStar className="nearby-salon-star" />
                      <span className="nearby-salon-rating-text">{salon.rating}</span>
                    </div>
                  </div>
                  <div className="nearby-salon-content">
                    <h3 className="nearby-salon-name">{salon.name}</h3>
                    <div className="nearby-salon-info">
                      <div className="nearby-salon-info-item">
                        <FiMapPin className="nearby-salon-info-icon" />
                        <span>{salon.address}</span>
                      </div>
                      <div className="nearby-salon-info-item">
                        <FaClock className="nearby-salon-info-icon" />
                        <span>{salon.hours}</span>
                      </div>
                      <div className="nearby-salon-info-item">
                        <span className="nearby-salon-distance">{salon.distance}</span>
                        <span>•</span>
                        <span className="nearby-salon-status">Open</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Section */}
<section className="partner-section bg-gray-50 py-16">
  <div className="container mx-auto px-4">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Become Partner Card */}
      <div className="bg-purple-50 rounded-xl p-8 relative overflow-hidden">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Would you like to become a partner with GlamTech?
          </h2>
          <p className="text-gray-600 mb-6">
            Cut the phone tag. Find your next appointment and book instantly anytime, anywhere.
          </p>
          <Link 
            to="/signup/salon" 
            className="inline-block bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            ADD SALON
          </Link>
        </div>
        <img 
          src={PR1} 
          alt="Partner illustration" 
          className="absolute bottom-0 right-0 h-48 object-contain"
        />
      </div>

      {/* Existing Partner Card */}
      <div className="bg-green-50 rounded-xl p-8 relative overflow-hidden">
        <div className="max-w-md">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            I am currently affiliated as a partner with GlamTech.
          </h2>
          <p className="text-gray-600 mb-6">
            Cut the phone tag. Find your next appointment and book instantly anytime, anywhere.
          </p>
          <Link 
            to="/dashboard" 
            className="inline-block bg-black text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            GO TO DASHBOARD
          </Link>
        </div>
        <img 
          src={PR2} 
          alt="Dashboard illustration" 
          className="absolute bottom-0 right-0 h-48 object-contain"
        />
      </div>
    </div>
  </div>
</section>

        {/* FAQ Section */}
{/* FAQ Section */}
<section className="faq-section">
  <div className="section-container">
    <div className="faq-header">
      <h2 className="faq-title">Frequently asked questions</h2>
      <p className="faq-description">
        Ask everything you need to know about our products and services.<br />
        We are ready to answer all your questions.
      </p>
    </div>

    <div className="faq-list">
      {faqs.slice(0, visibleFaqs).map((faq, index) => (
        <div key={index} className="faq-item">
          <button 
            className="faq-question" 
            onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
          >
            <span className="faq-question-text">{faq.question}</span>
            <FaChevronRight className={`faq-icon ${openFaqIndex === index ? 'rotate-90' : ''}`} />
          </button>
          {openFaqIndex === index && (
            <div className="faq-answer">
              {faq.answer || "Please contact us for more information about this topic."}
            </div>
          )}
        </div>
      ))}
    </div>

    {visibleFaqs < faqs.length && (
      <div className="view-more-button">
        <button 
          className="view-more-btn"
          onClick={() => setVisibleFaqs(prev => prev + 2)} // Show 2 more FAQs
        >
          VIEW MORE
        </button>
      </div>
    )}
  </div>
</section>

        {/* Contact Section */}
        <section className="section">
          <div className="section-container">
            <div className="contact-container">
              <div className="contact-grid">
                <div className="contact-info">
                  <h2 className="contact-title">Have a any Concern?</h2>
                  <p className="contact-text">
                    It is simply dummy text of the printing and typesetting industry.
                    It has been in the industry's standard dummy text.
                  </p>
                  <div className="contact-details">
                    <div className="contact-detail">
                      <span className="text-sm">Email us</span>
                      <a href="mailto:contact@salonx.com" className="text-sm">contact@glamtech.com</a>
                    </div>
                    <div className="contact-detail">
                      <span className="text-sm">Call us</span>
                      <a href="tel:06-01-22-22-24" className="text-sm">06-01-22-22-24</a>
                    </div>
                  </div>
                </div>

                <div className="contact-form-container">
                  <form className="contact-form">
                    <select className="contact-select">
                    <option disabled>Select Topic</option>
  <option value="salon">Salon</option>
  <option value="client">Client</option>
  <option value="stylist">Stylist</option>
</select>
                    <div className="contact-input-group">
                      <input
                        type="text"
                        placeholder="First name"
                        className="contact-input"
                      />
                      <input
                        type="text"
                        placeholder="Last name"
                        className="contact-input"
                      />
                    </div>
                    <input
                      type="email"
                      placeholder="Email"
                      className="contact-input"
                    />
                    <textarea
                      placeholder="Message"
                      rows={4}
                      className="contact-textarea"
                    />
                    <div className="contact-checkbox">
                      <input type="checkbox" id="privacy" className="contact-checkbox-input" />
                      <label htmlFor="privacy" className="contact-checkbox-label">
                        By selecting this, you agree to the Privacy Policy and Cookie Policy
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="contact-submit"
                    >
                      SEND →
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="section">
          <div className="section-container">
            <div className="map-grid">
              <div className="social-section">
                <div>
                  <h3 className="social-title">SOCIAL NETWORK</h3>
                  <h2 className="social-heading">Follow us on our network</h2>
                  <div className="social-icons">
                    <a href="#" className="social-icon">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                      </svg>
                    </a>
                    <a href="#" className="social-icon">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </a>
                    <a href="#" className="social-icon">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a href="#" className="social-icon">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                      </svg>
                    </a>
                    <a href="#" className="social-icon">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                      </svg>
                    </a>
                  </div>
                </div>

                <div>
                  <h3 className="social-title">NEWSLETTER</h3>
                  <h2 className="social-heading">Be the first to know</h2>
                  <form className="newsletter-form">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="newsletter-input"
                    />
                    <button className="newsletter-button">
                      SUBSCRIBE
                    </button>
                  </form>
                </div>
              </div>

              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1645868686799!5m2!1sen!2sin"
                  className="map-iframe"
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-container">
            <div className="footer-grid">

              
              {/* Logo and Description */}
              <div className="col-span-1">
                <div className="footer-logo">
                  <FaScissors className="footer-logo-icon" />
                  <span className="footer-logo-text">GLAMTECH</span>
                </div>
                <p className="footer-description">
                  GLAMTECH- The Future Of Salon Booking Technology offers a luxurious and innovative salon experience, blending cutting-edge techniques with personalized service to bring out the best in every client
                </p>
              </div>

              {/* Links */}
              <div className="col-span-1">
                <h3 className="footer-heading">LINK</h3>
                <ul className="footer-links">
                  <li><Link to="/" className="footer-link">Unisex Services</Link></li>
                  <li><Link to="/" className="footer-link">Women Services</Link></li>
                  <li><Link to="/" className="footer-link">Men Services</Link></li>
                  <li><Link to="/" className="footer-link">Our history</Link></li>
                  <li><Link to="/" className="footer-link">Contact</Link></li>
                </ul>
              </div>

              {/* About */}
              <div className="col-span-1">
                <h3 className="footer-heading">ABOUT</h3>
                <ul className="footer-links">
                  <li><Link to="/" className="footer-link">FAQ</Link></li>
                  <li><Link to="/" className="footer-link">Contact us</Link></li>
                  <li><Link to="/" className="footer-link">Terms and Conditions</Link></li>
                  <li><Link to="/" className="footer-link">Privacy Policy</Link></li>
                  <li><Link to="/" className="footer-link">Terms of Use</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div className="col-span-1">
                <h3 className="footer-heading">CONTACT</h3>
                <ul className="footer-links">
                  <li className="footer-contact-item">contact@glamtech.com</li>
                  <li className="footer-contact-item">+33 888 666 433</li>
                  <li className="footer-contact-item">Empire State Building, New York</li>
                  <li className="footer-contact-item">9h00 - 17h00</li>
                </ul>
              </div>
            </div>

            

            {/* Copyright */}
            <div className="footer-divider">
              © 2025 glamtech. All rights reserved.
            </div>
          </div>
        </footer>

      {selectedSalon && (
          <SalonDetailModal 
            salon={selectedSalon} 
            onClose={() => setSelectedSalon(null)} 
          />
        )}
        
      </main>
    </div>
  );
}

export default Home;