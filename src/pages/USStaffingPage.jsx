import { Users, Briefcase, Target, CheckCircle, Globe, Clock, Shield, TrendingUp, Code, Database, Heart, DollarSign, ArrowRight } from 'lucide-react';

const USStaffingPage = ({ isDarkMode, navigateToPage }) => {
  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              US Staffing &
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Recruitment Solutions
              </span>
            </h1>
            <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} max-w-4xl mx-auto`}>
              Find, hire, and retain exceptional talent across the United States with our comprehensive staffing solutions
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className={`p-8 ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} backdrop-blur-lg rounded-2xl border hover-lift`}>
              <h2 className="text-4xl font-bold mb-6">
                US Staffing <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Excellence</span>
              </h2>
              <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-700'} leading-relaxed mb-6`}>
                At GoExalt System LLP, we deliver comprehensive US Staffing and Recruitment Solutions designed to help organizations across the United States find, hire, and retain exceptional talent.
              </p>
              <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-700'} leading-relaxed`}>
                With deep expertise in the US job market and a proven understanding of hiring trends, compliance standards, and workforce dynamics, we provide staffing services that drive business growth and operational efficiency.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { name: 'IT Staffing', icon: <Code className="w-12 h-12" />, color: 'from-cyan-400 to-blue-500', desc: 'Tech Professionals' },
                { name: 'ERP/CRM', icon: <Database className="w-12 h-12" />, color: 'from-blue-400 to-indigo-500', desc: 'System Experts' },
                { name: 'Healthcare', icon: <Heart className="w-12 h-12" />, color: 'from-purple-400 to-pink-400', desc: 'Medical Staff' },
                { name: 'Executive', icon: <Briefcase className="w-12 h-12" />, color: 'from-indigo-400 to-purple-500', desc: 'Leadership Roles' }
              ].map((module, i) => (
                <div
                  key={i}
                  className={`p-6 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift text-center`}
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

      {/* Our Expertise Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our US Staffing <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              End-to-end recruitment services across multiple industries and skill sets
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'IT & Technology Staffing',
                description: 'Connect with top-tier technology professionals including Software Developers, QA Engineers, Network Administrators, DevOps Engineers, and Project Managers.',
                features: ['Software Developers', 'QA Engineers', 'Network Admins', 'DevOps & PM'],
                icon: <Code className="w-8 h-8" />
              },
              {
                title: 'ERP & CRM Staffing',
                description: 'Specialized recruitment for enterprise systems including Odoo, Salesforce, SAP, Oracle, and Microsoft Dynamics professionals.',
                features: ['Odoo Experts', 'Salesforce Specialists', 'SAP Consultants', 'MS Dynamics'],
                icon: <Database className="w-8 h-8" />
              },
              {
                title: 'Healthcare & Finance Staffing',
                description: 'Professional staffing solutions for healthcare facilities, financial institutions, and administrative roles across all levels.',
                features: ['Medical Professionals', 'Finance Experts', 'Admin Staff', 'Compliance Officers'],
                icon: <Heart className="w-8 h-8" />
              },
              {
                title: 'Executive Search & Leadership',
                description: 'Strategic executive recruitment for C-level positions, senior management, and leadership roles across industries.',
                features: ['C-Level Executives', 'Senior Management', 'Directors', 'VP & Leadership'],
                icon: <Briefcase className="w-8 h-8" />
              }
            ].map((service, i) => (
              <div
                key={i}
                className={`p-8 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-blue-50 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift`}
              >
                <div className={`w-16 h-16 ${isDarkMode ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20' : 'bg-gradient-to-br from-cyan-400/10 to-blue-400/10'} rounded-xl flex items-center justify-center text-cyan-500 mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-6`}>{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400"></div>
                      <span className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">GoExalt?</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Your trusted partner in US staffing, IT recruitment, and workforce solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Extensive Talent Network',
                description: 'Access to a vast pool of pre-screened professionals across the United States, ready to meet your hiring needs.',
                icon: <Users className="w-8 h-8" />
              },
              {
                title: 'Experienced Recruiters',
                description: 'Skilled in VMS systems, MSP partnerships, and niche technical hiring with proven track records.',
                icon: <Target className="w-8 h-8" />
              },
              {
                title: 'Full Compliance',
                description: 'Adherence to all US labor laws, E-Verify, I-9, and tax requirements ensuring legal and secure hiring.',
                icon: <Shield className="w-8 h-8" />
              },
              {
                title: 'Fast & Flexible Delivery',
                description: 'Quick turnaround for urgent roles without compromising on quality or candidate fit.',
                icon: <Clock className="w-8 h-8" />
              },
              {
                title: 'Scalable Solutions',
                description: 'From startups to Fortune 500 clients — we adapt to your business needs and growth trajectory.',
                icon: <TrendingUp className="w-8 h-8" />
              },
              {
                title: 'Global Support',
                description: 'Backed by our international presence across the USA, India, Oman, and Australia for 24/7 support.',
                icon: <Globe className="w-8 h-8" />
              }
            ].map((benefit, i) => (
              <div
                key={i}
                className={`p-8 ${isDarkMode ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:bg-gradient-to-br hover:from-cyan-50 hover:to-purple-50 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift`}
              >
                <div className={`w-16 h-16 ${isDarkMode ? 'bg-gradient-to-br from-cyan-500/20 to-purple-500/20' : 'bg-gradient-to-br from-cyan-400/10 to-purple-400/10'} rounded-xl flex items-center justify-center text-cyan-500 mb-6`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} leading-relaxed`}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Staffing Solutions Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Staffing <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Flexible hiring models to match your business requirements
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Contract Staffing',
                description: 'Short-term and long-term contract professionals for project-based work and temporary needs.',
                icon: <Clock className="w-8 h-8" />
              },
              {
                title: 'Contract-to-Hire',
                description: 'Evaluate candidates on contract before making permanent hiring decisions with reduced risk.',
                icon: <CheckCircle className="w-8 h-8" />
              },
              {
                title: 'Permanent Placements',
                description: 'Direct hire solutions for full-time positions with comprehensive screening and matching.',
                icon: <Briefcase className="w-8 h-8" />
              },
              {
                title: 'Offshore Staffing',
                description: 'Access global talent pools with offshore development teams and remote professionals.',
                icon: <Globe className="w-8 h-8" />
              },
              {
                title: 'Remote Staffing',
                description: 'Build distributed teams with remote professionals across the United States.',
                icon: <Users className="w-8 h-8" />
              },
              {
                title: 'Payroll Services',
                description: 'Complete payroll management, tax compliance, and benefits administration.',
                icon: <DollarSign className="w-8 h-8" />
              }
            ].map((solution, i) => (
              <div
                key={i}
                className={`p-8 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift text-center`}
              >
                <div className={`w-16 h-16 ${isDarkMode ? 'bg-gradient-to-br from-cyan-500/20 to-blue-500/20' : 'bg-gradient-to-br from-cyan-400/10 to-blue-400/10'} rounded-xl flex items-center justify-center text-cyan-500 mb-6 mx-auto`}>
                  {solution.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recruitment Process Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Recruitment <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              A streamlined approach to finding the perfect talent match
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Understand', desc: 'Analyze your requirements and culture' },
              { step: '02', title: 'Source', desc: 'Find qualified candidates from our network' },
              { step: '03', title: 'Screen', desc: 'Rigorous vetting and skill assessment' },
              { step: '04', title: 'Place', desc: 'Seamless onboarding and support' }
            ].map((process, i) => (
              <div
                key={i}
                className={`p-6 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift text-center`}
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
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
          <div className="bg-gradient-to-br from-cyan-500 to-blue-500 rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Build Your Dream Team?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
              Whether you're expanding your workforce, scaling your IT team, or seeking specialized professionals, GoExalt ensures you get the right talent at the right time.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => navigateToPage('home')}
                className="px-8 py-4 bg-white text-cyan-600 rounded-full font-bold hover:shadow-2xl transition-all flex items-center gap-2"
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

export default USStaffingPage;