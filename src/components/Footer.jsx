import { MapPin, Linkedin } from 'lucide-react';

const Footer = ({ isDarkMode, navigateToPage }) => {
  return (
    <footer className={`relative py-12 ${isDarkMode ? 'border-slate-800' : 'border-gray-300'} border-t z-10`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-3 mb-4 cursor-pointer" onClick={() => navigateToPage('home')}>
              <div className="relative w-10 h-10">
                <img 
                  src="/images/logo.png" 
                  alt="GO-EXALTSYSTEM Logo" 
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div>
                <span className="text-xl font-bold">GO-</span>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">EXALTSYSTEM</span>
              </div>
            </div>
            <p className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>
              Empowering businesses with innovative technology solutions, from MERN stack development to enterprise platforms.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Sitemap</span>
            </h3>
            <div className="space-y-2">
              <button onClick={() => navigateToPage('home')} className={`block w-full text-left ${isDarkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}>Home</button>
              <a href="#services" className={`block ${isDarkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}>Services</a>
              <a href="#technologies" className={`block ${isDarkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}>Technologies</a>
              <a href="#contact" className={`block ${isDarkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}>Contact</a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">
              Get in <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
            </h3>
            <div className="space-y-3">
              <div className={`flex items-start gap-3 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
                <span>123 Tech Avenue, Innovation District, San Francisco, CA 94103</span>
              </div>
              <a href="#" className={`flex items-center gap-3 ${isDarkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}>
                <Linkedin className="w-5 h-5" />
                <span>Follow us on LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        <div className={`pt-8 ${isDarkMode ? 'border-slate-800' : 'border-gray-300'} border-t text-center ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>
          © 2025 GO-EXALTSYSTEM. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;