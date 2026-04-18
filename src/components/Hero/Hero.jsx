import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        {/* Left Side: Text Content */}
        <div className="hero-content" data-aos="fade-right">
          <p className="hero-tagline">NAIROBI'S PREMIUM CLEANING SERVICE</p>
          <h1 className="hero-title">
            Deep Clean. <br />
            <span className="italic-gold">Fresh Feel.</span>
          </h1>
          <p className="hero-description">
            We restore your sofas, carpets, and living spaces to their finest—right at your doorstep. 
            Professional, eco-friendly, and trusted across Nairobi.
          </p>
          <div className="hero-cta">
            <button className="btn-gold">BOOK NOW</button>
            <button className="btn-outline">OUR SERVICES</button>
          </div>
        </div>

        {/* Right Side: Visuals */}
        <div className="hero-visual" data-aos="fade-left">
          <img 
            src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=2000" 
            alt="Luxury Sofa Cleaning" 
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;