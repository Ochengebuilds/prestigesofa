import React from 'react';
import './Gallery.css';

const Gallery = () => {
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070', title: 'Carpet Restoration' },
    { id: 2, url: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=2070', title: 'Sofa Deep Clean' },
    { id: 3, url: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=2070', title: 'Upholstery Care' },
    { id: 4, url: 'https://images.unsplash.com/photo-1615874959474-d609969a20ed?q=80&w=2070', title: 'Fabric Protection' },
  ];

  return (
    <section className="gallery" id="reviews">
      <div className="gallery-container">
        <div className="gallery-header">
          <span className="section-subtitle">OUR WORK</span>
          <h2 className="section-title">Recent Transformations</h2>
        </div>
        <div className="gallery-grid">
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