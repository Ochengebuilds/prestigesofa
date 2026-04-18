import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Services from './components/Services/Services'; // New import
import './index.css';

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Services /> {/* Rendered here */}
    </div>
  );
};

export default App;