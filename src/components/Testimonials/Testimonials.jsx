import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import './Testimonials.css';

const testimonialData = [
  {
    id: 1,
    name: "Sarah Wanjiku",
    location: "KILIMANI",
    text: "Prestige completely restored my cream suede sofa. I thought the stains were permanent, but it looks brand new now!",
    stars: 5
  },
  {
    id: 2,
    name: "David Omari",
    location: "KAREN",
    text: "Very professional team. They arrived on time and used eco-friendly products that didn't leave any chemical smell. Highly recommend.",
    stars: 5
  },
  {
    id: 3,
    name: "Anita Mwangi",
    location: "RUNDA",
    text: "The best carpet cleaning service in Nairobi. The deep extraction tech they use is clearly superior to the manual scrubbing others do.",
    stars: 5
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section" id="reviews">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <p className="subtitle">TESTIMONIALS</p>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1} // Default for mobile
          loop={true}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            // When window width is >= 768px (Desktop)
            768: {
              slidesPerView: 3,
            },
          }}
          className="testimonial-slider"
        >
          {testimonialData.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="testimonial-card-luxury">
                <div className="quote-icon">“</div>
                <div className="stars">
                  {[...Array(item.stars)].map((_, i) => (
                    <span key={i}>★</span>
                  ))}
                </div>
                <p className="testimonial-text">"{item.text}"</p>
                <div className="client-info">
                  <h4 className="client-name">{item.name}</h4>
                  <p className="client-location">{item.location}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;