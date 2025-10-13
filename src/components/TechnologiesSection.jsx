import { Code, Server, Settings } from 'lucide-react';
import { technologies } from '../data/technologies';

const TechnologiesSection = ({ isDarkMode }) => {
  return (
    <section id="technologies" className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technologies <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">We Work With</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Code className="w-8 h-8 text-cyan-400" />
              Front End
            </h3>
            <div className="space-y-3">
              {technologies.frontend.map((tech, i) => (
                <div key={i} className={`p-4 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:bg-gradient-to-r hover:from-blue-100 hover:to-cyan-100 hover:border-cyan-400 hover:shadow-md'} rounded-xl border transition-all cursor-pointer group hover-lift`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${tech.color} group-hover:scale-150 transition-transform`}></div>
                    <span className="font-semibold">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Server className="w-8 h-8 text-cyan-400" />
              Back End
            </h3>
            <div className="space-y-3">
              {technologies.backend.map((tech, i) => (
                <div key={i} className={`p-4 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:bg-gradient-to-r hover:from-blue-100 hover:to-cyan-100 hover:border-cyan-400 hover:shadow-md'} rounded-xl border transition-all cursor-pointer group hover-lift`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${tech.color} group-hover:scale-150 transition-transform`}></div>
                    <span className="font-semibold">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Settings className="w-8 h-8 text-cyan-400" />
              Platforms
            </h3>
            <div className="space-y-3">
              {technologies.platforms.map((tech, i) => (
                <div key={i} className={`p-4 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:bg-gradient-to-r hover:from-blue-100 hover:to-cyan-100 hover:border-cyan-400 hover:shadow-md'} rounded-xl border transition-all cursor-pointer group hover-lift`}>
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${tech.color} group-hover:scale-150 transition-transform`}></div>
                    <span className="font-semibold">{tech.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;