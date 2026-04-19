import React from 'react';
import './Hero.css';
import images from '../../assets/assets';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="hero-container">
        
        <div className="hero-visual" data-aos="zoom-out" data-aos-duration="1500">
          <img 
            src={images.heroBgg} 
            alt="Luxury Interior" 
            className="hero-img"
          />
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content" data-aos="fade-up" data-aos-delay="400">
          <div className="accent-line"></div>
          <p className="hero-tagline">ESTABLISHED IN NAIROBI</p>
          <h1 className="hero-title">
            The Art of <br />
            <span className="italic-gold">Pure Living.</span>
          </h1>
          <p className="hero-description">
            Experience a new standard of hygiene. We provide bespoke restoration 
            for fine upholstery and carpets, tailored for Nairobi's most elegant homes.
          </p>
          <div className="hero-cta">
            <button className="btn-gold-luxury">BOOK AN APPOINTMENT</button>
            <button className="btn-glass-luxury"><a href="#reviews" className='pp'>VIEW PORTFOLIO</a></button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;