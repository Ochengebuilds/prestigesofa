import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services'; // New import
import './index.css';
import Features from './components/Features/Features';
import Gallery from './components/Gallery/Gallery';
import Booking from './components/Booking/Booking';
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services /> {/* Rendered here */}
      <Features />
      <Gallery />
      <Booking />
      <Footer />
    </div>
  );
};

export default App;