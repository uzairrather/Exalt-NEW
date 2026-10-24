import { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
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
  const [fadeOut, setFadeOut] = useState(false);
  const [scrollToContact, setScrollToContact] = useState(false);
  const lenisRef = useRef(null);

  // Smooth scrolling (Lenis)
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    lenisRef.current = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  const scrollToTopInstant = () => {
    lenisRef.current?.scrollTo(0, { immediate: true });
  };

  const scrollToContactSection = () => {
    const el = document.getElementById('contact');
    if (el) lenisRef.current?.scrollTo(el, { offset: 0 });
  };

  // Handle initial hash and hash changes (browser back/forward)
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash) {
        if (hash === 'contact') {
          const isOnHomePage = currentPage === 'home';
          if (!isOnHomePage) {
            setScrollToContact(true);
            setFadeOut(true);
            setTimeout(() => {
              setCurrentPage('home');
              setFadeOut(false);
            }, 400);
          } else {
            setTimeout(() => {
              scrollToContactSection();
            }, 200);
          }
        } else {
          if (hash !== currentPage) {
            setFadeOut(true);
            setTimeout(() => {
              setCurrentPage(hash);
              scrollToTopInstant();
              setFadeOut(false);
            }, 400);
          }
        }
      } else {
        if (currentPage !== 'home') {
          setFadeOut(true);
          setTimeout(() => {
            setCurrentPage('home');
            scrollToTopInstant();
            setFadeOut(false);
          }, 400);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [currentPage]);

  // Handle scroll to contact after page change
  useEffect(() => {
    if (scrollToContact && currentPage === 'home' && !fadeOut) {
      setTimeout(() => {
        scrollToContactSection();
        setScrollToContact(false);
      }, 200);
    }
  }, [currentPage, scrollToContact, fadeOut]);

  const navigateToPage = (page) => {
    window.location.hash = page;
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'} relative overflow-hidden`}>
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

        .page-content {
          animation: fadeIn 400ms ease-out;
        }
        .page-content.fade-out {
          animation: fadeOut 300ms ease-in;
          opacity: 0;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateY(0);
          }
          to {
            opacity: 0;
            transform: translateY(-10px);
          }
        }

        html.lenis, html.lenis body {
          height: auto;
        }
        .lenis.lenis-smooth {
          scroll-behavior: auto !important;
        }
        .lenis.lenis-smooth [data-lenis-prevent] {
          overscroll-behavior: contain;
        }
        .lenis.lenis-stopped {
          overflow: hidden;
        }
      `}</style>

      <CanvasBG isDarkMode={isDarkMode} />

      <NavBar
        isDarkMode={isDarkMode}
        setIsDarkMode={setIsDarkMode}
        navigateToPage={navigateToPage}
      />

      <div className={`page-content ${fadeOut ? 'fade-out' : ''}`}>
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
      </div>

      <Footer isDarkMode={isDarkMode} navigateToPage={navigateToPage} />
    </div>
  );
};

export default App;