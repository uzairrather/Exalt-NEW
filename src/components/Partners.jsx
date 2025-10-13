const Partners = ({ isDarkMode }) => {
  const brands = [
    { name: 'TechCorp', logo: 'https://via.placeholder.com/150x60/1E40AF/FFFFFF?text=TechCorp' },
    { name: 'DataFlow', logo: 'https://via.placeholder.com/150x60/7C3AED/FFFFFF?text=DataFlow' },
    { name: 'CloudNine', logo: 'https://via.placeholder.com/150x60/059669/FFFFFF?text=CloudNine' },
    { name: 'InnovateLab', logo: 'https://via.placeholder.com/150x60/DC2626/FFFFFF?text=InnovateLab' },
    { name: 'FutureScale', logo: 'https://via.placeholder.com/150x60/4F46E5/FFFFFF?text=FutureScale' },
    { name: 'SmartOps', logo: 'https://via.placeholder.com/150x60/0891B2/FFFFFF?text=SmartOps' },
  ];

  return (
    <section className="relative py-16 z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h3 className={`text-center text-2xl font-bold`}>
          Trusted by <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Leading Companies</span>
        </h3>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll">
          <div className="flex space-x-12 px-6">
            {brands.map((brand, i) => (
              <div key={i} className={`flex-shrink-0 w-48 h-24 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:border-cyan-400'} backdrop-blur-lg rounded-2xl border flex items-center justify-center p-4 group hover:scale-105 transition-all hover:shadow-lg cursor-pointer`}>
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
          <div className="flex space-x-12 px-6" aria-hidden="true">
            {brands.map((brand, i) => (
              <div key={`dup-${i}`} className={`flex-shrink-0 w-48 h-24 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:border-cyan-400'} backdrop-blur-lg rounded-2xl border flex items-center justify-center p-4 group hover:scale-105 transition-all hover:shadow-lg cursor-pointer`}>
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