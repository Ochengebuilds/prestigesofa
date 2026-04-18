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
          <li className="nav-item"><a href="#how-it-works">How It Works</a></li>
          <li className="nav-item"><a href="#reviews"></a></li>
          <li className="nav-mobile-cta">
            <button className="nav-btn">BOOK NOW</button>
          </li>
        </ul>

        {/* Right Side Actions */}
        <div className="nav-actions">
          <a href="tel:+254..." className="nav-phone">
            <FontAwesomeIcon icon={faPhone} />
            <span>Call Us</span>
          </a>
          <button className="nav-btn desktop-only">BOOK NOW</button>
          
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