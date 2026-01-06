import React from 'react';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import FeatureSection from './components/FeatureSection';
import PaymentGrid from './components/PaymentGrid';
import FeatureSection2 from './components/FeatureSection2';
import NewFeaturesSection from './components/NewFeaturesSection';
import CoreFeatures from './components/CoreFeatures';
import JoinRazorpay from './components/JoinRazorpay';
import Testimonials from './components/Testimonials';
import CallToActionSection from './components/CallToActionSection';
import Footer from './components/Footer';
import CtaBanner from './components/CtaBanner';

const App = () => {
  return (
    <div className='flex flex-col overflow-hidden'>
      <CtaBanner />
      <NavBar />
      <Hero />
      <FeatureSection />
      <PaymentGrid />
      <FeatureSection2 />
      <NewFeaturesSection />
      <CoreFeatures />
      <JoinRazorpay />
      <Testimonials />
      <CallToActionSection />
      <Footer />
    </div>
  );
};

export default App;
