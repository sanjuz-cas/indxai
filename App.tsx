import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import SkipToContent from './components/SkipToContent';
import Header from './components/AboutSection'; // This is now the Header
import HeroSection from './components/HeroSection';
import PartnersSection from './components/VisionSection'; // This is now CoreOfferings
import ProductPage from './components/ProductPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';

const MainPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Header />
      <main>
        <HeroSection />
        <div className="relative">
          <PartnersSection />
          <ProductPage />
          <AboutPage />
          <ContactPage />
        </div>
      </main>
      <Footer />
    </div>
  );
};

const App: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  return (
    <ErrorBoundary>
      <SkipToContent />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>
    </ErrorBoundary>
  );
};

export default App;
