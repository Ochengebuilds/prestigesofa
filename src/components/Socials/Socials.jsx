import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Socials.css';

const Socials = () => {
  const socialLinks = [
    { id: 1, icon: faFacebookF, link: "https://web.facebook.com/profile.php?id=61587932279380", color: "#1877F2" },
    { id: 2, icon: faInstagram, link: "https://www.instagram.com/prestigesofaandcarpetcare/", color: "#E4405F" },
    { id: 3, icon: faYoutube, link: "https://youtube.com/@prestigesofaandcarpetcare?si=dIgWxok2ijeRIla0", color: "#FF0000" },
    { id: 4, icon: faEnvelope, link: "mailto:prestigesofaandcarpetcare@gmail.com", color: "var(--primary-gold)" },
  ];

  return (
    <div className="socials-wrapper" data-aos="fade-right">
      <span className="socials-label">FOLLOW US</span>
      <div className="socials-line"></div>
      <div className="socials-icons">
        {socialLinks.map((social) => (
          <a 
            key={social.id} 
            href={social.link} 
            className="social-icon-item"
            style={{ "--hover-color": social.color }}
          >
            <FontAwesomeIcon icon={social.icon} />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Socials;