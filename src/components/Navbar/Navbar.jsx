import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar" data-aos="fade-down">
      <div className="nav-container">
        {/* Logo Section */}
        <div className="nav-logo">
          <span className="logo-prestige">PRESTIGE</span>
          <span className="logo-sub">SOFA & CARPET CARE</span>
        </div>

        {/* Desktop Menu */}
        <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item"><a href="#hero">Home</a></li>
          <li className="nav-item"><a href="#services">Services</a></li>
          <li className="nav-item"><a href="#how">How It Works</a></li>
          <li className="nav-item"><a href="#faq">FAQ</a></li>
          <li className="nav-item"><a href="#reviews"></a></li>
          
        </ul>

        {/* Right Side Actions */}
        <div className="nav-actions">
          <a href="tel:+254102805058" className="nav-phone">
            <FontAwesomeIcon icon={faPhone} />
            <span>Call Us</span>
          </a>
          <a 
  href="https://wa.me/254102805058?text=Hi%20Prestige!%20I'd%20like%20to%20Book%20a%20cleaning%20session." 
  className="nav-btn desktop-only"
  target="_blank" 
  rel="noopener noreferrer"
>
  BOOK NOW
</a>
          
          {/* Hamburger Icon */}
          <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;