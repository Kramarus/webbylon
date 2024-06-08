import React from 'react';
import Header from './Header/Header';
import Hero from './Hero/Hero';
import Gallery from './Gallery/Gallery';
import Services from './Services/Services';
import About from './About/About';
import Testimonials from './Testimonials/Testimonials';
import CallToAction from './CallToAction/CallToAction';
import Footer from './Footer/Footer';

export default function Landing() {
  return (
    <div>
        <Header />
        <Hero />
        <Gallery />
        <Services />
        <CallToAction />
        <About />
        <CallToAction />
        <Testimonials />
        <CallToAction />
        <Footer />
    </div>
  )
}
