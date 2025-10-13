import { ArrowRight } from 'lucide-react';

const Marketing = ({ isDarkMode }) => {
  const services = [
    {
      title: "SEO Services",
      color: "from-blue-500 to-cyan-500",
      description: "Rank higher on Google with our proven SEO strategies and technical optimization."
    },
    {
      title: "Social Media Marketing",
      color: "from-blue-500 to-cyan-500",
      description: "Build engaged communities and drive conversions across all social platforms."
    },
    {
      title: "Google Ads & PPC",
      color: "from-blue-500 to-cyan-500",
      description: "Get immediate visibility with high-converting Google Ads campaigns."
    },
    {
      title: "Web Development",
      color: "from-blue-500 to-cyan-500",
      description: "Conversion-optimized websites that turn visitors into customers."
    }
  ];

  return (
    <section className="relative py-20 z-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Complete Digital Marketing <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} max-w-4xl mx-auto`}>
            From SEO and social media marketing to Google Ads and web development, we provide comprehensive digital marketing services designed to maximize your online presence and drive measurable business growth in your market.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {services.map((service, i) => (
            <div
              key={i}
              className={`p-6 ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border hover:scale-105 transition-all text-center hover-lift cursor-pointer`}
            >
              <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                {service.title}
              </h3>
              <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a href="#services" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 hover:from-cyan-500 hover:to-blue-600 transition-all">
            View All Digital Marketing Services
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Marketing;