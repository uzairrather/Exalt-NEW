// import React, { useState, useEffect, useRef } from 'react';
// import { Menu, X, Code, Database, Users, BarChart3, Server, Settings, ArrowRight, Phone, Mail, MapPin, Linkedin, Sun, Moon } from 'lucide-react';

// const ExaltSystemWebsite = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isServicesOpen, setIsServicesOpen] = useState(false);
//   const [scrollY, setScrollY] = useState(0);
//   const [isDarkMode, setIsDarkMode] = useState(false);
//   const [currentPage, setCurrentPage] = useState('home');
//   const canvasRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => setScrollY(window.scrollY);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
    
//     const ctx = canvas.getContext('2d');
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;

//     // Set initial full background based on theme
//     ctx.fillStyle = isDarkMode ? 'rgb(15, 23, 42)' : 'rgb(255, 255, 255)';
//     ctx.fillRect(0, 0, canvas.width, canvas.height);

//     const particles = [];
//     const particleCount = 80;

//     class Particle {
//       constructor() {
//         this.reset();
//       }

//       reset() {
//         this.x = Math.random() * canvas.width;
//         this.y = Math.random() * canvas.height;
//         this.z = Math.random() * 1500;
//         this.vx = (Math.random() - 0.5) * 0.5;
//         this.vy = (Math.random() - 0.5) * 0.5;
//       }

//       update() {
//         this.x += this.vx;
//         this.y += this.vy;
//         this.z -= 2;

//         if (this.z <= 0 || this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
//           this.reset();
//         }
//       }

//       draw() {
//         const scale = 1000 / (1000 + this.z);
//         const x2d = (this.x - canvas.width / 2) * scale + canvas.width / 2;
//         const y2d = (this.y - canvas.height / 2) * scale + canvas.height / 2;
//         const size = scale * 3;

//         ctx.beginPath();
//         ctx.arc(x2d, y2d, size, 0, Math.PI * 2);
//         const opacity = 1 - this.z / 1500;
//         ctx.fillStyle = `rgba(59, 130, 246, ${opacity})`;
//         ctx.fill();
//       }
//     }

//     for (let i = 0; i < particleCount; i++) {
//       particles.push(new Particle());
//     }

//     let animationFrameId;
//     let lastTheme = isDarkMode;

//     const animate = () => {
//       // If theme changed, do a full clear
//       if (lastTheme !== isDarkMode) {
//         ctx.fillStyle = isDarkMode ? 'rgb(15, 23, 42)' : 'rgb(255, 255, 255)';
//         ctx.fillRect(0, 0, canvas.width, canvas.height);
//         lastTheme = isDarkMode;
//       }

//       if (isDarkMode) {
//         // Dark mode: animated particles
//         ctx.fillStyle = 'rgba(15, 23, 42, 0.1)';
//         ctx.fillRect(0, 0, canvas.width, canvas.height);

//         particles.forEach(particle => {
//           particle.update();
//           particle.draw();
//         });
//       } else {
//         // Light mode: plain white background
//         ctx.fillStyle = 'rgb(255, 255, 255)';
//         ctx.fillRect(0, 0, canvas.width, canvas.height);
        
//         // Still update particles so they're ready when switching back
//         particles.forEach(particle => {
//           particle.update();
//         });
//       }

//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();

//     const handleResize = () => {
//       canvas.width = window.innerWidth;
//       canvas.height = window.innerHeight;
//       // Redraw full background on resize
//       ctx.fillStyle = isDarkMode ? 'rgb(15, 23, 42)' : 'rgb(255, 255, 255)';
//       ctx.fillRect(0, 0, canvas.width, canvas.height);
//     };

//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       cancelAnimationFrame(animationFrameId);
//     };
//   }, [isDarkMode]);

//   const services = [
//     {
//       icon: <Code className="w-8 h-8" />,
//       title: "MERN Stack Development",
//       description: "Full-stack web applications using MongoDB, Express.js, React, and Node.js with scalable architecture and modern best practices."
//     },
//     {
//       icon: <Database className="w-8 h-8" />,
//       title: "Odoo Implementation",
//       description: "Custom Odoo ERP solutions to streamline your business operations with tailored modules and seamless integration."
//     },
//     {
//       icon: <Users className="w-8 h-8" />,
//       title: "Salesforce Solutions",
//       description: "Expert Salesforce consulting, customization, and integration to optimize your CRM and enhance customer relationships."
//     },
//     {
//       icon: <BarChart3 className="w-8 h-8" />,
//       title: "Data Analytics",
//       description: "Advanced data analytics and visualization solutions to transform your business data into actionable insights."
//     }
//   ];

//   const technologies = {
//     frontend: [
//       { name: 'React', color: 'bg-cyan-400' },
//       { name: 'Vue.js', color: 'bg-emerald-400' },
//       { name: 'Angular', color: 'bg-red-400' },
//       { name: 'Next.js', color: 'bg-gray-800' },
//       { name: 'TypeScript', color: 'bg-blue-500' },
//       { name: 'Tailwind', color: 'bg-cyan-500' }
//     ],
//     backend: [
//       { name: 'Node.js', color: 'bg-green-500' },
//       { name: 'Python', color: 'bg-blue-400' },
//       { name: 'MongoDB', color: 'bg-green-600' },
//       { name: 'PostgreSQL', color: 'bg-blue-600' },
//       { name: 'Express', color: 'bg-gray-700' },
//       { name: 'Django', color: 'bg-green-700' }
//     ],
//     platforms: [
//       { name: 'Odoo', color: 'bg-purple-600' },
//       { name: 'Salesforce', color: 'bg-blue-500' },
//       { name: 'AWS', color: 'bg-orange-500' },
//       { name: 'Azure', color: 'bg-blue-600' },
//       { name: 'Docker', color: 'bg-blue-400' },
//       { name: 'Kubernetes', color: 'bg-blue-500' }
//     ]
//   };

//   const navigateToPage = (page) => {
//     setCurrentPage(page);
//     setIsMenuOpen(false);
//     setIsServicesOpen(false);
//     window.scrollTo(0, 0);
//   };

//   // MERN Stack Page Component
//   const MERNStackPage = () => (
//     <div className="relative z-10">
//       {/* Hero Section */}
//       <section className="relative min-h-[60vh] flex items-center pt-32 pb-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center space-y-6">
//             <h1 className="text-5xl md:text-7xl font-bold">
//               MERN Stack
//               <br />
//               <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                 Development Services
//               </span>
//             </h1>
//             <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} max-w-4xl mx-auto`}>
//               Build powerful, scalable web applications with MongoDB, Express.js, React, and Node.js
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* What is MERN Stack Section */}
//       <section className="relative py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
//             <div className={`p-8 ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} backdrop-blur-lg rounded-2xl border hover-lift`}>
//               <h2 className="text-4xl font-bold mb-6">
//                 What is <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">MERN Stack?</span>
//               </h2>
//               <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-700'} leading-relaxed mb-6`}>
//                 MERN Stack is a powerful JavaScript-based technology stack used for building dynamic web applications. It consists of four key technologies that work seamlessly together to create full-stack applications.
//               </p>
//               <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-700'} leading-relaxed`}>
//                 Each component plays a crucial role: MongoDB for database, Express.js for backend framework, React for frontend interface, and Node.js as the runtime environment.
//               </p>
//             </div>

//             <div className="grid grid-cols-2 gap-6">
//               {[
//                 { name: 'MongoDB', icon: <Database className="w-12 h-12" />, color: 'from-green-500 to-emerald-600', desc: 'NoSQL Database' },
//                 { name: 'Express.js', icon: <Server className="w-12 h-12" />, color: 'from-gray-600 to-gray-800', desc: 'Backend Framework' },
//                 { name: 'React', icon: <Code className="w-12 h-12" />, color: 'from-cyan-400 to-blue-500', desc: 'Frontend Library' },
//                 { name: 'Node.js', icon: <Settings className="w-12 h-12" />, color: 'from-green-600 to-green-800', desc: 'Runtime Environment' }
//               ].map((tech, i) => (
//                 <div
//                   key={i}
//                   className={`p-6 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift text-center`}
//                 >
//                   <div className={`w-16 h-16 bg-gradient-to-br ${tech.color} rounded-xl flex items-center justify-center text-white mb-4 mx-auto`}>
//                     {tech.icon}
//                   </div>
//                   <h3 className="text-xl font-bold mb-2">{tech.name}</h3>
//                   <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{tech.desc}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose MERN Stack Section */}
//       <section className="relative py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Why Choose <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">MERN Stack?</span>
//             </h2>
//             <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
//               Powerful benefits that make MERN Stack the preferred choice for modern web development
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: 'Full JavaScript Stack',
//                 description: 'Use JavaScript throughout your entire application - from frontend to backend to database queries. This unified language reduces complexity and speeds up development.',
//                 icon: <Code className="w-8 h-8" />
//               },
//               {
//                 title: 'High Performance',
//                 description: 'Node.js non-blocking architecture and React\'s virtual DOM ensure lightning-fast performance and exceptional user experiences even with complex applications.',
//                 icon: <ArrowRight className="w-8 h-8" />
//               },
//               {
//                 title: 'Scalability',
//                 description: 'Built to scale from startup MVPs to enterprise applications. MongoDB\'s flexible schema and Node.js clustering capabilities grow with your business needs.',
//                 icon: <Server className="w-8 h-8" />
//               },
//               {
//                 title: 'Rich Ecosystem',
//                 description: 'Access thousands of npm packages, React components, and MongoDB tools. Extensive community support and resources accelerate development.',
//                 icon: <Settings className="w-8 h-8" />
//               },
//               {
//                 title: 'Cost-Effective',
//                 description: 'Open-source technologies mean no licensing fees. Single language expertise reduces hiring costs and training time for your development team.',
//                 icon: <BarChart3 className="w-8 h-8" />
//               },
//               {
//                 title: 'Modern Architecture',
//                 description: 'Build SPAs with server-side rendering, RESTful APIs, microservices, and real-time features using modern best practices and design patterns.',
//                 icon: <Database className="w-8 h-8" />
//               }
//             ].map((benefit, i) => (
//               <div
//                 key={i}
//                 className={`p-8 ${isDarkMode ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift`}
//               >
//                 <div className={`w-16 h-16 ${isDarkMode ? 'bg-gradient-to-br from-blue-500/20 to-cyan-400/20' : 'bg-gradient-to-br from-blue-500/10 to-cyan-400/10'} rounded-xl flex items-center justify-center text-cyan-400 mb-6`}>
//                   {benefit.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
//                 <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} leading-relaxed`}>{benefit.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Our MERN Stack Services Section */}
//       <section className="relative py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Our MERN Stack <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
//             </h2>
//             <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
//               Comprehensive development solutions tailored to your business needs
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {[
//               {
//                 title: 'Custom Web Application Development',
//                 description: 'From concept to deployment, we build custom web applications that solve your unique business challenges with clean, maintainable code.',
//                 features: ['Custom UI/UX Design', 'RESTful API Development', 'Database Design & Optimization', 'Third-party Integrations']
//               },
//               {
//                 title: 'Single Page Applications (SPAs)',
//                 description: 'Create lightning-fast, responsive SPAs that provide native app-like experiences in the browser with seamless navigation.',
//                 features: ['React Router Implementation', 'State Management (Redux/Context)', 'Progressive Web Apps', 'Offline Functionality']
//               },
//               {
//                 title: 'E-commerce Solutions',
//                 description: 'Build robust e-commerce platforms with secure payment gateways, inventory management, and analytics integration.',
//                 features: ['Shopping Cart & Checkout', 'Payment Gateway Integration', 'Order Management', 'Admin Dashboard']
//               },
//               {
//                 title: 'Real-time Applications',
//                 description: 'Develop real-time features like chat, notifications, live updates, and collaborative tools using WebSocket technology.',
//                 features: ['Socket.io Integration', 'Live Data Synchronization', 'Push Notifications', 'Real-time Analytics']
//               },
//               {
//                 title: 'API Development & Integration',
//                 description: 'Design and implement scalable RESTful APIs and integrate third-party services to extend your application capabilities.',
//                 features: ['RESTful API Design', 'API Documentation', 'Third-party API Integration', 'Microservices Architecture']
//               },
//               {
//                 title: 'Migration & Modernization',
//                 description: 'Migrate legacy applications to modern MERN Stack or modernize existing MERN apps with latest best practices.',
//                 features: ['Legacy Code Migration', 'Performance Optimization', 'Security Enhancements', 'Code Refactoring']
//               }
//             ].map((service, i) => (
//               <div
//                 key={i}
//                 className={`p-8 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift`}
//               >
//                 <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
//                 <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-6`}>{service.description}</p>
//                 <div className="space-y-2">
//                   {service.features.map((feature, idx) => (
//                     <div key={idx} className="flex items-center gap-3">
//                       <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
//                       <span className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{feature}</span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Development Process Section */}
//       <section className="relative py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Our Development <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Process</span>
//             </h2>
//             <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
//               A systematic approach to deliver high-quality MERN Stack applications
//             </p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-6">
//             {[
//               { step: '01', title: 'Discovery & Planning', desc: 'Understand requirements and create detailed technical specifications' },
//               { step: '02', title: 'Design & Architecture', desc: 'Design UI/UX and establish scalable system architecture' },
//               { step: '03', title: 'Development & Testing', desc: 'Agile development with continuous testing and quality assurance' },
//               { step: '04', title: 'Deployment & Support', desc: 'Smooth deployment and ongoing maintenance and support' }
//             ].map((process, i) => (
//               <div
//                 key={i}
//                 className={`p-6 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift text-center`}
//               >
//                 <div className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
//                   {process.step}
//                 </div>
//                 <h3 className="text-xl font-bold mb-3">{process.title}</h3>
//                 <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{process.desc}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="relative py-20">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 md:p-16 text-center">
//             <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
//               Ready to Build Your MERN Stack Application?
//             </h2>
//             <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
//               Let's discuss your project requirements and create a powerful, scalable web application that drives your business forward.
//             </p>
//             <div className="flex flex-wrap gap-4 justify-center">
//               <button 
//                 onClick={() => navigateToPage('home')}
//                 className="px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:shadow-2xl transition-all flex items-center gap-2"
//               >
//                 Get Started
//                 <ArrowRight className="w-5 h-5" />
//               </button>
//               <button 
//                 onClick={() => navigateToPage('home')}
//                 className="px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white/10 transition-all"
//               >
//                 View All Services
//               </button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );

//   return (
//     <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-gray-900'} relative overflow-hidden`}>
//       <style>{`
//         @keyframes scroll {
//           0% {
//             transform: translateX(0);
//           }
//           100% {
//             transform: translateX(-50%);
//           }
//         }
//         .animate-scroll {
//           animation: scroll 30s linear infinite;
//         }
//         .animate-scroll:hover {
//           animation-play-state: paused;
//         }
//         .hover-lift {
//           transition: all 0.3s ease;
//         }
//         .hover-lift:hover {
//           transform: translateY(-8px);
//           box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
//         }
//       `}</style>
      
//       <canvas 
//         ref={canvasRef} 
//         className="fixed inset-0 z-0" 
//         style={{ backgroundColor: isDarkMode ? 'rgb(15, 23, 42)' : 'rgb(255, 255, 255)' }}
//       />
      
//       {/* Geometric Lines Background for Light Mode */}
//       {!isDarkMode && (
//         <div className="fixed inset-0 z-0 pointer-events-none">
//           <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
//             <circle cx="10%" cy="30%" r="300" fill="none" stroke="rgba(59, 130, 246, 0.08)" strokeWidth="2" />
//             <circle cx="10%" cy="30%" r="400" fill="none" stroke="rgba(59, 130, 246, 0.05)" strokeWidth="2" />
//             <circle cx="10%" cy="30%" r="500" fill="none" stroke="rgba(59, 130, 246, 0.03)" strokeWidth="2" />
            
//             <circle cx="90%" cy="60%" r="250" fill="none" stroke="rgba(168, 85, 247, 0.08)" strokeWidth="2" />
//             <circle cx="90%" cy="60%" r="350" fill="none" stroke="rgba(168, 85, 247, 0.05)" strokeWidth="2" />
//             <circle cx="90%" cy="60%" r="450" fill="none" stroke="rgba(168, 85, 247, 0.03)" strokeWidth="2" />
            
//             <circle cx="85%" cy="15%" r="80" fill="rgba(6, 182, 212, 0.1)" stroke="none" />
//             <circle cx="15%" cy="85%" r="100" fill="rgba(168, 85, 247, 0.08)" stroke="none" />
            
//             <path d="M -100 300 Q 300 100, 600 300" fill="none" stroke="rgba(59, 130, 246, 0.06)" strokeWidth="2" />
//             <path d="M 800 -100 Q 1000 200, 800 500" fill="none" stroke="rgba(168, 85, 247, 0.06)" strokeWidth="2" />
            
//             <line x1="0" y1="0" x2="30%" y2="100%" stroke="rgba(59, 130, 246, 0.04)" strokeWidth="1" />
//             <line x1="100%" y1="0" x2="70%" y2="100%" stroke="rgba(168, 85, 247, 0.04)" strokeWidth="1" />
//           </svg>
//         </div>
//       )}
      
//       {/* Navigation */}
//       <nav className={`fixed top-0 left-0 right-0 w-full z-50 ${isDarkMode ? 'bg-slate-900/95 border-slate-700' : 'bg-white/95 border-gray-200'} backdrop-blur-lg border-b shadow-lg`}>
//         <div className="max-w-7xl mx-auto px-6 py-4">
//           <div className="flex items-center justify-between">
//             <div className="flex items-center space-x-3 group cursor-pointer" onClick={() => navigateToPage('home')}>
//               <div className="relative">
//                 <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg transform rotate-45 group-hover:rotate-[225deg] transition-transform duration-500"></div>
//                 <div className="absolute inset-0 flex items-center justify-center">
//                   <span className="text-xl font-bold text-white transform -rotate-45 group-hover:rotate-0 transition-transform duration-500">GO</span>
//                 </div>
//               </div>
//               <div>
//                 <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">EXALT</span>
//                 <span className={`text-2xl font-light ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>SYSTEM</span>
//               </div>
//             </div>

//             <div className="hidden md:flex items-center space-x-8">
//               <button onClick={() => navigateToPage('home')} className={`${isDarkMode ? 'text-slate-300  hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}>Home</button>
//               <a href="#about" className={`${isDarkMode ? 'text-slate-300 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}>About</a>
              
//               <div 
//                 className="relative group"
//                 onMouseEnter={() => setIsServicesOpen(true)}
//                 onMouseLeave={() => setIsServicesOpen(false)}
//               >
//                 <button className={`${isDarkMode ? 'text-slate-300 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors flex items-center gap-1`}>
//                   Services
//                   <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>
                
//                 <div className={`absolute top-full left-0 mt-2 w-64 ${isDarkMode ? 'bg-slate-800/95 border-slate-700' : 'bg-white/95 border-gray-200'} backdrop-blur-lg rounded-xl border shadow-2xl overflow-hidden transition-all duration-300 ${isServicesOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
//                   <div className="p-2">
//                     <button onClick={() => navigateToPage('mern')} className={`w-full flex items-center gap-3 p-3 rounded-lg ${isDarkMode ? 'hover:bg-slate-700/50' : 'hover:bg-gray-100'} transition-colors group/item`}>
//                       <Code className="w-5 h-5 text-cyan-400" />
//                       <div className="text-left">
//                         <div className={`font-semibold ${isDarkMode ? 'text-white group-hover/item:text-cyan-400' : 'text-gray-900 group-hover/item:text-cyan-600'} transition-colors`}>MERN Stack</div>
//                         <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Full-stack development</div>
//                       </div>
//                     </button>
//                     <a href="#odoo" className={`flex items-center gap-3 p-3 rounded-lg ${isDarkMode ? 'hover:bg-slate-700/50' : 'hover:bg-gray-100'} transition-colors group/item`}>
//                       <Database className="w-5 h-5 text-cyan-400" />
//                       <div>
//                         <div className={`font-semibold ${isDarkMode ? 'text-white group-hover/item:text-cyan-400' : 'text-gray-900 group-hover/item:text-cyan-600'} transition-colors`}>Odoo</div>
//                         <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>ERP implementation</div>
//                       </div>
//                     </a>
//                     <a href="#salesforce" className={`flex items-center gap-3 p-3 rounded-lg ${isDarkMode ? 'hover:bg-slate-700/50' : 'hover:bg-gray-100'} transition-colors group/item`}>
//                       <Users className="w-5 h-5 text-cyan-400" />
//                       <div>
//                         <div className={`font-semibold ${isDarkMode ? 'text-white group-hover/item:text-cyan-400' : 'text-gray-900 group-hover/item:text-cyan-600'} transition-colors`}>Salesforce</div>
//                         <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>CRM solutions</div>
//                       </div>
//                     </a>
//                     <a href="#analytics" className={`flex items-center gap-3 p-3 rounded-lg ${isDarkMode ? 'hover:bg-slate-700/50' : 'hover:bg-gray-100'} transition-colors group/item`}>
//                       <BarChart3 className="w-5 h-5 text-cyan-400" />
//                       <div>
//                         <div className={`font-semibold ${isDarkMode ? 'text-white group-hover/item:text-cyan-400' : 'text-gray-900 group-hover/item:text-cyan-600'} transition-colors`}>Data Analytics</div>
//                         <div className={`text-xs ${isDarkMode ? 'text-slate-400' : 'text-gray-500'}`}>Business insights</div>
//                       </div>
//                     </a>
//                   </div>
//                 </div>
//               </div>
              
//               <button 
//                 onClick={() => setIsDarkMode(!isDarkMode)}
//                 className={`p-2 rounded-lg ${isDarkMode ? 'bg-slate-800 hover:bg-slate-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all`}
//                 aria-label="Toggle theme"
//               >
//                 {isDarkMode ? <Sun className="w-5 h-5 text-yellow-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
//               </button>
              
//               <a href="#contact" className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 hover:from-cyan-400 hover:to-blue-500 transition-all">Contact Us</a>
//             </div>

//             <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
//               {isMenuOpen ? <X className={isDarkMode ? 'text-white' : 'text-gray-900'} /> : <Menu className={isDarkMode ? 'text-white' : 'text-gray-900'} />}
//             </button>
//           </div>
//         </div>

//         {isMenuOpen && (
//           <div className={`md:hidden ${isDarkMode ? 'bg-slate-800/95' : 'bg-white/95'} backdrop-blur-lg`}>
//             <div className="px-6 py-4 space-y-4">
//               <button onClick={() => navigateToPage('home')} className={`block w-full text-left ${isDarkMode ? 'text-slate-300 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'}`}>Home</button>
//               <a href="#about" className={`block ${isDarkMode ? 'text-slate-300 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'}`} onClick={() => setIsMenuOpen(false)}>About</a>
              
//               <div>
//                 <button 
//                   onClick={() => setIsServicesOpen(!isServicesOpen)}
//                   className={`w-full text-left ${isDarkMode ? 'text-slate-300 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} flex items-center justify-between`}
//                 >
//                   Services
//                   <svg className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                   </svg>
//                 </button>
//                 {isServicesOpen && (
//                   <div className="pl-4 mt-2 space-y-2">
//                     <button onClick={() => navigateToPage('mern')} className={`block w-full text-left ${isDarkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-gray-500 hover:text-cyan-600'} py-1`}>MERN Stack</button>
//                     <a href="#odoo" className={`block ${isDarkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-gray-500 hover:text-cyan-600'} py-1`} onClick={() => setIsMenuOpen(false)}>Odoo</a>
//                     <a href="#salesforce" className={`block ${isDarkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-gray-500 hover:text-cyan-600'} py-1`} onClick={() => setIsMenuOpen(false)}>Salesforce</a>
//                     <a href="#analytics" className={`block ${isDarkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-gray-500 hover:text-cyan-600'} py-1`} onClick={() => setIsMenuOpen(false)}>Data Analytics</a>
//                   </div>
//                 )}
//               </div>
              
//               <a href="#contact" className={`block ${isDarkMode ? 'text-slate-300 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'}`} onClick={() => setIsMenuOpen(false)}>Contact</a>
              
//               <button 
//                 onClick={() => setIsDarkMode(!isDarkMode)}
//                 className={`w-full flex items-center gap-2 p-3 rounded-lg ${isDarkMode ? 'bg-slate-700/50 hover:bg-slate-700' : 'bg-gray-200 hover:bg-gray-300'} transition-all`}
//               >
//                 {isDarkMode ? (
//                   <>
//                     <Sun className="w-5 h-5 text-yellow-400" />
//                     <span>Light Mode</span>
//                   </>
//                 ) : (
//                   <>
//                     <Moon className="w-5 h-5 text-slate-700" />
//                     <span>Dark Mode</span>
//                   </>
//                 )}
//               </button>
//             </div>
//           </div>
//         )}
//       </nav>

//       {currentPage === 'mern' ? (
//         <MERNStackPage />
//       ) : (
//         <>
//       <section id="home" className="relative min-h-screen flex items-center pt-20">
//         <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <div className="space-y-8">
//               <div className="space-y-4">
//                 <h1 className="text-5xl md:text-7xl font-bold">
//                   Empowering Startups
//                   <br />
//                   <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
//                     With Cutting-Edge Solutions
//                   </span>
//                 </h1>
//                 <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
//                   We build scalable software solutions using MERN Stack, Odoo, Salesforce, and advanced data analytics to transform your business vision into reality.
//                 </p>
//               </div>
//               <div className="flex gap-4">
//                 <a href="#contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 hover:from-cyan-400 hover:to-blue-500 transition-all flex items-center gap-2 group">
//                   Get Started
//                   <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </a>
//                 <a href="#services" className="px-8 py-4 border-2 border-cyan-400 rounded-full font-semibold hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-white hover:border-transparent transition-all">
//                   Our Services
//                 </a>
//               </div>
//             </div>

//             <div className="relative h-[600px] hidden md:block">
//               {services.map((service, i) => (
//                 <div
//                   key={i}
//                   className={`absolute w-72 p-6 ${isDarkMode ? 'bg-gradient-to-br from-slate-800/90 to-slate-900/90 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/20'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer`}
//                   style={{
//                     top: `${i * 120}px`,
//                     right: `${i % 2 === 0 ? '0' : '50px'}`,
//                     transform: `translateY(${scrollY * 0.05 * (i + 1)}px) rotateY(${i % 2 === 0 ? '5deg' : '-5deg'})`,
//                     transition: 'transform 0.3s ease-out'
//                   }}
//                 >
//                   <div className="text-cyan-400 mb-3 ">{service.icon}</div>
//                   <h3 className="text-lg font-bold mb-2">{service.title}</h3>
//                   <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Transform your business with our expertise</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>
      
//       <section id="services" className="relative py-20 z-10">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               What <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">We Do</span>
//             </h2>
//             <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>Expert solutions tailored to accelerate your business growth</p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {services.map((service, i) => (
//               <div
//                 key={i}
//                 className={`group p-8 ${isDarkMode ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift`}
//               >
//                 <div className={`w-16 h-16 ${isDarkMode ? 'bg-gradient-to-br from-blue-500/20 to-cyan-400/20' : 'bg-gradient-to-br from-blue-500/10 to-cyan-400/10 group-hover:from-blue-500/30 group-hover:to-cyan-400/30'} rounded-xl flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-110 transition-transform`}>
//                   {service.icon}
//                 </div>
//                 <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
//                 <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600 group-hover:text-gray-700'} leading-relaxed`}>{service.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section id="technologies" className="relative py-20 z-10">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Technologies <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">We Work With</span>
//             </h2>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="space-y-4">
//               <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
//                 <Code className="w-8 h-8 text-cyan-400" />
//                 Front End
//               </h3>
//               <div className="space-y-3">
//                 {technologies.frontend.map((tech, i) => (
//                   <div key={i} className={`p-4 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:bg-gradient-to-r hover:from-blue-100 hover:to-cyan-100 hover:border-cyan-400 hover:shadow-md'} rounded-xl border transition-all cursor-pointer group hover-lift`}>
//                     <div className="flex items-center gap-3">
//                       <div className={`w-3 h-3 rounded-full ${tech.color} group-hover:scale-150 transition-transform`}></div>
//                       <span className="font-semibold">{tech.name}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="space-y-4">
//               <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
//                 <Server className="w-8 h-8 text-cyan-400" />
//                 Back End
//               </h3>
//               <div className="space-y-3">
//                 {technologies.backend.map((tech, i) => (
//                   <div key={i} className={`p-4 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:bg-gradient-to-r hover:from-blue-100 hover:to-cyan-100 hover:border-cyan-400 hover:shadow-md'} rounded-xl border transition-all cursor-pointer group hover-lift`}>
//                     <div className="flex items-center gap-3">
//                       <div className={`w-3 h-3 rounded-full ${tech.color} group-hover:scale-150 transition-transform`}></div>
//                       <span className="font-semibold">{tech.name}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             <div className="space-y-4">
//               <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
//                 <Settings className="w-8 h-8 text-cyan-400" />
//                 Platforms
//               </h3>
//               <div className="space-y-3">
//                 {technologies.platforms.map((tech, i) => (
//                   <div key={i} className={`p-4 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:bg-gradient-to-r hover:from-blue-100 hover:to-cyan-100 hover:border-cyan-400 hover:shadow-md'} rounded-xl border transition-all cursor-pointer group hover-lift`}>
//                     <div className="flex items-center gap-3">
//                       <div className={`w-3 h-3 rounded-full ${tech.color} group-hover:scale-150 transition-transform`}></div>
//                       <span className="font-semibold">{tech.name}</span>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="testimonials" className="relative py-20 z-10">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-16">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Client Success <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Stories</span>
//             </h2>
//             <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
//               Don't just take our word for it. Here's what our clients say about the results we've delivered together.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8 mb-16">
//             {[
//               {
//                 quote: "ExaltSystem turned our digital presence around. From 0 to 5x leads in 90 days.",
//                 name: "Ravi Kumar",
//                 role: "Real Estate Entrepreneur",
//                 avatar: "RK"
//               },
//               {
//                 quote: "They just get it. Fast, creative, and always on point.",
//                 name: "Dr. Swetha",
//                 role: "Healthcare Business Owner",
//                 avatar: "DS"
//               },
//               {
//                 quote: "Working with ExaltSystem was a game-changer for our online store. Their comprehensive approach helped us scale from startup to market leader.",
//                 name: "Priya Sharma",
//                 role: "E-commerce Founder",
//                 avatar: "PS"
//               }
//             ].map((testimonial, i) => (
//               <div
//                 key={i}
//                 className={`p-8 ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border hover:scale-105 transition-all hover-lift cursor-pointer`}
//               >
//                 <div className="text-pink-500 mb-4">
//                   <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
//                     <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
//                   </svg>
//                 </div>
//                 <div className="flex mb-4">
//                   {[...Array(5)].map((_, i) => (
//                     <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
//                       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                     </svg>
//                   ))}
//                 </div>
//                 <p className={`${isDarkMode ? 'text-slate-300' : 'text-gray-700'} italic mb-6`}>"{testimonial.quote}"</p>
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
//                     {testimonial.avatar}
//                   </div>
//                   <div>
//                     <p className="font-bold">{testimonial.name}</p>
//                     <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{testimonial.role}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="grid md:grid-cols-4 gap-8">
//             {[
//               { number: "100+", label: "5-Star Reviews" },
//               { number: "50+", label: "Success Stories" },
//               { number: "2x", label: "Faster Results" },
//               { number: "24/7", label: "Dedicated Support" }
//             ].map((stat, i) => (
//               <div key={i} className="text-center">
//                 <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent mb-2">
//                   {stat.number}
//                 </p>
//                 <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{stat.label}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       <section className="relative py-20 z-10">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="text-center mb-12">
//             <h2 className="text-4xl md:text-5xl font-bold mb-4">
//               Complete Digital Marketing <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
//             </h2>
//             <p className={`text-lg ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} max-w-4xl mx-auto`}>
//               From SEO and social media marketing to Google Ads and web development, we provide comprehensive digital marketing services designed to maximize your online presence and drive measurable business growth in your market.
//             </p>
//           </div>

//           <div className="grid md:grid-cols-4 gap-6 mb-12">
//             {[
//               {
//                 title: "SEO Services",
//                 color: "from-blue-500 to-cyan-500",
//                 description: "Rank higher on Google with our proven SEO strategies and technical optimization."
//               },
//               {
//                 title: "Social Media Marketing",
//                 color: "from-blue-500 to-cyan-500",
//                 description: "Build engaged communities and drive conversions across all social platforms."
//               },
//               {
//                 title: "Google Ads & PPC",
//                 color: "from-blue-500 to-cyan-500",
//                 description: "Get immediate visibility with high-converting Google Ads campaigns."
//               },
//               {
//                 title: "Web Development",
//                 color: "from-blue-500 to-cyan-500",
//                 description: "Conversion-optimized websites that turn visitors into customers."
//               }
//             ].map((service, i) => (
//               <div
//                 key={i}
//                 className={`p-6 ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border hover:scale-105 transition-all text-center hover-lift cursor-pointer`}
//               >
//                 <h3 className={`text-xl font-bold mb-3 bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
//                   {service.title}
//                 </h3>
//                 <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
//                   {service.description}
//                 </p>
//               </div>
//             ))}
//           </div>

//           <div className="text-center">
//             <a href="#services" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-semibold hover:shadow-2xl hover:shadow-cyan-500/50 hover:from-cyan-500 hover:to-blue-600 transition-all">
//               View All Digital Marketing Services
//               <ArrowRight className="w-5 h-5" />
//             </a>
//           </div>
//         </div>
//       </section>

//       <section className="relative py-16 z-10 overflow-hidden">
//         <div className="max-w-7xl mx-auto px-6 mb-8">
//           <h3 className={`text-center text-2xl font-bold`}>
//             Trusted by <span className="bg-gradient-to-r from-blue-500 to-cyan-500 bg-clip-text text-transparent">Leading Companies</span>
//           </h3>
//         </div>
        
//         <div className="relative">
//           <div className="flex animate-scroll">
//             <div className="flex space-x-12 px-6">
//               {[
//                 { name: 'TechCorp', logo: 'https://via.placeholder.com/150x60/1E40AF/FFFFFF?text=TechCorp' },
//                 { name: 'DataFlow', logo: 'https://via.placeholder.com/150x60/7C3AED/FFFFFF?text=DataFlow' },
//                 { name: 'CloudNine', logo: 'https://via.placeholder.com/150x60/059669/FFFFFF?text=CloudNine' },
//                 { name: 'InnovateLab', logo: 'https://via.placeholder.com/150x60/DC2626/FFFFFF?text=InnovateLab' },
//                 { name: 'FutureScale', logo: 'https://via.placeholder.com/150x60/4F46E5/FFFFFF?text=FutureScale' },
//                 { name: 'SmartOps', logo: 'https://via.placeholder.com/150x60/0891B2/FFFFFF?text=SmartOps' },
//               ].map((brand, i) => (
//                 <div key={i} className={`flex-shrink-0 w-48 h-24 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:border-cyan-400'} backdrop-blur-lg rounded-2xl border flex items-center justify-center p-4 group hover:scale-105 transition-all hover:shadow-lg cursor-pointer`}>
//                   <img 
//                     src={brand.logo} 
//                     alt={brand.name}
//                     className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
//                   />
//                 </div>
//               ))}
//             </div>
//             <div className="flex space-x-12 px-6" aria-hidden="true">
//               {[
//                 { name: 'TechCorp', logo: 'https://via.placeholder.com/150x60/1E40AF/FFFFFF?text=TechCorp' },
//                 { name: 'DataFlow', logo: 'https://via.placeholder.com/150x60/7C3AED/FFFFFF?text=DataFlow' },
//                 { name: 'CloudNine', logo: 'https://via.placeholder.com/150x60/059669/FFFFFF?text=CloudNine' },
//                 { name: 'InnovateLab', logo: 'https://via.placeholder.com/150x60/DC2626/FFFFFF?text=InnovateLab' },
//                 { name: 'FutureScale', logo: 'https://via.placeholder.com/150x60/4F46E5/FFFFFF?text=FutureScale' },
//                 { name: 'SmartOps', logo: 'https://via.placeholder.com/150x60/0891B2/FFFFFF?text=SmartOps' },
//               ].map((brand, i) => (
//                 <div key={`dup-${i}`} className={`flex-shrink-0 w-48 h-24 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:border-cyan-400'} backdrop-blur-lg rounded-2xl border flex items-center justify-center p-4 group hover:scale-105 transition-all hover:shadow-lg cursor-pointer`}>
//                   <img 
//                     src={brand.logo} 
//                     alt={brand.name}
//                     className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity"
//                   />
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       <section id="contact" className="relative py-20 z-10">
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-3xl p-12 md:p-16">
//             <div className="grid md:grid-cols-2 gap-12">
//               <div className="space-y-6">
//                 <h2 className="text-4xl md:text-5xl font-bold">
//                   Get In Touch With Us,
//                   <br /><span className="bg-gradient-to-r from-white/90 to-cyan-200 bg-clip-text text-transparent">We Answer You</span>
//                 </h2>
//                 <p className="text-xl text-blue-100">
//                   Ready to transform your business with cutting-edge technology solutions? Let's discuss how we can help you succeed.
//                 </p>
//                 <div className="space-y-4 pt-8">
//                   <a href="tel:+1234567890" className="flex items-center gap-4 text-lg hover:translate-x-2 transition-transform">
//                     <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
//                       <Phone className="w-6 h-6" />
//                     </div>
//                     <span>+1 (234) 567-890</span>
//                   </a>
//                   <a href="mailto:info@exaltsystem.com" className="flex items-center gap-4 text-lg hover:translate-x-2 transition-transform">
//                     <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
//                       <Mail className="w-6 h-6" />
//                     </div>
//                     <span>info@exaltsystem.com</span>
//                   </a>
//                 </div>
//               </div>

//               <div className="space-y-4">
//                 <input
//                   type="text"
//                   placeholder="Your Name"
//                   className="w-full p-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Your Email"
//                   className="w-full p-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50"
//                 />
//                 <textarea
//                   rows="5"
//                   placeholder="Type Your Message Here..."
//                   className="w-full p-4 rounded-xl bg-white/20 backdrop-blur-lg border border-white/30 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-white/50 resize-none"
//                 ></textarea>
//                 <button className="w-full py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gradient-to-r hover:from-cyan-400 hover:to-blue-500 hover:text-white transition-all hover:shadow-2xl">
//                   Get Started
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//       </>
//       )}

//       <footer className={`relative py-12 ${isDarkMode ? 'border-slate-800' : 'border-gray-300'} border-t z-10`}>
//         <div className="max-w-7xl mx-auto px-6">
//           <div className="grid md:grid-cols-3 gap-8 mb-8">
//             <div>
//               <div className="flex items-center space-x-3 mb-4">
//                 <div className="relative">
//                   <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg transform rotate-45"></div>
//                   <div className="absolute inset-0 flex items-center justify-center">
//                     <span className="text-lg font-bold text-white transform -rotate-45">GO</span>
//                   </div>
//                 </div>
//                 <div>
//                   <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">EXALT</span>
//                   <span className={`text-xl font-light ${isDarkMode ? 'text-slate-300' : 'text-gray-600'}`}>SYSTEM</span>
//                 </div>
//               </div>
//               <p className={isDarkMode ? 'text-slate-400' : 'text-gray-600'}>
//                 Empowering businesses with innovative technology solutions, from MERN stack development to enterprise platforms.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-xl font-bold mb-4">
//                 <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Sitemap</span>
//               </h3>
//               <div className="space-y-2">
//                 <button onClick={() => navigateToPage('home')} className={`block w-full text-left ${isDarkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}>Home</button>
//                 <a href="#services" className={`block ${isDarkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}>Services</a>
//                 <a href="#technologies" className={`block ${isDarkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}>Technologies</a>
//                 <a href="#contact" className={`block ${isDarkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}>Contact</a>
//               </div>
//             </div>

//             <div>
//               <h3 className="text-xl font-bold mb-4">
//                 Get in <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Touch</span>
//               </h3>
//               <div className="space-y-3">
//                 <div className={`flex items-start gap-3 ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
//                   <MapPin className="w-5 h-5 mt-1 flex-shrink-0" />
//                   <span>123 Tech Avenue, Innovation District, San Francisco, CA 94103</span>
//                 </div>
//                 <a href="#" className={`flex items-center gap-3 ${isDarkMode ? 'text-slate-400 hover:text-cyan-400' : 'text-gray-600 hover:text-cyan-600'} transition-colors`}>
//                   <Linkedin className="w-5 h-5" />
//                   <span>Follow us on LinkedIn</span>
//                 </a>
//               </div>
//             </div>
//           </div>

//           <div className={`pt-8 ${isDarkMode ? 'border-slate-800' : 'border-gray-300'} border-t text-center ${isDarkMode ? 'text-slate-500' : 'text-gray-500'}`}>
//             © 2025 ExaltSystem. All Rights Reserved.
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default ExaltSystemWebsite;

import { useState } from 'react';
import CanvasBG from './components/CanvasBG';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import ServicesSection from './components/ServicesSection';
import TechnologiesSection from './components/TechnologiesSection';
import Testimonials from './components/Testimonials';
import Marketing from './components/Marketing';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MERNPage from './pages/MERNPage';
import OdooPage from './pages/OdooPage';
import SalesforcePage from './pages/SalesforcePage';
import DataAnalyticsPage from './pages/DataAnalyticsPage';

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const navigateToPage = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-slate-900 text-white' : 'bg-white text-gray-900'} relative overflow-hidden`}>
      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
        .hover-lift {
          transition: all 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
      `}</style>
      
      <CanvasBG isDarkMode={isDarkMode} />
      
      <NavBar 
        isDarkMode={isDarkMode} 
        setIsDarkMode={setIsDarkMode} 
        navigateToPage={navigateToPage}
      />

      {currentPage === 'mern' ? (
        <MERNPage isDarkMode={isDarkMode} navigateToPage={navigateToPage} />
      ) : currentPage === 'odoo' ? (
        <OdooPage isDarkMode={isDarkMode} navigateToPage={navigateToPage} />
      ) : currentPage === 'salesforce' ? (
        <SalesforcePage isDarkMode={isDarkMode} navigateToPage={navigateToPage} />
      ) : currentPage === 'analytics' ? (
        <DataAnalyticsPage isDarkMode={isDarkMode} navigateToPage={navigateToPage} />
      ) : (
        <>
          <Hero isDarkMode={isDarkMode} />
          <ServicesSection isDarkMode={isDarkMode} />
          <TechnologiesSection isDarkMode={isDarkMode} />
          <Testimonials isDarkMode={isDarkMode} />
          <Marketing isDarkMode={isDarkMode} />
          <Partners isDarkMode={isDarkMode} />
          <Contact />
        </>
      )}

      <Footer isDarkMode={isDarkMode} navigateToPage={navigateToPage} />
    </div>
  );
};

export default App;