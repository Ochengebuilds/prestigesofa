import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import './Booking.css';

const Booking = () => {
  const [formData, setFormData] = useState({
    name: '',
    service: 'Sofa Cleaning',
    location: ''
  });

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const phoneNumber = "254XXXXXXXXX"; // Replace with your business number
    const message = `Hi Prestige! My name is ${formData.name}. I'm in ${formData.location} and I'd like to book ${formData.service}.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="booking" id="how-it-works">
      <div className="booking-container">
        <div className="booking-form-card">
          <h2>Book Your Cleaning</h2>
          <p>Tell us what you need, and we'll handle the rest.</p>
          
          <form onSubmit={handleWhatsApp}>
            <div className="input-group">
              <label>Full Name</label>
              <input 
                type="text" 
                placeholder="Enter your name" 
                required 
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            
            <div className="input-group">
              <label>Service Needed</label>
              <select onChange={(e) => setFormData({...formData, service: e.target.value})}>
                <option>Sofa Cleaning</option>
                <option>Carpet Cleaning</option>
                <option>Mattress Sanitizing</option>
                <option>Full Home Deep Clean</option>
              </select>
            </div>

            <div className="input-group">
              <label>Location (Area in Nairobi)</label>
              <input 
                type="text" 
                placeholder="e.g. Karen, Rongai, Kilimani" 
                required 
                onChange={(e) => setFormData({...formData, location: e.target.value})}
              />
            </div>

            <button type="submit" className="booking-btn">
              <FontAwesomeIcon icon={faWhatsapp} /> SEND BOOKING ON WHATSAPP
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Booking;