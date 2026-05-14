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
          Restore the elegance of your home with Nairobi’s leading experts in Professional cleaning services. We use eco-friendly technology to remove tough stains and allergens from your household.
          </p>
          <div className="hero-cta">
            <a 
  href="https://wa.me/254102805058?text=Hi%20Prestige!%20I'm%20interested%20in%20booking%20a%20professional%20cleaning%20service." 
  className="btn-gold-luxury"
  target="_blank" 
  rel="noopener noreferrer"
  style={{ textDecoration: 'none', display: 'inline-block' }}
>
  BOOK CLEANING
</a>
            <button className="btn-glass-luxury"><a href="#reviews" className='pp'>GALLERY</a></button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;