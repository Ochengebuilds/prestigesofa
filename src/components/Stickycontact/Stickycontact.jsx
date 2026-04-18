import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './StickyContact.css';

const StickyContact = () => {
  const phoneNumber = "254XXXXXXXXX"; // Your business number
  const whatsappMessage = encodeURIComponent("Hi Prestige! I'd like to inquire about your cleaning services.");

  return (
    <div className="sticky-contact">
      <a 
        href={`tel:${phoneNumber}`} 
        className="contact-btn call-btn"
        title="Call Us"
      >
        <FontAwesomeIcon icon={faPhone} />
      </a>
      
      <a 
        href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`} 
        className="contact-btn whatsapp-btn"
        target="_blank" 
        rel="noopener noreferrer"
        title="WhatsApp Us"
      >
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
};

export default StickyContact;