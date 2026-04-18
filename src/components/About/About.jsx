import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [sofaCount, setSofaCount] = useState(0);
  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    // Simple counter logic
    const duration = 2000; // 2 seconds
    const frameRate = 1000 / 60;
    const totalFrames = Math.round(duration / frameRate);
    
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      setSofaCount(Math.round(1200 * progress));
      setClientCount(Math.round(500 * progress));

      if (frame === totalFrames) clearInterval(counter);
    }, frameRate);

    return () => clearInterval(counter);
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-image" data-aos="fade-right">
          <div className="image-stack">
            {/* New reliable image source */}
            <img 
              src="https://images.unsplash.com/photo-1550963295-019d8a8a61c5?q=80&w=2000" 
              alt="Deep Cleaning Process" 
              className="main-img"
            />
            <div className="experience-badge">
              <span className="years">5+</span>
              <span className="text">Years of Excellence</span>
            </div>
          </div>
        </div>

        <div className="about-content" data-aos="fade-left">
          <span className="section-subtitle">THE PRESTIGE STORY</span>
          <h2 className="section-title">Nairobi's Trusted Care For Fine Upholstery</h2>
          <p className="about-description">
            Founded with a vision to redefine home hygiene in Nairobi, Prestige Sofa and Carpet Care 
            combines industrial-grade technology with a personal touch.
          </p>
          
          <div className="about-stats">
            <div className="stat-item">
              <h4>{sofaCount}+</h4>
              <p>Sofas Restored</p>
            </div>
            <div className="stat-item">
              <h4>{clientCount}+</h4>
              <p>Happy Clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;