import { services } from '../data/services';
import { ArrowRight } from 'lucide-react';

const ServicesSection = ({ isDarkMode, navigateToPage }) => {
  return (
    <section id="services" className="relative  z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">We Do</span>
          </h2>
          <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Expert solutions tailored to accelerate your business growth</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              onClick={() => navigateToPage(service.page)}
              className={`group p-8 ${isDarkMode ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift`}
            >
              <div className={`w-16 h-16 ${isDarkMode ? 'bg-gradient-to-br from-blue-500/20 to-cyan-400/20' : 'bg-gradient-to-br from-blue-500/10 to-cyan-400/10 group-hover:from-blue-500/30 group-hover:to-cyan-400/30'} rounded-xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600 group-hover:text-gray-700'} leading-relaxed mb-4`}>{service.description}</p>
              
              <div className="flex items-center gap-2 text-cyan-400 group-hover:gap-3 transition-all duration-300 font-semibold">
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;