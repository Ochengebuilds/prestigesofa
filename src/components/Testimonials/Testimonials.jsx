import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import './Testimonials.css';

const Testimonials = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah Wanjiku",
      location: "Kilimani",
      text: "Prestige completely restored my cream suede sofa. I thought the stains were permanent, but it looks brand new now!",
      rating: 5
    },
    {
      id: 2,
      name: "David Omari",
      location: "Karen",
      text: "Very professional team. They arrived on time and used eco-friendly products that didn't leave any chemical smell. Highly recommend.",
      rating: 5
    },
    {
      id: 3,
      name: "Anita Mwangi",
      location: "Runda",
      text: "The best carpet cleaning service in Nairobi. The deep extraction tech they use is clearly superior to the manual scrubbing others do.",
      rating: 5
    }
  ];

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-container">
        <div className="testimonials-header" data-aos="fade-up">
          <span className="section-subtitle">TESTIMONIALS</span>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <div className="testimonials-grid">
          {reviews.map((review, index) => (
            <div 
              className="testimonial-card" 
              key={review.id}
              data-aos="zoom-in-up"
              data-aos-delay={index * 150}
            >
              <div className="quote-icon">
                <FontAwesomeIcon icon={faQuoteRight} />
              </div>
              <div className="stars">
                {[...Array(review.rating)].map((_, i) => (
                  <FontAwesomeIcon key={i} icon={faStar} />
                ))}
              </div>
              <p className="testimonial-text">"{review.text}"</p>
              <div className="testimonial-author">
                <h4>{review.name}</h4>
                <span>{review.location}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;