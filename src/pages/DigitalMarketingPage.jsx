import { ArrowLeft, Search, Users, Globe, BarChart3, Target, Megaphone, Mail, PenTool, Video, Award } from 'lucide-react';

const DigitalMarketingPage = ({ isDarkMode, navigateToPage }) => {
  const services = [
    {
      icon: <Search className="w-8 h-8" />,
      title: "SEO Services",
      description: "Dominate search rankings with our proven SEO strategies. We optimize your website for maximum visibility and organic traffic growth.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building", "Local SEO", "SEO Audits"]
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Social Media Marketing",
      description: "Build engaged communities across all major platforms. We create compelling content and drive conversions through strategic social campaigns.",
      features: ["Content Strategy", "Community Management", "Paid Social Ads", "Influencer Marketing", "Analytics & Reporting", "Brand Monitoring"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Google Ads & PPC",
      description: "Get immediate visibility and ROI with expertly managed Google Ads campaigns. We optimize every dollar for maximum conversions.",
      features: ["Search Ads", "Display Ads", "Shopping Ads", "Remarketing", "A/B Testing", "Conversion Tracking"]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Conversion-optimized websites that turn visitors into customers. Fast, responsive, and built for results.",
      features: ["Responsive Design", "E-commerce Development", "Landing Pages", "CMS Integration", "Performance Optimization", "Security"]
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Email Marketing",
      description: "Nurture leads and drive sales with personalized email campaigns. We create automated workflows that convert.",
      features: ["Campaign Design", "Email Automation", "List Segmentation", "A/B Testing", "Analytics", "CRM Integration"]
    },
    {
      icon: <PenTool className="w-8 h-8" />,
      title: "Content Marketing",
      description: "Engage your audience with high-quality content that educates and converts. From blogs to videos, we create content that drives results.",
      features: ["Blog Writing", "Copywriting", "Content Strategy", "Video Scripts", "Infographics", "White Papers"]
    },
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Marketing",
      description: "Capture attention with compelling video content. We produce and promote videos that tell your story and drive engagement.",
      features: ["Video Production", "YouTube Marketing", "Video SEO", "Video Ads", "Live Streaming", "Animation"]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics & Reporting",
      description: "Data-driven insights to optimize your marketing. We track, analyze, and report on every metric that matters.",
      features: ["Google Analytics", "Custom Dashboards", "Conversion Tracking", "ROI Analysis", "Competitor Analysis", "Monthly Reports"]
    }
  ];

  const stats = [
    { number: "500+", label: "Campaigns Launched" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "3x", label: "Average ROI Increase" },
    { number: "10M+", label: "Impressions Generated" }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Strategy",
      description: "We analyze your business, competitors, and target audience to create a customized digital marketing strategy."
    },
    {
      step: "02",
      title: "Campaign Setup",
      description: "We set up tracking, create compelling campaigns, and prepare all assets for launch across chosen channels."
    },
    {
      step: "03",
      title: "Launch & Optimize",
      description: "We launch your campaigns and continuously monitor performance, making data-driven optimizations for maximum ROI."
    },
    {
      step: "04",
      title: "Report & Scale",
      description: "We provide detailed reports and insights, then scale what works to drive exponential growth for your business."
    }
  ];

  const handleContactClick = () => {
    navigateToPage('home');
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <section className="relative pt-28  px-6">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigateToPage('home')}
            className={`flex items-center gap-2 mb-6 ${isDarkMode ? 'text-cyan-400 hover:text-cyan-300' : 'text-cyan-600 hover:text-cyan-700'} transition-colors`}
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>

          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-cyan-500/30 mb-4">
              <Megaphone className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Complete Digital Marketing Solutions</span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Grow Your Business with <br />
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Data-Driven Marketing
              </span>
            </h1>

            <p className={`text-lg md:text-xl mb-6 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              From SEO and social media to PPC and content marketing, we deliver comprehensive digital marketing services that drive measurable results and maximize your ROI.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={handleContactClick}
                className="px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 hover:from-cyan-500 hover:to-blue-600 transition-all"
              >
                Start Your Campaign
              </button>
              <button
                onClick={() => navigateToPage('home')}
                className={`px-8 py-3 ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-200 hover:bg-gray-300'} rounded-full font-semibold transition-all`}
              >
                View All Services
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className=" px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 rounded-2xl ${isDarkMode ? 'bg-slate-800/50' : 'bg-gray-50'}`}
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className=" px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Marketing Services</span>
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Comprehensive solutions to elevate your brand and drive growth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`p-6 rounded-2xl ${
                  isDarkMode
                    ? 'bg-slate-800/50 hover:bg-slate-800 border-slate-700'
                    : 'bg-white hover:bg-gray-50 border-gray-200'
                } border backdrop-blur-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-400/20 flex items-center justify-center text-cyan-400 mb-4">
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className={`mb-4 text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                  {service.description}
                </p>

                <div className="space-y-1.5">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <Award className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                      <span className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className={` px-6 ${isDarkMode ? 'bg-slate-800/30' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              A proven methodology that delivers results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {process.map((item, index) => (
              <div key={index} className="relative">
                <div
                  className={`p-6 rounded-2xl ${
                    isDarkMode ? 'bg-slate-800/50' : 'bg-white'
                  } border ${
                    isDarkMode ? 'border-slate-700' : 'border-gray-200'
                  } hover:shadow-xl transition-all`}
                >
                  <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className=" px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Grow Your Business?</span>
          </h2>
          <p className={`text-lg mb-6 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
            Let&apos;s discuss how our digital marketing services can help you achieve your business goals.
          </p>
          <button
            onClick={handleContactClick}
            className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 hover:from-cyan-500 hover:to-blue-600 transition-all"
          >
            Get Your Free Consultation
          </button>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;