import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faXmark, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import './StickyContact.css';

const StickyContact = () => {
  const [isOpen, setIsOpen] = useState(true); // Default to open
  const phoneNumber = "0102805058";
  const tiktokUsername = "prestigesofaandcarpetcar";
  const whatsappMessage = encodeURIComponent("Hi Prestige! I'd like to inquire about your cleaning services.");

  return (
    <div className={`sticky-contact ${isOpen ? 'open' : 'closed'}`}>
      {/* Action Buttons - These will be hidden when closed */}
      <div className="contact-actions">
        <a 
          href={`https://www.tiktok.com/@${tiktokUsername}`} 
          className="contact-btn tiktok-btn"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faTiktok} />
        </a>

        <a href={`tel:${phoneNumber}`} className="contact-btn call-btn">
          <FontAwesomeIcon icon={faPhone} />
        </a>
        
        <a 
          href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`} 
          className="contact-btn whatsapp-btn"
          target="_blank" 
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>

      {/* Main Toggle Button */}
      <button 
        className="contact-btn toggle-btn" 
        onClick={() => setIsOpen(!isOpen)}
        title={isOpen ? "Minimize" : "Contact Us"}
      >
        <FontAwesomeIcon icon={isOpen ? faXmark : faCommentDots} />
      </button>
    </div>
  );
};

export default StickyContact;