import React, { useState, useEffect } from 'react';
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

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'main' | 'privacy' | 'terms'>('main');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'privacy') {
        setCurrentPage('privacy');
      } else if (hash === 'terms') {
        setCurrentPage('terms');
      } else {
        setCurrentPage('main');
      }
      // Scroll to top on page change
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  if (isLoading) {
    return <PageLoader />;
  }

  return (
    <ErrorBoundary>
      <SkipToContent />
      <div className="bg-black min-h-screen">
        {currentPage === 'main' && (
          <>
            <Header />
            <main id="main-content">
              <section id="home">
                <HeroSection />
                <PartnersSection />
                <StatsSection />
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
        )}
        {currentPage === 'privacy' && (
          <main id="main-content">
            <PrivacyPolicy />
          </main>
        )}
        {currentPage === 'terms' && (
          <main id="main-content">
            <TermsOfService />
          </main>
        )}
      </div>
    </ErrorBoundary>
  );
};

export default App;
