import { Users, Target, Award, Globe, Heart, Zap, TrendingUp, Shield, CheckCircle, Rocket } from 'lucide-react';

const AboutPage = ({ isDarkMode, navigateToPage }) => {
  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              About
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                GoExalt System
              </span>
            </h1>
            <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} max-w-4xl mx-auto`}>
              Leading and trusted software solution provider delivering innovative products across various sectors
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview Section */}
      <section className="relative ">
        <div className="max-w-7xl mx-auto px-6">
          <div className={`p-12 ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} backdrop-blur-lg rounded-3xl border hover-lift`}>
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Who <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">We Are</span>
              </h2>
            </div>
            <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-700'} leading-relaxed text-center max-w-5xl mx-auto mb-8`}>
              Exalt System is a leading and trusted software solution provider offering product portfolio across various sectors like education, healthcare, and fitness. We have various customized product offerings for respective segments from schools to colleges and universities, from retailer to wholesaler in healthcare and from small to high client portfolio managing fitness clubs.
            </p>
            <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-700'} leading-relaxed text-center max-w-5xl mx-auto`}>
              Founded in 2017 in Pune, India, we have a great team who are well experienced and technically sound. We always strive to provide the best possible service to our clients, be it providing support during critical situations or fulfilling their customized requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Choose <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Us?</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} max-w-4xl mx-auto`}>
              GoExalt System is committed to assisting its customers to reach their goals by providing innovative and highly customized solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'Trust & Reliability',
                description: 'For us, every client is unique, and every situation is different. However, in most cases, it distills down to a single word: Trust. Trusting us helps in leveraging our knowledge of your business.',
                icon: <Shield className="w-8 h-8" />
              },
              {
                title: 'Innovative Solutions',
                description: 'We create world-class solutions that incorporate more than just the latest technology. There is tremendous value in designing innovative products that match your needs.',
                icon: <Rocket className="w-8 h-8" />
              },
              {
                title: 'Client Visibility',
                description: 'With our innovative and cutting-edge technology offerings, we constantly seek new ways to increase client visibility and brand value in the market.',
                icon: <TrendingUp className="w-8 h-8" />
              },
              {
                title: 'Customized Approach',
                description: 'We design products that function the way you operate, and incorporate the workflow you prefer, ensuring seamless integration with your business processes.',
                icon: <Target className="w-8 h-8" />
              },
              {
                title: 'Expert Team',
                description: 'Our team consists of well-experienced and technically sound professionals who are dedicated to providing the best possible service to our clients.',
                icon: <Users className="w-8 h-8" />
              },
              {
                title: '24/7 Support',
                description: 'We provide support during critical situations and fulfill customized requirements, ensuring your business runs smoothly at all times.',
                icon: <Heart className="w-8 h-8" />
              }
            ].map((item, i) => (
              <div
                key={i}
                className={`p-8 ${isDarkMode ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift`}
              >
                <div className={`w-16 h-16 ${isDarkMode ? 'bg-gradient-to-br from-blue-500/20 to-cyan-400/20' : 'bg-gradient-to-br from-blue-500/10 to-cyan-400/10'} rounded-xl flex items-center justify-center text-cyan-400 mb-6`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} leading-relaxed`}>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="relative py-5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-600 via-purple-600 to-pink-500 rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Our Story
            </h2>
            <p className="text-xl text-white/90 mb-6 max-w-4xl mx-auto leading-relaxed">
              Founded in 2017 in Pune, India, GoExalt System began with a vision to transform how businesses leverage technology. What started as a small team of passionate developers has grown into a trusted partner for organizations across education, healthcare, and fitness sectors.
            </p>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Our journey has been driven by innovation, client satisfaction, and a commitment to excellence. Today, we serve clients globally from our offices in USA, India, Oman, and Australia, delivering cutting-edge solutions that drive real business results.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="relative py-5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Core <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { title: 'Innovation', desc: 'Constantly pushing boundaries', icon: <Zap className="w-8 h-8" /> },
              { title: 'Excellence', desc: 'Delivering quality in everything', icon: <Award className="w-8 h-8" /> },
              { title: 'Integrity', desc: 'Building trust through honesty', icon: <Shield className="w-8 h-8" /> },
              { title: 'Collaboration', desc: 'Working together for success', icon: <Users className="w-8 h-8" /> }
            ].map((value, i) => (
              <div
                key={i}
                className={`p-8 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift text-center`}
              >
                <div className={`w-16 h-16 ${isDarkMode ? 'bg-gradient-to-br from-blue-500/20 to-cyan-400/20' : 'bg-gradient-to-br from-blue-500/10 to-cyan-400/10'} rounded-xl flex items-center justify-center text-cyan-400 mb-6 mx-auto`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence Section */}
      <section className="relative py-5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Global <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Presence</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Serving clients worldwide with local expertise
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { country: 'USA', city: 'United States', icon: <Globe className="w-12 h-12" /> },
              { country: 'India', city: 'Pune, India', icon: <Globe className="w-12 h-12" /> },
              { country: 'Oman', city: 'Middle East', icon: <Globe className="w-12 h-12" /> },
              { country: 'Australia', city: 'Australia', icon: <Globe className="w-12 h-12" /> }
            ].map((location, i) => (
              <div
                key={i}
                className={`p-8 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift text-center`}
              >
                <div className={`w-20 h-20 ${isDarkMode ? 'bg-gradient-to-br from-blue-500/20 to-cyan-400/20' : 'bg-gradient-to-br from-blue-500/10 to-cyan-400/10'} rounded-full flex items-center justify-center text-cyan-400 mb-6 mx-auto`}>
                  {location.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2">{location.country}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{location.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: '2017', label: 'Founded' },
              { number: '500+', label: 'Happy Clients' },
              { number: '50+', label: 'Team Members' },
              { number: '4', label: 'Global Offices' }
            ].map((stat, i) => (
              <div
                key={i}
                className={`p-8 ${isDarkMode ? 'bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-slate-700' : 'bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200'} backdrop-blur-lg rounded-2xl border text-center hover-lift`}
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-3">
                  {stat.number}
                </div>
                <p className={`text-lg font-semibold ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Industries <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">We Serve</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Delivering customized solutions across multiple sectors
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Education',
                description: 'Comprehensive solutions for schools, colleges, and universities to manage operations, student data, and learning processes.',
                items: ['Student Management', 'Learning Systems', 'Campus Management']
              },
              {
                title: 'Healthcare',
                description: 'Healthcare management systems for retailers, wholesalers, clinics, and hospitals to streamline operations.',
                items: ['Patient Management', 'Pharmacy Systems', 'Medical Records']
              },
              {
                title: 'Fitness',
                description: 'Complete fitness club management solutions from small studios to high-end portfolio managing fitness centers.',
                items: ['Member Management', 'Class Scheduling', 'Billing Systems']
              }
            ].map((industry, i) => (
              <div
                key={i}
                className={`p-8 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift`}
              >
                <h3 className="text-2xl font-bold mb-4">{industry.title}</h3>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-6`}>{industry.description}</p>
                <div className="space-y-2">
                  {industry.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-cyan-400" />
                      <span className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Work with Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help transform your business with innovative technology solutions.
            </p>
            <button 
              onClick={() => navigateToPage('home')}
              className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:shadow-2xl transition-all"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;