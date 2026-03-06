import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiShare2 } from "react-icons/fi";
import { FaChevronDown } from "react-icons/fa";
import { LuX } from "react-icons/lu";
import { FaShoppingCart } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import { FaClock } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaMapPin, FaScissors } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import PR1 from "./assets/PR1.jpg";
import PR2 from "./assets/PR2.jpg";
import './style/SalonDetails.css';

function SalonDetails() {
  const [activeTab, setActiveTab] = useState('about');
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const salonImages = [
    'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80',
  ];

  const services = [
    { id: 1, name: 'Haircut', duration: '34 Min', price: 28.00, image: 'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80' },
    { id: 2, name: 'Hair Color', duration: '34 Min', price: 28.00, image: 'https://images.unsplash.com/photo-1470259078422-826894b933aa?auto=format&fit=crop&q=80' },
    { id: 3, name: 'Hair Styling (Blowout)', duration: '34 Min', price: 28.00, image: 'https://images.unsplash.com/photo-1522336572468-97b06e8ef143?auto=format&fit=crop&q=80' },
    { id: 4, name: 'Manicure', duration: '34 Min', price: 28.00, image: 'https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&q=80' },
    { id: 5, name: 'Pedicure', duration: '34 Min', price: 28.00, image: 'https://images.unsplash.com/photo-1519014816548-bf5fe059798b?auto=format&fit=crop&q=80' },
    { id: 6, name: 'Facial', duration: '34 Min', price: 28.00, image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80' },
    { id: 7, name: 'Massage', duration: '34 Min', price: 28.00, image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80' },
  ];

  const menuImages = [
    'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80',
  ];

  const galleryImages = [
    'https://images.unsplash.com/photo-1599351431202-1e0f0137899a?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80',
    'https://images.unsplash.com/photo-1522337660859-02fbefca4702?auto=format&fit=crop&q=80',
  ];

  const team = [
    { id: 1, name: 'Marvin McKinney', position: 'Hair Stylist', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&h=50&fit=crop' },
    { id: 2, name: 'Darlene Robertson', position: 'Hair Stylist', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=50&h=50&fit=crop' },
    { id: 3, name: 'Jacob Jones', position: 'Hair Stylist', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=50&h=50&fit=crop' },
  ];

  const reviews = [
    {
      id: 1,
      rating: 5,
      author: 'Darrell Steward',
      text: "I've been coming to this salon for years, and I wouldn't trust anyone else with my hair! The stylists here are incredibly talented and always know exactly what I want. Plus, the atmosphere is so welcoming and relaxing. Highly recommend!"
    },
    {
      id: 2,
      rating: 5,
      author: 'Kathryn Murphy',
      text: "I had the most amazing facial at this salon! The esthetician was so knowledgeable and really took the time to customize the treatment to my skin's needs. My skin has never looked or felt better. Can't wait to book my next appointment!"
    },
    {
      id: 3,
      rating: 4,
      author: 'Kalem Chessor',
      text: "As someone who's always been nervous about getting waxed, I was pleasantly surprised by my experience at this salon. The technician made me feel completely at ease and did an excellent job. I'll definitely be returning!"
    },
    {
      id: 4,
      rating: 5,
      author: 'Michael Johnson',
      text: "I recently booked a spa day for myself and some friends at this salon, and it exceeded all of our expectations! From the moment we walked in, we were treated like royalty. The staff went above and beyond to ensure we had a relaxing and enjoyable experience. We'll definitely be back!"
    }
  ];

  const addToCart = (service) => {
    setCart([...cart, service]);
    setShowCart(true);
  };

  const removeFromCart = (serviceId) => {
    setCart(cart.filter(item => item.id !== serviceId));
  };

  const calculateTotal = () => {
    const subtotal = cart.reduce((sum, item) => sum + item.price, 0);
    const tax = subtotal * 0.06; // 6% tax
    const discount = promoCode ? 20 : 0; // Example discount
    return {
      subtotal: subtotal.toFixed(2),
      tax: tax.toFixed(2),
      discount: discount.toFixed(2),
      total: (subtotal + tax - discount).toFixed(2)
    };
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % salonImages.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + salonImages.length) % salonImages.length);
  };

  return (
    <div className="salon-details-container">
      {/* Header */}
      <header className="salon-header">
        <div className="header-content">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="flex items-center gap-2">
                <img src="/logo.svg" alt="Salon-X" className="h-8" />
              </Link>
              <div className="ml-8 flex items-center gap-2">
                <FiMapPin className="h-4 w-4 text-gray-400" />
                <select className="text-sm border-none focus:ring-0">
                  <option>Banglore</option>
                  <option>Mumbai</option>
                  <option>Delhi</option>
                </select>
              </div>
            </div>
            
            <div className="flex-1 max-w-2xl mx-8">
              <div className="relative">
                <IoIosSearch className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for salon, services..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button 
                className="relative"
                onClick={() => setShowCart(!showCart)}
              >
                <FaShoppingCart className="h-6 w-6 text-gray-600" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex-center">
                    {cart.length}
                  </span>
                )}
              </button>
              <Link to="/signin" className="flex items-center gap-2 text-sm font-medium">
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="header-content py-8">
        {/* Salon Images Carousel */}
        <div className="image-carousel">
          <img
            src={salonImages[currentImageIndex]}
            alt="Salon"
            className="carousel-image"
          />
          <button
            onClick={handlePrevImage}
            className="carousel-button left-4 top-1/2 -translate-y-1/2"
          >
            <FaChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={handleNextImage}
            className="carousel-button right-4 top-1/2 -translate-y-1/2"
          >
            <FaChevronRight className="h-6 w-6" />
          </button>
          <div className="absolute top-4 left-4 px-3 py-1 bg-purple-500 text-white rounded-full text-sm">
            Unisex
          </div>
          <div className="absolute bottom-4 right-4 flex gap-2">
            <span className="px-3 py-1 bg-black bg-opacity-50 text-white rounded-full text-sm flex-center gap-1">
              45 Photos
            </span>
            <span className="px-3 py-1 bg-black bg-opacity-50 text-white rounded-full text-sm flex-center gap-1">
              <FaStar className="h-4 w-4 fill-current text-yellow-400" />
              4.25
            </span>
          </div>
        </div>

        {/* Salon Info */}
        <div className="salon-info">
          <div>
            <h1 className="text-2xl font-semibold mb-2">Velvet Vibe Salon Lounge</h1>
            <p className="text-gray-600 mb-4 max-w-2xl">
              A salon is a space dedicated to beauty and personal care services, often specializing in hairstyling, hair treatments, manicures, pedicures, facials, and other aesthetic treatments. It's a place where individuals can go to relax, unwind.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <a href="mailto:velvet.salon@gmail.com" className="hover:text-gray-900">
                velvet.salon@gmail.com
              </a>
              <a href="tel:+00 234 354 2323" className="hover:text-gray-900">
                +00 234 354 2323
              </a>
            </div>
          </div>
          <button className="px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
            FOLLOW
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="tabs-container">
          <nav className="flex gap-8">
            {['About', 'Menu', 'Reviews', 'Team'].map((tab) => (
              <button
                key={tab}
                className={`tab-button ${activeTab === tab.toLowerCase() ? 'active' : 'inactive'}`}
                onClick={() => setActiveTab(tab.toLowerCase())}
              >
                {tab}
              </button>
            ))}
          </nav>
        </div>

        {/* Services */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Services</h2>
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border rounded-lg">
                <IoIosSearch className="h-4 w-4" />
                Search
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border rounded-lg">
                <FiShare2 className="h-4 w-4" />
                Filter
              </button>
              <button className="flex items-center gap-2 px-4 py-2 border rounded-lg">
                Sort
                <FaChevronDown className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {services.map((service) => (
              <div key={service.id} className="service-item">
                <div className="flex items-center gap-4">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{service.name}</h3>
                    <p className="text-sm text-gray-500 flex items-center gap-1">
                      <FaClock className="h-4 w-4" />
                      {service.duration}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="font-medium">${service.price.toFixed(2)}</span>
                  <button
                    onClick={() => addToCart(service)}
                    className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
                  >
                    ADD
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Images */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Our Service Menu</h2>
          <div className="image-grid grid-cols-4">
            {menuImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Menu ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg hover-scale"
              />
            ))}
          </div>
        </div>

        {/* Gallery */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-6">Salon Gallery</h2>
          <div className="image-grid grid-cols-3">
            {galleryImages.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover rounded-lg hover-scale"
              />
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold mb-2">Meet our team</h2>
          <p className="text-gray-500 mb-6">Meet Our Talented Team of Stylists</p>
          <div className="space-y-4">
            {team.map((member) => (
              <div key={member.id} className="team-member">
                <div className="flex items-center gap-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-medium">{member.name}</h3>
                    <p className="text-sm text-gray-500">{member.position}</p>
                  </div>
                </div>
                <button className="text-orange-600">
                  <FaInfoCircle className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Reviews */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-semibold mb-2">Reviews</h2>
              <p className="text-gray-500">
                Découvrez les témoignages de nos clients qui ont acheté cet article
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-center">
                <div className="text-4xl font-semibold">4.9</div>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className="h-4 w-4 fill-current text-yellow-400"
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-1">
                {[
                  { stars: 5, count: 1275 },
                  { stars: 4, count: 1023 },
                  { stars: 3, count: 898 },
                  { stars: 2, count: 40 },
                  { stars: 1, count: 20 }
                ].map((rating) => (
                  <div key={rating.stars} className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(rating.stars)].map((_, i) => (
                        <FaStar
                          key={i}
                          className="h-3 w-3 fill-current text-yellow-400"
                        />
                      ))}
                    </div>
                    <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-orange-600"
                        style={{
                          width: `${(rating.count / 1275) * 100}%`
                        }}
                      />
                    </div>
                    <span className="text-sm text-gray-500">{rating.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="review-item">
                <div className="flex gap-1 mb-2">
                  {[...Array(review.rating)].map((_, i) => (
                    <FaStar
                      key={i}
                      className="h-4 w-4 fill-current text-yellow-400"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{review.text}</p>
                <p className="font-medium">{review.author}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Partner Section */}
        <section className="py-16 bg-gray-50">
          <div className="header-content">
            <div className="grid grid-cols-2 gap-8 pb-12">
              {/* Become a Partner Card */}
              <div className="partner-card bg-[#F8F0FF]">
                <div className="max-w-md">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Would you like to become a partner with SalonX?
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Cut the phone tag. Find your next appointment and book instantly anytime, anywhere.
                  </p>
                  <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                    ADD SALON
                  </button>
                </div>
                <img 
                  src={PR1}
                  alt="Partner illustration" 
                  className="absolute bottom-0 right-0 h-64"
                />
              </div>

              {/* Existing Partner Card */}
              <div className="partner-card bg-[#F3FFE9]">
                <div className="max-w-md">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    I am currently affiliated as a partner with SalonX.
                  </h2>
                  <p className="text-gray-600 mb-8">
                    Cut the phone tag. Find your next appointment and book instantly anytime, anywhere.
                  </p>
                  <button className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors">
                    GO TO DASHBOARD
                  </button>
                </div>
                <img 
                  src={PR2}
                  alt="Dashboard illustration" 
                  className="absolute bottom-0 right-0 h-64"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Map section */}
        <section className="py-8">
          <div className="header-content">
            <div className="grid grid-cols-2 gap-8">
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold uppercase mb-4">SOCIAL NETWORK</h3>
                  <h2 className="text-2xl font-semibold mb-6">Follow us on our network</h2>
                  <div className="flex gap-4">
                    {['facebook', 'twitter', 'instagram', 'github', 'youtube'].map((social) => (
                      <a 
                        key={social} 
                        href="#" 
                        className="w-10 h-10 bg-orange-100 rounded-full flex-center text-orange-600 hover:bg-orange-200"
                      >
                        {/* Social icons would go here */}
                      </a>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold uppercase mb-4">NEWSLETTER</h3>
                  <h2 className="text-2xl font-semibold mb-6">Be the first to know</h2>
                  <form className="space-y-4">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <button className="w-full bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors">
                      SUBSCRIBE
                    </button>
                  </form>
                </div>
              </div>

              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1645868686799!5m2!1sen!2sin"
                  className="map-iframe"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="salon-footer">
          <div className="footer-content">
            <div className="grid grid-cols-4 gap-8 pb-12">
              {/* Logo and Description */}
              <div className="col-span-1">
                <div className="flex items-center gap-2 mb-6">
                  <FaScissors className="h-8 w-8 text-orange-500" />
                  <span className="text-white text-2xl font-bold">SALON-X</span>
                </div>
                <p className="text-sm text-gray-400">
                  SalonX offers a luxurious and innovative salon experience, blending cutting-edge techniques with personalized service to bring out the best in every client
                </p>
              </div>

              {/* Links */}
              <div className="col-span-1">
                <h3 className="text-orange-500 font-semibold mb-6">LINK</h3>
                <ul className="space-y-3">
                  <li><Link to="/" className="hover:text-white transition-colors">Unisex Services</Link></li>
                  <li><Link to="/" className="hover:text-white transition-colors">Women Services</Link></li>
                  <li><Link to="/" className="hover:text-white transition-colors">Men Services</Link></li>
                  <li><Link to="/" className="hover:text-white transition-colors">Our history</Link></li>
                  <li><Link to="/" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
              </div>

              {/* About */}
              <div className="col-span-1">
                <h3 className="text-orange-500 font-semibold mb-6">ABOUT</h3>
                <ul className="space-y-3">
                  <li><Link to="/" className="hover:text-white transition-colors">FAQ</Link></li>
                  <li><Link to="/" className="hover:text-white transition-colors">Contact us</Link></li>
                  <li><Link to="/" className="hover:text-white transition-colors">Terms and Conditions</Link></li>
                  <li><Link to="/" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                  <li><Link to="/" className="hover:text-white transition-colors">Terms of Use</Link></li>
                </ul>
              </div>

              {/* Contact */}
              <div className="col-span-1">
                <h3 className="text-orange-500 font-semibold mb-6">CONTACT</h3>
                <ul className="space-y-3">
                  <li>contact@salonx.com</li>
                  <li>+33 888 666 433</li>
                  <li>Empire State Building, New York</li>
                  <li>9h00 - 17h00</li>
                </ul>
              </div>
            </div>

            {/* Copyright */}
            <div className="pt-8 border-t border-gray-700 text-center text-sm text-gray-400">
              © 2024 Salon X. All rights reserved.
            </div>
          </div>
        </footer>
      </main>
     
      {/* Shopping Cart Sidebar */}
      {showCart && (
        <div className="cart-sidebar">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold">Cart</h2>
            <button onClick={() => setShowCart(false)}>
              <LuX className="h-6 w-6" />
            </button>
          </div>

          {cart.length === 0 ? (
            <div className="text-center py-8">
              <div className="w-24 h-24 mx-auto mb-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
                  alt="Empty Cart"
                  className="w-full h-full"
                />
              </div>
              <p className="text-gray-500">Your service cart is currently empty</p>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-gray-500">{item.duration}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <span>${item.price.toFixed(2)}</span>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <LuX className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t pt-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span>Sub total</span>
                  <span>${calculateTotal().subtotal}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Tax (6%)</span>
                  <span>${calculateTotal().tax}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Discount</span>
                  <span>-${calculateTotal().discount}</span>
                </div>
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${calculateTotal().total}</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter Code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="w-full px-4 py-2 border rounded-lg"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2 text-orange-600 font-medium">
                    APPLY
                  </button>
                </div>
                <button className="w-full py-3 bg-orange-600 text-white rounded-lg hover:bg-orange-700">
                  CHECKOUT
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default SalonDetails;