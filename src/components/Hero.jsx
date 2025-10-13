import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { services } from '../data/services';

const Hero = ({ isDarkMode }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl font-bold">
                Empowering Startups
                <br />
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  With Cutting-Edge Solutions
                </span>
              </h1>
              <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                We build scalable software solutions using MERN Stack, Odoo, Salesforce, and advanced data analytics to transform your business vision into reality.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 hover:from-cyan-400 hover:to-blue-500 transition-all flex items-center gap-2 group">
                Get Started
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#services" className="px-8 py-4 border-2 border-cyan-400 rounded-full font-semibold hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-white hover:border-transparent transition-all">
                Our Services
              </a>
            </div>
          </div>

          <div className="relative h-[600px] hidden md:block">
            {services.map((service, i) => (
              <div
                key={i}
                className={`absolute w-72 p-6 ${isDarkMode ? 'bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer`}
                style={{
                  top: `${i * 120}px`,
                  right: `${i % 2 === 0 ? '0' : '50px'}`,
                  transform: `translateY(${scrollY * 0.05 * (i + 1)}px) rotateY(${i % 2 === 0 ? '5deg' : '-5deg'})`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                <div className="text-cyan-400 mb-3 ">{service.icon}</div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Transform your business with our expertise</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;