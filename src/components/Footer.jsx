import { MapPin, Linkedin, Mail, Phone } from 'lucide-react';

const Footer = ({ isDarkMode, navigateToPage }) => {
  return (
    <footer className={`relative py-12 ${isDarkMode ? 'border-slate-800' : 'border-gray-300'} border-t z-10`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center cursor-pointer mb-4" onClick={() => navigateToPage('home')}>
              <div className="relative w-10 h-10 pb-2">
                <img 
                  src="/images/logo.png" 
                  alt="GO-EXALTSYSTEM Logo" 
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div>
                <span className="text-xl font-bold">GoExalt System</span>
              </div>
            </div>
            <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm`}>
              Empowering businesses with innovative technology solutions, from MERN stack development to enterprise platforms.
            </p>
          </div>

          {/* Sitemap */}
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

          {/* Head Office - Maryland */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Head <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Office</span>
            </h3>
            <div className="space-y-3">
              <div className={`flex items-start gap-3 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm`}>
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-cyan-400" />
                <div>
                  <p className="font-semibold mb-1">Maryland, USA</p>
                  <p>2624 Mckenzie Rd Ellicott City, Maryland, 21042</p>
                </div>
              </div>
              <div className={`flex items-center gap-3 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm`}>
                <Mail className="w-4 h-4 flex-shrink-0 text-cyan-400" />
                <a href="mailto:info@exaltsystem.com" className="hover:text-cyan-400 transition-colors">
                  info@exaltsystem.com
                </a>
              </div>
              <div className={`flex items-center gap-3 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm`}>
                <Phone className="w-4 h-4 flex-shrink-0 text-cyan-400" />
                <a href="tel:+16674520819" className="hover:text-cyan-400 transition-colors whitespace-nowrap">
                  +1 (667) 452-0819
                </a>
              </div>
            </div>
          </div>

          {/* Branch Office - Kashmir */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Branch <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Office</span>
            </h3>
            <div className="space-y-3">
              <div className={`flex items-start gap-3 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm`}>
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-cyan-400" />
                <div>
                  <p className="font-semibold mb-1">Kashmir, India</p>
                  <p>Office No. 136 & 137, First Floor,  Arish Complex, Model Town-D, 193201</p>
                </div>
              </div>
              <div className={`flex items-center gap-3 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm`}>
                <Mail className="w-4 h-4 flex-shrink-0 text-cyan-400" />
                <a href="mailto:sales@exaltsystem.com" className="hover:text-cyan-400 transition-colors">
                  sales@exaltsystem.com
                </a>
              </div>
              <div className={`flex items-center gap-3 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} text-sm`}>
                <Phone className="w-4 h-4 flex-shrink-0 text-cyan-400" />
                <a href="tel:+917006334491" className="hover:text-cyan-400 transition-colors whitespace-nowrap">
                  +91-7006334491
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className={`pt-8 ${isDarkMode ? 'border-slate-800' : 'border-gray-300'} border-t`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className={`${isDarkMode ? 'text-slate-500' : 'text-gray-500'} text-sm`}>
              © 2025 GoExalt System. All Rights Reserved.
            </div>
            <a 
              href="https://www.linkedin.com/company/exaltsystem" 
              target="_blank" 
              rel="noopener noreferrer" 
              className={`flex items-center gap-2 ${isDarkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}
            >
              <Linkedin className="w-5 h-5" />
              <span className="text-sm">Follow us on LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;