import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" data-aos="fade-up"
    data-aos-anchor-placement="bottom-bottom">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="footer-logo">PRESTIGE</h2>
          <p>Nairobi's premier choice for luxury sofa and carpet restoration.</p>
          <div className="footer-socials">
            <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
            <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
            <a href="#"><FontAwesomeIcon icon={faWhatsapp} /></a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#services">Services</a></li>
            <li><a href="#how-it-works">Book Now</a></li>
            <li><a href="#reviews">Our Work</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Contact Us</h3>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> Ongata Rongai, Nairobi</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> prestigesofaandcarpetcare@gmail.com</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} PRESTIGE SOFA CARE. ALL RIGHTS RESERVED.</p>
        <p className="credit">BUILT BY OCHENGE BUILDS</p>
      </div>
    </footer>
  );
};

export default Footer;