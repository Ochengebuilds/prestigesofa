import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// Changed faShieldCheck to faShield
import { faShield, faLeaf, faClock, faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: faShield, // Updated here
      title: "Trusted Professionals",
      desc: "Our team is vetted and trained to handle high-end fabrics with care."
    },
    {
      icon: faLeaf,
      title: "Eco-Friendly",
      desc: "Non-toxic, pet-safe cleaning solutions that protect your family."
    },
    {
      icon: faClock,
      title: "Fast Drying",
      desc: "Advanced extraction tech ensures your furniture is ready to use in hours."
    },
    {
      icon: faHandHoldingDollar,
      title: "Fair Pricing",
      desc: "No hidden costs. Get premium service at competitive Nairobi rates."
    }
  ];

  return (
    <section className="features">
      <div className="features-container">
        <div className="features-grid">
          {features.map((item, index) => (
            <div className="feature-item" key={index}>
              <div className="feature-icon">
                <FontAwesomeIcon icon={item.icon} />
              </div>
              <div className="feature-text">
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;