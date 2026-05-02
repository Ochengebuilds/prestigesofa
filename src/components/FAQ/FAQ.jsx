import React, { useState } from 'react';
import './FAQ.css';

const FAQ = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleFaq = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  const faqData = [
    {
      id: 1,
      question: "How long does a typical sofa cleaning take?",
      answer: "A standard 5-seater sofa usually takes 2–3 hours. However, drying time can vary between 4–6 hours depending on the fabric and ventilation."
    },
    {
      id: 2,
      question: "Are the cleaning chemicals safe for pets and children?",
      answer: "Absolutely. We use premium, eco-friendly, and non-toxic solutions that are 100% safe for your family and pets."
    },
    {
      id: 3,
      question: "Do you offer services outside of Nairobi?",
      answer: "While we primarily serve Nairobi (Kilimani, Karen, Runda, etc.), we do handle special requests for surrounding areas. Please contact us for a custom quote."
    },
    {
      id: 4,
      question: "How often should I professionally clean my sofas?",
      answer: "For high-traffic homes, we recommend a professional deep clean every 3–4 months to maintain hygiene and fabric longevity."
    }
  ];

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="subtitle">HAVE QUESTIONS?</p>
          <h2 className="section-title">Frequently Asked Questions</h2>
        </div>

        <div className="faq-container">
          {faqData.map((item) => (
            <div 
              key={item.id} 
              className={`faq-item ${activeId === item.id ? 'active' : ''}`}
              onClick={() => toggleFaq(item.id)}
            >
              <div className="faq-question">
                <h3>{item.question}</h3>
                <span className="faq-icon">{activeId === item.id ? '−' : '+'}</span>
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;