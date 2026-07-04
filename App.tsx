import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import SkipToContent from './components/SkipToContent';
import { PageLoader } from './components/Loading';
import Header from './components/AboutSection'; // This is now the Header
import HeroSection from './components/HeroSection';
import PartnersSection from './components/VisionSection'; // This is now the Partners Section
import StatsSection from './components/FeaturesSection'; // This is now the Stats Section
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import ProductPage from './components/ProductPage';

const MainPage: React.FC = () => {
  return (
    <>
      <Header />
      <main id="main-content">
        <section id="home">
          <HeroSection />
          <PartnersSection />
          <StatsSection />
        </section>
        <section id="products">
          <ProductPage />
        </section>
        <section id="about">
          <AboutPage />
        </section>
        <section id="contact">
          <ContactPage />
        </section>
      </main>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <ErrorBoundary>
      <SkipToContent />
      <div className="bg-black min-h-screen">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/terms" element={<TermsOfService />} />
        </Routes>
      </div>
    </ErrorBoundary>
  );
};

export default App;
