
import React from 'react';
import Hero from './components/Hero';
import AboutMe from './components/AboutMe';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Feedbacks from './components/Feedbacks';
import FAQ from './components/FAQ';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <Hero />
        <Services />
        <AboutMe />
        <HowItWorks />
        <Feedbacks />
        <FAQ />
        <TrustSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
