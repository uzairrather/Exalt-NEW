import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Mail } from 'lucide-react';
import { services } from '../data/services';
import { useEffect } from 'react';

const ServiceDetail = ({ isDarkMode }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { slug } = useParams();

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Get service from location state or find by slug
  const service = location.state?.service || 
    services.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className={`min-h-screen flex items-center justify-center ${
        isDarkMode ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'
      }`}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Service not found</h2>
          <button 
            onClick={() => navigate('/')}
            className="text-cyan-400 hover:underline"
          >
            Return to home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900' : 'bg-gray-50'} py-20`}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Back Button */}
        <button
          onClick={() => navigate('/')}
          className={`flex items-center gap-2 mb-8 ${
            isDarkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-blue-600 hover:text-blue-700'
          } transition-colors group`}
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
          Back to Services
        </button>

        {/* Service Header */}
        <div className={`${
          isDarkMode 
            ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700' 
            : 'bg-white border-gray-200 shadow-lg'
        } rounded-2xl border p-8 mb-8`}>
          <div className="flex items-start gap-6 flex-col md:flex-row">
            <div className={`w-20 h-20 ${
              isDarkMode 
                ? 'bg-gradient-to-br from-blue-500/20 to-cyan-400/20' 
                : 'bg-gradient-to-br from-blue-500/10 to-cyan-400/10'
            } rounded-xl flex items-center justify-center text-cyan-400 flex-shrink-0`}>
              {service.icon}
            </div>
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-4">{service.title}</h1>
              <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-600'} mb-4`}>
                {service.description}
              </p>
              <p className={`text-base ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>
                {service.detailedDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className={`${
          isDarkMode 
            ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700' 
            : 'bg-white border-gray-200 shadow-lg'
        } rounded-2xl border p-8 mb-8`}>
          <h2 className="text-2xl font-bold mb-6">Key Features & Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {service.features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className={isDarkMode ? 'text-slate-300' : 'text-gray-700'}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div className={`${
          isDarkMode 
            ? 'bg-gradient-to-br from-blue-500/10 to-cyan-400/10 border-slate-700' 
            : 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200'
        } rounded-2xl border p-8`}>
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
            <p className={`mb-6 ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>
              Let&apos;s discuss how {service.title} can transform your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button
                onClick={() => {
                  navigate('/');
                  setTimeout(() => {
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }, 100);
                }}
                className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </button>
              <button
                onClick={() => navigate('/')}
                className={`px-8 py-3 rounded-full font-semibold transition-all flex items-center gap-2 ${
                  isDarkMode 
                    ? 'bg-slate-800 hover:bg-slate-700 border border-slate-700' 
                    : 'bg-white hover:bg-gray-50 border border-gray-300'
                }`}
              >
                View All Services
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;