import { Code, Database, Server, Settings, BarChart3, ArrowRight, Users, Target, TrendingUp, Cloud, Zap, ShoppingCart } from 'lucide-react';

const SalesforcePage = ({ isDarkMode, navigateToPage }) => {
  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              Salesforce
              <br />
              <span className="bg-gradient-to-r from-indigo-400 via-blue-400 to-indigo-500 bg-clip-text text-transparent">
                CRM Solutions
              </span>
            </h1>
            <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} max-w-4xl mx-auto`}>
              Transform your customer relationships with powerful Salesforce consulting, customization, and integration services
            </p>
          </div>
        </div>
      </section>

      {/* What is Salesforce Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className={`p-8 ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} backdrop-blur-lg rounded-2xl border hover-lift`}>
              <h2 className="text-4xl font-bold mb-6">
                What is <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Salesforce?</span>
              </h2>
              <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-700'} leading-relaxed mb-6`}>
                Salesforce is the world's #1 CRM platform that helps businesses connect with customers, partners, and employees in a whole new way.
              </p>
              <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-700'} leading-relaxed`}>
                From sales and service to marketing and analytics, Salesforce empowers teams to deliver personalized customer experiences at scale.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { name: 'Sales Cloud', icon: <Target className="w-12 h-12" />, color: 'from-blue-500 to-indigo-600', desc: 'Sales Automation' },
                { name: 'Service Cloud', icon: <Users className="w-12 h-12" />, color: 'from-purple-600 to-indigo-800', desc: 'Customer Service' },
                { name: 'Marketing Cloud', icon: <TrendingUp className="w-12 h-12" />, color: 'from-indigo-500 to-blue-500', desc: 'Marketing Automation' },
                { name: 'Analytics', icon: <BarChart3 className="w-12 h-12" />, color: 'from-cyan-600 to-blue-800', desc: 'Business Intelligence' }
              ].map((module, i) => (
                <div
                  key={i}
                  className={`p-6 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-indigo-400' : 'bg-white border-gray-200 hover:border-indigo-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift text-center`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${module.color} rounded-xl flex items-center justify-center text-white mb-4 mx-auto`}>
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{module.name}</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{module.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Salesforce Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Salesforce?</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Powerful benefits that make Salesforce the world's leading CRM platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: '360° Customer View',
                description: 'Get a complete view of every customer interaction across sales, service, marketing, and commerce on a single platform.',
                icon: <Users className="w-8 h-8" />
              },
              {
                title: 'AI-Powered Intelligence',
                description: 'Leverage Einstein AI to predict outcomes, automate tasks, and deliver personalized experiences automatically.',
                icon: <Zap className="w-8 h-8" />
              },
              {
                title: 'Cloud-Based Platform',
                description: 'Access your CRM from anywhere, anytime, on any device with automatic updates and zero IT overhead.',
                icon: <Cloud className="w-8 h-8" />
              },
              {
                title: 'Extensive Integration',
                description: 'Connect with thousands of apps through AppExchange and integrate with your existing tools seamlessly.',
                icon: <Settings className="w-8 h-8" />
              },
              {
                title: 'Scalable & Flexible',
                description: 'From startups to Fortune 500 companies, Salesforce adapts to businesses of all sizes and grows with you.',
                icon: <TrendingUp className="w-8 h-8" />
              },
              {
                title: 'World-Class Security',
                description: 'Enterprise-grade security with advanced encryption and compliance with global data protection regulations.',
                icon: <Server className="w-8 h-8" />
              }
            ].map((benefit, i) => (
              <div
                key={i}
                className={`p-8 ${isDarkMode ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-indigo-400' : 'bg-white border-gray-200 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-blue-50 hover:border-indigo-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift`}
              >
                <div className={`w-16 h-16 ${isDarkMode ? 'bg-gradient-to-br from-indigo-500/20 to-blue-400/20' : 'bg-gradient-to-br from-indigo-500/10 to-blue-400/10'} rounded-xl flex items-center justify-center text-indigo-400 mb-6`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} leading-relaxed`}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Salesforce Services Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Salesforce <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              End-to-end Salesforce solutions to maximize your CRM investment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Salesforce Implementation',
                description: 'Complete Salesforce setup tailored to your business processes with configuration, customization, and deployment.',
                features: ['Requirements Analysis', 'System Configuration', 'Data Migration', 'User Training'],
                icon: <Settings className="w-8 h-8" />
              },
              {
                title: 'Custom Development',
                description: 'Build custom applications and features using Apex, Lightning Web Components, and Visualforce.',
                features: ['Custom Objects & Fields', 'Apex Development', 'Lightning Components', 'Custom Integrations'],
                icon: <Code className="w-8 h-8" />
              },
              {
                title: 'Integration Services',
                description: 'Connect Salesforce with your existing systems and third-party applications for seamless data flow.',
                features: ['API Integration', 'Middleware Solutions', 'Data Synchronization', 'Legacy System Integration'],
                icon: <Database className="w-8 h-8" />
              },
              {
                title: 'Sales & Marketing Automation',
                description: 'Optimize your sales and marketing processes with lead management, opportunity tracking, and automation.',
                features: ['Lead Management', 'Sales Forecasting', 'Marketing Automation', 'Analytics & Reporting'],
                icon: <Target className="w-8 h-8" />
              }
            ].map((service, i) => (
              <div
                key={i}
                className={`p-8 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-indigo-400' : 'bg-white border-gray-200 hover:bg-gradient-to-br hover:from-indigo-50 hover:to-blue-50 hover:border-indigo-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift`}
              >
                <div className={`w-16 h-16 ${isDarkMode ? 'bg-gradient-to-br from-indigo-500/20 to-blue-400/20' : 'bg-gradient-to-br from-indigo-500/10 to-blue-400/10'} rounded-xl flex items-center justify-center text-indigo-400 mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-6`}>{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-400 to-blue-400"></div>
                      <span className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Process Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Implementation <span className="bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              A proven methodology for successful Salesforce deployment
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Understand business requirements and goals' },
              { step: '02', title: 'Design & Build', desc: 'Create solution and customize Salesforce' },
              { step: '03', title: 'Testing', desc: 'Comprehensive testing and validation' },
              { step: '04', title: 'Deploy & Train', desc: 'Go-live support and user training' }
            ].map((process, i) => (
              <div
                key={i}
                className={`p-6 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-indigo-400' : 'bg-white border-gray-200 hover:border-indigo-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift text-center`}
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-indigo-400 to-blue-400 bg-clip-text text-transparent mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold mb-3">{process.title}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{process.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-indigo-600 to-blue-500 rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Supercharge Your CRM with Salesforce?
            </h2>
            <p className="text-xl text-indigo-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help you implement, customize, and optimize Salesforce to drive customer success and business growth.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => navigateToPage('contact')}
                className="px-8 py-4 bg-white text-indigo-600 rounded-full font-bold hover:shadow-2xl transition-all flex items-center gap-2"
              >
                Get Started
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigateToPage('home')}
                className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all"
              >
                View All Services
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SalesforcePage;