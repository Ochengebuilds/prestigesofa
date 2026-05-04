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
          <p className="hero-tagline">PROFESSIONAL CLEANING SERVICES IN NAIROBI</p>
          <h1 className="hero-title">
          Professional Upholstery <br />
            <span className="italic-gold">& Interior Restoration.</span>
          </h1>
          <p className="hero-description">
          Restore the elegance of your home with Nairobi’s leading experts in deep sofa cleaning services. We use eco-friendly technology to remove tough stains and allergens from your fine furniture.
          </p>
          <div className="hero-cta">
            <button className="btn-gold-luxury">BOOK CLEANING</button>
            <button className="btn-glass-luxury"><a href="#reviews" className='pp'>GALLERY</a></button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;