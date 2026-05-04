import React from 'react';
import './App.css';

// Components
import Navbar from './Components/Navbar/Navbar'; 
import Hero from './Components/Hero/Hero';
import Destinations from './Components/Destinations/Destinations';
import DestinationCard from './Components/Destinations/DestinationCard';
import Features from './Components/Features/Features';
import Testimonials from './Components/Testimonials/Testimonials';
import Newsletter from './Components/Newsletter/Newsletter';
import Footer from './Components/Footer/Footer';

 function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Destinations />
      <DestinationCard />
      <Features />
      <Testimonials />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
