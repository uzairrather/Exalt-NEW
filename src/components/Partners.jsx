const Partners = ({ isDarkMode }) => {
  const brands = [
    { name: 'CloudNine', logo: '/images/Finnesse-1.png' },
    { name: 'InnovateLab', logo: '/images/Aptech.png' },
    { name: 'FutureScale', logo: '/images/KPK_LOGO.png' },
    { name: 'SmartOps', logo: '/images/hello-fresh.png' },
    { name: 'XETECHS', logo: '/images/xetechs_logo.png' },
    { name: 'SeranaEurope', logo: '/images/image.jpg' },
  ];

  const BrandRow = ({ ariaHidden }) => (
    <div className="flex gap-12 pr-12 flex-shrink-0" aria-hidden={ariaHidden}>
      {brands.map((brand, i) => (
        <div
          key={i}
          className={`partners-card flex-shrink-0 w-48 h-24 ${
            isDarkMode
              ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400'
              : 'bg-white border-gray-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:border-cyan-400'
          } rounded-2xl border flex items-center justify-center p-4 group hover:shadow-lg cursor-pointer transition-colors`}
        >
          <img
            src={brand.logo}
            alt={brand.name}
            className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
          />
        </div>
      ))}
    </div>
  );

  return (
    <section className="relative py-16 z-10">
      <style>{`
        @keyframes partners-scroll {
          from { transform: translate3d(0, 0, 0); }
          to { transform: translate3d(-50%, 0, 0); }
        }
        .partners-track {
          animation: partners-scroll 15s linear infinite;
          will-change: transform;
          backface-visibility: hidden;
          transform: translate3d(0, 0, 0);
        }
        .partners-track:hover {
          animation-play-state: paused;
        }
        .partners-card {
          transform: translateZ(0);
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 mb-8">
        <h3 className="text-center text-2xl font-bold">
          Trusted by <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Leading Companies</span>
        </h3>
      </div>

      <div className="relative max-w-7xl mx-auto overflow-hidden">
        <div className={`absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${
          isDarkMode
            ? 'bg-gradient-to-r from-slate-900 to-transparent'
            : 'bg-gradient-to-r from-gray-50 to-transparent'
        }`}></div>

        <div className={`absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none ${
          isDarkMode
            ? 'bg-gradient-to-l from-slate-900 to-transparent'
            : 'bg-gradient-to-l from-gray-50 to-transparent'
        }`}></div>

        {/* Track holds two identical rows; translating -50% lands exactly on the second row's start */}
        <div className="flex w-max partners-track">
          <BrandRow />
          <BrandRow ariaHidden={true} />
        </div>
      </div>
    </section>
  );
};

export default Partners;