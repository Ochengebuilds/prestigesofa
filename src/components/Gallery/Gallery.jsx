import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    { id: 1, url: 'https://images.pexels.com/photos/6196566/pexels-photo-6196566.jpeg', title: 'Deep House Cleaning' },
    { id: 2, url: 'https://images.pexels.com/photos/10758469/pexels-photo-10758469.jpeg', title: 'Sofa Cleaning' },
    { id: 3, url: 'https://images.pexels.com/photos/38325/vacuum-cleaner-carpet-cleaner-housework-housekeeping-38325.jpeg', title: 'Carpet Cleaning' },
    { id: 4, url: 'https://images.pexels.com/photos/5691496/pexels-photo-5691496.jpeg', title: 'Post Construction Cleaning' },
  ];

  return (
    <section className="gallery" id="reviews">
      <div className="gallery-container">
        <div className="gallery-header">
          <span className="section-subtitle">OUR WORK</span>
          <h2 className="section-title">Gallery</h2>
        </div>
        <div className="gallery-grid" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1500">
          {images.map((img) => (
            <div className="gallery-item" key={img.id}>
              <img src={img.url} alt={img.title} />
              <div className="gallery-overlay">
                <span>{img.title}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;