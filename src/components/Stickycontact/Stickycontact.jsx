import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faTiktok } from '@fortawesome/free-brands-svg-icons'; // Added faTiktok
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './StickyContact.css';

const StickyContact = () => {
  const phoneNumber = "0102805058"; 
  const tiktokUsername = "prestigesofaandcarpetcar"; // Replace with your actual TikTok handle
  const whatsappMessage = encodeURIComponent("Hi Prestige! I'd like to inquire about your cleaning services.");

  return (
    <div className="sticky-contact">
      {/* TikTok Button */}
      <a 
        href={`https://www.tiktok.com/@${tiktokUsername}`} 
        className="contact-btn tiktok-btn"
        target="_blank" 
        rel="noopener noreferrer"
        title="Follow us on TikTok"
      >
        <FontAwesomeIcon icon={faTiktok} />
      </a>

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