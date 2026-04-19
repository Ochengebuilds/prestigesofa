import React from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      title: "Book via WhatsApp",
      desc: "Send us a message with your location, service needed, and preferred time. We confirm within minutes."
    },
    {
      number: "2",
      title: "We Come to You",
      desc: "Our team arrives on time, fully equipped with professional machines and eco-friendly solutions."
    },
    {
      number: "3",
      title: "Sit Back & Enjoy",
      desc: "Relax while we work. Within hours, your home is transformed—fresh, clean, and beautifully restored."
    }
  ];

  return (
    <section className="how-it-works" id="how">
      <div className="how-container">
        <div className="how-header" data-aos="fade-up">
          <span className="section-subtitle">SIMPLE PROCESS</span>
          <h2 className="section-title">How It <span className="gold-text">Works</span></h2>
        </div>

        <div className="steps-wrapper">
          <div className="connecting-line"></div>
          <div className="steps-grid">
            {steps.map((step, index) => (
              <div 
                className="step-item" 
                key={index} 
                data-aos="fade-up" 
                data-aos-delay={index * 200}
              >
                <div className="step-number">{step.number}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;