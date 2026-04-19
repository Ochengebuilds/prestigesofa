import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the AOS styles
// ... your other imports
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services'; // New import
import './index.css';
import Features from './components/Features/Features';
import Gallery from './components/Gallery/Gallery';
import Booking from './components/Booking/Booking';
import Footer from './components/Footer/Footer';
import Stickycontact from "./components/Stickycontact/Stickycontact"
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';

import Socials from './components/Socials/Socials';
import HowItWorks from './components/HowItWorks/HowItWorks';
import CustomCursor from './components/Customcursor/Customcursor';


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation speed (1 second)
      once: true,     // Whether animation should happen only once - while scrolling down
      easing: 'ease-out-back', // Great for 3D "snap" effects
    });
  }, []);
  return (
    <div className="App">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Services /> {/* Rendered here */}
      <About />
      <Features />
      <HowItWorks />
      <Gallery />
      <Testimonials />
      <Booking />
      <Socials />
      <Footer />
      <Stickycontact />
    </div>
  );
};

export default App;