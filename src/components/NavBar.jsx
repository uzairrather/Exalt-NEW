import { useState } from 'react';
import { Menu, X, Sun, Moon, Code, Database, Users, BarChart3, Briefcase, Brain } from 'lucide-react';

const NavBar = ({ isDarkMode, setIsDarkMode, navigateToPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const scrollbarStyles = {
    scrollbarWidth: 'thin',
    scrollbarColor: isDarkMode ? '#22d3ee #1e293b' : '#06b6d4 #f1f5f9'
  };

  return (
    <>
      <style>{`
        .services-dropdown-scroll::-webkit-scrollbar {
          width: 6px;
        }
        .services-dropdown-scroll::-webkit-scrollbar-track {
          background: transparent;
        }
        .services-dropdown-scroll::-webkit-scrollbar-thumb {
          background: ${isDarkMode ? '#22d3ee' : '#06b6d4'};
          border-radius: 3px;
        }
        .services-dropdown-scroll::-webkit-scrollbar-thumb:hover {
          background: ${isDarkMode ? '#06b6d4' : '#0891b2'};
        }
      `}</style>
      <nav className={`fixed top-0 left-0 right-0 w-full z-50 ${isDarkMode ? 'bg-slate-900/95 border-slate-700' : 'bg-white/95 border-gray-200'} backdrop-blur-lg border-b shadow-lg`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center  group cursor-pointer" onClick={() => navigateToPage('home')}>
            <div className="relative w-12 h-12 pb-2">
              <img 
                src="/images/logo.png" 
                alt="GO-EXALTSYSTEM Logo" 
                className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div>
              <span className="text-2xl font-bold">GoExalt </span>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">System</span>
            </div>
          </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => navigateToPage('home')} className={`${isDarkMode ? 'text-slate-300  hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}>Home</button>
              <button onClick={() => navigateToPage('about')} className={`${isDarkMode ? 'text-slate-300 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}>About</button>
              
              <div 
                className="relative group"
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
              >
                <button className={`${isDarkMode ? 'text-slate-300 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors flex items-center gap-1`}>
                  Services
                  <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                <div className={`absolute top-full left-0 mt-2 w-64 ${isDarkMode ? 'bg-slate-800/95 border-slate-700' : 'bg-white/95 border-gray-200'} backdrop-blur-lg rounded-xl border shadow-2xl overflow-hidden transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                  <div className="p-2 max-h-[280px] overflow-y-auto services-dropdown-scroll" style={scrollbarStyles}>
                    <button onClick={() => navigateToPage('mern')} className={`w-full flex items-center gap-3 p-3 rounded-lg ${isDarkMode ? 'hover:bg-slate-700/50' : 'hover:bg-gray-100'} transition-colors group/item`}>
                      <Code className="w-5 h-5 text-cyan-400" />
                      <div className="text-left">
                        <div className={`font-semibold ${isDarkMode ? 'text-white group-hover/item:text-cyan-400' : 'text-gray-900 group-hover/item:text-cyan-600'} transition-colors`}>MERN Stack</div>
                        <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Full-stack development</div>
                      </div>
                    </button>
                    
                    <button onClick={() => navigateToPage('odoo')} className={`w-full flex items-center gap-3 p-3 rounded-lg ${isDarkMode ? 'hover:bg-slate-700/50' : 'hover:bg-gray-100'} transition-colors group/item`}>
                      <Database className="w-5 h-5 text-cyan-400" />
                      <div className="text-left">
                        <div className={`font-semibold ${isDarkMode ? 'text-white group-hover/item:text-cyan-400' : 'text-gray-900 group-hover/item:text-cyan-600'} transition-colors`}>Odoo</div>
                        <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>ERP implementation</div>
                      </div>
                    </button>
                    
                    <button onClick={() => navigateToPage('salesforce')} className={`w-full flex items-center gap-3 p-3 rounded-lg ${isDarkMode ? 'hover:bg-slate-700/50' : 'hover:bg-gray-100'} transition-colors group/item`}>
                      <Users className="w-5 h-5 text-indigo-400" />
                      <div className="text-left">
                        <div className={`font-semibold ${isDarkMode ? 'text-white group-hover/item:text-indigo-400' : 'text-gray-900 group-hover/item:text-indigo-600'} transition-colors`}>Salesforce</div>
                        <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>CRM solutions</div>
                      </div>
                    </button>
                    
                    <button onClick={() => navigateToPage('analytics')} className={`w-full flex items-center gap-3 p-3 rounded-lg ${isDarkMode ? 'hover:bg-slate-700/50' : 'hover:bg-gray-100'} transition-colors group/item`}>
                      <BarChart3 className="w-5 h-5 text-emerald-400" />
                      <div className="text-left">
                        <div className={`font-semibold ${isDarkMode ? 'text-white group-hover/item:text-emerald-400' : 'text-gray-900 group-hover/item:text-emerald-600'} transition-colors`}>Data Analytics</div>
                        <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Business insights</div>
                      </div>
                    </button>

                    <button onClick={() => navigateToPage('ai')} className={`w-full flex items-center gap-3 p-3 rounded-lg ${isDarkMode ? 'hover:bg-slate-700/50' : 'hover:bg-gray-100'} transition-colors group/item`}>
                      <Brain className="w-5 h-5 text-cyan-400" />
                      <div className="text-left">
                        <div className={`font-semibold ${isDarkMode ? 'text-white group-hover/item:text-cyan-400' : 'text-gray-900 group-hover/item:text-cyan-600'} transition-colors`}>AI & ML</div>
                        <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Artificial intelligence</div>
                      </div>
                    </button>

                    <button onClick={() => navigateToPage('staffing')} className={`w-full flex items-center gap-3 p-3 rounded-lg ${isDarkMode ? 'hover:bg-slate-700/50' : 'hover:bg-gray-100'} transition-colors group/item`}>
                      <Briefcase className="w-5 h-5 text-orange-400" />
                      <div className="text-left">
                        <div className={`font-semibold ${isDarkMode ? 'text-white group-hover/item:text-orange-400' : 'text-gray-900 group-hover/item:text-orange-600'} transition-colors`}>US Staffing</div>
                        <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Recruitment solutions</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`p-2 rounded-lg ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all`}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
              </button>
              
              <a href="#contact" className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 hover:from-cyan-400 hover:to-blue-500 transition-all text-white">Contact Us</a>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className={isDarkMode ? 'text-white' : 'text-gray-900'} /> : <Menu className={isDarkMode ? 'text-white' : 'text-gray-900'} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden ${isDarkMode ? 'bg-slate-800/95' : 'bg-white/95'} backdrop-blur-lg`}>
            <div className="px-6 py-4 space-y-4">
              <button onClick={() => { navigateToPage('home'); setIsMenuOpen(false); }} className={`block w-full text-left ${isDarkMode ? 'text-slate-300 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'}`}>Home</button>
              <button onClick={() => { navigateToPage('about'); setIsMenuOpen(false); }} className={`block w-full text-left ${isDarkMode ? 'text-slate-300 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'}`}>About</button>
              
              <div>
                <button 
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className={`w-full text-left ${isDarkMode ? 'text-slate-300 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} flex items-center justify-between`}
                >
                  Services
                  <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div className="pl-4 mt-2 space-y-2">
                    <button onClick={() => { navigateToPage('mern'); setIsMenuOpen(false); }} className={`block w-full text-left ${isDarkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-gray-500 hover:text-cyan-600'} py-1`}>MERN Stack</button>
                    <button onClick={() => { navigateToPage('odoo'); setIsMenuOpen(false); }} className={`block w-full text-left ${isDarkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-gray-500 hover:text-cyan-600'} py-1`}>Odoo</button>
                    <button onClick={() => { navigateToPage('salesforce'); setIsMenuOpen(false); }} className={`block w-full text-left ${isDarkMode ? 'text-slate-400 hover:text-indigo-400' : 'text-gray-500 hover:text-indigo-600'} py-1`}>Salesforce</button>
                    <button onClick={() => { navigateToPage('analytics'); setIsMenuOpen(false); }} className={`block w-full text-left ${isDarkMode ? 'text-slate-400 hover:text-emerald-400' : 'text-gray-500 hover:text-emerald-600'} py-1`}>Data Analytics</button>
                    <button onClick={() => { navigateToPage('ai'); setIsMenuOpen(false); }} className={`block w-full text-left ${isDarkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-gray-500 hover:text-cyan-600'} py-1`}>AI & ML</button>
                    <button onClick={() => { navigateToPage('staffing'); setIsMenuOpen(false); }} className={`block w-full text-left ${isDarkMode ? 'text-slate-400 hover:text-orange-400' : 'text-gray-500 hover:text-orange-600'} py-1`}>US Staffing</button>
                  </div>
                )}
              </div>
              
              <a href="#contact" className={`block ${isDarkMode ? 'text-slate-300 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'}`} onClick={() => setIsMenuOpen(false)}>Contact</a>
              
              <button 
                onClick={() => setIsDarkMode(!isDarkMode)}
                className={`w-full flex items-center gap-2 p-3 rounded-lg ${isDarkMode ? 'bg-slate-700/50 hover:bg-slate-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all`}
              >
                {isDarkMode ? (
                  <>
                    <Sun className="w-5 h-5 text-yellow-400" />
                    <span>Light Mode</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5 text-slate-700" />
                    <span>Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default NavBar;