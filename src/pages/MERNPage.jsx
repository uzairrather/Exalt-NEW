import { Code, Database, Server, Settings, BarChart3, ArrowRight } from 'lucide-react';

const MERNPage = ({ isDarkMode, navigateToPage }) => {
  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              MERN Stack
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Development Services
              </span>
            </h1>
            <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} max-w-4xl mx-auto`}>
              Build powerful, scalable web applications with MongoDB, Express.js, React, and Node.js
            </p>
          </div>
        </div>
      </section>

      {/* MERN Showcase Section with Images */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Full-Stack <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Development</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Modern web applications built with cutting-edge technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Image 1 - Code Development */}
            <div className={`relative rounded-2xl overflow-hidden ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} border hover-lift cursor-pointer group`}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=500&fit=crop" 
                  alt="MERN Development" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">Full-Stack Development</h3>
                  <p className="text-cyan-200">Modern JavaScript architecture</p>
                </div>
              </div>
            </div>

            {/* Image 2 - React UI */}
            <div className={`relative rounded-2xl overflow-hidden ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} border hover-lift cursor-pointer group`}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=500&fit=crop" 
                  alt="React Development" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-cyan-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">React Frontend</h3>
                  <p className="text-blue-200">Dynamic user interfaces</p>
                </div>
              </div>
            </div>

            {/* Image 3 - Database */}
            <div className={`relative rounded-2xl overflow-hidden ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} border hover-lift cursor-pointer group`}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=800&h=500&fit=crop" 
                  alt="MongoDB Database" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">MongoDB Database</h3>
                  <p className="text-cyan-200">Flexible data storage</p>
                </div>
              </div>
            </div>

            {/* Image 4 - API Development */}
            <div className={`relative rounded-2xl overflow-hidden ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} border hover-lift cursor-pointer group`}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=500&fit=crop" 
                  alt="API Development" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-cyan-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">RESTful APIs</h3>
                  <p className="text-blue-200">Node.js & Express backend</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is MERN Stack Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className={`p-8 ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} backdrop-blur-lg rounded-2xl border hover-lift`}>
              <h2 className="text-4xl font-bold mb-6">
                What is <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">MERN Stack?</span>
              </h2>
              <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-700'} leading-relaxed mb-6`}>
                MERN Stack is a powerful JavaScript-based technology stack used for building dynamic web applications. It consists of four key technologies that work seamlessly together to create full-stack applications.
              </p>
              <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-700'} leading-relaxed`}>
                Each component plays a crucial role: MongoDB for database, Express.js for backend framework, React for frontend interface, and Node.js as the runtime environment.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { name: 'MongoDB', icon: <Database className="w-12 h-12" />, color: 'from-green-500 to-emerald-600', desc: 'NoSQL Database' },
                { name: 'Express.js', icon: <Server className="w-12 h-12" />, color: 'from-gray-600 to-gray-800', desc: 'Backend Framework' },
                { name: 'React', icon: <Code className="w-12 h-12" />, color: 'from-cyan-400 to-blue-500', desc: 'Frontend Library' },
                { name: 'Node.js', icon: <Settings className="w-12 h-12" />, color: 'from-green-600 to-green-800', desc: 'Runtime Environment' }
              ].map((tech, i) => (
                <div
                  key={i}
                  className={`p-6 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift text-center`}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-white mb-4 mx-auto`}>
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
                  <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{tech.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose MERN Stack Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">MERN Stack?</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Powerful benefits that make MERN Stack the preferred choice for modern web development
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Full JavaScript Stack',
                description: 'Use JavaScript throughout your entire application - from frontend to backend to database queries. This unified language reduces complexity and speeds up development.',
                icon: <Code className="w-8 h-8" />
              },
              {
                title: 'High Performance',
                description: 'Node.js non-blocking architecture and React\'s virtual DOM ensure lightning-fast performance and exceptional user experiences even with complex applications.',
                icon: <ArrowRight className="w-8 h-8" />
              },
              {
                title: 'Scalability',
                description: 'Built to scale from startup MVPs to enterprise applications. MongoDB\'s flexible schema and Node.js clustering capabilities grow with your business needs.',
                icon: <Server className="w-8 h-8" />
              },
              {
                title: 'Rich Ecosystem',
                description: 'Access thousands of npm packages, React components, and MongoDB tools. Extensive community support and resources accelerate development.',
                icon: <Settings className="w-8 h-8" />
              },
              {
                title: 'Cost-Effective',
                description: 'Open-source technologies mean no licensing fees. Single language expertise reduces hiring costs and training time for your development team.',
                icon: <BarChart3 className="w-8 h-8" />
              },
              {
                title: 'Modern Architecture',
                description: 'Build SPAs with server-side rendering, RESTful APIs, microservices, and real-time features using modern best practices and design patterns.',
                icon: <Database className="w-8 h-8" />
              }
            ].map((benefit, i) => (
              <div
                key={i}
                className={`p-8 ${isDarkMode ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift`}
              >
                <div className={`w-16 h-16 ${isDarkMode ? 'bg-gradient-to-br from-blue-500/20 to-cyan-400/20' : 'bg-gradient-to-br from-blue-500/10 to-cyan-400/10'} rounded-xl flex items-center justify-center text-cyan-400 mb-6`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} leading-relaxed`}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our MERN Stack Services Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our MERN Stack <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Comprehensive development solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Custom Web Application Development',
                description: 'From concept to deployment, we build custom web applications that solve your unique business challenges with clean, maintainable code.',
                features: ['Custom UI/UX Design', 'RESTful API Development', 'Database Design & Optimization', 'Third-party Integrations']
              },
              {
                title: 'Single Page Applications (SPAs)',
                description: 'Create lightning-fast, responsive SPAs that provide native app-like experiences in the browser with seamless navigation.',
                features: ['React Router Implementation', 'State Management (Redux/Context)', 'Progressive Web Apps', 'Offline Functionality']
              },
              {
                title: 'E-commerce Solutions',
                description: 'Build robust e-commerce platforms with secure payment gateways, inventory management, and analytics integration.',
                features: ['Shopping Cart & Checkout', 'Payment Gateway Integration', 'Order Management', 'Admin Dashboard']
              },
              {
                title: 'Real-time Applications',
                description: 'Develop real-time features like chat, notifications, live updates, and collaborative tools using WebSocket technology.',
                features: ['Socket.io Integration', 'Live Data Synchronization', 'Push Notifications', 'Real-time Analytics']
              },
              {
                title: 'API Development & Integration',
                description: 'Design and implement scalable RESTful APIs and integrate third-party services to extend your application capabilities.',
                features: ['RESTful API Design', 'API Documentation', 'Third-party API Integration', 'Microservices Architecture']
              },
              {
                title: 'Migration & Modernization',
                description: 'Migrate legacy applications to modern MERN Stack or modernize existing MERN apps with latest best practices.',
                features: ['Legacy Code Migration', 'Performance Optimization', 'Security Enhancements', 'Code Refactoring']
              }
            ].map((service, i) => (
              <div
                key={i}
                className={`p-8 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift`}
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-6`}>{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                      <span className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Development <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              A systematic approach to deliver high-quality MERN Stack applications
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery & Planning', desc: 'Understand requirements and create detailed technical specifications' },
              { step: '02', title: 'Design & Architecture', desc: 'Design UI/UX and establish scalable system architecture' },
              { step: '03', title: 'Development & Testing', desc: 'Agile development with continuous testing and quality assurance' },
              { step: '04', title: 'Deployment & Support', desc: 'Smooth deployment and ongoing maintenance and support' }
            ].map((process, i) => (
              <div
                key={i}
                className={`p-6 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift text-center`}
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
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
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Build Your MERN Stack Application?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss your project requirements and create a powerful, scalable web application that drives your business forward.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => navigateToPage('contact')}
                className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:shadow-2xl transition-all flex items-center gap-2"
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

export default MERNPage;