const Partners = ({ isDarkMode }) => {
  const brands = [
    { name: 'DataFlow', logo: '/images/logoBlanco.png' },
    { name: 'CloudNine', logo: '/images/Finnesse-1.png' },
    { name: 'InnovateLab', logo: '/images/Aptech.png' },
    { name: 'FutureScale', logo: '/images/KPK_LOGO.png'},
    { name: 'SmartOps', logo: '/images/hello-fresh.png' },
    // { name: 'XETECHS', logo: '/images/xetechs.png' },
  ];

  return (
    <section className="relative py-16 z-10">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h3 className="text-center text-2xl font-bold">
          Trusted by <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Leading Companies</span>
        </h3>
      </div>
      
      {/* Container with overflow hidden and gradient masks */}
      <div className="relative max-w-7xl mx-auto overflow-hidden">
        {/* Left gradient fade */}
        <div className={`absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${
          isDarkMode 
            ? 'bg-gradient-to-r from-slate-900 to-transparent' 
            : 'bg-gradient-to-r from-gray-50 to-transparent'
        }`}></div>
        
        {/* Right gradient fade */}
        <div className={`absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${
          isDarkMode 
            ? 'bg-gradient-to-l from-slate-900 to-transparent' 
            : 'bg-gradient-to-l from-gray-50 to-transparent'
        }`}></div>

        {/* Scrolling content */}
        <div className="flex animate-scroll">
          <div className="flex space-x-12 px-6">
            {brands.map((brand, i) => (
              <div 
                key={i} 
                className={`flex-shrink-0 w-48 h-24 ${
                  isDarkMode 
                    ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' 
                    : 'bg-white border-gray-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:border-cyan-400'
                } backdrop-blur-lg rounded-2xl border flex items-center justify-center p-4 group hover:scale-105 transition-all hover:shadow-lg cursor-pointer`}
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
          
          {/* Duplicate for seamless loop */}
          <div className="flex space-x-12 px-6" aria-hidden="true">
            {brands.map((brand, i) => (
              <div 
                key={`dup-${i}`} 
                className={`flex-shrink-0 w-48 h-24 ${
                  isDarkMode 
                    ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' 
                    : 'bg-white border-gray-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:border-cyan-400'
                } backdrop-blur-lg rounded-2xl border flex items-center justify-center p-4 group hover:scale-105 transition-all hover:shadow-lg cursor-pointer`}
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners;