import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCouch, faRug, faWind, faHandsBubbles } from '@fortawesome/free-solid-svg-icons';
import './Services.css';

const servicesData = [
  {
    id: 1,
    icon: faCouch,
    title: "Sofa Cleaning",
    desc: "Deep fabric restoration for all types of upholstery, removing stains and odors."
  },
  {
    id: 2,
    icon: faRug,
    title: "Carpet Cleaning",
    desc: "Industrial-grade steam cleaning for rugs and wall-to-wall carpets."
  },
  {
    id: 3,
    icon: faWind,
    title: "Mattress Sanitizing",
    desc: "Eliminating dust mites and allergens for a healthier night's sleep."
  },
  {
    id: 4,
    icon: faHandsBubbles,
    title: "Stain Protection",
    desc: "Applying premium fabric shields to prevent future spills from soaking in."
  }
];

const Services = () => {
  return (
    <section className="services" id="services" data-aos="fade up-right">
      <div className="services-container">
        <div className="services-header">
          <span className="section-subtitle">OUR EXPERTISE</span>
          <h2 className="section-title">Professional Cleaning Services</h2>
        </div>
        
        <div className="services-grid" data-aos="flip-left">
          {servicesData.map((service) => (
            <div key={service.id} className="service-card">
              <div className="icon-box">
                <FontAwesomeIcon icon={service.icon} />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;