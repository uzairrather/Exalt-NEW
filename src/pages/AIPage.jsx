import { Brain, Cpu, Eye, MessageSquare, Zap, TrendingUp, Shield, Database, Code, ArrowRight, Sparkles, Bot, Network } from 'lucide-react';

const AIPage = ({ isDarkMode, navigateToPage }) => {
  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              Artificial Intelligence
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
                & Machine Learning
              </span>
            </h1>
            <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} max-w-4xl mx-auto`}>
              Transform your business with cutting-edge AI solutions, machine learning models, and intelligent automation
            </p>
          </div>
        </div>
      </section>

      {/* AI Showcase Section with Images */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              AI-Powered <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Innovation</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Visualizing the future of artificial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Image 1 - AI Neural Network */}
            <div className={`relative rounded-2xl overflow-hidden ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} border hover-lift cursor-pointer group`}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop" 
                  alt="AI Neural Network" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">Neural Networks</h3>
                  <p className="text-cyan-200">Deep learning architectures</p>
                </div>
              </div>
            </div>

            {/* Image 2 - Machine Learning */}
            <div className={`relative rounded-2xl overflow-hidden ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} border hover-lift cursor-pointer group`}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1555255707-c07966088b7b?w=800&h=500&fit=crop" 
                  alt="Machine Learning" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-cyan-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">Machine Learning</h3>
                  <p className="text-blue-200">Predictive intelligence</p>
                </div>
              </div>
            </div>

            {/* Image 3 - Data Analysis */}
            <div className={`relative rounded-2xl overflow-hidden ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} border hover-lift cursor-pointer group`}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop" 
                  alt="Data Analysis Dashboard" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">Data Intelligence</h3>
                  <p className="text-cyan-200">Advanced analytics</p>
                </div>
              </div>
            </div>

            {/* Image 4 - AI Robot */}
            <div className={`relative rounded-2xl overflow-hidden ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} border hover-lift cursor-pointer group`}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=500&fit=crop" 
                  alt="AI Technology" 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-900/80 via-cyan-900/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2">AI Automation</h3>
                  <p className="text-blue-200">Intelligent systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What is AI/ML Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className={`p-8 ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} backdrop-blur-lg rounded-2xl border hover-lift`}>
              <h2 className="text-4xl font-bold mb-6">
                AI & ML <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Solutions</span>
              </h2>
              <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-700'} leading-relaxed mb-6`}>
                Artificial Intelligence and Machine Learning are revolutionizing how businesses operate. We help organizations leverage AI to automate processes, gain insights, and create innovative solutions.
              </p>
              <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-700'} leading-relaxed`}>
                From predictive analytics to natural language processing, we build custom AI solutions tailored to your specific business challenges and opportunities.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { name: 'Machine Learning', icon: <Brain className="w-12 h-12" />, color: 'from-blue-500 to-cyan-600', desc: 'Predictive Models' },
                { name: 'Deep Learning', icon: <Network className="w-12 h-12" />, color: 'from-cyan-600 to-blue-800', desc: 'Neural Networks' },
                { name: 'Computer Vision', icon: <Eye className="w-12 h-12" />, color: 'from-blue-500 to-cyan-500', desc: 'Image Recognition' },
                { name: 'NLP', icon: <MessageSquare className="w-12 h-12" />, color: 'from-indigo-600 to-cyan-800', desc: 'Language Processing' }
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

      {/* Why Choose AI Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Invest in <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">AI & ML?</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Powerful benefits that drive innovation and competitive advantage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Intelligent Automation',
                description: 'Automate repetitive tasks, optimize workflows, and free up your team to focus on high-value strategic work.',
                icon: <Zap className="w-8 h-8" />
              },
              {
                title: 'Predictive Insights',
                description: 'Forecast trends, anticipate customer needs, and make data-driven decisions with advanced predictive models.',
                icon: <TrendingUp className="w-8 h-8" />
              },
              {
                title: 'Enhanced Customer Experience',
                description: 'Deliver personalized experiences, intelligent chatbots, and 24/7 customer support with AI-powered solutions.',
                icon: <Bot className="w-8 h-8" />
              },
              {
                title: 'Advanced Analytics',
                description: 'Extract valuable insights from unstructured data using NLP, computer vision, and deep learning techniques.',
                icon: <Brain className="w-8 h-8" />
              },
              {
                title: 'Cost Reduction',
                description: 'Reduce operational costs through intelligent process automation and optimized resource allocation.',
                icon: <Database className="w-8 h-8" />
              },
              {
                title: 'Competitive Edge',
                description: 'Stay ahead of competitors with cutting-edge AI technology and innovative business solutions.',
                icon: <Sparkles className="w-8 h-8" />
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

      {/* AI Services Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our AI & ML <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Comprehensive AI solutions to transform your business operations
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Machine Learning Development',
                description: 'Build custom ML models for classification, regression, clustering, and recommendation systems tailored to your business needs.',
                features: ['Predictive Modeling', 'Recommendation Engines', 'Anomaly Detection', 'Time Series Forecasting'],
                icon: <Brain className="w-8 h-8" />
              },
              {
                title: 'Natural Language Processing',
                description: 'Extract insights from text data with sentiment analysis, chatbots, language translation, and document processing.',
                features: ['Chatbots & Virtual Assistants', 'Sentiment Analysis', 'Text Classification', 'Language Translation'],
                icon: <MessageSquare className="w-8 h-8" />
              },
              {
                title: 'Computer Vision',
                description: 'Implement image and video analysis solutions including object detection, facial recognition, and quality inspection.',
                features: ['Image Recognition', 'Object Detection', 'Facial Recognition', 'Quality Inspection'],
                icon: <Eye className="w-8 h-8" />
              },
              {
                title: 'Deep Learning Solutions',
                description: 'Leverage neural networks for complex pattern recognition, image processing, and advanced AI applications.',
                features: ['Neural Networks', 'CNN & RNN Models', 'Transfer Learning', 'Model Optimization'],
                icon: <Network className="w-8 h-8" />
              },
              {
                title: 'AI Consulting & Strategy',
                description: 'Get expert guidance on AI adoption, use case identification, and implementation roadmaps for your organization.',
                features: ['AI Strategy', 'Use Case Discovery', 'ROI Analysis', 'Implementation Planning'],
                icon: <Sparkles className="w-8 h-8" />
              },
              {
                title: 'MLOps & Deployment',
                description: 'Deploy, monitor, and maintain ML models in production with robust MLOps practices and infrastructure.',
                features: ['Model Deployment', 'CI/CD Pipelines', 'Performance Monitoring', 'Model Retraining'],
                icon: <Cpu className="w-8 h-8" />
              }
            ].map((service, i) => (
              <div
                key={i}
                className={`p-8 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:bg-gradient-to-br hover:from-blue-50 hover:to-cyan-50 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift`}
              >
                <div className={`w-16 h-16 ${isDarkMode ? 'bg-gradient-to-br from-blue-500/20 to-cyan-400/20' : 'bg-gradient-to-br from-blue-500/10 to-cyan-400/10'} rounded-xl flex items-center justify-center text-cyan-400 mb-6`}>
                  {service.icon}
                </div>
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

      {/* Technologies Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              AI Technologies <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">We Use</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Industry-leading AI frameworks and platforms
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'TensorFlow', icon: <Brain className="w-8 h-8" />, desc: 'Deep Learning' },
              { name: 'PyTorch', icon: <Network className="w-8 h-8" />, desc: 'Neural Networks' },
              { name: 'OpenAI', icon: <Sparkles className="w-8 h-8" />, desc: 'GPT Models' },
              { name: 'Hugging Face', icon: <MessageSquare className="w-8 h-8" />, desc: 'NLP Models' },
              { name: 'Scikit-learn', icon: <Code className="w-8 h-8" />, desc: 'ML Algorithms' },
              { name: 'Keras', icon: <Cpu className="w-8 h-8" />, desc: 'Neural Networks' },
              { name: 'OpenCV', icon: <Eye className="w-8 h-8" />, desc: 'Computer Vision' },
              { name: 'LangChain', icon: <Bot className="w-8 h-8" />, desc: 'LLM Apps' }
            ].map((tool, i) => (
              <div
                key={i}
                className={`p-6 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-400' : 'bg-white border-gray-200 hover:border-cyan-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift text-center`}
              >
                <div className={`w-16 h-16 ${isDarkMode ? 'bg-gradient-to-br from-blue-500/20 to-cyan-400/20' : 'bg-gradient-to-br from-blue-500/10 to-cyan-400/10'} rounded-xl flex items-center justify-center text-cyan-400 mb-4 mx-auto`}>
                  {tool.icon}
                </div>
                <h3 className="text-lg font-bold mb-2">{tool.name}</h3>
                <p className={`text-sm ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our AI Development <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              A systematic approach to building intelligent AI solutions
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Discovery', desc: 'Identify use cases and define objectives' },
              { step: '02', title: 'Data Preparation', desc: 'Collect, clean, and prepare training data' },
              { step: '03', title: 'Model Development', desc: 'Build, train, and optimize AI models' },
              { step: '04', title: 'Deployment', desc: 'Deploy models and monitor performance' }
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
              Ready to Transform Your Business with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's explore how artificial intelligence and machine learning can drive innovation, efficiency, and growth for your organization.
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

export default AIPage;