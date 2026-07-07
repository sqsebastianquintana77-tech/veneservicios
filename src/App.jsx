import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Catalog from './components/Catalog';
import Services from './components/Services';
import Carousel from './components/Carousel';
import Brands from './components/Brands';
import Features from './components/Features';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Catalog />
      <Services />
      <Carousel />
      <Brands />
      <Features />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
