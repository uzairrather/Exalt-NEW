import { useState } from 'react';
import CanvasBG from './components/CanvasBG';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import TechnologiesSection from './components/TechnologiesSection';
import Testimonials from './components/Testimonials';
import Marketing from './components/Marketing';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MERNPage from './pages/MERNPage';
import OdooPage from './pages/OdooPage';
import SalesforcePage from './pages/SalesforcePage';
import DataAnalyticsPage from './pages/DataAnalyticsPage';
import USStaffingPage from './pages/USStaffingPage';
import AIPage from './pages/AIPage';
import AboutPage from './pages/AboutPage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  const navigateToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-gray-900'} relative overflow-hidden`}>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        .hover-lift {
          transition: all 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
      `}</style>
      
      <CanvasBG isDarkMode={isDarkMode} />
      
      <NavBar 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
        navigateToPage={navigateToPage}
      />

      {currentPage === 'mern' ? (
        <MERNPage isDarkMode={isDarkMode} navigateToPage={navigateToPage} />
      ) : currentPage === 'odoo' ? (
        <OdooPage isDarkMode={isDarkMode} navigateToPage={navigateToPage} />
      ) : currentPage === 'salesforce' ? (
        <SalesforcePage isDarkMode={isDarkMode} navigateToPage={navigateToPage} />
      ) : currentPage === 'analytics' ? (
        <DataAnalyticsPage isDarkMode={isDarkMode} navigateToPage={navigateToPage} />
      ) : currentPage === 'staffing' ? (
        <USStaffingPage isDarkMode={isDarkMode} navigateToPage={navigateToPage} />
      ) : currentPage === 'ai' ? (
        <AIPage isDarkMode={isDarkMode} navigateToPage={navigateToPage} />
      ) : currentPage === 'about' ? (
        <AboutPage isDarkMode={isDarkMode} navigateToPage={navigateToPage} />
      ) : currentPage === 'digital-marketing' ? (
        <DigitalMarketingPage isDarkMode={isDarkMode} navigateToPage={navigateToPage} />
      ) : (
        <>
          <Hero isDarkMode={isDarkMode} />
          <ServicesSection isDarkMode={isDarkMode} navigateToPage={navigateToPage} />
          <TechnologiesSection isDarkMode={isDarkMode} />
          <Testimonials isDarkMode={isDarkMode} />
          <Marketing isDarkMode={isDarkMode} navigateToPage={navigateToPage} />
          <Partners isDarkMode={isDarkMode} />
          <Contact />
        </>
      )}

      <Footer isDarkMode={isDarkMode} navigateToPage={navigateToPage} />
    </div>
  );
};

export default App;