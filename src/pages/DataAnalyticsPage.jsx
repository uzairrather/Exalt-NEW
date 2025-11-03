import { Code, Database, Server, Settings, BarChart3, ArrowRight, TrendingUp, PieChart, LineChart, Activity, Brain, Zap } from 'lucide-react';

const DataAnalyticsPage = ({ isDarkMode, navigateToPage }) => {
  return (
    <div className="relative z-10">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold">
              Data Analytics
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-500 bg-clip-text text-transparent">
                & Business Intelligence
              </span>
            </h1>
            <p className={`text-xl md:text-2xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'} max-w-4xl mx-auto`}>
              Transform your business data into actionable insights with advanced analytics and visualization solutions
            </p>
          </div>
        </div>
      </section>

      {/* What is Data Analytics Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className={`p-8 ${isDarkMode ? 'bg-slate-800/50 border-slate-700' : 'bg-white border-gray-200'} backdrop-blur-lg rounded-2xl border hover-lift`}>
              <h2 className="text-4xl font-bold mb-6">
                What is <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Data Analytics?</span>
              </h2>
              <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-700'} leading-relaxed mb-6`}>
                Data analytics is the science of analyzing raw data to extract valuable insights, identify patterns, and make informed business decisions. It combines statistics, technology, and business intelligence to turn data into a strategic asset.
              </p>
              <p className={`text-lg ${isDarkMode ? 'text-slate-300' : 'text-gray-700'} leading-relaxed`}>
                From predictive modeling to real-time dashboards, data analytics empowers organizations to optimize operations, understand customers, and drive growth.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { name: 'Descriptive', icon: <PieChart className="w-12 h-12" />, color: 'from-emerald-500 to-green-600', desc: 'What Happened?' },
                { name: 'Diagnostic', icon: <Activity className="w-12 h-12" />, color: 'from-teal-600 to-emerald-800', desc: 'Why Did It Happen?' },
                { name: 'Predictive', icon: <TrendingUp className="w-12 h-12" />, color: 'from-green-500 to-emerald-500', desc: 'What Will Happen?' },
                { name: 'Prescriptive', icon: <Brain className="w-12 h-12" />, color: 'from-lime-600 to-green-800', desc: 'What Should We Do?' }
              ].map((module, i) => (
                <div
                  key={i}
                  className={`p-6 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-emerald-400' : 'bg-white border-gray-200 hover:border-emerald-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift text-center`}
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

      {/* Why Choose Data Analytics Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Invest in <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Data Analytics?</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Powerful benefits that drive business success through data-driven decision making
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Data-Driven Decisions',
                description: 'Make confident business decisions backed by real data insights rather than gut feelings. Reduce risks and increase success rates.',
                icon: <Brain className="w-8 h-8" />
              },
              {
                title: 'Competitive Advantage',
                description: 'Stay ahead of competitors by identifying market trends, customer preferences, and emerging opportunities before others.',
                icon: <TrendingUp className="w-8 h-8" />
              },
              {
                title: 'Operational Efficiency',
                description: 'Optimize business processes, reduce costs, and improve productivity by identifying bottlenecks and inefficiencies.',
                icon: <Zap className="w-8 h-8" />
              },
              {
                title: 'Customer Understanding',
                description: 'Gain deep insights into customer behavior, preferences, and needs to deliver personalized experiences.',
                icon: <Activity className="w-8 h-8" />
              },
              {
                title: 'Predictive Insights',
                description: 'Forecast future trends, demand patterns, and potential risks using advanced predictive modeling and machine learning.',
                icon: <LineChart className="w-8 h-8" />
              },
              {
                title: 'Real-Time Monitoring',
                description: 'Track KPIs and business metrics in real-time with interactive dashboards for immediate action and response.',
                icon: <BarChart3 className="w-8 h-8" />
              }
            ].map((benefit, i) => (
              <div
                key={i}
                className={`p-8 ${isDarkMode ? 'bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-700 hover:border-emerald-400' : 'bg-white border-gray-200 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-green-50 hover:border-emerald-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift`}
              >
                <div className={`w-16 h-16 ${isDarkMode ? 'bg-gradient-to-br from-emerald-500/20 to-green-400/20' : 'bg-gradient-to-br from-emerald-500/10 to-green-400/10'} rounded-xl flex items-center justify-center text-emerald-400 mb-6`}>
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} leading-relaxed`}>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Analytics Services Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Data Analytics <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Comprehensive analytics solutions to unlock the power of your data
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Business Intelligence & Dashboards',
                description: 'Create interactive dashboards and reports using Power BI, Tableau, and custom solutions for real-time business insights.',
                features: ['Interactive Dashboards', 'KPI Tracking', 'Custom Reports', 'Data Visualization'],
                icon: <BarChart3 className="w-8 h-8" />
              },
              {
                title: 'Data Warehousing & ETL',
                description: 'Design and implement data warehouses with efficient ETL processes for centralized data management and analysis.',
                features: ['Data Integration', 'ETL Pipelines', 'Data Modeling', 'Cloud Data Warehouses'],
                icon: <Database className="w-8 h-8" />
              },
              {
                title: 'Predictive Analytics & ML',
                description: 'Build machine learning models and predictive algorithms to forecast trends, detect patterns, and optimize outcomes.',
                features: ['Predictive Modeling', 'Machine Learning', 'AI Integration', 'Forecasting'],
                icon: <Brain className="w-8 h-8" />
              },
              {
                title: 'Big Data Solutions',
                description: 'Handle massive datasets with big data technologies like Hadoop, Spark, and distributed computing platforms.',
                features: ['Big Data Processing', 'Real-time Analytics', 'Distributed Systems', 'Data Lake Architecture'],
                icon: <Server className="w-8 h-8" />
              }
            ].map((service, i) => (
              <div
                key={i}
                className={`p-8 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-emerald-400' : 'bg-white border-gray-200 hover:bg-gradient-to-br hover:from-emerald-50 hover:to-green-50 hover:border-emerald-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift`}
              >
                <div className={`w-16 h-16 ${isDarkMode ? 'bg-gradient-to-br from-emerald-500/20 to-green-400/20' : 'bg-gradient-to-br from-emerald-500/10 to-green-400/10'} rounded-xl flex items-center justify-center text-emerald-400 mb-6`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className={`${isDarkMode ? 'text-slate-400' : 'text-gray-600'} mb-6`}>{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-gradient-to-r from-emerald-400 to-green-400"></div>
                      <span className={`text-sm ${isDarkMode ? 'text-slate-300' : 'text-gray-700'}`}>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Tools & Technologies */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Tools & <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Technologies</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              Industry-leading analytics tools and platforms we work with
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { name: 'Power BI', icon: <BarChart3 className="w-8 h-8" />, desc: 'Microsoft BI' },
              { name: 'Tableau', icon: <PieChart className="w-8 h-8" />, desc: 'Visual Analytics' },
              { name: 'Python & R', icon: <Code className="w-8 h-8" />, desc: 'Data Science' },
              { name: 'SQL', icon: <Database className="w-8 h-8" />, desc: 'Query Language' },
              { name: 'TensorFlow', icon: <Brain className="w-8 h-8" />, desc: 'Machine Learning' },
              { name: 'Apache Spark', icon: <Zap className="w-8 h-8" />, desc: 'Big Data' },
              { name: 'Google Analytics', icon: <Activity className="w-8 h-8" />, desc: 'Web Analytics' },
              { name: 'Excel', icon: <LineChart className="w-8 h-8" />, desc: 'Spreadsheet Analysis' }
            ].map((tool, i) => (
              <div
                key={i}
                className={`p-6 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-emerald-400' : 'bg-white border-gray-200 hover:border-emerald-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift text-center`}
              >
                <div className={`w-16 h-16 ${isDarkMode ? 'bg-gradient-to-br from-emerald-500/20 to-green-400/20' : 'bg-gradient-to-br from-emerald-500/10 to-green-400/10'} rounded-xl flex items-center justify-center text-emerald-400 mb-4 mx-auto`}>
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
              Our Analytics <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className={`text-xl ${isDarkMode ? 'text-slate-400' : 'text-gray-600'}`}>
              A systematic approach to turn data into actionable insights
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Data Collection', desc: 'Gather data from multiple sources' },
              { step: '02', title: 'Data Processing', desc: 'Clean and transform raw data' },
              { step: '03', title: 'Analysis & Modeling', desc: 'Apply statistical and ML models' },
              { step: '04', title: 'Visualization', desc: 'Create insights and reports' }
            ].map((process, i) => (
              <div
                key={i}
                className={`p-6 ${isDarkMode ? 'bg-slate-800/50 border-slate-700 hover:border-emerald-400' : 'bg-white border-gray-200 hover:border-emerald-400 hover:shadow-xl'} backdrop-blur-lg rounded-2xl border transition-all hover:scale-105 cursor-pointer hover-lift text-center`}
              >
                <div className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-4">
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
          <div className="bg-gradient-to-br from-emerald-600 to-green-500 rounded-3xl p-12 md:p-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Unlock the Power of Your Data?
            </h2>
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Let's transform your raw data into strategic insights that drive growth, efficiency, and competitive advantage.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button 
                onClick={() => navigateToPage('contact')}
                className="px-8 py-4 bg-white text-emerald-600 rounded-full font-bold hover:shadow-2xl transition-all flex items-center gap-2"
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

export default DataAnalyticsPage;